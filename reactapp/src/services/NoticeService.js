import axios from 'axios';

// ✅ The backend URL (defined in your .env file as VITE_API_URL)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

// ✅ Service object that contains all API methods
const NoticeService = {
  // Fetch all notices
  getNotices: async () => {
    try {
      return await axios.get(`${API_URL}/notices`);
    } catch (error) {
      console.error("Error fetching notices:", error);
      throw error;
    }
  },

  // Get a single notice by ID
  getNoticeById: async (id) => {
    try {
      return await axios.get(`${API_URL}/notices/${id}`);
    } catch (error) {
      console.error("Error fetching notice:", error);
      throw error;
    }
  },

  // Add a new notice
  addNotice: async (notice) => {
    try {
      return await axios.post(`${API_URL}/notices`, notice);
    } catch (error) {
      console.error("Error adding notice:", error);
      throw error;
    }
  },

  // Update a notice by ID
  updateNotice: async (id, updatedNotice) => {
    try {
      return await axios.put(`${API_URL}/notices/${id}`, updatedNotice);
    } catch (error) {
      console.error("Error updating notice:", error);
      throw error;
    }
  },

  // Delete a notice by ID
  deleteNotice: async (id) => {
    try {
      return await axios.delete(`${API_URL}/notices/${id}`);
    } catch (error) {
      console.error("Error deleting notice:", error);
      throw error;
    }
  },
};

// ✅ Export the entire NoticeService object
export default NoticeService;
