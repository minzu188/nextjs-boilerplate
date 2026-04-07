'use client';
 import React, { useState } from 'react';
 export default function PremiumGameSite() {
   const [page, setPage] = useState('home');
   const [menuOpen, setMenuOpen] = useState(false);
   // ===== HALAMAN LOGIN =====
   if (page === 'login') {
     return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">
         <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
           <div className="text-center mb-8">
             <h1 className="text-7xl font-black">
               <span className="text-cyan-400">DA</span>
               <span className="text-white">GAME</span>
             </h1>
             <p className="text-indigo-300 mt-2 text-lg">SITUS GAME ONLINE TERPERCAYA</p>
           </div>
           <div className="w-full max-w-md bg-slate-800/70 rounded-2xl p-8 border border-indigo-700 shadow-2xl">
             <h2 className="text-3xl font-bold text-center mb-6">LOGIN</h2>
             <input 
               type="text" 
               placeholder="Username" 
               className="w-full p-4 rounded-lg mb-4 bg-slate-700 border border-slate-600"
             />
             <input 
               type="password" 
               placeholder="Password" 
               className="w-full p-4 rounded-lg mb-6 bg-slate-700 border border-slate-600"
             />
             <button 
               onClick={() => setPage('home')}
               className="w-full p-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 font-bold text-xl hover:scale-105 transition"
             >
               MASUK
             </button>
             <div className="text-center mt-6">
               <p className="text-sm">Belum daftar? 
                 <span onClick={() => setPage('register')} className="text-cyan-400 font-bold ml-1 cursor-pointer">Daftar Sekarang</span>
               </p>
             </div>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN REGISTER =====
   if (page === 'register') {
     return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">
         <div className="container mx-auto px-4 py-8">
           <h1 className="text-5xl font-black text-center mb-2">DA GAME</h1>
           <h2 className="text-2xl text-center mb-8">FORM PENDAFTARAN</h2>
           <div className="max-w-md mx-auto bg-slate-800/70 rounded-2xl p-6 border border-indigo-700">
             <input placeholder="Username" className="w-full p-3 rounded mb-3 bg-slate-700" />
             <input placeholder="Password" type="password" className="w-full p-3 rounded mb-3 bg-slate-700" />
             <input placeholder="Nama Lengkap" className="w-full p-3 rounded mb-3 bg-slate-700" />
             <input placeholder="No. WhatsApp" className="w-full p-3 rounded mb-3 bg-slate-700" />
             
             <div className="grid grid-cols-2 gap-2 mb-4">
               <select className="p-3 rounded bg-slate-700">
                 <option>Bank</option>
                 <option>BCA</option>
                 <option>DANA</option>
                 <option>QRIS</option>
               </select>
               <input placeholder="No Rekening" className="p-3 rounded bg-slate-700" />
             </div>
             <button className="w-full p-4 rounded-lg bg-gradient-to-r from-green-600 to-green-700 font-bold text-xl">
               DAFTAR
             </button>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN DEPOSIT =====
   if (page === 'deposit') {
     return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center">
           <button onClick={() => setPage('home')} className="text-2xl mr-4">←</button>
           <h1 className="text-xl font-bold">DEPOSIT</h1>
         </header>
         <div className="p-4 max-w-md mx-auto">
           <div className="bg-slate-800 p-6 rounded-xl border border-indigo-600 mb-6">
             <h3 className="text-center text-xl font-bold mb-4 text-cyan-400">TUJUAN TRANSFER</h3>
             <p className="mb-2">Bank: <strong>DANA / OVO</strong></p>
             <p className="mb-2">No. Rek: <strong>0812xxxxxxxx</strong></p>
             <p className="mb-2">Nama: <strong>DA GAME OFFICIAL</strong></p>
           </div>
           <input type="number" placeholder="Masukkan Nominal" className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 mb-4" />
           <button className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 font-bold">KONFIRMASI</button>
         </div>
       </div>
     );
   }
   // ===== HALAMAN WITHDRAW =====
   if (page === 'withdraw') {
     return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center">
           <button onClick={() => setPage('home')} className="text-2xl mr-4">←</button>
           <h1 className="text-xl font-bold">WITHDRAW</h1>
         </header>
         <div className="p-4 max-w-md mx-auto">
           <div className="bg-slate-800 p-6 rounded-xl border border-indigo-600">
             <input type="number" placeholder="Jumlah Penarikan" className="w-full p-4 rounded-lg mb-4 bg-slate-700" />
             <input type="password" placeholder="Password" className="w-full p-4 rounded-lg mb-6 bg-slate-700" />
             <button className="w-full p-4 rounded-lg bg-gradient-to-r from-green-600 to-green-700 font-bold">PROSES</button>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN SLOT =====
   if (page === 'slot') {
     return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center justify-between">
           <button onClick={() => setPage('home')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">GAMES SLOT</h1>
           <div></div>
         </header>
         <div className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-br from-purple-700 to-purple-900 h-32 rounded-xl flex items-center justify-center font-bold text-xl border-2 border-cyan-400">PRAGMATIC</div>
           <div className="bg-gradient-to-br from-red-700 to-red-900 h-32 rounded-xl flex items-center justify-center font-bold text-xl border-2 border-cyan-400">HABANERO</div>
           <div className="bg-gradient-to-br from-yellow-700 to-yellow-900 h-32 rounded-xl flex items-center justify-center font-bold text-xl border-2 border-cyan-400">PG SOFT</div>
           <div className="bg-gradient-to-br from-green-700 to-green-900 h-32 rounded-xl flex items-center justify-center font-bold text-xl border-2 border-cyan-400">IDN SLOT</div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN CASINO =====
   if (page === 'casino') {
     return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center justify-between">
           <button onClick={() => setPage('home')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">LIVE CASINO</h1>
           <div></div>
         </header>
         <div className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-br from-blue-700 to-blue-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold text-xl border-2 border-yellow-400">🃏 BACCARAT</div>
           <div className="bg-gradient-to-br from-green-700 to-green-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold text-xl border-2 border-yellow-400">🎡 ROULETTE</div>
           <div className="bg-gradient-to-br from-purple-700 to-purple-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold text-xl border-2 border-yellow-400">♠️ BLACKJACK</div>
           <div className="bg-gradient-to-br from-red-700 to-red-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold text-xl border-2 border-yellow-400">🎲 SICBO</div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN HOME / UTAMA =====
   return (
     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">
       <header className="bg-slate-900/80 backdrop-blur p-4 sticky top-0 z-50">
         <div className="flex justify-between items-center">
           <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
             <div className="w-6 h-0.5 bg-white mb-1"></div>
             <div className="w-6 h-0.5 bg-white mb-1"></div>
             <div className="w-6 h-0.5 bg-white"></div>
           </button>
           
           <div className="text-4xl font-black">
             <span className="text-cyan-400">DA</span>
             <span className="text-white">GAME</span>
           </div>
           <button onClick={() => setPage('deposit')} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full font-bold">
             DEPOSIT
           </button>
         </div>
         <div className="mt-3 flex justify-between items-center bg-slate-800 p-3 rounded-lg">
           <span>Saldo: <strong className="text-yellow-400">Rp 100.000</strong></span>
           <button onClick={() => setPage('login')} className="bg-red-600 px-3 py-1 rounded text-sm">Logout</button>
         </div>
       </header>
       {/* SIDEBAR MENU */}
       {menuOpen && (
         <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setMenuOpen(false)}>
           <div className="absolute left-0 top-0 h-full w-72 bg-slate-900 p-5" onClick={e=>e.stopPropagation()}>
             <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-2">MENU</h3>
             <div className="space-y-3">
               <button onClick={()=>{setPage('home');setMenuOpen(false)}} className="w-full text-left p-3 rounded bg-indigo-900/50">🏠 Beranda</button>
               <button onClick={()=>{setPage('deposit');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">💳 Deposit</button>
               <button onClick={()=>{setPage('withdraw');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">💵 Withdraw</button>
               <button onClick={()=>{setPage('slot');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">🎰 Slot Games</button>
               <button onClick={()=>{setPage('casino');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">🎲 Live Casino</button>
             </div>
           </div>
         </div>
       )}
       <main className="p-4">
         {/* BANNER */}
         <div className="bg-gradient-to-r from-red-600 to-yellow-500 p-4 rounded-xl mb-6 text-center font-bold text-lg">
           BONUS NEW MEMBER 100% | SLOT & CASINO
         </div>
         {/* KATEGORI GAME */}
         <h2 className="text-xl font-bold mb-4 text-cyan-400">KATEGORI PERMAINAN</h2>
         <div className="grid grid-cols-2 gap-4 mb-8">
           <button onClick={() => setPage('slot')} className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 rounded-xl font-bold text-lg border-2 border-cyan-500">
             🎰 SLOT
           </button>
           <button onClick={() => setPage('casino')} className="bg-gradient-to-br from-purple-700 to-purple-900 p-6 rounded-xl font-bold text-lg border-2 border-pink-500">
             🎲 CASINO
           </button>
           <button className="bg-gradient-to-br from-green-700 to-green-900 p-6 rounded-xl font-bold text-lg border-2 border-green-500">
             🀄 POKER
           </button>
           <button className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-xl font-bold text-lg border-2 border-orange-500">
             🎮 ARCADE
           </button>
         </div>
         {/* PROVIDER */}
         <h2 className="text-xl font-bold mb-4 text-cyan-400">PROVIDER TERBAIK</h2>
         <div className="grid grid-cols-3 gap-3">
           <div className="bg-slate-800 p-3 rounded text-center font-bold border border-slate-700">PRAGMATIC</div>
           <div className="bg-slate-800 p-3 rounded text-center font-bold border border-slate-700">PG SOFT</div>
           <div className="bg-slate-800 p-3 rounded text-center font-bold border border-slate-700">HABANERO</div>
           <div className="bg-slate-800 p-3 rounded text-center font-bold border border-slate-700">IDN LIVE</div>
           <div className="bg-slate-800 p-3 rounded text-center font-bold border border-slate-700">MICROGAMING</div>
           <div className="bg-slate-800 p-3 rounded text-center font-bold border border-s
