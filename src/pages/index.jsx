// src/pages/index.jsx
import Layout from "./Layout.jsx";
import Home from "./Home";
import HeroComparison from "./HeroComparison";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import BlogAdmin from "./BlogAdmin";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Enhanced function to handle nested routes
function getCurrentPage(pathname) {
  // Remove trailing slash
  const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  const pathMap = {
    '/': 'Home',
    '/home': 'Home',
    '/herocomparison': 'HeroComparison',
    '/blog': 'Blog',
    '/admin/blog': 'BlogAdmin'
  };
  
  // Check exact matches first
  if (pathMap[path]) {
    return pathMap[path];
  }
  
  // Check for blog post routes
  if (path.startsWith('/blog/')) {
    return 'Blog';
  }
  
  return 'Home';
}

function PagesContent() {
  const location = useLocation();
  const currentPage = getCurrentPage(location.pathname);

  return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/herocomparison" element={<HeroComparison />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default function Pages() {
  return (
    <Router>
      <PagesContent />
    </Router>
  );
}