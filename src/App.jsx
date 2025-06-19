import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark for space theme
  const [stars, setStars] = useState([])

  // Generate random stars for background
  useEffect(() => {
    const generateStars = () => {
      const starArray = []
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          twinkle: Math.random() * 2 + 1
        })
      }
      setStars(starArray)
    }
    generateStars()
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const planets = [
    { name: 'Earth', color: 'from-blue-400 to-green-400', distance: '0 AU', moons: 1 },
    { name: 'Mars', color: 'from-red-400 to-orange-500', distance: '1.5 AU', moons: 2 },
    { name: 'Jupiter', color: 'from-yellow-600 to-orange-600', distance: '5.2 AU', moons: 79 },
    { name: 'Saturn', color: 'from-yellow-400 to-amber-500', distance: '9.5 AU', moons: 83 }
  ]

  const spaceFeatures = [
    { icon: '🚀', title: 'Space Exploration', desc: 'Journey to the stars and beyond' },
    { icon: '🌌', title: 'Galaxy Discovery', desc: 'Explore distant galaxies and nebulae' },
    { icon: '🛸', title: 'Alien Encounters', desc: 'Search for extraterrestrial life' },
    { icon: '🌠', title: 'Meteor Showers', desc: 'Witness cosmic light shows' }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 space-bg ${darkMode ? 'dark' : ''}`}>
      {/* Animated Stars Background */}
      <div className="stars-container">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.twinkle}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Cosmic Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-between mb-8">
            <div className="cosmic-logo">
              <h1 className="text-6xl font-bold cosmic-gradient animate-pulse">
                🌌 COSMIC EXPLORER
              </h1>
              <p className="text-xl text-purple-300 mt-2 font-light">
                Journey Through the Universe
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="space-btn-toggle"
            >
              {darkMode ? '☀️ Solar Mode' : '🌙 Cosmic Mode'}
            </button>
          </div>
          
          {/* Floating Astronaut */}
          <div className="astronaut-float mb-8">
            <div className="text-8xl animate-bounce-gentle">👨‍🚀</div>
          </div>
          
          <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Embark on an epic journey through space and time. Discover distant worlds, 
            explore cosmic phenomena, and unlock the mysteries of the universe.
          </p>
        </header>

        {/* Solar System */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center cosmic-gradient">
            🪐 Solar System Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planets.map((planet, index) => (
              <div key={planet.name} className="planet-card group">
                <div className={`planet-sphere bg-gradient-to-br ${planet.color}`}>
                  <div className="planet-glow"></div>
                </div>
                <div className="planet-info">
                  <h3 className="text-xl font-bold text-white mb-2">{planet.name}</h3>
                  <p className="text-blue-200 text-sm mb-1">Distance: {planet.distance}</p>
                  <p className="text-purple-300 text-sm">Moons: {planet.moons}</p>
                </div>
                <div className="planet-orbit"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Space Mission Control */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center cosmic-gradient">
            🚀 Mission Control
          </h2>
          <div className="space-control-panel">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="control-section">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-300">
                  Navigation Systems
                </h3>
                <div className="space-y-4">
                  <button className="space-btn-primary w-full">
                    🌍 Launch to Earth Orbit
                  </button>
                  <button className="space-btn-secondary w-full">
                    🌙 Lunar Mission
                  </button>
                  <button className="space-btn-accent w-full">
                    🚀 Mars Expedition
                  </button>
                  <button className="space-btn-danger w-full">
                    ⚠️ Emergency Return
                  </button>
                </div>
              </div>
              
              <div className="control-section">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-300">
                  Communication Hub
                </h3>
                <div className="space-form">
                  <div className="mb-4">
                    <label className="space-label">Mission Commander</label>
                    <input
                      type="text"
                      placeholder="Enter commander name"
                      className="space-input"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="space-label">Destination Coordinates</label>
                    <input
                      type="text"
                      placeholder="e.g., Alpha Centauri B"
                      className="space-input"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="space-label">Mission Briefing</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your space mission..."
                      className="space-input resize-none"
                    />
                  </div>
                  <button className="space-btn-primary w-full">
                    📡 Transmit to Ground Control
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Space Features */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center cosmic-gradient">
            ✨ Cosmic Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaceFeatures.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="feature-icon-container">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="feature-glow"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.desc}</p>
                <div className="feature-pulse"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Cosmic Animations Demo */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center cosmic-gradient">
            🌟 Cosmic Animations
          </h2>
          <div className="cosmic-animations-grid">
            <div className="animation-demo animate-orbit">
              <div className="cosmic-orb bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="orb-glow"></div>
              </div>
              <p className="text-cyan-300 text-sm mt-4">Orbital Motion</p>
            </div>
            
            <div className="animation-demo animate-pulse-cosmic">
              <div className="cosmic-orb bg-gradient-to-r from-pink-400 to-red-500">
                <div className="orb-glow"></div>
              </div>
              <p className="text-cyan-300 text-sm mt-4">Stellar Pulse</p>
            </div>
            
            <div className="animation-demo animate-float">
              <div className="cosmic-orb bg-gradient-to-r from-green-400 to-teal-500">
                <div className="orb-glow"></div>
              </div>
              <p className="text-cyan-300 text-sm mt-4">Zero Gravity</p>
            </div>
            
            <div className="animation-demo animate-spin-slow">
              <div className="cosmic-orb bg-gradient-to-r from-yellow-400 to-orange-500">
                <div className="orb-glow"></div>
              </div>
              <p className="text-cyan-300 text-sm mt-4">Planetary Spin</p>
            </div>
          </div>
        </section>

        {/* Space Statistics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center cosmic-gradient">
            📊 Universe Statistics
          </h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number cosmic-gradient">13.8B</div>
              <div className="stat-label">Years Old</div>
              <div className="stat-sublabel">Age of Universe</div>
            </div>
            <div className="stat-card">
              <div className="stat-number cosmic-gradient">2T</div>
              <div className="stat-label">Galaxies</div>
              <div className="stat-sublabel">Observable Universe</div>
            </div>
            <div className="stat-card">
              <div className="stat-number cosmic-gradient">5,000+</div>
              <div className="stat-label">Exoplanets</div>
              <div className="stat-sublabel">Confirmed Discoveries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number cosmic-gradient">∞</div>
              <div className="stat-label">Possibilities</div>
              <div className="stat-sublabel">To Explore</div>
            </div>
          </div>
        </section>

        {/* Cosmic Footer */}
        <footer className="text-center py-12 border-t border-purple-500/30">
          <div className="mb-6">
            <div className="text-2xl mb-4">🌌✨🚀✨🌌</div>
            <p className="text-purple-300 text-lg mb-2">
              "The cosmos is within us. We are made of star-stuff."
            </p>
            <p className="text-blue-400 text-sm">- Carl Sagan</p>
          </div>
          <p className="text-cyan-400">
            Built with React, Vite, and Cosmic Energy ⭐
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
