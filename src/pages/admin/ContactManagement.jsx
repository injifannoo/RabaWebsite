import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactManagement = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const response = await axios.get('/api/contacts', config);
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages');
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="contact-management">
      <h2>Contact Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message._id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
              <td>{message.status}</td>
              <td>
                <button>Mark as Resolved</button>
                <button>Reply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManagement;
