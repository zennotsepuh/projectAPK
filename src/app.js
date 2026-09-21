import React, { useState } from 'react';
import { Home, MessageSquare, Wrench, DollarSign } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import WhatsApp from './pages/WhatsApp';
import Tools from './pages/Tools';
import Coin from './pages/Coin';

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
    <div className="min-h-screen bg-dark-bg text-white font-cyber max-w-md mx-auto relative pb-20">
      {/* Header */}
      <div className="bg-[#1a0505] p-4 flex justify-between items-center border-b border-red-900">
        <div className="flex items-center gap-3">
          <div className="text-red-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
          <h1 className="text-xl font-bold tracking-widest text-red-500">ATHERIA APPS</h1>
        </div>
        <div className="flex gap-4">
          <div className="text-red-500">🔔</div>
          <div className="text-red-500">👤</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#1a0505] border-t border-red-900 flex justify-around p-3">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center ${activeTab === 'home' ? 'text-pink-500' : 'text-gray-500'}`}>
          <Home size={20} /><span className="text-xs mt-1">Home</span>
        </button>
        <button onClick={() => setActiveTab('whatsapp')} className={`flex flex-col items-center ${activeTab === 'whatsapp' ? 'text-pink-500' : 'text-gray-500'}`}>
          <MessageSquare size={20} /><span className="text-xs mt-1">WhatsApp</span>
        </button>
        <button onClick={() => setActiveTab('tools')} className={`flex flex-col items-center ${activeTab === 'tools' ? 'text-pink-500' : 'text-gray-500'}`}>
          <Wrench size={20} /><span className="text-xs mt-1">Tools</span>
        </button>
        <button onClick={() => setActiveTab('coin')} className={`flex flex-col items-center ${activeTab === 'coin' ? 'text-pink-500' : 'text-gray-500'}`}>
          <DollarSign size={20} /><span className="text-xs mt-1">Coin</span>
        </button>
      </div>
    </div>
  );
}

export default App;
