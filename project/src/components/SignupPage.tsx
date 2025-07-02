import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Building2, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  MapPin,
  Users,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  companyName: string;
  companySize: string;
  industry: string;
  phoneNumber: string;
  country: string;
  role: string;
  agreeToTerms: boolean;
  subscribeToUpdates: boolean;
}

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: '',
    companySize: '',
    industry: '',
    phoneNumber: '',
    country: '',
    role: '',
    agreeToTerms: false,
    subscribeToUpdates: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Traditional Banking',
    'Fintech',
    'E-commerce',
    'Crypto/Blockchain',
    'Payment Processing',
    'Insurance',
    'Investment Management',
    'Other'
  ];

  const userRoles = [
    { value: 'admin', label: 'Admin', description: 'Full system access and user management' },
    { value: 'compliance', label: 'Compliance Officer', description: 'Review flagged transactions and manage policies' },
    { value: 'developer', label: 'Developer', description: 'API access and technical integration' },
    { value: 'analyst', label: 'Risk Analyst', description: 'Monitor fraud patterns and generate reports' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.companySize) newErrors.companySize = 'Company size is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.role) newErrors.role = 'User role is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2() && formData.agreeToTerms) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    } else if (!formData.agreeToTerms) {
      setErrors(prev => ({ ...prev, agreeToTerms: 'You must agree to the terms and conditions' }));
    }
  };

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
            
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Start Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Free Trial
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              Join hundreds of companies protecting their customers with FraudGuard
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                currentStep >= 1 ? 'bg-cyan-500 border-cyan-500' : 'border-slate-600'
              }`}>
                {currentStep > 1 ? <CheckCircle className="h-5 w-5" /> : <span className="text-sm font-medium">1</span>}
              </div>
              <div className={`w-16 h-0.5 ${currentStep > 1 ? 'bg-cyan-500' : 'bg-slate-600'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                currentStep >= 2 ? 'bg-cyan-500 border-cyan-500' : 'border-slate-600'
              }`}>
                <span className="text-sm font-medium">2</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6 text-center">Account Information</h2>
                  
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                            errors.firstName ? 'border-red-500' : 'border-slate-600'
                          }`}
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                            errors.lastName ? 'border-red-500' : 'border-slate-600'
                          }`}
                          placeholder="Doe"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-600'
                        }`}
                        placeholder="john@company.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                          errors.password ? 'border-red-500' : 'border-slate-600'
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                          errors.confirmPassword ? 'border-red-500' : 'border-slate-600'
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Continue
                  </button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6 text-center">Company Information</h2>
                  
                  {/* Company Details */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                          errors.companyName ? 'border-red-500' : 'border-slate-600'
                        }`}
                        placeholder="Acme Corporation"
                      />
                    </div>
                    {errors.companyName && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Company Size *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                            errors.companySize ? 'border-red-500' : 'border-slate-600'
                          }`}
                        >
                          <option value="">Select size</option>
                          {companySizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      {errors.companySize && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.companySize}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                          errors.industry ? 'border-red-500' : 'border-slate-600'
                        }`}
                      >
                        <option value="">Select industry</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.industry}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                            errors.phoneNumber ? 'border-red-500' : 'border-slate-600'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Country *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                            errors.country ? 'border-red-500' : 'border-slate-600'
                          }`}
                          placeholder="United States"
                        />
                      </div>
                      {errors.country && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.country}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* User Role Selection */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-4">
                      Your Role *
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {userRoles.map(role => (
                        <div key={role.value} className="relative">
                          <input
                            type="radio"
                            name="role"
                            value={role.value}
                            checked={formData.role === role.value}
                            onChange={handleInputChange}
                            className="sr-only"
                            id={role.value}
                          />
                          <label
                            htmlFor={role.value}
                            className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              formData.role === role.value
                                ? 'border-cyan-500 bg-cyan-500/10'
                                : 'border-slate-600 hover:border-slate-500'
                            }`}
                          >
                            <div className="font-medium text-white">{role.label}</div>
                            <div className="text-sm text-slate-400 mt-1">{role.description}</div>
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.role && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.role}
                      </p>
                    )}
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded bg-slate-900"
                        id="agreeToTerms"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-slate-300">
                        I agree to the <a href="#" className="text-cyan-400 hover:text-cyan-300">Terms of Service</a> and <a href="#" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a> *
                      </label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-sm text-red-400 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.agreeToTerms}
                      </p>
                    )}

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="subscribeToUpdates"
                        checked={formData.subscribeToUpdates}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded bg-slate-900"
                        id="subscribeToUpdates"
                      />
                      <label htmlFor="subscribeToUpdates" className="text-sm text-slate-300">
                        Subscribe to product updates and security insights
                      </label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 border border-slate-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800/50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                    >
                      Start Free Trial
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-400">
              Already have an account? <a href="#" className="text-cyan-400 hover:text-cyan-300">Sign in</a>
            </p>
            <p className="text-xs text-slate-500 mt-2">
              30-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;