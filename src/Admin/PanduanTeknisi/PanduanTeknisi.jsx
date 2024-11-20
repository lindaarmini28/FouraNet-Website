import {
    Col,
    Row,
    Typography,
    Card,
    List,
    Skeleton,
    Input,
    FloatButton,
    Drawer,
    Form,
    Button,
    notification,
    Popconfirm,
    Divider,
  } from "antd";
  import {
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    PlusCircleOutlined,
  } from "@ant-design/icons";
  import { useEffect, useState } from "react";
  import { getData, sendData, deleteData } from "../../utils/api";
  
  const { Title, Text } = Typography;
  
  const VideoPanduanTeknisi = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
  
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getData("/api/playlist/13");
        if (response?.datas) {
          setVideos(response.datas);
        } else {
          console.error("Invalid data received:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        showNotification("error", "Fetch Error", "Failed to load video guides");
      } finally {
        setIsLoading(false);
      }
    };
  
    const confirmDelete = async (id) => {
      try {
        const url = `/api/playlist/${id}`;
        const response = await deleteData(url);
        if (response?.status === 200) {
          showNotification("success", "Deleted", "Video guide successfully deleted");
          fetchData();
        } else {
          showNotification("error", "Delete Error", "Failed to delete video guide");
        }
      } catch (error) {
        console.error("Error deleting video:", error);
        showNotification("error", "Delete Error", "Connection failed");
      }
    };
  
    const showNotification = (type, title, description) => {
      api[type]({
        message: title,
        description,
      });
    };
  
    const handleSearch = (value) => {
      setSearchText(value.toLowerCase());
    };
  
    const openDrawer = () => {
      setIsDrawerVisible(true);
    };
  
    const closeDrawer = () => {
      form.resetFields();
      setIsEditMode(false);
      setSelectedVideoId(null);
      setIsDrawerVisible(false);
    };
  
    const handleEdit = (video) => {
      setIsDrawerVisible(true);
      setIsEditMode(true);
      setSelectedVideoId(video.id);
      form.setFieldsValue({
        play_name: video.play_name,
        play_url: video.play_url,
        play_thumbnail: video.play_thumbnail,
        play_description: video.play_description,
      });
    };
  
    const handleSubmit = async () => {
      try {
        const values = form.getFieldsValue();
        const url = isEditMode
          ? `/api/playlist/update/${selectedVideoId}`
          : "/api/playlist/13";
        const response = await sendData(url, values);
        if (response?.status === 200) {
          showNotification("success", "Success", "Video guide successfully saved");
          fetchData();
          closeDrawer();
        } else {
          showNotification("error", "Save Error", "Failed to save video guide");
        }
      } catch (error) {
        console.error("Error saving video:", error);
        showNotification("error", "Save Error", "Something went wrong");
      }
    };
  
    // Function to get YouTube thumbnail
    const getThumbnailUrl = (url) => {
      const youtubeRegex =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      return match ? `https://img.youtube.com/vi/${match[1]}/0.jpg` : "/images/fallback-thumbnail.jpg";
    };
  
    const filteredVideos = videos.filter((video) =>
      [video.play_name, video.play_description]
        .join(" ")
        .toLowerCase()
        .includes(searchText)
    );
  
    return (
      <div className="layout-content">
        {contextHolder}
        <Row gutter={[24, 0]}>
          <Col xs={24} className="mb-24">
            <Card bordered={false}>
              <FloatButton
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={openDrawer}
                tooltip={<div>Add Video Guide</div>}
              />
  
              <Drawer
                title="Video Guide Details"
                onClose={closeDrawer}
                open={isDrawerVisible}
                extra={
                  <Button type="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                }
              >
                <Form layout="vertical" form={form}>
                  <Form.Item
                    name="play_name"
                    label="Video Title"
                    rules={[{ required: true, message: "Please input the video title!" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="play_url"
                    label="Video URL"
                    rules={[{ required: true, message: "Please input the video URL!" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="play_thumbnail" label="Thumbnail URL">
                    <Input />
                  </Form.Item>
                  <Form.Item name="play_description" label="Description">
                    <Input.TextArea rows={3} />
                  </Form.Item>
                </Form>
              </Drawer>
  
              <Title level={4}>Video Guide Playlist</Title>
              <Divider />
  
              <Input
                placeholder="Search video guides"
                prefix={<SearchOutlined />}
                allowClear
                size="large"
                onChange={(e) => handleSearch(e.target.value)}
              />
  
              {isLoading ? (
                <Skeleton active />
              ) : filteredVideos.length > 0 ? (
                <List
                  itemLayout="vertical"
                  dataSource={filteredVideos}
                  renderItem={(video) => (
                    <List.Item
                      key={video.id}
                      actions={[
                        <EditOutlined onClick={() => handleEdit(video)} />,
                        <Popconfirm
                          title="Delete this video?"
                          onConfirm={() => confirmDelete(video.id)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <DeleteOutlined />
                        </Popconfirm>,
                      ]}
                      extra={
                        <img
                          width={272}
                          alt="thumbnail"
                          src={
                            video.play_thumbnail ||
                            getThumbnailUrl(video.play_url) ||
                            "/images/fallback-thumbnail.jpg"
                          }
                        />
                      }
                    >
                      <List.Item.Meta
                        title={video.play_name}
                        description={
                          <div>
                            <p>{video.play_description}</p>
                            <a href={video.play_url} target="_blank" rel="noopener noreferrer">
                              {video.play_url}
                            </a>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              ) : (
                <Text>No Video Guides Available</Text>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default VideoPanduanTeknisi;
  