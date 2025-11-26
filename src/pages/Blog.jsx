// src/pages/Blog.jsx
import React, { useState, useEffect } from "react";
import { useLayoutContext } from "./Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import getAllBlogPosts from "@/data/blogData";

export default function Blog() {
  const { isDark, theme } = useLayoutContext();
  const [blogPosts, setBlogPosts] = useState([]);

  // Load blogs on component mount and set up refresh
  useEffect(() => {
    loadBlogPosts();
    
    // Optional: Set up an interval to check for new blogs
    const interval = setInterval(loadBlogPosts, 2000); // Check every 2 seconds
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const loadBlogPosts = () => {
    const posts = getAllBlogPosts();
    setBlogPosts(posts);
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
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ 
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}` 
              }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.bannerImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 
                    className="font-bold text-xl mb-3 group-hover:text-opacity-80 transition-all"
                    style={{ color: theme.text }}
                  >
                    {post.title}
                  </h3>
                  
                  <p 
                    className="mb-4 leading-relaxed"
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

                  {/* Author */}
                  <div className="flex items-center justify-between">
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

        {/* Empty State (if no posts) */}
        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <div style={{ color: theme.muted }}>
              <p className="text-lg mb-4">No blog posts yet.</p>
              <p>Check back soon for updates!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}