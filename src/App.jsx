import { useState, useEffect } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Checking Account', balance: 12450.75, number: '**** 1234' },
    { id: 2, name: 'Savings Account', balance: 25300.50, number: '**** 5678' },
    { id: 3, name: 'Credit Card', balance: -2150.25, number: '**** 9012' }
  ])

  // Generate floating elements for background animation
  useEffect(() => {
    const floatingElements = document.querySelector('.floating-elements')
    if (floatingElements) {
      // Clear existing elements
      floatingElements.innerHTML = ''
      // Create floating circles
      for (let i = 0; i < 8; i++) {
        const circle = document.createElement('div')
        circle.className = 'absolute rounded-full opacity-10 bg-white/10 animate-float-banking'
        circle.style.left = `${Math.random() * 100}%`
        circle.style.top = `${Math.random() * 100}%`
        circle.style.width = `${Math.random() * 100 + 50}px`
        circle.style.height = circle.style.width
        circle.style.animationDelay = `${Math.random() * 8}s`
        floatingElements.appendChild(circle)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const bankingServices = [
    { icon: '💳', title: 'Digital Banking', description: 'Manage your accounts online 24/7' },
    { icon: '🏦', title: 'Loans & Mortgages', description: 'Competitive rates for all your needs' },
    { icon: '💰', title: 'Investment Services', description: 'Grow your wealth with expert guidance' },
    { icon: '📱', title: 'Mobile Banking', description: 'Bank on the go with our mobile app' }
  ]

  const transactionHistory = [
    { id: 1, date: '2025-06-19', description: 'Salary Deposit', amount: 5500.00, type: 'credit' },
    { id: 2, date: '2025-06-18', description: 'Grocery Store', amount: -156.78, type: 'debit' },
    { id: 3, date: '2025-06-17', description: 'Online Transfer', amount: -500.00, type: 'debit' },
    { id: 4, date: '2025-06-16', description: 'Interest Payment', amount: 45.30, type: 'credit' }
  ]

  return (
    <div className={`relative min-h-screen overflow-hidden ${
      isDarkMode 
        ? 'bg-banking-dark' 
        : 'bg-banking-gradient'
    }`}>
      {/* Floating Background Elements */}
      <div className="floating-elements absolute inset-0 overflow-hidden pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Banking Header */}
        <header className="mb-16 text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 text-white text-shadow-banking-strong">
              💜 PurpleBank
            </h1>
            <p className="text-xl font-light opacity-90 text-white/95 text-shadow-banking-soft">
              Your Trusted Financial Partner
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-8 mb-12 flex-wrap">
            {['dashboard', 'accounts', 'services', 'support'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform backdrop-blur-sm border text-shadow-banking-soft ${
                  activeTab === tab
                    ? 'bg-white/95 text-banking-800 shadow-banking scale-105 border-white/30'
                    : 'bg-white/20 text-white border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 shadow-soft'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="mb-8 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300"
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-12">
            {/* Account Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white text-shadow-banking-white">
                Account Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {accounts.map((account) => (
                  <div key={account.id} className="relative p-8 rounded-3xl overflow-hidden transform transition-all duration-500 bg-banking-card text-white shadow-banking-card hover:shadow-banking-btn-hover hover:scale-105 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
                    <div className="text-3xl font-bold mb-2 text-shadow-banking-soft">
                      ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-shadow-banking-soft">{account.name}</h3>
                    <p className="text-sm opacity-80 font-mono text-shadow-banking-soft">{account.number}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Banking Statistics */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white text-shadow-banking-white">
                Your Banking Stats
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: '3', label: 'Active Accounts', sublabel: 'All in good standing' },
                  { number: '$35,601', label: 'Total Balance', sublabel: 'Across all accounts' },
                  { number: '24', label: 'Transactions', sublabel: 'This month' },
                  { number: '5★', label: 'Credit Score', sublabel: 'Excellent rating' }
                ].map((stat, index) => (
                  <div key={index} className="p-8 rounded-3xl text-center backdrop-blur-sm transform transition-all duration-500 bg-white/98 shadow-banking hover:shadow-banking-hover hover:scale-105 hover:-translate-y-2 border border-banking-800/15">
                    <div className="text-4xl font-bold mb-3 text-banking-800 text-shadow-soft">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white text-shadow-banking-white">
                Quick Actions
              </h2>
              <div className="p-10 rounded-3xl backdrop-blur-sm bg-white/98 shadow-banking border border-banking-800/15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-banking-500/8 to-banking-700/8 border border-banking-500/15 shadow-inner-soft">
                    <h3 className="text-2xl font-semibold mb-6 text-banking-700">
                      Transfer Money
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-banking-800 mb-3">
                          From Account
                        </label>
                        <select className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 text-base transition-all duration-300 shadow-soft focus:outline-none focus:border-banking-500 focus:shadow-banking-btn focus:bg-white">
                          <option>Checking Account (**** 1234)</option>
                          <option>Savings Account (**** 5678)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-banking-800 mb-3">
                          To Account
                        </label>
                        <input
                          type="text"
                          placeholder="Account number or email"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 text-base transition-all duration-300 shadow-soft focus:outline-none focus:border-banking-500 focus:shadow-banking-btn focus:bg-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-banking-800 mb-3">
                          Amount
                        </label>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 text-base transition-all duration-300 shadow-soft focus:outline-none focus:border-banking-500 focus:shadow-banking-btn focus:bg-white placeholder-gray-400"
                        />
                      </div>
                      <button className="w-full px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform bg-banking-btn shadow-banking-btn border border-banking-500/30 relative overflow-hidden hover:bg-banking-btn-hover hover:shadow-banking-btn-hover hover:scale-105 hover:-translate-y-1 active:scale-95">
                        <span className="relative z-10">Transfer Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
                      </button>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-banking-500/8 to-banking-700/8 border border-banking-500/15 shadow-inner-soft">
                    <h3 className="text-2xl font-semibold mb-6 text-banking-700">
                      Recent Transactions
                    </h3>
                    <div className="space-y-4">
                      {transactionHistory.map((transaction) => (
                        <div key={transaction.id} className="flex justify-between items-center p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all duration-300">
                          <div>
                            <p className="font-semibold text-gray-800">{transaction.description}</p>
                            <p className="text-sm text-gray-600">{transaction.date}</p>
                          </div>
                          <span className={`font-bold ${transaction.type === 'credit' ? 'text-success-600' : 'text-error-600'}`}>
                            {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Accounts Tab */}
        {activeTab === 'accounts' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12 text-shadow-banking-white">
              Your Accounts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {accounts.map((account) => (
                <div key={account.id} className="p-8 rounded-3xl backdrop-blur-sm transform transition-all duration-500 bg-white/98 shadow-banking border border-banking-800/15 hover:shadow-banking-hover hover:scale-105 hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-banking-700 mb-2">{account.name}</h3>
                      <p className="text-gray-600 font-mono">{account.number}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-banking-600">
                        ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                      <p className={`text-sm ${account.balance >= 0 ? 'text-success-600' : 'text-error-600'}`}>
                        {account.balance >= 0 ? 'Available Balance' : 'Outstanding Balance'}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex-1 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform bg-banking-btn shadow-banking-btn border border-banking-500/30 relative overflow-hidden hover:bg-banking-btn-hover hover:shadow-banking-btn-hover hover:scale-105 hover:-translate-y-1 active:scale-95">
                      View Details
                    </button>
                    <button className="flex-1 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform bg-banking-500/10 text-banking-700 border-2 border-banking-500/30 shadow-soft hover:bg-banking-500/20 hover:border-banking-500/50 hover:scale-105 hover:-translate-y-1 active:scale-95">
                      Transfer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12 text-shadow-banking-white">
              Banking Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bankingServices.map((service, index) => (
                <div key={index} className="relative p-8 rounded-3xl backdrop-blur-sm overflow-hidden transform transition-all duration-500 bg-white/98 shadow-banking border border-banking-800/15 hover:shadow-banking-hover hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br from-banking-500/8 to-banking-700/8 hover:opacity-100"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl bg-banking-btn text-white shadow-banking-btn transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-banking-btn-hover">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                    <button className="w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform bg-banking-500/10 text-banking-700 border-2 border-banking-500/30 shadow-soft hover:bg-banking-500/20 hover:border-banking-500/50 hover:scale-105 hover:-translate-y-1 active:scale-95">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12 text-shadow-banking-white">
              Customer Support
            </h2>
            <div className="p-10 rounded-3xl backdrop-blur-sm bg-white/98 shadow-banking border border-banking-800/15">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-banking-500/8 to-banking-700/8 border border-banking-500/15 shadow-inner-soft">
                  <h3 className="text-2xl font-semibold mb-6 text-banking-700">
                    Contact Us
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-banking-800 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 text-base transition-all duration-300 shadow-soft focus:outline-none focus:border-banking-500 focus:shadow-banking-btn focus:bg-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-banking-800 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 text-base transition-all duration-300 shadow-soft focus:outline-none focus:border-banking-500 focus:shadow-banking-btn focus:bg-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-banking-800 mb-3">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="How can we help you today?"
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 text-base transition-all duration-300 shadow-soft focus:outline-none focus:border-banking-500 focus:shadow-banking-btn focus:bg-white placeholder-gray-400 resize-none"
                      />
                    </div>
                    <button className="w-full px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform bg-banking-btn shadow-banking-btn border border-banking-500/30 relative overflow-hidden hover:bg-banking-btn-hover hover:shadow-banking-btn-hover hover:scale-105 hover:-translate-y-1 active:scale-95">
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-banking-500/8 to-banking-700/8 border border-banking-500/15 shadow-inner-soft">
                  <h3 className="text-2xl font-semibold mb-6 text-banking-700">
                    Quick Help
                  </h3>
                  <div className="space-y-4">
                    <button className="w-full px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform bg-banking-accent shadow-banking-btn border border-success-600/30 hover:bg-gradient-to-br hover:from-success-600 hover:to-success-700 hover:shadow-banking-btn-hover hover:scale-105 hover:-translate-y-1 active:scale-95">
                      📞 Call Customer Service
                    </button>
                    <button className="w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform bg-banking-500/10 text-banking-700 border-2 border-banking-500/30 shadow-soft hover:bg-banking-500/20 hover:border-banking-500/50 hover:scale-105 hover:-translate-y-1 active:scale-95">
                      💬 Live Chat Support
                    </button>
                    <button className="w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform bg-banking-500/10 text-banking-700 border-2 border-banking-500/30 shadow-soft hover:bg-banking-500/20 hover:border-banking-500/50 hover:scale-105 hover:-translate-y-1 active:scale-95">
                      📧 Email Support
                    </button>
                    <button className="w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform bg-banking-500/10 text-banking-700 border-2 border-banking-500/30 shadow-soft hover:bg-banking-500/20 hover:border-banking-500/50 hover:scale-105 hover:-translate-y-1 active:scale-95">
                      📍 Find Branch Locations
                    </button>
                    <div className="mt-8 p-6 bg-banking-50 rounded-3xl border border-banking-200">
                      <h4 className="font-bold text-banking-700 mb-2">24/7 Support</h4>
                      <p className="text-gray-600 text-sm">
                        Our customer service team is available around the clock to assist you with any banking needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-12 border-t border-white/20 mt-16">
          <div className="mb-6">
            <div className="text-2xl mb-4">💜🏦💜</div>
            <p className="text-white/90 text-lg mb-2 text-shadow-banking-soft">
              "Your financial success is our mission"
            </p>
            <p className="text-white/70 text-sm text-shadow-banking-soft">- PurpleBank Team</p>
          </div>
          <p className="text-white/80 text-shadow-banking-soft">
            Built with React, Vite, and Banking Excellence 💜
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
