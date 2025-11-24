// src/data/blogData.js
const staticBlogPosts = [
  {
    id: 1,
    slug: "blockchain-development-2025",
    title: "Complete Guide to Blockchain Development in 2025",
    excerpt: "Learn everything about modern blockchain development, from smart contracts to DeFi protocols and the latest trends shaping the industry.",
    bannerImage: "/src/assets/web3m.png",
    content: [
      {
        type: "paragraph",
        text: "Blockchain technology has evolved significantly since the early days of Bitcoin. In 2025, we're seeing unprecedented adoption across various industries including finance, supply chain, healthcare, and digital identity."
      },
      {
        type: "paragraph", 
        text: "The rise of Layer 2 solutions, zero-knowledge proofs, and cross-chain interoperability has made blockchain more scalable and accessible than ever before."
      },
      {
        type: "image",
        url: "/src/assets/web3m.png",
        alt: "Blockchain Development Architecture"
      },
      {
        type: "paragraph",
        text: "Key trends for 2025 include AI-powered smart contracts, quantum-resistant cryptography, and the mainstream adoption of CBDCs (Central Bank Digital Currencies)."
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
    excerpt: "Discover the latest React patterns, performance optimization techniques, and best practices for building scalable applications in 2025.",
    bannerImage: "/src/assets/game2.jpg",
    content: [
      {
        type: "paragraph",
        text: "React continues to dominate the frontend development landscape with its component-based architecture and vibrant ecosystem."
      },
      {
        type: "paragraph",
        text: "With the introduction of React 19 and concurrent features, developers now have more tools than ever to build highly responsive and performant applications."
      },
      {
        type: "image",
        url: "/src/assets/game2.jpg", 
        alt: "React Code Structure"
      },
      {
        type: "paragraph",
        text: "Some key best practices include using React Query for server state management, implementing proper error boundaries, and leveraging React.memo for performance optimization."
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
    excerpt: "Learn how to seamlessly integrate blockchain features into mobile apps, including wallet connectivity, NFT displays, and on-chain transactions.",
    bannerImage: "/src/assets/game.webp",
    content: [
      {
        type: "paragraph",
        text: "Mobile applications are becoming the primary gateway to Web3 for millions of users worldwide. The challenge lies in creating seamless user experiences while maintaining security and decentralization principles."
      },
      {
        type: "paragraph",
        text: "Modern mobile Web3 integration involves wallet SDKs, secure key management, and optimized blockchain interactions that work reliably on mobile networks."
      },
      {
        type: "image",
        url: "/src/assets/game.webp",
        alt: "Mobile Web3 Integration"
      },
      {
        type: "paragraph",
        text: "Key considerations include gas optimization for mobile users, offline transaction signing, and intuitive UX patterns for blockchain interactions."
      }
    ],
    author: "Sanjana Kumari",
    publishedDate: "2025-11-18",
    readTime: "7 min read"
  }
];

// Function to get all blogs (static + user-created)
const getAllBlogPosts = () => {
  try {
    const userBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    return [...userBlogs, ...staticBlogPosts];
  } catch (error) {
    console.error('Error loading blogs:', error);
    return staticBlogPosts;
  }
};

export default getAllBlogPosts;