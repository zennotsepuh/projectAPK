import React, { useState } from 'react';
import { Home, MessageSquare, Wrench, DollarSign, Bell, User, Menu } from 'lucide-react';

// ============ DASHBOARD PAGE ============
const Dashboard = () => (
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

// ============ WHATSAPP PAGE ============
const WhatsApp = () => (
  <div className="space-y-4">
    {/* Profile Card */}
    <div className="bg-[#1a0505] border border-red-900 rounded-xl p-6 text-center flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-900 to-purple-900 flex items-center justify-center text-3xl border-2 border-red-500" style={{boxShadow: '0 0 15px rgba(255,0,60,0.5)'}}>
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
      <select className="w-full bg-[#1a1a1a] border border-red-900 rounded-xl p-3 text-white focus:outline-none focus:border-red-500">
        <option>FORCLOSE CALL MSG</option>
        <option>CRASH INVISIBLE</option>
        <option>DELAY HARD</option>
      </select>
    </div>
  </div>
);

// ============ TOOLS PAGE ============
const Tools = () => {
  const tools = [
    { icon: '⚡', title: 'DDoS', sub: 'Attack Tools' },
    { icon: '📡', title: 'Network', sub: 'WiFi & Spam' },
    { icon: '🔍', title: 'OSINT', sub: 'Investigation' },
    { icon: '📥', title: 'Downloader', sub: 'Social Media' },
    { icon: '🔧', title: 'Utilities', sub: 'Extra Tools' },
    { icon: '🚀', title: 'Quick Access', sub: 'Favorites' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-red-500">Misc Tools</h1>
          <p className="text-xs text-red-300">Advanced Security Suite</p>
        </div>
        <span className="border border-red-500 text-red-500 px-3 py-1 rounded-full text-xs">OWNER</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool, idx) => (
          <div key={idx} className="bg-[#1a0505] border border-red-900 rounded-xl p-4 flex flex-col items-start gap-2">
            <div className="bg-red-600 p-2 rounded-lg text-white text-xl">{tool.icon}</div>
            <h3 className="font-bold mt-2">{tool.title}</h3>
            <p className="text-xs text-gray-400">{tool.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ COIN PAGE ============
const Coin = () => (
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
      <div className="bg-[#1a0505] border border-yellow-500 rounded-xl p-3 flex flex-col items-center">
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

// ============ APP UTAMA ============
function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Dashboard />;
      case 'whatsapp': return <WhatsApp />;
      case 'tools': return <Tools />;
      case 'coin': return <Coin />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white', maxWidth: '448px', margin: '0 auto', paddingBottom: '80px', fontFamily: 'monospace'}}>
      {/* Header */}
      <div style={{backgroundColor: '#1a0505', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #7f1d1d'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <span style={{color: '#dc2626', fontSize: '24px'}}>☰</span>
          <h1 style={{fontSize: '18px', fontWeight: 'bold', color: '#dc2626', letterSpacing: '2px', margin: 0}}>ATHERIA APPS</h1>
        </div>
        <div style={{display: 'flex', gap: '16px'}}>
          <Bell size={20} color="#dc2626" />
          <User size={20} color="#dc2626" />
        </div>
      </div>

      {/* Main Content */}
      <div style={{padding: '16px'}}>
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, maxWidth: '448px', margin: '0 auto', backgroundColor: '#1a0505', borderTop: '1px solid #7f1d1d', display: 'flex', justifyContent: 'space-around', padding: '12px'}}>
        <button onClick={() => setActiveTab('home')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'home' ? '#ec4899' : '#6b7280', cursor: 'pointer'}}>
          <Home size={20} /><span style={{fontSize: '10px', marginTop: '4px'}}>Home</span>
        </button>
        <button onClick={() => setActiveTab('whatsapp')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'whatsapp' ? '#ec4899' : '#6b7280', cursor: 'pointer'}}>
          <MessageSquare size={20} /><span style={{fontSize: '10px', marginTop: '4px'}}>WhatsApp</span>
        </button>
        <button onClick={() => setActiveTab('tools')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'tools' ? '#ec4899' : '#6b7280', cursor: 'pointer'}}>
          <Wrench size={20} /><span style={{fontSize: '10px', marginTop: '4px'}}>Tools</span>
        </button>
        <button onClick={() => setActiveTab('coin')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'coin' ? '#ec4899' : '#6b7280', cursor: 'pointer'}}>
          <DollarSign size={20} /><span style={{fontSize: '10px', marginTop: '4px'}}>Coin</span>
        </button>
      </div>
    </div>
  );
}

export default App;
