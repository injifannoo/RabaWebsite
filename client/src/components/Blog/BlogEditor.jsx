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
  const [mediaFile, setMediaFile] = useState(null); // Added for file handling


  const handleFileChange = (e) => {
    setMediaFile(e.target.files[0]);
    console.log("Selected file:", e.target.files[0]);
  };

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
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Ensure this is set for file upload
          },
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
        const { title, content, published, media, tags, author, status, scheduledDate, mediaFile } = blog;
        setTitle(title);
        setContent(content);
        setIsPublished(published);
        setMedia(media || '');
        setTags(tags || '');
        setAuthor(author || '');
        setStatus(status || 'draft');
        setScheduledDate(scheduledDate || '');
        setMediaFile(mediaFile || null); // Set media file

      } catch (error) {
        console.error('Error fetching blog:', error.response?.data || error.message);
        alert(`Failed to fetch blog: ${error.response?.data?.message || 'Unknown error'}`);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting blog with values:", { title, content, tags, author, mediaFile, status, scheduledDate, isPublished });
    const token = localStorage.getItem('adminToken');

    const formData = new FormData();

    // Append the form fields
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags);
    formData.append('author', author);
    formData.append('status', status);
    formData.append('scheduledDate', scheduledDate);
    formData.append('isPublished', isPublished);
    // Append the file if it's selected
    if (mediaFile) {
      formData.append('media', mediaFile);
    }
    try {
     
      await axios.put(
        `http://localhost:3000/api/blogs/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',  // This header is important for file uploads

          },
        }
      );
    alert('Blog updated successfully');
    navigate('/dashboard');
  } catch (error) {
    console.error('Error updating blog:', error);
    alert('Error updating blog: ' + (error.response?.data?.message || 'Unknown error'));
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

          {/* Media
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
          </div> */}
          {/* Media (File Upload) */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="media">
              Media (Image/Video)
            </label>
            <input
              type="file"
              id="media"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
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
