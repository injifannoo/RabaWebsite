import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles


const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState('');
  const [tags, setTags] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('draft');
  const [scheduledDate, setScheduledDate] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    if (!id) {
      console.error('No blog ID provided in the route.');
      alert('Invalid blog ID.');
    }
    console.log(`id:${id}`);

    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          alert('User not authenticated');
          return;
        }

        const response = await axios.get(`http://localhost:3000/api/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`id:${id}`);
        console.log('API Response:', response.data);
        const blog = response.data || {};
        console.log('API Response after:', blog);

        if (!blog) {
          alert('Blog not found');
          return;
        }

        // If blog data exists, update the form fields
        const { title, content, published, media, tags, author, status, scheduledDate } = blog;
        setTitle(title);
        setContent(content);
        setIsPublished(published);
        setMedia(media || '');
        setTags(tags || '');
        setAuthor(author || '');
        setStatus(status || 'draft');
        setScheduledDate(scheduledDate || '');
      } catch (error) {
        console.error('Error fetching blog:', error.response?.data || error.message);
        alert(`Failed to fetch blog: ${error.response?.data?.message || 'Unknown error'}`);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting blog with values:", { title, content, tags, author, media, status, scheduledDate, isPublished });
    const token = localStorage.getItem('adminToken');

    try {
      await axios.put(
        `http://localhost:3000/api/blogs/${id}`,
        {
          title,
          content,
          media,
          tags,
          author,
          status,
          scheduledDate,
          isPublished,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Blog updated successfully');
      navigate('/dashboard'); // Navigate back to the dashboard
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Error updating blog');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Edit Blog</h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="content">
              Blog Content
            </label>
            <ReactQuill
              value={content}
              onChange={setContent} // Directly set the content
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Update your blog content here..."
              required
            />
            {/* <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Update your blog content here..."
              required
            ></textarea> */}
          </div>

          {/* Media */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="media">
              Media (Image/Video URL)
            </label>
            <input
              type="text"
              id="media"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter media URL"
            />
          </div>

          {/* Tags */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="tags">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter tags (comma-separated)"
              required
            />
          </div>

          {/* Author */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* Scheduled Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="scheduledDate">
              Scheduled Date
            </label>
            <input
              type="date"
              id="scheduledDate"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Is Published */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isPublished"
              checked={isPublished}
              onChange={() => setIsPublished(!isPublished)}
              className="mr-2"
            />
            <label className="text-gray-700 font-medium" htmlFor="isPublished">
              Is Published
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
