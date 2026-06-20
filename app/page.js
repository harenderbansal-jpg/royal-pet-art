import React, { useState } from 'react';

export default function RoyalPetArt() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [orderType, setOrderType] = useState('digital');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload your pet's photo first!");
    
    setLoading(true);
    // Secure simulation for preview generation
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased">
      {/* Premium Elegant Header */}
      <header className="py-8 text-center bg-stone-900 text-amber-100 shadow-md">
        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-wide">👑 Royal Pet Portraits 👑</h1>
        <p className="mt-2 text-sm md:text-base text-stone-300 max-w-xl mx-auto px-4">
          Transform your beloved pets into majestic historical masterpieces. 100% Secure, Legal, and Copyright-Free Artistry.
        </p>
      </header>

      {/* Main Legal Business Workspace */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-stone-200">
          
          {/* Left Side: Upload & Selection */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-stone-800 border-b pb-2">1. Upload & Customize</h2>
            
            {/* Safe & Secure File Upload */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-stone-300 hover:border-amber-700 bg-stone-50 rounded-xl p-6 cursor-pointer transition duration-200 min-h-[220px]">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="hidden"
              />
              {preview ? (
                <img src={preview} alt="Pet Preview" className="max-h-48 rounded-lg shadow-md object-cover" />
              ) : (
                <div className="text-center space-y-2">
                  <span className="text-4xl">📸</span>
                  <p className="text-sm font-medium text-stone-700">Click to upload pet photo safely</p>
                  <p className="text-xs text-stone-400">Your data is fully protected & deleted after order completion</p>
                </div>
              )}
            </label>

            {/* Clear, Legal Pricing Options */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-stone-700">Select Your Package:</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setOrderType('digital')}
                  className={`p-3 rounded-xl border text-left transition ${orderType === 'digital' ? 'border-amber-700 bg-amber-50/50 ring-2 ring-amber-700/20' : 'border-stone-200'}`}
                >
                  <p className="font-bold text-sm text-stone-800">Standard Digital</p>
                  <p className="text-xs text-stone-500 mt-1">High-Res Email Delivery</p>
                  <p className="text-base font-extrabold text-amber-700 mt-2">$14.99</p>
                </button>

                <button 
                  onClick={() => setOrderType('physical')}
                  className={`p-3 rounded-xl border text-left transition ${orderType === 'physical' ? 'border-amber-700 bg-amber-50/50 ring-2 ring-amber-700/20' : 'border-stone-200'}`}
                >
                  <p className="font-bold text-sm text-stone-800">Premium Canvas</p>
                  <p className="text-xs text-stone-500 mt-1">Printed & Shipped (US/UK)</p>
                  <p className="text-base font-extrabold text-amber-700 mt-2">$39.99</p>
                </button>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleUploadSubmit}
              disabled={loading || !image}
              className={`w-full py-4 rounded-xl text-lg font-bold tracking-wide transition shadow-md ${
                !image 
                  ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                  : 'bg-amber-700 hover:bg-amber-800 text-white transform active:scale-95'
              }`}
            >
              {loading ? "🎨 Processing Masterpiece safely..." : "✨ Generate Portrait Preview"}
            </button>
          </div>

          {/* Right Side: Preview & Secure Checkout */}
          <div className="flex flex-col bg-stone-100 rounded-2xl border border-stone-200 p-6 min-h-[400px] justify-between">
            <div className="flex flex-col items-center justify-center flex-grow text-center">
              {loading && (
                <div className="space-y-4 animate-pulse">
                  <div className="w-10 h-10 border-4 border-amber-700 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-stone-600 text-sm font-medium">Applying Renaissance oil textures securely...</p>
                </div>
              )}

              {!loading && !result && (
                <div className="space-y-3 px-4">
                  <span className="text-5xl">🏰</span>
                  <h3 className="text-xl font-serif font-medium text-stone-800">Your Order Preview Area</h3>
                  <p className="text-xs text-stone-500 max-w-sm">Once processed, a fully licensed vintage preview will generate right here before checkout.</p>
                </div>
              )}

              {!loading && result && (
                <div className="w-full space-y-4 text-left">
                  <div className="relative rounded-lg shadow-xl border-4 border-stone-800 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop" 
                      alt="Royal Pet Preview" 
                      className="w-full object-cover max-h-[260px]" 
                    />
                    <div className="absolute top-2 left-2 bg-stone-900 text-amber-100 text-xs px-2 py-1 rounded font-serif shadow">Licensed Preview</div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Order Summary</p>
                    <div className="flex justify-between font-medium text-sm text-stone-800">
                      <span>{orderType === 'digital' ? 'Digital Portrait File' : 'Premium Printed Canvas'}</span>
                      <span className="font-bold text-amber-700">{orderType === 'digital' ? '$14.99' : '$39.99'}</span>
                    </div>
                  </div>

                  {/* 100% Legal Stripe/PayPal Placeholder Button */}
                  <button 
                    onClick={() => alert("Secure Legal Stripe Integration Coming in the Next Step!")}
                    className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-100 font-bold rounded-xl shadow transition active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <span>🔒 Secure Checkout via Card / PayPal</span>
                  </button>
                </div>
              )}
            </div>

            {/* Consumer Trust Badges */}
            <div className="mt-6 pt-4 border-t border-stone-200 grid grid-cols-3 text-center text-[10px] font-medium text-stone-500">
              <div>🛡️ SSL Encrypted</div>
              <div>📜 Copyright Clear</div>
              <div>🤝 Data Privacy Protected</div>
            </div>
          </div>

        </div>
      </main>

      {/* Legal Footer to protect from liabilities */}
      <footer className="mt-12 py-8 text-center border-t border-stone-200 bg-stone-900 text-stone-400">
        <p className="text-xs tracking-wider">© 2026 Royal Pet Portraits. All Rights Reserved.</p>
        <div className="mt-2 space-x-4 text-[11px] text-amber-100/60">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:underline">Refund Policy</a>
        </div>
      </footer>
    </div>
  );
}
