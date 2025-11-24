// src/components/blog/BlogForm.jsx
import React, { useState } from "react";
import { useLayoutContext } from "@/pages/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X, Upload, Image as ImageIcon } from "lucide-react";

export default function BlogForm({ onBlogAdded, onCancel }) {
  const { theme } = useLayoutContext();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    bannerImage: "",
    content: [{ type: "paragraph", text: "" }],
    author: "Sanjana Kumari",
    readTime: "5 min read"
  });
  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContentChange = (index, value) => {
    const newContent = [...formData.content];
    newContent[index].text = value;
    setFormData(prev => ({ ...prev, content: newContent }));
  };

  const addContentBlock = (type) => {
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, { type, text: "", url: "", alt: "" }]
    }));
  };

  const removeContentBlock = (index) => {
    if (formData.content.length > 1) {
      const newContent = formData.content.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, content: newContent }));
    }
  };

  const handleImageUpload = (event, index = null) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (index === null) {
          // Banner image
          setFormData(prev => ({ ...prev, bannerImage: e.target.result }));
          setImagePreview(e.target.result);
        } else {
          // Content image
          const newContent = [...formData.content];
          newContent[index].url = e.target.result;
          setFormData(prev => ({ ...prev, content: newContent }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBlog = {
      id: Date.now(), // Simple ID generation
      slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: formData.title,
      excerpt: formData.excerpt,
      bannerImage: formData.bannerImage,
      content: formData.content.filter(item => item.text.trim() !== "" || item.url !== ""),
      author: formData.author,
      publishedDate: new Date().toISOString().split('T')[0],
      readTime: formData.readTime
    };

    // Save to localStorage
    const existingBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const updatedBlogs = [...existingBlogs, newBlog];
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));

    onBlogAdded();
  };

  return (
    <Card className="max-w-4xl mx-auto" style={{ borderColor: theme.border }}>
      <CardHeader>
        <CardTitle style={{ color: theme.text }}>Create New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: theme.text }}>
              Title *
            </label>
            <Input
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter blog post title"
              required
              style={{ 
                backgroundColor: theme.card, 
                borderColor: theme.border, 
                color: theme.text 
              }}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: theme.text }}>
              Excerpt *
            </label>
            <Textarea
              value={formData.excerpt}
              onChange={(e) => handleInputChange('excerpt', e.target.value)}
              placeholder="Brief description of your blog post"
              rows={3}
              required
              style={{ 
                backgroundColor: theme.card, 
                borderColor: theme.border, 
                color: theme.text 
              }}
            />
          </div>

          {/* Banner Image */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: theme.text }}>
              Banner Image
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4" />
                <span style={{ color: theme.accent }}>Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {formData.bannerImage && (
                <div className="relative w-20 h-20">
                  <img
                    src={formData.bannerImage}
                    alt="Banner preview"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Content Blocks */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium" style={{ color: theme.text }}>
                Content *
              </label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => addContentBlock("paragraph")}
                  style={{ borderColor: theme.border, color: theme.text }}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Text
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => addContentBlock("image")}
                  style={{ borderColor: theme.border, color: theme.text }}
                >
                  <ImageIcon className="w-4 h-4 mr-1" />
                  Add Image
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {formData.content.map((block, index) => (
                <div key={index} className="flex gap-2 items-start">
                  {block.type === "paragraph" ? (
                    <Textarea
                      value={block.text}
                      onChange={(e) => handleContentChange(index, e.target.value)}
                      placeholder="Write your content here..."
                      rows={4}
                      style={{ 
                        backgroundColor: theme.card, 
                        borderColor: theme.border, 
                        color: theme.text 
                      }}
                    />
                  ) : (
                    <div className="flex-1">
                      <label className="flex items-center gap-2 cursor-pointer mb-2">
                        <Upload className="w-4 h-4" />
                        <span style={{ color: theme.accent }}>Upload Content Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, index)}
                          className="hidden"
                        />
                      </label>
                      {block.url && (
                        <div className="relative">
                          <img
                            src={block.url}
                            alt="Content preview"
                            className="max-w-xs h-auto rounded"
                          />
                        </div>
                      )}
                      <Input
                        value={block.alt}
                        onChange={(e) => {
                          const newContent = [...formData.content];
                          newContent[index].alt = e.target.value;
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        placeholder="Image description (optional)"
                        className="mt-2"
                        style={{ 
                          backgroundColor: theme.card, 
                          borderColor: theme.border, 
                          color: theme.text 
                        }}
                      />
                    </div>
                  )}
                  {formData.content.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeContentBlock(index)}
                      style={{ color: theme.muted }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end pt-6 border-t" style={{ borderColor: theme.border }}>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              style={{ borderColor: theme.border, color: theme.text }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              style={{ backgroundColor: theme.accent, color: "#FFFFFF" }}
            >
              Publish Blog Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}