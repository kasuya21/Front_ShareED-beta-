import Navbar from './components/Navbar';
import FilterSection from './components/FilterSection';
import Banner from './components/Banner';
import PostGrid from './components/PostGrid';
import { mockPosts } from './data/mockPosts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FilterSection />
      <Banner />
      <PostGrid title="โพสต์ล่าสุด" posts={mockPosts} />
    </div>
  );
}

export default App;
