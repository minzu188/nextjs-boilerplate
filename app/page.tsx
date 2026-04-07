'use client';
 import React, { useState } from 'react';
 import { User, Lock, Home, CreditCard, RefreshCw } from 'lucide-react';
 export default function Toto80App() {
   const [page, setPage] = useState('home'); // home, login, deposit, withdraw, slot, casino
   const [menuOpen, setMenuOpen] = useState(false);
   // ===== HALAMAN LOGIN =====
   if (page === 'login') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white flex items-center justify-center p-4">
         <div className="w-full max-w-md">
           <div className="text-center mb-8">
             <h1 className="text-5xl font-bold">
               <span className="text-white">TOTO</span>
               <span className="text-red-500">80</span>
             </h1>
           </div>
           <div className="bg-black/50 rounded-2xl p-6 border border-red-700">
             <h2 className="text-2xl font-bold text-center mb-6">Silahkan Login</h2>
             <div className="mb-4">
               <div className="relative">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" size={24} />
                 <input type="text" placeholder="Username" className="w-full pl-14 pr-4 py-4 rounded-full bg-white text-gray-800" />
               </div>
             </div>
             <div className="mb-6">
               <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" size={24} />
                 <input type="password" placeholder="Password" className="w-full pl-14 pr-4 py-4 rounded-full bg-white text-gray-800" />
               </div>
             </div>
             <div className="space-y-3">
               <button onClick={() => setPage('home')} className="w-full py-4 rounded-full bg-white text-black font-bold text-xl">Log in</button>
               <button className="w-full py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl">Daftar</button>
             </div>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN DEPOSIT =====
   if (page === 'deposit') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
         <header className="bg-black/80 p-4">
           <div className="flex items-center justify-between">
             <button onClick={() => setPage('home')} className="text-2xl">←</button>
             <h1 className="text-2xl font-bold">Kasir</h1>
             <div></div>
           </div>
         </header>
         <main className="p-4">
           <div className="grid grid-cols-2 gap-4 mb-6">
             <button className="bg-blue-800 py-3 rounded-lg font-bold">🏦 Bank</button>
             <button className="bg-blue-800 py-3 rounded-lg font-bold">📱 QRIS</button>
           </div>
           <div className="bg-black/50 rounded-lg p-4 mb-6 border border-red-700">
             <p className="mb-2"><span className="text-gray-400">Bank:</span> <span className="font-bold">GoPay</span></p>
             <p className="mb-2"><span className="text-gray-400">Nama:</span> <span className="font-bold">Alvin</span></p>
           </div>
           <div className="bg-black/50 rounded-lg p-6 border border-red-700">
             <input type="number" placeholder="Masukkan Nominal" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 mb-4" />
             <button className="w-full py-4 rounded-lg bg-blue-600 font-bold text-xl">Konfirmasi</button>
           </div>
         </main>
       </div>
     );
   }
   // ===== HALAMAN WITHDRAW =====
   if (page === 'withdraw') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
         <header className="bg-black/80 p-4">
           <div className="flex items-center justify-between">
             <button onClick={() => setPage('home')} className="text-2xl">←</button>
             <h1 className="text-2xl font-bold">Menarik</h1>
             <div></div>
           </div>
         </header>
         <main className="p-4">
           <div className="bg-black/50 rounded-lg p-6 border border-red-700">
             <input type="number" placeholder="Jumlah Penarikan" className="w-full px-4 py-3 rounded-lg bg-white text-black mb-4" />
             <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-white text-black mb-6" />
             <button className="w-full py-4 rounded-lg bg-cyan-600 font-bold text-xl">Kirim</button>
           </div>
         </main>
       </div>
     );
   }
   // ===== HALAMAN SLOT =====
   if (page === 'slot') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
         <header className="bg-black/80 p-4">
           <div className="flex items-center justify-between">
             <button onClick={() => setPage('home')} className="text-2xl">←</button>
             <h1 className="text-2xl font-bold">PERMAINAN SLOT</h1>
             <button className="bg-teal-600 px-4 py-1 rounded">LOBI</button>
           </div>
         </header>
         <main className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg border-2 border-red-700 h-32 flex items-center justify-center"><h3 className="text-xl font-bold">IDN SLOT</h3></div>
           <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg border-2 border-red-700 h-32 flex items-center justify-center"><h3 className="text-xl font-bold">PRAGMATIC</h3></div>
           <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg border-2 border-red-700 h-32 flex items-center justify-center"><h3 className="text-xl font-bold">PG SOFT</h3></div>
           <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg border-2 border-red-700 h-32 flex items-center justify-center"><h3 className="text-xl font-bold">HABANERO</h3></div>
         </main>
       </div>
     );
   }
   // ===== HALAMAN CASINO =====
   if (page === 'casino') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
         <header className="bg-black/80 p-4">
           <div className="flex items-center justify-between">
             <button onClick={() => setPage('home')} className="text-2xl">←</button>
             <h1 className="text-2xl font-bold">PERMAINAN CASINO</h1>
             <button className="bg-teal-600 px-4 py-1 rounded">LOBI</button>
           </div>
         </header>
         <main className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-lg border-2 border-red-700 h-36 flex flex-col items-center justify-center"><span className="text-5xl mb-2">🎡</span><h3 className="text-xl font-bold">ROULETTE</h3></div>
           <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg border-2 border-red-700 h-36 flex flex-col items-center justify-center"><span className="text-5xl mb-2">🃏</span><h3 className="text-xl font-bold">BACCARAT</h3></div>
           <div className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg border-2 border-red-700 h-36 flex flex-col items-center justify-center"><span className="text-5xl mb-2">♠️</span><h3 className="text-xl font-bold">BLACKJACK</h3></div>
           <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg border-2 border-red-700 h-36 flex flex-col items-center justify-center"><span className="text-5xl mb-2">🎲</span><h3 className="text-xl font-bold">SICBO</h3></div>
         </main>
       </div>
     );
   }
   // ===== HALAMAN UTAMA =====
   return (
     <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
       <header className="bg-black/80 p-4">
         <div className="flex items-center justify-between">
           <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
           </button>
           <div className="text-3xl font-bold"><span className="text-white">TOTO</span><span className="text-red-500">80</span></div>
           <button onClick={() => setPage('deposit')} className="bg-blue-700 px-4 py-2 rounded-lg font-bold">DEPOSITO</button>
         </div>
         <div className="mt-3 flex justify-between items-center">
           <span>Saldo: <span className="text-yellow-400 font-bold">IDR. 101</span></span>
           <button className="bg-blue-700/50 px-3 py-1 rounded flex items-center gap-2"><RefreshCw size={16} /> Refresh</button>
         </div>
       </header>
       {/* MENU SIDEBAR */}
       {menuOpen && (
         <div className="fixed inset-0 bg-black/80 z-40" onClick={() => setMenuOpen(false)}>
           <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-b from-red-900 to-black p-4" onClick={e=>e.stopPropagation()}>
             <button onClick={() => setMenuOpen(false)} className="absolute right-4 top-4 text-xl">✕</button>
             <div className="mt-12 space-y-2">
               <button onClick={()=>{setPage('home');setMenuOpen(false)}} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-700"><Home size={20}/> Home</button>
               <button onClick={()=>{setPage('deposit');setMenuOpen(false)}} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800"><CreditCard size={20}/> Deposit</button>
               <button onClick={()=>{setPage('withdraw');setMenuOpen(false)}} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800"><CreditCard size={20}/> Withdraw</button>
               <button onClick={()=>{setPage('login');setMenuOpen(false)}} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800"><Lock size={20}/> Logout</button>
             </div>
           </div>
         </div>
       )}
       <main className="p-4">
         {/* KATEGORI */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
           <button className="bg-green-700 py-4 rounded-lg font-bold">SEMUA</button>
           <button onClick={() => setPage('casino')} className="bg-green-700 py-4 rounded-lg font-bold">KASINO</button>
           <button className="bg-green-700 py-4 rounded-lg font-bold">TOGEL</button>
           <button onClick={() => setPage('slot')} className="bg-green-700 py-4 rounded-lg font-bold">SLOT</button>
         </div>
         {/* LIVE RESULT */}
         <h2 className="text-xl font-bold mb-4 bg-blue-900 py-2 px-4 rounded-t-lg">TOGEL 4D</h2>
         <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg border-2 border-red-700 p-4">
             <h3 className="text-lg font-bold mb-2">SYDNEY</h3>
             <div className="bg-black/50 rounded p-3 text-3xl font-bold text-yellow-400">9089</div>
           </div>
           <div className="bg-gradient-to-br from-purple-700 to-red-800 rounded-lg border-2 border-red-700 p-4">
             <h3 className="text-lg font-bold mb-2">HONGKONG</h3>
             <div className="bg-black/50 rounded p-3 text-3xl font-bold text-yellow-400">4288</div>
           </div>
         </div>
       </main>
     </div>
   );
 }
