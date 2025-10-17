const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-white p-2 rounded-lg">
              <span className="text-xl">🎬</span>
            </div>
            <span className="text-xl font-bold">CineSearch</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              Powered by OMDb API • Built with React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © 2024 CineSearch. All movie data provided by OMDb.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;