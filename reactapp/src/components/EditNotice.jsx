import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoticeService from '../services/NoticeService';

function EditNotice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({ title: '', date: '', description: '' });

  useEffect(() => {
    const loadNotice = async () => {
      try {
        const res = await NoticeService.getNoticeById(id);
        const noticeData = res.data;
        if (noticeData.date) {
          noticeData.date = noticeData.date.split('T')[0];
        }
        setNotice(noticeData);
      } catch (err) {
        console.error(err);
      }
    };
    loadNotice();
  }, [id]);

  const handleChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await NoticeService.updateNotice(id, notice);
    alert('✅ Notice updated successfully!');
    navigate('/view');
  };

  return (
    <div className="form-container">
      <h2>Edit Notice</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={notice.title} onChange={handleChange} />
        <input name="date" type="date" value={notice.date} onChange={handleChange} />
        <textarea name="description" value={notice.description} onChange={handleChange}></textarea>
        <button type="submit">Update Notice</button>
      </form>
    </div>
  );
}

export default EditNotice;
