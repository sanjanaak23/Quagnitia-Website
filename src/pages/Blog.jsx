// src/pages/Blog.jsx
import React, { useState, useEffect } from "react";
import { useLayoutContext } from "./Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import getAllBlogPosts from "@/data/blogData";

export default function Blog() {
  const { isDark, theme } = useLayoutContext();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    loadBlogPosts();
    
    // Listen for storage changes (from BlogAdmin)
    const handleStorageChange = () => {
      loadBlogPosts();
    };

    // Listen for custom event (if you're using custom events)
    const handleBlogsUpdated = () => {
      loadBlogPosts();
    };

    // Set up both event listeners
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('blogsUpdated', handleBlogsUpdated);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('blogsUpdated', handleBlogsUpdated);
    };
  }, []);

  const loadBlogPosts = () => {
    const posts = getAllBlogPosts();
    // Sort by date (newest first)
    const sortedPosts = posts.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
    setBlogPosts(sortedPosts);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our <span style={{ color: theme.accent }}>Blog</span>
          </h1>
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: theme.muted }}
          >
            Insights, tutorials, and updates on blockchain development, 
            Web3 technologies, and mobile app development from our expert team.
          </p>
          
          {/* Admin Link */}
          <div className="mt-8">
            <Link to="/admin/blog">
              <Button
                variant="outline"
                style={{ 
                  borderColor: theme.accent, 
                  color: theme.accent 
                }}
                className="flex items-center gap-2 mx-auto"
              >
                <Plus className="w-4 h-4" />
                Manage Blog Posts
              </Button>
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
              style={{ 
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}` 
              }}
            >
              <Link to={`/blog/${post.slug}`} className="flex-1 flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.bannerImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback image if original fails to load
                      e.target.src = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 
                    className="font-bold text-xl mb-3 group-hover:text-opacity-80 transition-all line-clamp-2"
                    style={{ color: theme.text }}
                  >
                    {post.title}
                  </h3>
                  
                  <p 
                    className="mb-4 leading-relaxed line-clamp-3 flex-1"
                    style={{ color: theme.muted }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1" style={{ color: theme.muted }}>
                        <Calendar className="w-4 h-4" />
                        <span>{post.publishedDate}</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: theme.muted }}>
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Author and Read More */}
                  <div className="flex items-center justify-between mt-auto">
                    <span style={{ color: theme.muted }}>By {post.author}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn"
                      style={{ color: theme.accent }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <div style={{ color: theme.muted }}>
              <p className="text-lg mb-4">No blog posts yet.</p>
              <p className="mb-8">Check back soon for updates!</p>
              <Link to="/admin/blog">
                <Button
                  style={{ backgroundColor: theme.accent, color: "#FFFFFF" }}
                  className="flex items-center gap-2 mx-auto"
                >
                  <Plus className="w-4 h-4" />
                  Create Your First Post
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}