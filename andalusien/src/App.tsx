import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LandingPage from "@/pages/LandingPage";
import DownloadsPage from "@/pages/DownloadsPage";
import RoutesPage from "@/pages/RoutesPage";
import HotelsPage from "@/pages/HotelsPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const location = useLocation();
  const isFullscreen = location.pathname === "/strecken";

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className={isFullscreen ? "flex-1 overflow-hidden" : "flex-1"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/strecken" element={<RoutesPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
        </Routes>
      </main>
      {!isFullscreen && <Footer />}
    </div>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}
