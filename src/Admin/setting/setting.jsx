import React, { useState } from 'react';
import { Card, Switch, Select, Button, Form, Input } from 'antd';

const { Option } = Select;

const SettingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // Simpan pengaturan ke server atau local storage
    console.log('Settings saved:', { darkMode, language, notifications });
  };

  return (
    <div style={{ padding: '20px', background: darkMode ? '#333' : '#f0f2f5', color: darkMode ? '#fff' : '#000' }}>
      {/* Pengaturan Tema */}
      <Card title="Theme" style={{ marginBottom: '20px' }}>
        <Switch
          checked={darkMode}
          onChange={(checked) => setDarkMode(checked)}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <span style={{ marginLeft: '10px' }}>Dark Mode</span>
      </Card>

      {/* Pengaturan Bahasa */}
      <Card title="Language" style={{ marginBottom: '20px' }}>
        <Select
          value={language}
          onChange={(value) => setLanguage(value)}
          style={{ width: '200px' }}
        >
          <Option value="en">English</Option>
          <Option value="id">Bahasa Indonesia</Option>
          <Option value="es">Español</Option>
          <Option value="fr">Français</Option>
        </Select>
      </Card>

      {/* Pengaturan Notifikasi */}
      <Card title="Notifications" style={{ marginBottom: '20px' }}>
        <Switch
          checked={notifications}
          onChange={(checked) => setNotifications(checked)}
          checkedChildren="On"
          unCheckedChildren="Off"
        />
        <span style={{ marginLeft: '10px' }}>Enable Notifications</span>
      </Card>

      {/* Form untuk Pengaturan Tambahan */}
      <Card title="Additional Settings" style={{ marginBottom: '20px' }}>
        <Form layout="vertical">
          <Form.Item label="Custom Setting Name">
            <Input placeholder="Enter setting name" />
          </Form.Item>
          <Form.Item label="Custom Value">
            <Input placeholder="Enter setting value" />
          </Form.Item>
        </Form>
      </Card>

      {/* Tombol Simpan */}
      <Button type="primary" onClick={handleSave}>
        Save Settings
      </Button>
    </div>
  );
};

export default SettingPage;
