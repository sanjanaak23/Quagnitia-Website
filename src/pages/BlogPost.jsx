// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLayoutContext } from "./Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import getAllBlogPosts from "@/data/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const { isDark, theme } = useLayoutContext();
  const blogPosts = getAllBlogPosts(); // Inside the component
  
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: theme.text }}>
            Post Not Found
          </h1>
          <p className="text-lg mb-8" style={{ color: theme.muted }}>
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button style={{ backgroundColor: theme.accent, color: "#FFFFFF" }}>
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <p 
            key={index} 
            className="mb-6 leading-relaxed text-lg"
            style={{ color: theme.text }}
          >
            {item.text}
          </p>
        );
      }
      if (item.type === 'image') {
        return (
          <div key={index} className="my-8">
            <img
              src={item.url}
              alt={item.alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {item.alt && (
              <p 
                className="text-center mt-2 text-sm italic"
                style={{ color: theme.muted }}
              >
                {item.alt}
              </p>
            )}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog">
          <Button
            variant="ghost"
            className="mb-8 group"
            style={{ color: theme.muted }}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Button>
        </Link>

        {/* Banner Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={post.bannerImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Header */}
        <article>
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: theme.text }}
          >
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2" style={{ color: theme.muted }}>
              <User className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: theme.muted }}>
              <Calendar className="w-4 h-4" />
              <span>{post.publishedDate}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: theme.muted }}>
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Back to Blog Button at Bottom */}
        <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: theme.border }}>
          <Link to="/blog">
            <Button
              variant="outline"
              style={{ 
                color: theme.text,
                borderColor: theme.border 
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}