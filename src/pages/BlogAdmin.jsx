// src/pages/BlogAdmin.jsx
import React, { useState, useEffect } from "react";
import { useLayoutContext } from "./Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import BlogForm from "@/components/blog/BlogForm";

export default function BlogAdmin() {
  const { theme } = useLayoutContext();
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setBlogs(savedBlogs);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
  };

  const handleBlogAdded = () => {
    setShowForm(false);
    setEditingBlog(null);
    loadBlogs();
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: theme.text }}>
              Blog Management
            </h1>
            <p style={{ color: theme.muted }}>
              Create and manage your blog posts
            </p>
          </div>
          <Button
            onClick={() => setShowForm(true)}
            style={{ backgroundColor: theme.accent, color: "#FFFFFF" }}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Blog Form */}
        {showForm && (
          <div className="mb-8">
            <BlogForm 
              onBlogAdded={handleBlogAdded}
              onCancel={() => {
                setShowForm(false);
                setEditingBlog(null);
              }}
            />
          </div>
        )}

        {/* Blog List */}
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} style={{ borderColor: theme.border, backgroundColor: theme.card }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2" style={{ color: theme.text }}>
                      {blog.title}
                    </h3>
                    <p className="mb-2" style={{ color: theme.muted }}>
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm" style={{ color: theme.muted }}>
                      <span>By {blog.author}</span>
                      <span>{blog.publishedDate}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link to={`/blog/${blog.slug}`}>
                      <Button variant="ghost" size="sm" style={{ color: theme.text }}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      style={{ color: theme.text }}
                      onClick={() => {
                        setEditingBlog(blog);
                        setShowForm(true);
                      }}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      style={{ color: '#ef4444' }}
                      onClick={() => deleteBlog(blog.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {blogs.length === 0 && !showForm && (
            <div className="text-center py-12">
              <p className="text-lg mb-4" style={{ color: theme.muted }}>
                No blog posts yet.
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ backgroundColor: theme.accent, color: "#FFFFFF" }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Post
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}