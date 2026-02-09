import { FiMenu, FiSearch, FiBell } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="bg-purple-100 shadow-sm px-4 py-3 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-purple-700">SHARE ED</h1>
            </div>

            {/* Center: Search */}
            <div className="flex-1 max-w-md mx-4">
                <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="ค้นหาบทความหรือเนื้อหา..."
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {/* Right: Notification + Avatar */}
            <div className="flex items-center gap-4">
                <FiBell className="text-2xl text-purple-700 cursor-pointer hover:text-purple-900" />
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
