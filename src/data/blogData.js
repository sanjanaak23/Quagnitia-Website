// src/data/blogData.js
const staticBlogPosts = [
  {
    id: 1,
    slug: "blockchain-development-2025",
    title: "Complete Guide to Blockchain Development in 2025",
    excerpt: "Learn everything about modern blockchain development, from smart contracts to DeFi protocols and the latest trends shaping the industry.",
    bannerImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
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
        url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
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
    bannerImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
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
        url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop", 
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
    bannerImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop",
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
        url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop",
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
  },
  {
    id: 4,
    slug: "web3-security-best-practices-2025",
    title: "Web3 Security Best Practices for 2025",
    excerpt: "Essential security measures and smart contract auditing techniques to protect your Web3 applications from emerging threats and vulnerabilities.",
    bannerImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "As Web3 adoption accelerates, security remains the cornerstone of building trust in decentralized applications. The landscape of threats has evolved significantly, requiring developers to implement robust security measures from day one."
      },
      {
        type: "paragraph", 
        text: "In 2025, we're seeing sophisticated attack vectors targeting cross-chain bridges, flash loans, and governance mechanisms. Understanding these threats is crucial for building resilient dApps that protect user funds and data."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
        alt: "Web3 Security"
      }
    ],
    author: "Sanjana Kumari",
    publishedDate: "2025-11-17",
    readTime: "9 min read"
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
export { staticBlogPosts };