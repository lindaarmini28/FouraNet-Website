const BASE_URL = "http://127.0.0.1:5000/api/v1/";

// Helper function to add ellipsis if text is too long
export const ellipsisGenerator = (text, maxLength = 100) => {
  if (text && text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text || '';  // Return an empty string if text is undefined or null
};

// Helper function to handle responses and throw meaningful errors
const handleResponse = async (response) => {
  try {
    // Log the response content type and raw response body
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
    
    const contentType = response.headers.get("content-type");

    // Check if the response is JSON before attempting to parse it
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      if (!response.ok) {
        // Throw an error with a descriptive message
        throw new Error(data?.message || "An error occurred");
      }
      return data;
    } else {
      // Handle non-JSON response (e.g., plain text or HTML)
      const text = await response.text();
      throw new Error("Response is not in JSON format: " + text);
    }
  } catch (error) {
    // Log the error and re-throw it
    console.error("Error parsing response:", error);
    throw new Error("Failed to parse response: " + error.message);
  }
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

// POST or PUT request (for creating or updating data)
export const sendData = async (endpoint, formData, method = "POST") => {
  try {
    const isFormData = formData instanceof FormData;
    const options = {
      method,
      headers: isFormData ? {} : { "Content-Type": "application/json" },
      body: isFormData ? formData : JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, options);
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

