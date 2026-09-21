import React from 'react';

const tools = [
  { icon: '⚡', title: 'DDoS', sub: 'Attack Tools' },
  { icon: '📡', title: 'Network', sub: 'WiFi & Spam' },
  { icon: '🔍', title: 'OSINT', sub: 'Investigation' },
  { icon: '📥', title: 'Downloader', sub: 'Social Media' },
  { icon: '🔧', title: 'Utilities', sub: 'Extra Tools' },
  { icon: '🚀', title: 'Quick Access', sub: 'Favorites' },
];

export default function Tools() {
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
          <div key={idx} className="bg-[#1a0505] border border-red-900 rounded-xl p-4 flex flex-col items-start gap-2 shadow-[0_0_10px_rgba(255,0,60,0.1)]">
            <div className="bg-red-600 p-2 rounded-lg text-white text-xl">{tool.icon}</div>
            <h3 className="font-bold mt-2">{tool.title}</h3>
            <p className="text-xs text-gray-400">{tool.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
