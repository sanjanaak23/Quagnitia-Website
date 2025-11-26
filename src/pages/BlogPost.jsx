// src/data/blogData.js

// Temporary fix - use these working Unsplash URLs
const staticBlogPosts = [
  {
    id: 1,
    slug: "blockchain-development-2025",
    title: "Complete Guide to Blockchain Development in 2025",
    excerpt: "Learn everything about modern blockchain development, from smart contracts to DeFi protocols and the latest Web3 frameworks shaping the industry.",
    bannerImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Blockchain technology has evolved significantly since the early days of Bitcoin. In 2025, we're seeing unprecedented adoption across various industries including finance, supply chain, healthcare, and digital identity."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
        alt: "Blockchain Development Architecture"
      }
    ],
    author: "Sanjana Kumari",
    publishedDate: "2025-11-20",
    readTime: "8 min read"
  },
  {
    id: 2,
    slug: "react-best-practices",
    title: "React Best Practices for Modern Web Development",
    excerpt: "Discover the latest React patterns, performance optimization techniques, and coding standards for building scalable applications.",
    bannerImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    content: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
        alt: "React Code Structure"
      }
    ],
    author: "Sanjana Kumari",
    publishedDate: "2025-11-19",
    readTime: "6 min read"
  },
  {
    id: 3,
    slug: "web3-mobile-integration",
    title: "Integrating Web3 Features in Mobile Applications",
    excerpt: "Learn how to seamlessly integrate blockchain features into mobile apps using React Native and modern Web3 libraries.",
    bannerImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop",
    content: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop",
        alt: "Mobile Web3 Integration"
      }
    ],
    author: "Sanjana Kumari",
    publishedDate: "2025-11-18",
    readTime: "7 min read"
  }
];

// Export function that returns the blog posts
export default function getAllBlogPosts() {
  return staticBlogPosts;
}

// Optional: Export individual post function if needed
export function getBlogPostBySlug(slug) {
  return staticBlogPosts.find(post => post.slug === slug);
}