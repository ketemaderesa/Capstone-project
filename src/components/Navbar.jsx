const Navbar = ({ activeSection, onNavClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-lg border-b border-gray-700 border-opacity-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavClick('home')}
          >
            <div className="text-2xl">🎬</div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CineSearch
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 bg-gray-800 bg-opacity-50 rounded-lg p-1 border border-gray-700 border-opacity-50">
            <button
              onClick={() => onNavClick('home')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === 'home'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavClick('search')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === 'search'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              Search
            </button>
            <button
              onClick={() => onNavClick('about')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === 'about'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;