"use client";
import React, { useState } from 'react';

export default function RoyalPetArt() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [orderType, setOrderType] = useState('digital');

  // Premium HD Showcase Images for Background/Reference Interest
  const showcasePets = [
    { id: 1, title: "The Sovereign King", url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400", class: "General Dog" },
    { id: 2, title: "The Royal Countess", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400", class: "Majestic Cat" },
    { id: 3, title: "The Imperial General", url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400", class: "Noble Feline" },
    { id: 4, title: "The Archduke", url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400", class: "Baron Hound" }
  ];

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
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans antialiased selection:bg-amber-200">
      
      {/* Premium Elegant Header */}
      <header className="py-12 text-center bg-stone-900 text-amber-100 shadow-xl relative overflow-hidden border-b-4 border-amber-600">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541599540903-216a46ca1df0?auto=format&fit=crop&q=80&w=1200')" }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide drop-shadow-md">👑 Royal Pet Portraits 👑</h1>
          <p className="mt-3 text-base md:text-lg text-stone-300 max-w-xl mx-auto font-medium">
            Transform your beloved pets into majestic historical masterpieces. 100% Secure, Legal, and Copyright-Free Artistry.
          </p>
        </div>
      </header>

      {/* NEW SECTION: Majestic HD Pet Reference Showcase */}
      <section className="max-w-5xl mx-auto px-4 pt-10">
        <h3 className="text-center font-serif text-xl md:text-2xl font-bold text-stone-800 tracking-wide mb-6">✨ Featured Royal Masterpieces ✨</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {showcasePets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-stone-200 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-40 md:h-48 overflow-hidden bg-stone-200">
                <img src={pet.url} alt={pet.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                <p className="absolute bottom-2 left-3 text-xs font-bold text-amber-300 uppercase tracking-wider">{pet.class}</p>
              </div>
              <div className="p-2 text-center bg-stone-50 border-t border-stone-100">
                <p className="font-serif font-bold text-xs text-stone-800">{pet.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Legal Business Workspace */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-stone-200 relative z-10">
          
          {/* Left Side: Upload & Selection */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-stone-800 border-b pb-2 flex items-center gap-2"><span>1.</span> Upload & Customize</h2>
            
            {/* Safe & Secure File Upload */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-stone-300 hover:border-amber-500 rounded-xl p-6 cursor-pointer bg-stone-50 transition-colors min-h-[220px] shadow-inner group">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="hidden" 
              />
              {preview ? (
                <img src={preview} alt="Pet Preview" className="max-h-52 rounded-lg shadow-md object-cover" />
              ) : (
                <div className="text-center space-y-3">
                  <span className="text-5xl block group-hover:transform group-hover:scale-110 transition-transform">📸</span>
                  <p className="text-sm font-semibold text-stone-700">Click to upload pet photo safely</p>
                  <p className="text-xs text-stone-400 max-w-xs">Your data is fully protected & deleted automatically after order compilation</p>
                </div>
              )}
            </label>

            {/* Clear, Legal Pricing Options */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Select Your Package:</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setOrderType('digital')}
                  className={`p-4 rounded-xl border text-left transition-all ${orderType === 'digital' ? 'border-amber-600 bg-amber-50/40 ring-2 ring-amber-500/50 shadow-md' : 'border-stone-200 bg-white hover:bg-stone-50'}`}
                >
                  <p className="font-bold text-stone-800 text-sm md:text-base">Digital HD Artwork</p>
                  <p className="text-2xl font-serif font-black text-amber-700 mt-1">$29.99</p>
                  <p className="text-xs text-stone-500 mt-1">Delivered via secure email link in 24 hours</p>
                </button>
                <button 
                  onClick={() => setOrderType('canvas')}
                  className={`p-4 rounded-xl border text-left transition-all ${orderType === 'canvas' ? 'border-amber-600 bg-amber-50/40 ring-2 ring-amber-500/50 shadow-md' : 'border-stone-200 bg-white hover:bg-stone-50'}`}
                >
                  <p className="font-bold text-stone-800 text-sm md:text-base">Premium Canvas Print</p>
                  <p className="text-2xl font-serif font-black text-amber-700 mt-1">$69.99</p>
                  <p className="text-xs text-stone-500 mt-1">Free tracked premium global shipping</p>
                </button>
              </div>
            </div>

            <button 
              onClick={handleUploadSubmit}
              className="w-full bg-stone-900 text-amber-100 hover:bg-stone-800 font-serif font-bold tracking-wide py-4 rounded-xl transition shadow-lg active:scale-[0.99] border-b-4 border-stone-950"
            >
              Transform My Pet Now
            </button>
          </div>

          {/* Right Side: Preview & Secure Payment Gateways */}
          <div className="flex flex-col space-y-6 bg-stone-50/80 p-6 rounded-xl border border-stone-200 min-h-[460px] justify-between shadow-inner">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-stone-800 border-b pb-2 flex items-center gap-2"><span>2.</span> Live Preview</h2>
              
              <div className="mt-6 flex flex-col items-center justify-center min-h-[240px] bg-white border border-stone-200 rounded-xl shadow-md p-4 text-center relative overflow-hidden">
                {loading && (
                  <div className="space-y-3 relative z-10">
                    <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-amber-600 mx-auto"></div>
                    <p className="text-sm font-medium text-stone-600">Generating majestic historical layout...</p>
                  </div>
                )}
                
                {!loading && !result && (
                  <p className="text-sm text-stone-400 italic max-w-xs">Upload an image and hit transform to view your royal layout preview</p>
                )}

                {!loading && result && (
                  <div className="space-y-4 w-full text-left relative z-10">
                    <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-lg text-xs font-semibold shadow-sm">
                      ✓ Historical Royal Filter Applied Successfully! Order ready for secure rendering.
                    </div>
                    <div className="p-4 bg-stone-100 rounded-lg text-xs space-y-2 text-stone-700 border border-stone-200">
                      <p><strong>Order Type:</strong> {orderType === 'digital' ? 'Digital HD Copy' : 'Physical Canvas Print'}</p>
                      <p><strong>Resolution:</strong> 300 DPI Commercial Grade Print Layout</p>
                      <p><strong>License:</strong> Personal Merchant Use & Full Copyright Protection</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fully Legal International Payment Badges */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <p className="text-xs font-bold text-center text-stone-500 uppercase tracking-wider flex items-center justify-center gap-1">🔒 100% Secure Checkout</p>
              <div className="flex justify-center items-center gap-3 text-[11px] font-black text-stone-500 filter grayscale opacity-80">
                <span className="border px-2 py-1 rounded bg-white shadow-sm tracking-tight">PayPal</span>
                <span className="border px-2 py-1 rounded bg-white shadow-sm tracking-tight">VISA</span>
                <span className="border px-2 py-1 rounded bg-white shadow-sm tracking-tight">Mastercard</span>
                <span className="border px-2 py-1 rounded bg-white shadow-sm tracking-tight">Stripe</span>
              </div>
              <p className="text-[10px] text-center text-stone-400 leading-relaxed font-medium">
                All transactions are fully encrypted with 256-bit SSL protocol. We strictly adhere to global merchant policies. Your payment details are never stored.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
                }
                 
