/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'May 1', revenue: 4000 },
  { name: 'May 2', revenue: 3000 },
  { name: 'May 3', revenue: 7000 },
  { name: 'May 4', revenue: 8500 },
  { name: 'May 5', revenue: 12000 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans p-12">
      <header className="border-b border-white/10 pb-8 mb-12">
        <span className="text-[#F27D26] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">System Deployment Phase v4.0</span>
        <h1 className="text-6xl leading-[0.8] font-black tracking-tighter uppercase mb-4">Sovereign Engine</h1>
        <p className="text-neutral-500 font-mono text-sm">Mental Arts Network • Automated Yield Aggregator</p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 border border-white/10 p-8">
          <h2 className="text-lg font-black tracking-tighter mb-8 text-[#F27D26] uppercase">Revenue Pulse</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis dataKey="name" stroke="#737373" />
                <YAxis stroke="#737373" />
                <Tooltip contentStyle={{ backgroundColor: '#171717', borderColor: '#404040' }} />
                <Line type="monotone" dataKey="revenue" stroke="#F27D26" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-white/10 p-8 bg-[#151515]">
          <h2 className="text-lg font-black tracking-tighter mb-8 text-[#F27D26] uppercase">Metric Status</h2>
          <div className="space-y-6">
             <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 text-xs uppercase tracking-widest">Identity</span>
                <span className="text-green-500 font-mono font-bold">VERIFIED</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 text-xs uppercase tracking-widest">Tier</span>
                <span className="text-white font-mono font-bold">SOVEREIGN ARCHITECT</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 text-xs uppercase tracking-widest">BTC Settlement</span>
                <span className="text-white font-mono font-bold">ACTIVE</span>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
