import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  Eye, 
  Lock, 
  Database,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Zap,
  Menu,
  X,
  Building2,
  Smartphone,
  ShoppingCart,
  Wallet
} from 'lucide-react';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI Transaction Scoring",
      description: "Advanced machine learning models analyze transaction patterns in real-time to identify potential fraud with 99.7% accuracy."
    },
    {
      icon: Eye,
      title: "Risk Assessment",
      description: "Comprehensive wallet and account history analysis to flag high-risk recipients and suspicious transaction patterns."
    },
    {
      icon: Lock,
      title: "Manual Review Queue",
      description: "Automatically hold suspicious transactions for human review, ensuring legitimate transactions flow while catching fraud."
    },
    {
      icon: Database,
      title: "Blockchain Audit Trail",
      description: "Immutable decision logging using smart contracts ensures complete transparency and regulatory compliance."
    }
  ];

  const targetAudiences = [
    {
      icon: Building2,
      title: "Traditional Banks",
      description: "Protect customer accounts and reduce chargebacks"
    },
    {
      icon: Smartphone,
      title: "Fintech Companies",
      description: "Scale fraud prevention with your growing user base"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Secure online payments and prevent merchant fraud"
    },
    {
      icon: Wallet,
      title: "Crypto Wallet Providers",
      description: "Safeguard digital assets and DeFi transactions"
    }
  ];

  const stats = [
    { value: "99.7%", label: "Fraud Detection Accuracy" },
    { value: "<50ms", label: "Average Response Time" },
    { value: "$2.4B+", label: "Fraud Prevented" },
    { value: "500+", label: "Enterprise Clients" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">FraudGuard</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors">Solutions</a>
              <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Get Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors">Features</a>
                <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors">Solutions</a>
                <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">Pricing</a>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all duration-300 w-full">
                  Get Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full mb-6">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Real-time Fraud Prevention</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Stop Fraud
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Before It Happens
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                AI-powered fraud prevention that protects your business and customers with real-time transaction scoring, 
                risk assessment, and blockchain-verified audit trails.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border border-slate-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800/50">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full"></div>
              <div className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-slate-900/50 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Advanced Fraud Prevention
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Powered by AI
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive suite of fraud prevention tools works together to create an impenetrable defense 
              against financial crimes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:bg-slate-800/70">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Built for Every
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Financial Platform
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From traditional banking to cutting-edge crypto, FraudGuard adapts to your industry's unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <audience.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{audience.title}</h3>
                <p className="text-slate-300 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  FraudGuard?
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">99.7% Accuracy Rate</h3>
                    <p className="text-slate-300">Our AI models achieve industry-leading fraud detection accuracy with minimal false positives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Processing</h3>
                    <p className="text-slate-300">Sub-50ms response times ensure seamless user experience without compromising security.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Blockchain Verified</h3>
                    <p className="text-slate-300">Immutable audit trails using smart contracts ensure regulatory compliance and transparency.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Easy Integration</h3>
                    <p className="text-slate-300">RESTful APIs and SDKs make implementation quick and painless for any platform.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Trusted by Industry Leaders</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-400">$2.4B+</div>
                  <div className="text-sm text-slate-400">Fraud Prevented</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-slate-400">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm text-slate-400">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-400">&lt;50ms</div>
                  <div className="text-sm text-slate-400">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Stop Fraud in Its Tracks?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of financial institutions that trust FraudGuard to protect their customers and business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
            >
              Start 30-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border border-slate-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800/50">
              Talk to Sales
            </button>
          </div>
          
          <p className="text-sm text-slate-400 mt-4">
            No credit card required • Setup in 15 minutes • 24/7 support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold">FraudGuard</span>
              </div>
              <p className="text-slate-400 mb-4">
                AI-powered fraud prevention for the modern financial ecosystem.
              </p>
              <div className="text-sm text-slate-500">
                © 2025 FraudGuard. All rights reserved.
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-slate-400">
                <div>Features</div>
                <div>API Documentation</div>
                <div>Integrations</div>
                <div>Security</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-slate-400">
                <div>About</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-slate-400">
                <div>Blog</div>
                <div>Case Studies</div>
                <div>Help Center</div>
                <div>Status</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;