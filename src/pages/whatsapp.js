import React from 'react';

export default function WhatsApp() {
  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <div className="bg-[#1a0505] border border-red-900 rounded-xl p-6 text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-900 to-purple-900 flex items-center justify-center text-3xl border-2 border-red-500 shadow-[0_0_15px_rgba(255,0,60,0.5)]">
          🌐
        </div>
        <h2 className="text-xl font-bold mt-3 text-pink-500">zen</h2>
        <div className="mt-2 bg-red-950 border border-red-800 text-xs px-4 py-1 rounded-full text-red-300">
          Role: OWNER • Exp: 4764-04-09
        </div>
      </div>

      {/* Banner */}
      <div className="h-32 bg-blue-900 rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80" alt="Banner" className="w-full h-full object-cover" />
      </div>

      {/* Form Target */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-red-500 font-bold">
          <span>📱</span> Nomor Target
        </div>
        <input type="text" placeholder="Contoh: +62xxxxxxxxx" className="w-full bg-[#1a1a1a] border border-red-900 rounded-xl p-3 text-white focus:outline-none focus:border-red-500" />

        <div className="flex items-center gap-2 text-red-500 font-bold mt-4">
          <span>🐞</span> Pilih Bug
        </div>
        <select className="w-full bg-[#1a1a1a] border border-red-900 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 appearance-none">
          <option>FORCLOSE CALL MSG</option>
          <option>CRASH INVISIBLE</option>
          <option>DELAY HARD</option>
        </select>
      </div>
    </div>
  );
}
