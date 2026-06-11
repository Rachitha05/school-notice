import React, { useState } from 'react';
import NoticeService from '../services/NoticeService';

function AddNotice() {
  const [notice, setNotice] = useState({
    title: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!notice.title || !notice.date || !notice.description) {
      alert('Please fill all fields');
      return;
    }

    try {
      await NoticeService.addNotice(notice);
      alert('✅ Notice added successfully!');
      setNotice({ title: '', date: '', description: '' });
    } catch (error) {
      console.error(error);
      alert('❌ Failed to add notice');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Notice</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Notice Title"
          value={notice.title}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={notice.date}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={notice.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Notice</button>
      </form>
    </div>
  );
}

export default AddNotice;
