import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const API_KEY = 'your-api-key-here';
const API_URL = 'http://www.omdbapi.com/';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const searchMovies = async (title) => {
    if (!title.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          s: title,
          type: 'movie'
        }
      });
      
      if (response.data.Response === 'True') {
        setMovies(response.data.Search || []);
      } else {
        setMovies([]);
        setError(response.data.Error || 'No movies found.');
      }
    } catch (err) {
      setError('Failed to fetch movies. Please check your internet connection.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const getMovieDetails = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          i: id,
          plot: 'full'
        }
      });
      
      if (response.data.Response === 'True') {
        setSelectedMovie(response.data);
      }
    } catch (err) {
      setError('Failed to fetch movie details.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
    setActiveSection('search');
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === 'home') {
      setMovies([]);
      setSearchTerm('');
      setError('');
    }
  };

  // Footer component
  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CineSearch</h3>
          <p style={{color: '#94a3b8', lineHeight: '1.6'}}>
            A modern movie search application developed as a capstone project 
            by Ketema Deres, Frontend Learner at ALX 2025, Ethiopia.
          </p>
          <div className="developer-badge" style={{
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '10px',
            padding: '15px',
            marginTop: '15px'
          }}>
            <p style={{color: '#c4b5fd', fontSize: '0.9rem', margin: 0}}>
              <strong>Developer:</strong> Ketema Deres<br/>
              <strong>Program:</strong> ALX Frontend 2025<br/>
              <strong>Location:</strong> Ethiopia 🇪🇹
            </p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Project Info</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={() => handleNavClick('home')}>🏠 Home</a></li>
            <li><a href="#" onClick={() => handleNavClick('search')}>🔍 Search Movies</a></li>
            <li><a href="#" onClick={() => handleNavClick('about')}>ℹ️ About Project</a></li>
            <li><a href="#">📚 Documentation</a></li>
            <li><a href="#">🔄 Live Demo</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Technology Stack</h3>
          <ul className="footer-links">
            <li><a href="#">⚛️ React.js</a></li>
            <li><a href="#">🎨 Custom CSS</a></li>
            <li><a href="#">🔗 OMDb API</a></li>
            <li><a href="#">📱 Responsive Design</a></li>
            <li><a href="#">⚡ Vite</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <p style={{color: '#94a3b8', marginBottom: '15px'}}>
            Feel free to reach out for collaborations or questions about this project.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon">💼</a>
            <a href="#" className="social-icon">🐱</a>
            <a href="#" className="social-icon">📧</a>
            <a href="#" className="social-icon">👨‍💻</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          &copy; 2024 CineSearch Capstone Project. Developed by <strong>Ketema Deres</strong> | 
          ALX Frontend Program 2025 | Ethiopia 🇪🇹
        </p>
        <p style={{marginTop: '10px', fontSize: '0.8rem', opacity: '0.7'}}>
          Built with React, CSS, and OMDb API | Educational Purpose
        </p>
      </div>
    </footer>
  );

  // Stats Section Component
  const StatsSection = () => (
    <div className="stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose CineSearch?</h2>
          <p className="section-subtitle">Join thousands of movie enthusiasts who trust our platform</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card floating-element">
            <div className="stat-icon">🎬</div>
            <div className="stat-number">10K+</div>
            <div className="stat-label">Movies</div>
          </div>
          <div className="stat-card floating-element" style={{animationDelay: '1s'}}>
            <div className="stat-icon">👥</div>
            <div className="stat-number">50K+</div>
            <div className="stat-label">Users</div>
          </div>
          <div className="stat-card floating-element" style={{animationDelay: '2s'}}>
            <div className="stat-icon">⭐</div>
            <div className="stat-number">4.9</div>
            <div className="stat-label">Rating</div>
          </div>
          <div className="stat-card floating-element" style={{animationDelay: '3s'}}>
            <div className="stat-icon">🚀</div>
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      {/* Background Decorations */}
      <div className="bg-blur-1"></div>
      <div className="bg-blur-2"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo" onClick={() => handleNavClick('home')}>
            <div className="logo-icon">🎬</div>
            <div className="logo-text text-glow">CineSearch</div>
          </div>
          
          <div className="nav-links">
            <button 
              className={`nav-btn ${activeSection === 'home' ? 'active btn-glow' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              🏠 Home
            </button>
            <button 
              className={`nav-btn ${activeSection === 'search' ? 'active btn-glow' : ''}`}
              onClick={() => handleNavClick('search')}
            >
              🔍 Search
            </button>
            <button 
              className={`nav-btn ${activeSection === 'about' ? 'active btn-glow' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              ℹ️ About
            </button>
          </div>
        </div>
      </nav>

      {/* Home Page */}
      {activeSection === 'home' && (
        <>
          <section className="hero">
            <div className="hero-content">
              <div className="hero-icon floating-element">🎬</div>
              <h1 className="hero-title text-glow">
                Discover Your Next <span className="gradient-text">Favorite Movie</span>
              </h1>
              <p className="hero-subtitle">
                Search through thousands of movies, get detailed information, and find your next cinematic adventure with our powerful movie discovery platform.
              </p>
              
              {/* Project Badge */}
              <div className="project-badge">
                <div className="badge-title">ALX 2025 Capstone Project</div>
                <div className="badge-content">
                  Developed by <strong>Ketema Deres</strong> | Frontend Specialization | Ethiopia 🇪🇹
                </div>
              </div>

              <div className="search-container">
                <form className="search-form" onSubmit={handleSubmit}>
                  <div className="search-icon">🔍</div>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Enter movie title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="search-btn btn-glow"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="loading-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      'Search'
                    )}
                  </button>
                </form>
              </div>

              {/* Technology Stack */}
              <div style={{margin: '40px 0'}}>
                <h3 style={{textAlign: 'center', color: 'white', marginBottom: '30px', fontSize: '1.5rem'}}>
                  Built With Modern Technologies
                </h3>
                <div className="tech-stack">
                  <div className="tech-item">
                    <div className="tech-icon">⚛️</div>
                    <div className="tech-name">React.js</div>
                    <div className="tech-description">Frontend Framework</div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">🎨</div>
                    <div className="tech-name">CSS3</div>
                    <div className="tech-description">Styling & Animations</div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">🔗</div>
                    <div className="tech-name">OMDb API</div>
                    <div className="tech-description">Movie Database</div>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">⚡</div>
                    <div className="tech-name">Vite</div>
                    <div className="tech-description">Build Tool</div>
                  </div>
                </div>
              </div>

              <div className="features-grid">
                <div className="feature-card card-hover">
                  <div className="feature-icon floating-element">🔍</div>
                  <h3 className="feature-title">Smart Search</h3>
                  <p className="feature-description">
                    Find any movie instantly with our intelligent search technology and comprehensive database.
                  </p>
                </div>
                
                <div className="feature-card card-hover">
                  <div className="feature-icon floating-element">🎯</div>
                  <h3 className="feature-title">Rich Details</h3>
                  <p className="feature-description">
                    Get comprehensive information including cast, ratings, plot summaries, and more.
                  </p>
                </div>
                
                <div className="feature-card card-hover">
                  <div className="feature-icon floating-element">💫</div>
                  <h3 className="feature-title">Beautiful Design</h3>
                  <p className="feature-description">
                    Enjoy a stunning, responsive interface that works perfectly on all your devices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <StatsSection />
          <Footer />
        </>
      )}

      {/* Search Page */}
      {activeSection === 'search' && (
        <>
          <section className="search-section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title text-glow">Movie Search</h2>
                <p className="section-subtitle">Find your next favorite movie from our extensive collection</p>
              </div>

              <div className="search-container">
                <form className="search-form" onSubmit={handleSubmit}>
                  <div className="search-icon">🔍</div>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Enter movie title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="search-btn btn-glow pulse-glow"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="loading-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      'Search'
                    )}
                  </button>
                </form>
              </div>

              {error && (
                <div className="error-message">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                    <span>⚠️</span>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              {loading && (
                <div className="loader">
                  <div className="spinner"></div>
                  <div className="loader-text">Searching through our movie database...</div>
                </div>
              )}

              {!loading && movies.length > 0 && (
                <>
                  <div className="results-header">
                    <h3 className="results-title">
                      Results for: <span className="gradient-text">"{searchTerm}"</span>
                    </h3>
                    <div className="results-count pulse-glow">{movies.length} movies found</div>
                  </div>
                  
                  <div className="movies-grid">
                    {movies.map((movie, index) => (
                      <div 
                        key={movie.imdbID}
                        className="movie-card card-hover"
                        onClick={() => getMovieDetails(movie.imdbID)}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <img
                          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image'}
                          alt={movie.Title}
                          className="movie-poster"
                        />
                        <div className="movie-info">
                          <h4 className="movie-title">{movie.Title}</h4>
                          <div className="movie-meta">
                            <span>{movie.Year}</span>
                            <span className="movie-type">{movie.Type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {!loading && movies.length === 0 && searchTerm && !error && (
                <div className="empty-state">
                  <div className="empty-icon floating-element">🎭</div>
                  <h3 className="empty-title">No Movies Found</h3>
                  <p className="empty-text">
                    We couldn't find any results for "<span style={{color: '#8b5cf6'}}>{searchTerm}</span>". Try searching with different keywords.
                  </p>
                </div>
              )}

              {!loading && !searchTerm && (
                <div className="empty-state">
                  <div className="empty-icon floating-element">🔍</div>
                  <h3 className="empty-title">Start Your Search</h3>
                  <p className="empty-text">
                    Enter a movie title in the search bar above to begin exploring our movie database.
                  </p>
                </div>
              )}
            </div>
          </section>
          <Footer />
        </>
      )}

      {/* About Page */}
      {activeSection === 'about' && (
        <>
          <section className="about-section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title text-glow">
                  About <span className="gradient-text">CineSearch</span>
                </h2>
                <p className="section-subtitle">ALX 2025 Capstone Project by Ketema Deres</p>
              </div>

              <div className="about-content">
                <div className="about-card card-hover">
                  <p className="about-description">
                    CineSearch is a modern movie search application built with React and CSS. 
                    It provides comprehensive movie information through the OMDb API in a beautiful, 
                    user-friendly interface designed for movie enthusiasts. This project showcases 
                    modern web development practices and responsive design principles.
                  </p>
                  
                  <div className="section-divider"></div>
                  
                  <div className="developer-info">
                    <h4 style={{color: 'white', marginBottom: '20px', fontSize: '1.25rem'}}>Developer Information</h4>
                    <div className="features-list">
                      <div className="feature-item card-hover">
                        <div className="feature-dot purple"></div>
                        <span><strong>Name:</strong> Ketema Deres</span>
                      </div>
                      <div className="feature-item card-hover">
                        <div className="feature-dot pink"></div>
                        <span><strong>Role:</strong> Frontend Developer</span>
                      </div>
                      <div className="feature-item card-hover">
                        <div className="feature-dot blue"></div>
                        <span><strong>Education:</strong> ALX 2025</span>
                      </div>
                      <div className="feature-item card-hover">
                        <div className="feature-dot purple"></div>
                        <span><strong>Location:</strong> Ethiopia</span>
                      </div>
                      <div className="feature-item card-hover">
                        <div className="feature-dot pink"></div>
                        <span><strong>Project:</strong> Capstone Project</span>
                      </div>
                      <div className="feature-item card-hover">
                        <div className="feature-dot blue"></div>
                        <span><strong>Specialization:</strong> Frontend Development</span>
                      </div>
                    </div>
                  </div>

                  <div className="section-divider"></div>

                  <h4 style={{color: 'white', marginBottom: '20px', fontSize: '1.25rem'}}>Technology Stack</h4>
                  <div className="features-list">
                    <div className="feature-item card-hover">
                      <div className="feature-dot purple"></div>
                      <span><strong>Frontend Framework:</strong> React 18</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot pink"></div>
                      <span><strong>Build Tool:</strong> Vite</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot blue"></div>
                      <span><strong>Styling:</strong> Custom CSS with Glass Morphism</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot purple"></div>
                      <span><strong>API:</strong> OMDb API (Open Movie Database)</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot pink"></div>
                      <span><strong>HTTP Client:</strong> Axios</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot blue"></div>
                      <span><strong>Deployment:</strong> Vercel/Netlify (Ready)</span>
                    </div>
                  </div>

                  <div className="section-divider"></div>

                  <h4 style={{color: 'white', marginBottom: '20px', fontSize: '1.25rem'}}>Project Features</h4>
                  <div className="features-list">
                    <div className="feature-item card-hover">
                      <div className="feature-dot purple"></div>
                      <span>Advanced movie search functionality</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot pink"></div>
                      <span>Detailed movie information and ratings</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot blue"></div>
                      <span>Responsive design for all devices</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot purple"></div>
                      <span>Modern and intuitive user interface</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot pink"></div>
                      <span>Fast and reliable performance</span>
                    </div>
                    <div className="feature-item card-hover">
                      <div className="feature-dot blue"></div>
                      <span>Comprehensive movie database</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <StatsSection />
          <Footer />
        </>
      )}

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content card-hover" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close btn-glow"
              onClick={() => setSelectedMovie(null)}
            >
              ×
            </button>
            
            <div className="modal-body">
              <div className="movie-detail-header">
                <img
                  src={selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image'}
                  alt={selectedMovie.Title}
                  className="movie-detail-poster card-hover"
                />
                
                <div className="movie-detail-info">
                  <h2 className="movie-detail-title text-glow">{selectedMovie.Title}</h2>
                  
                  <div className="movie-detail-meta">
                    <span>{selectedMovie.Year}</span>
                    <span>•</span>
                    <span>{selectedMovie.Rated || 'Not Rated'}</span>
                    <span>•</span>
                    <span>{selectedMovie.Runtime || 'N/A'}</span>
                    <span>•</span>
                    <span>IMDb: {selectedMovie.imdbRating || 'N/A'}</span>
                  </div>
                  
                  <p className="movie-detail-plot">
                    {selectedMovie.Plot || 'No plot summary available.'}
                  </p>
                  
                  <div className="details-grid">
                    <div className="detail-item card-hover">
                      <div className="detail-label">Genre</div>
                      <div className="detail-value">{selectedMovie.Genre || 'N/A'}</div>
                    </div>
                    
                    <div className="detail-item card-hover">
                      <div className="detail-label">Director</div>
                      <div className="detail-value">{selectedMovie.Director || 'N/A'}</div>
                    </div>
                    
                    <div className="detail-item card-hover">
                      <div className="detail-label">Actors</div>
                      <div className="detail-value">{selectedMovie.Actors || 'N/A'}</div>
                    </div>
                    
                    <div className="detail-item card-hover">
                      <div className="detail-label">Language</div>
                      <div className="detail-value">{selectedMovie.Language || 'N/A'}</div>
                    </div>
                    
                    <div className="detail-item card-hover">
                      <div className="detail-label">Country</div>
                      <div className="detail-value">{selectedMovie.Country || 'N/A'}</div>
                    </div>
                    
                    <div className="detail-item card-hover">
                      <div className="detail-label">Box Office</div>
                      <div className="detail-value">{selectedMovie.BoxOffice || 'N/A'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;