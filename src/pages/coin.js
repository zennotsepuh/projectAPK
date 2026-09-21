import React from 'react';

export default function Coin() {
  return (
    <div className="space-y-4">
      {/* Coin Balance */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-4 rounded-xl shadow-lg">
          <p className="text-xs text-pink-200">💲 B Coin</p>
          <p className="text-3xl font-bold mt-1">100</p>
          <p className="text-xs text-pink-200 mt-1">COINS</p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-4 rounded-xl shadow-lg opacity-70">
          <p className="text-xs text-pink-200">💲 L Coin</p>
          <p className="text-3xl font-bold mt-1">0</p>
          <p className="text-xs text-pink-200 mt-1">COINS</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-[#1a0505] border border-pink-900 rounded-xl p-3 flex flex-col items-center">
          <div className="bg-pink-600 p-3 rounded-full text-white text-xl mb-2">🎁</div>
          <p className="text-xs font-bold">Redeem<br/>Coin</p>
        </div>
        <div className="bg-[#1a0505] border border-pink-900 rounded-xl p-3 flex flex-col items-center">
          <div className="bg-pink-600 p-3 rounded-full text-white text-xl mb-2">➤</div>
          <p className="text-xs font-bold">Gift<br/>Coin</p>
        </div>
        <div className="bg-[#1a0505] border border-yellow-500 rounded-xl p-3 flex flex-col items-center shadow-[0_0_10px_rgba(255,215,0,0.3)]">
          <div className="bg-yellow-500 p-3 rounded-full text-black text-xl mb-2">🕒</div>
          <p className="text-xs font-bold text-yellow-500">History</p>
        </div>
      </div>

      {/* Account Info */}
      <div className="bg-[#1a0505] border border-red-900 rounded-xl p-4 flex items-center gap-4">
        <div className="bg-pink-600 p-3 rounded-full text-white text-2xl">👤</div>
        <div className="flex-1">
          <p className="text-xs text-gray-400">Account Information</p>
          <p className="font-bold text-lg">zen</p>
        </div>
        <span className="bg-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">OWNER</span>
      </div>
      <p className="text-xs text-gray-500 text-center">ⓘ Manage your coins and transactions here</p>
    </div>
  );
}
