// import React, { useState } from "react";
// import BlogList from "../../components/Blog/BlogList";
// import BlogEditor from "../../components/Blog/BlogEditor";

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);

//   const handleSave = (newBlog) => {
//     if (editingBlog) {
//       setBlogs(
//         blogs.map((blog) => (blog.id === editingBlog.id ? newBlog : blog))
//       );
//     } else {
//       setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
//     }
//     setEditingBlog(null);
//   };

//   const handleEdit = (id) => {
//     const blog = blogs.find((b) => b.id === id);
//     setEditingBlog(blog);
//   };

//   const handleDelete = (id) => {
//     setBlogs(blogs.filter((blog) => blog.id !== id));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {editingBlog ? (
//         <BlogEditor initialData={editingBlog} onSave={handleSave} />
//       ) : (
//         <>
//           <button
//             onClick={() => setEditingBlog({})}
//             className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//           >
//             Add New Blog
//           </button>
//           <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
//         </>
//       )}
//     </div>
//   );
// };

// export default BlogPage;
import React, { useState, useEffect } from "react";
import BlogList from "../../../components/Blog/BlogList";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs from API
    fetch("/api/blogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>
      {loading && <p>Loading blogs...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <BlogList blogs={blogs} />}
    </div>
  );
};

export default BlogPage;
