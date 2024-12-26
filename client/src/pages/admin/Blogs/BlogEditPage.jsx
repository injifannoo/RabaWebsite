// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../../utils/api";

// const BlogEditPage = () => {
//   const { id } = useParams(); // For editing existing blogs
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     author: "",
//     tags: "",
//     status: "draft",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (id) {
//       await axios.put(`/blogs/${id}`, formData);
//     } else {
//       await axios.post("/blogs", formData);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">{id ? "Edit Blog" : "Create Blog"}</h1>
//       <form className="space-y-4 bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-full px-4 py-2 border rounded"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//         />
//         <textarea
//           placeholder="Content"
//           className="w-full px-4 py-2 border rounded"
//           value={formData.content}
//           onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           className="w-full px-4 py-2 border rounded"
//           value={formData.author}
//           onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Tags"
//           className="w-full px-4 py-2 border rounded"
//           value={formData.tags}
//           onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
//         />
//         <select
//           className="w-full px-4 py-2 border rounded"
//           value={formData.status}
//           onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//         >
//           <option value="draft">Draft</option>
//           <option value="published">Published</option>
//         </select>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           {id ? "Update Blog" : "Create Blog"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BlogEditPage;
import React from 'react';
import BlogEditor from '../../../components/Blog/BlogEditor';

const BlogEditPage = ({ match }) => {
  const { id } = match.params;

  const handleSave = (blog) => {
    // Update or create the blog via API
    fetch(`/api/blogs/${id || ''}`, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    });
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">{id ? 'Edit Blog' : 'New Blog'}</h1>
      <BlogEditor onSubmit={handleSave} />
    </div>
  );
};

export default BlogEditPage;
