import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`relative min-h-screen overflow-hidden ${
      isDarkMode 
        ? 'bg-banking-dark' 
        : 'bg-banking-gradient'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Home Header */}
        <header className="mb-16 text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 text-white text-shadow-banking-strong">
              🏠 Welcome Home
            </h1>
            <p className="text-xl font-light opacity-90 text-white/95 text-shadow-banking-soft">
              Your Personal Banking Dashboard
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-8 mb-12 flex-wrap">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform backdrop-blur-sm border bg-white/20 text-white border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 shadow-soft text-shadow-banking-soft"
            >
              Main Banking
            </Link>
            <Link
              to="/home"
              className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform backdrop-blur-sm border bg-white/95 text-banking-800 shadow-banking scale-105 border-white/30 text-shadow-banking-soft"
            >
              Home Dashboard
            </Link>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="mb-8 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300"
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* Home Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-white text-shadow-banking-white">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '💳', title: 'Check Balance', description: 'View your current account balance' },
                { icon: '💸', title: 'Transfer Money', description: 'Send money to friends and family' },
                { icon: '📊', title: 'View Reports', description: 'See your spending patterns' },
                { icon: '🔔', title: 'Notifications', description: 'Check your latest alerts' },
                { icon: '⚙️', title: 'Settings', description: 'Manage your account preferences' },
                { icon: '🎯', title: 'Goals', description: 'Track your savings goals' }
              ].map((item, index) => (
                <div key={index} className="relative p-8 rounded-3xl overflow-hidden transform transition-all duration-500 bg-banking-card text-white shadow-banking-card hover:shadow-banking-btn-hover hover:scale-105 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
                  <div className="text-4xl mb-4 text-shadow-banking-soft">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-shadow-banking-soft">{item.title}</h3>
                  <p className="text-sm opacity-80 text-shadow-banking-soft">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-white text-shadow-banking-white">
              Personal Finance Tips
            </h2>
            <div className="p-10 rounded-3xl backdrop-blur-sm bg-white/98 shadow-banking border border-banking-800/15">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Save Regularly',
                    tip: 'Try to save at least 20% of your income each month for a secure financial future.',
                    icon: '💰'
                  },
                  {
                    title: 'Track Expenses',
                    tip: 'Monitor your spending habits to identify areas where you can cut back and save more.',
                    icon: '📊'
                  },
                  {
                    title: 'Emergency Fund',
                    tip: 'Build an emergency fund covering 3-6 months of your living expenses.',
                    icon: '🛡️'
                  },
                  {
                    title: 'Invest Wisely',
                    tip: 'Consider diversifying your investments to build long-term wealth.',
                    icon: '📈'
                  }
                ].map((advice, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-banking-500/8 to-banking-700/8 border border-banking-500/15 shadow-inner-soft">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{advice.icon}</span>
                      <h3 className="text-xl font-semibold text-banking-700">{advice.title}</h3>
                    </div>
                    <p className="text-gray-600">{advice.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-white/20 mt-16">
          <div className="mb-6">
            <div className="text-2xl mb-4">🏠💜🏦</div>
            <p className="text-white/90 text-lg mb-2 text-shadow-banking-soft">
              "Home is where your financial journey begins"
            </p>
            <p className="text-white/70 text-sm text-shadow-banking-soft">- PurpleBank Home</p>
          </div>
          <p className="text-white/80 text-shadow-banking-soft">
            Your Personal Banking Space 💜
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Home