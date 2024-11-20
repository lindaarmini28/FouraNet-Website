// utils/api.js

const BASE_URL = "https://webfmsi.singapoly.com";

// Fungsi untuk memotong teks dan menambahkan ellipsis jika teks terlalu panjang
export const ellipsisGenerator = (text, maxLength = 100) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';  // Memotong dan menambahkan ellipsis
  }
  return text;  // Kembalikan teks utuh jika tidak lebih panjang dari maxLength
};

// Helper function to handle responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.message || "An error occurred");
  }
  return data;
};

// GET request
export const getData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// POST request (for creating and updating data)
export const sendData = async (endpoint, formData, method = "POST") => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      body: formData instanceof FormData ? formData : JSON.stringify(formData),
      headers: formData instanceof FormData ? {} : { "Content-Type": "application/json" },
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

// DELETE request
export const deleteData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
