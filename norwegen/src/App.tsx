import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
