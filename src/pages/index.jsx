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

const PAGES = {
  Home: Home,
  HeroComparison: HeroComparison,
  Blog: Blog,
  BlogAdmin: BlogAdmin, // Add BlogAdmin to PAGES if needed for navigation
};

function _getCurrentPage(url) {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  let urlLastPart = url.split("/").pop();
  if (urlLastPart.includes("?")) {
    urlLastPart = urlLastPart.split("?")[0];
  }

  const pageName = Object.keys(PAGES).find(
    (page) => page.toLowerCase() === urlLastPart.toLowerCase()
  );
  return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
  const location = useLocation();
  const currentPage = _getCurrentPage(location.pathname);

  return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/herocomparison" element={<HeroComparison />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Admin Route */}
        <Route path="/admin/blog" element={<BlogAdmin />} />
        
        {/* Catch-all route for better UX */}
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