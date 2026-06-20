import React, { useState } from 'react';

export default function RoyalPetArt() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // File select hone par chalne wala smooth function
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null); // Purana result clear karne ke liye
    }
  };

  // Generate Button ka click handle karne wala solid function
  const handleGenerate = (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload a cute pet photo first, buddy!");
    
    setLoading(true);
    
    // AI Magic simulation (Goro ko bina jhanjhat fast experience dene ke liye)
    setTimeout(() => {
      setLoading(false);
      setResult(true); 
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-amber-50 text-stone-900 font-sans antialiased">
      {/* Premium Header */}
      <header className="py-6 text-center bg-stone-900 text-amber-100 shadow-md">
        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-wide">👑 Royal Pet AI Painting 👑</h1>
        <p className="mt-2 text-sm md:text-base text-stone-300">Turn your beloved pets into majestic 18th-century masterpieces instantly!</p>
      </header>

      {/* Main Workspace */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-stone-200">
          
          {/* Left Side: Upload & Action Section */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-stone-800 border-b pb-2">Step 1: Upload & Transmute</h2>
            
            {/* Standard Hidden File Input with absolute click guarantee */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-stone-300 hover:border-amber-600 bg-stone-50 rounded-xl p-6 cursor-pointer transition duration-200 min-h-[200px]">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="hidden"
                id="pet-upload"
              />
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-48 rounded-lg shadow-md object-cover" />
              ) : (
                <div className="text-center space-y-2">
                  <span className="text-4xl">📸</span>
                  <p className="text-sm font-medium text-stone-600">Click to upload your Pet or Garden photo</p>
                  <p className="text-xs text-stone-400">Supports JPG, PNG up to 10MB</p>
                </div>
              )}
            </label>

            {/* Solid, Non-Freezing Action Button */}
            <button
              onClick={handleGenerate}
              disabled={loading || !image}
              className={`w-full py-4 rounded-xl text-lg font-bold tracking-wide transition duration-300 shadow-md ${
                !image 
                  ? 'bg-stone-300 text-stone-500 cursor-not-allowed' 
                  : 'bg-amber-600 hover:bg-amber-700 text-white transform active:scale-95'
              }`}
            >
              {loading ? "✨ Summoning the Royal Artists... ✨" : "🎨 Generate Royal Masterpiece"}
            </button>
          </div>

          {/* Right Side: The Grand Reveal & Results Area */}
          <div className="flex flex-col items-center justify-center bg-stone-100 rounded-2xl border border-stone-200 p-6 min-h-[350px] text-center relative overflow-hidden">
            {loading && (
              <div className="flex flex-col items-center space-y-4 animate-pulse">
                <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-stone-600 font-medium">Mixing oil paints & polishing the gold frame...</p>
              </div>
            )}

            {!loading && !result && (
              <div className="space-y-3 px-4">
                <span className="text-5xl">🏰</span>
                <h3 className="text-xl font-serif font-medium text-stone-700">Your Pet's Royal Legacy Awaits!</h3>
                <p className="text-xs text-stone-500 leading-relaxed">Once generated, your vintage oil canvas preview will be showcased right here in full glory.</p>
              </div>
            )}

            {!loading && result && (
              <div className="w-full space-y-4">
                <div className="relative rounded-lg shadow-xl border-4 border-amber-800 overflow-hidden">
                  {/* Demo output representation for testing phase */}
                  <img 
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop" 
                    alt="Royal Pet" 
                    className="w-full object-cover max-h-[300px] sepia-[20%] contrast-[110%]" 
                  />
                  <div className="absolute top-2 left-2 bg-amber-800 text-amber-100 text-xs px-2 py-1 rounded font-serif shadow">Preview</div>
                </div>
                <button className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-100 font-semibold rounded-lg shadow transition active:scale-95">
                  💾 Download High-Res Canvas
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* AdSense Space Mock placeholder for future dollars */}
      <footer className="mt-12 py-6 text-center border-t border-stone-200 bg-stone-50">
        <p className="text-xs text-stone-400 uppercase tracking-widest font-mono">Premium AI Art Network • No Data Shared</p>
      </footer>
    </div>
  );
                }
