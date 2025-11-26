// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useLayoutContext } from "./Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import getAllBlogPosts from "@/data/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const { theme } = useLayoutContext();
  
  const blogPosts = getAllBlogPosts();
  const post = blogPosts.find((post) => post.slug === slug);

  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-block mb-8">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Banner Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={post.bannerImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <article>
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: theme.text }}
          >
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2" style={{ color: theme.muted }}>
              <Calendar className="w-4 h-4" />
              <span>{post.publishedDate}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: theme.muted }}>
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: theme.muted }}>
              <User className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content && post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p 
                    key={index} 
                    className="mb-4 leading-relaxed"
                    style={{ color: theme.text }}
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "image") {
                return (
                  <div key={index} className="my-8">
                    <img
                      src={block.url}
                      alt={block.alt}
                      className="w-full rounded-lg"
                    />
                    {block.alt && (
                      <p 
                        className="text-center text-sm mt-2"
                        style={{ color: theme.muted }}
                      >
                        {block.alt}
                      </p>
                    )}
                  </div>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2 
                    key={index} 
                    className="text-2xl font-bold mt-8 mb-4"
                    style={{ color: theme.text }}
                  >
                    {block.text}
                  </h2>
                );
              }
              return null;
            })}
          </div>
        </article>
      </div>
    </section>
  );
}