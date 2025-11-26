// src/pages/BlogAdmin.jsx
import React, { useState, useEffect } from "react";
import { useLayoutContext } from "./Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2, Eye, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import BlogForm from "@/components/blog/BlogForm";

export default function BlogAdmin() {
  const { theme } = useLayoutContext();
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    loadBlogs();
    
    // Listen for storage events from other tabs/windows
    const handleStorageChange = () => {
      loadBlogs();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loadBlogs = () => {
    try {
      const savedBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      // Sort by date (newest first)
      const sortedBlogs = savedBlogs.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
      setBlogs(sortedBlogs);
    } catch (error) {
      console.error('Error loading blogs:', error);
      setBlogs([]);
    }
  };

  const deleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
      
      // Trigger storage event to refresh other components
      window.dispatchEvent(new Event('storage'));
    }
  };

  const handleBlogAdded = () => {
    setShowForm(false);
    setEditingBlog(null);
    loadBlogs();
    
    // Force a refresh of the blog page if it's open
    window.dispatchEvent(new Event('storage'));
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBlog(null);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: theme.text }}>
              Blog Management
            </h1>
            <p style={{ color: theme.muted }}>
              Create and manage your blog posts ({blogs.length} posts)
            </p>
          </div>
          <Button
            onClick={() => setShowForm(true)}
            style={{ backgroundColor: theme.accent, color: "#FFFFFF" }}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Post
          </Button>
        </div>

        {/* Blog Form */}
        {showForm && (
          <div className="mb-8">
            <BlogForm 
              blog={editingBlog}
              onBlogAdded={handleBlogAdded}
              onCancel={handleCancel}
            />
          </div>
        )}

        {/* Blog List */}
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <Card 
              key={blog.id} 
              style={{ borderColor: theme.border, backgroundColor: theme.card }}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  {/* Blog Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="font-bold text-xl" style={{ color: theme.text }}>
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ 
                            backgroundColor: `${theme.accent}20`, 
                            color: theme.accent 
                          }}
                        >
                          {blog.slug}
                        </span>
                      </div>
                    </div>
                    
                    <p className="mb-4 leading-relaxed" style={{ color: theme.muted }}>
                      {blog.excerpt}
                    </p>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1" style={{ color: theme.muted }}>
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: theme.muted }}>
                        <Calendar className="w-4 h-4" />
                        <span>{blog.publishedDate}</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: theme.muted }}>
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 lg:flex-col lg:gap-1">
                    <Link to={`/blog/${blog.slug}`} target="_blank">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        style={{ color: theme.text }}
                        className="flex items-center gap-1"
                      >
                        <Eye className="w-4 h-4" />
                        <span className="lg:hidden">View</span>
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      style={{ color: theme.text }}
                      onClick={() => handleEdit(blog)}
                      className="flex items-center gap-1"
                    >
                      <Edit className="w-4 h-4" />
                      <span className="lg:hidden">Edit</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      style={{ color: '#ef4444' }}
                      onClick={() => deleteBlog(blog.id)}
                      className="flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="lg:hidden">Delete</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {blogs.length === 0 && !showForm && (
            <Card style={{ borderColor: theme.border, backgroundColor: theme.card }}>
              <CardContent className="text-center py-12">
                <div style={{ color: theme.muted }} className="mb-4">
                  <p className="text-lg mb-2">No blog posts yet.</p>
                  <p className="text-sm">Create your first blog post to get started!</p>
                </div>
                <Button
                  onClick={() => setShowForm(true)}
                  style={{ backgroundColor: theme.accent, color: "#FFFFFF" }}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Create Your First Post
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}