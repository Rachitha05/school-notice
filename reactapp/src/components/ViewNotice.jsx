import React, { useEffect, useState } from "react";
import NoticeService from "../services/NoticeService";
import "./Home.css"; // Optional — if you want styling

function ViewNotice() {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState("");

  // Fetch all notices when the component mounts
  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await NoticeService.getNotices();
      setNotices(response.data);
    } catch (err) {
      console.error("Error fetching notices:", err);
      setError("Unable to fetch notices. Please check backend connection.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await NoticeService.deleteNotice(id);
      fetchNotices(); // Refresh after deletion
    } catch (err) {
      console.error("Error deleting notice:", err);
      setError("Unable to delete notice. Please try again.");
    }
  };

  return (
    <div className="view-container">
      <h2>All School Notices</h2>

      {error && <p className="error-message">{error}</p>}

      {notices.length === 0 ? (
        <p>No notices available.</p>
      ) : (
        <table className="notice-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice._id}>
                <td>{notice.title}</td>
                <td>{new Date(notice.date).toLocaleDateString()}</td>
                <td>{notice.description}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(notice._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewNotice;
