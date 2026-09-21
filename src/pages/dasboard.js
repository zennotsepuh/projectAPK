import React from 'react';

export default function Dashboard() {
  return (
    <div className="space-y-4">
      {/* Welcome Card */}
      <div className="bg-gradient-to-br from-red-900 to-red-700 p-4 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-20 text-6xl">🛡️</div>
        <p className="text-red-200 text-sm">Welcome back</p>
        <h2 className="text-xl font-bold mb-4">ATHERIA APPS Dashboard</h2>
        <div className="flex justify-between bg-black/30 p-2 rounded-lg">
          <div><p className="text-xs text-red-200">Online Users</p><p className="text-lg font-bold">0</p></div>
          <div><p className="text-xs text-red-200">Connections</p><p className="text-lg font-bold">0</p></div>
        </div>
      </div>

      {/* Latest News */}
      <div>
        <h3 className="text-lg font-bold mb-2 text-red-500">Latest News</h3>
        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-red-900">
          <div className="h-32 bg-blue-900 flex items-end p-4" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80)', backgroundSize: 'cover'}}>
            <div>
              <p className="font-bold">Glacier - Xx Release</p>
              <p className="text-xs text-gray-400">Buy Acces Chat @Gaaa25</p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Statistics */}
      <div>
        <h3 className="text-lg font-bold mb-2 text-red-500">Account Statistics</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#1a1a1a] p-3 rounded-xl border border-red-900 flex items-center gap-3">
            <div className="bg-red-900 p-2 rounded-lg">👤</div>
            <div><p className="text-xs text-gray-400">Username</p><p className="text-pink-500 font-bold">zen</p></div>
          </div>
          <div className="bg-[#1a1a1a] p-3 rounded-xl border border-red-900 flex items-center gap-3">
            <div className="bg-red-900 p-2 rounded-lg">🛡️</div>
            <div><p className="text-xs text-gray-400">Role</p><p className="text-red-500 font-bold">OWNER</p></div>
          </div>
        </div>
      </div>

      {/* Account Expires */}
      <div className="bg-[#1a1a1a] p-3 rounded-xl border border-yellow-900 flex items-center gap-3">
        <div className="bg-yellow-900 p-2 rounded-lg">📅</div>
        <div><p className="text-xs text-gray-400">Account Expires</p><p className="text-yellow-500 font-bold">4764-04-09</p></div>
      </div>

      {/* Button */}
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2">
        ✈️ Get More Info <span>&gt;</span>
      </button>
    </div>
  );
}
