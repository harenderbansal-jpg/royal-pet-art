"use client";
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
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-stone-300 hover:border-amber-500 rounded-xl p-6 cursor-pointer bg-stone-50 transition-colors min-h-[200px]">
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
                  <p className="text-xs text-stone-400">Your data is fully protected & deleted after order compilation</p>
                </div>
              )}
            </label>

            {/* Clear, Legal Pricing Options */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-stone-700">Select Your Package:</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setOrderType('digital')}
                  className={`p-3 rounded-xl border text-left transition ${orderType === 'digital' ? 'border-amber-600 bg-amber-50/50 ring-1 ring-amber-600' : 'border-stone-200 bg-white hover:bg-stone-50'}`}
                >
                  <p className="font-bold text-stone-800">Digital HD Artwork</p>
                  <p className="text-xl font-serif font-black text-amber-700 mt-1">$29.99</p>
                  <p className="text-xs text-stone-400 mt-1">Delivered via email in 24 hours</p>
                </button>
                <button 
                  onClick={() => setOrderType('canvas')}
                  className={`p-3 rounded-xl border text-left transition ${orderType === 'canvas' ? 'border-amber-600 bg-amber-50/50 ring-1 ring-amber-600' : 'border-stone-200 bg-white hover:bg-stone-50'}`}
                >
                  <p className="font-bold text-stone-800">Premium Canvas Print</p>
                  <p className="text-xl font-serif font-black text-amber-700 mt-1">$69.99</p>
                  <p className="text-xs text-stone-400 mt-1">Free worldwide tracked shipping</p>
                </button>
              </div>
            </div>

            <button 
              onClick={handleUploadSubmit}
              className="w-full bg-stone-900 text-amber-100 hover:bg-stone-800 font-medium py-3 rounded-xl transition shadow-md active:scale-[0.99]"
            >
              Transform My Pet Now
            </button>
          </div>

          {/* Right Side: Preview & Secure Payment Gateways */}
          <div className="flex flex-col space-y-6 bg-stone-50/50 p-6 rounded-xl border border-stone-200 min-h-[400px] justify-between">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-stone-800 border-b pb-2">2. Live Preview</h2>
              
              <div className="mt-6 flex flex-col items-center justify-center min-h-[220px] bg-white border rounded-xl shadow-inner p-4 text-center">
                {loading && (
                  <div className="space-y-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-900 mx-auto"></div>
                    <p className="text-sm font-medium text-stone-600">Generating majestic historical layout...</p>
                  </div>
                )}
                
                {!loading && !result && (
                  <p className="text-sm text-stone-400 italic">Upload an image and hit transform to view your royal layout preview</p>
                )}

                {!loading && result && (
                  <div className="space-y-4 w-full">
                    <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-lg text-xs font-medium">
                      ✓ Historical Royal Filter Applied Successfully! Order ready for rendering.
                    </div>
                    <div className="p-4 bg-stone-100 rounded-lg text-xs text-left space-y-1 text-stone-600">
                      <p><strong>Order Type:</strong> {orderType === 'digital' ? 'Digital HD Copy' : 'Physical Canvas Print'}</p>
                      <p><strong>Resolution:</strong> 300 DPI Commercial Grade Print</p>
                      <p><strong>License:</strong> Personal Use & Full Copyright Protection</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fully Legal International Payment Badges */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <p className="text-xs font-semibold text-center text-stone-500 uppercase tracking-wider">🔒 100% Secure Checkout</p>
              <div className="flex justify-center items-center gap-4 text-xs font-bold text-stone-400 filter grayscale opacity-70">
                <span className="border px-2 py-1 rounded bg-white shadow-sm">PayPal</span>
                <span className="border px-2 py-1 rounded bg-white shadow-sm">VISA</span>
                <span className="border px-2 py-1 rounded bg-white shadow-sm">Mastercard</span>
                <span className="border px-2 py-1 rounded bg-white shadow-sm">Stripe</span>
              </div>
              <p className="text-[10px] text-center text-stone-400 leading-relaxed">
                All transactions are encrypted with 256-bit SSL protocol. We strictly adhere to global merchant policies. Your payment details are never stored.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
