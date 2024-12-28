// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CreateBlog = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [media, setMedia] = useState('');
//   const [tags, setTags] = useState('');
//   const [author, setAuthor] = useState('');
//   const [status, setStatus] = useState('draft'); // Default is draft
//   const [scheduledDate, setScheduledDate] = useState('');
//   const [isPublished, setIsPublished] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('adminToken');
//     console.log('The token is:', token);

//     try {
//       // API call to create a new blog
//       await axios.post(
//         'http://localhost:3000/api/blogs',
//         {
//           title,
//           content,
//           media,
//           tags,
//           author,
//           status,
//           scheduledDate,
//           isPublished,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in request headers
//           },
//         }
//       );

//       alert('Blog created successfully');
//       navigate('/dashboard'); // Navigate back to the dashboard
//       resetForm(); // Reset form fields
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       alert('Error creating blog');
//     }
//   };

//   const resetForm = () => {
//     setTitle('');
//     setContent('');
//     setMedia('');
//     setTags('');
//     setAuthor('');
//     setStatus('draft');
//     setScheduledDate('');
//     setIsPublished(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create a New Blog</h1>
//         <form onSubmit={handleSubmit}>
//           {/* Title */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
//               Blog Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter blog title"
//               required
//             />
//           </div>

//           {/* Content */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="content">
//               Blog Content
//             </label>
//             <textarea
//               id="content"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               rows="6"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Write your blog content here..."
//               required
//             ></textarea>
//           </div>

//           {/* Media */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="media">
//               Media (Image/Video URL)
//             </label>
//             <input
//               type="text"
//               id="media"
//               value={media}
//               onChange={(e) => setMedia(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter media URL"
//             />
//           </div>

//           {/* Tags */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="tags">
//               Tags
//             </label>
//             <input
//               type="text"
//               id="tags"
//               value={tags}
//               onChange={(e) => setTags(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter tags (comma-separated)"
//               required
//             />
//           </div>

//           {/* Author */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
//               Author
//             </label>
//             <input
//               type="text"
//               id="author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter author name"
//               required
//             />
//           </div>

//           {/* Status */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="status">
//               Status
//             </label>
//             <select
//               id="status"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="draft">Draft</option>
//               <option value="published">Published</option>
//             </select>
//           </div>

//           {/* Scheduled Date */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="scheduledDate">
//               Scheduled Date
//             </label>
//             <input
//               type="date"
//               id="scheduledDate"
//               value={scheduledDate}
//               onChange={(e) => setScheduledDate(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Is Published */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="checkbox"
//               id="isPublished"
//               checked={isPublished}
//               onChange={() => setIsPublished(!isPublished)}
//               className="mr-2"
//             />
//             <label className="text-gray-700 font-medium" htmlFor="isPublished">
//               Is Published
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
//           >
//             Create Blog
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlog;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles


const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState('');
  const [tags, setTags] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('draft'); // Default is draft
  const [scheduledDate, setScheduledDate] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [mediaFile, setMediaFile] = useState(null); // Added for file handling

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setMediaFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    console.log('The token is:', token);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags);
    formData.append('author', author);
    formData.append('status', status);
    formData.append('scheduledDate', scheduledDate);
    formData.append('isPublished', isPublished);
    if (mediaFile) {
      formData.append('media', mediaFile); // Add file to FormData
    }

    try {
      // API call to create a new blog
      await axios.post(
        'http://localhost:3000/api/blogs',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
            'Content-Type': 'multipart/form-data', // Ensure this is set for file upload
          },
        }
      );

      alert('Blog created successfully');
      navigate('/dashboard'); // Navigate back to the dashboard
      resetForm(); // Reset form fields
    } catch (error) {
      console.error('Error creating blog:', error.response ? error.response.data : error.message);
      alert(`Error creating blog: ${error.response ? error.response.data : error.message}`);
    }
    
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setMedia('');
    setTags('');
    setAuthor('');
    setStatus('draft');
    setScheduledDate('');
    setIsPublished(false);
    setMediaFile(null); // Reset media file
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create a New Blog</h1>
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
              onChange={setContent}
              className="w-full h-48 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your blog content here..."
            />
            {/* <textarea
            
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your blog content here..."
              required
            ></textarea> */}
          </div>

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
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
