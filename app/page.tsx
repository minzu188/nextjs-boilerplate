'use client';
 import React, { useState } from 'react';
 export default function GameSiteClone() {
   const [page, setPage] = useState('home'); // home, login, register, deposit, withdraw, slot, casino
   const [menuOpen, setMenuOpen] = useState(false);
   // ===== HALAMAN LOGIN =====
   if (page === 'login') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
         <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
           {/* LOGO */}
           <div className="text-center mb-8">
             <h1 className="text-6xl font-black tracking-wider">
               <span className="text-yellow-400">LEO</span>
               <span className="text-white">GAME</span>
             </h1>
             <p className="text-blue-300 mt-2">REGISTER & LOGIN</p>
           </div>
           {/* FORM BOX */}
           <div className="w-full max-w-md bg-slate-800/70 rounded-2xl p-6 border border-blue-700 shadow-2xl">
             <h2 className="text-2xl font-bold text-center mb-6">MASUK</h2>
             <input 
               type="text" 
               placeholder="Username" 
               className="w-full p-4 rounded-lg mb-4 bg-slate-700 border border-slate-600 focus:border-blue-500 outline-none"
             />
             <input 
               type="password" 
               placeholder="Password" 
               className="w-full p-4 rounded-lg mb-6 bg-slate-700 border border-slate-600 focus:border-blue-500 outline-none"
             />
             <button 
               onClick={() => setPage('home')}
               className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 font-bold text-xl hover:scale-105 transition"
             >
               LOGIN
             </button>
             <div className="text-center mt-4">
               <p className="text-sm">Belum punya akun? 
                 <span onClick={() => setPage('register')} className="text-yellow-400 font-bold ml-1 cursor-pointer">Daftar Disini</span>
               </p>
             </div>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN REGISTER / DAFTAR =====
   if (page === 'register') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
         <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
           <h1 className="text-5xl font-black mb-2">
             <span className="text-yellow-400">LEO</span>GAME
           </h1>
           <h2 className="text-2xl mb-6">FORM PENDAFTARAN</h2>
           <div className="w-full max-w-md bg-slate-800/70 rounded-2xl p-6 border border-blue-700">
             <input placeholder="Username" className="w-full p-3 rounded mb-3 bg-slate-700" />
             <input placeholder="Password" type="password" className="w-full p-3 rounded mb-3 bg-slate-700" />
             <input placeholder="Nama Lengkap" className="w-full p-3 rounded mb-3 bg-slate-700" />
             <input placeholder="No. HP / WhatsApp" className="w-full p-3 rounded mb-3 bg-slate-700" />
             
             <div className="grid grid-cols-2 gap-2 mb-4">
               <select className="p-3 rounded bg-slate-700">
                 <option>Pilih Bank</option>
                 <option>BCA</option>
                 <option>MANDIRI</option>
                 <option>DANA</option>
               </select>
               <input placeholder="No Rekening" className="p-3 rounded bg-slate-700" />
             </div>
             <input placeholder="Kode Referral (Opsional)" defaultValue="dxlz" className="w-full p-3 rounded mb-6 bg-slate-700" />
             <button className="w-full p-4 rounded-lg bg-gradient-to-r from-green-600 to-green-800 font-bold text-xl">
               DAFTAR SEKARANG
             </button>
             <p className="text-center mt-4 text-sm">Sudah punya akun? <span onClick={() => setPage('login')} className="text-yellow-400 font-bold cursor-pointer">Login</span></p>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN DEPOSIT =====
   if (page === 'deposit') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center">
           <button onClick={() => setPage('home')} className="mr-4 text-2xl">←</button>
           <h1 className="text-xl font-bold">DEPOSIT</h1>
         </header>
         <div className="p-4 max-w-md mx-auto">
           <div className="bg-slate-800 p-4 rounded-lg mb-4 border border-blue-700">
             <h3 className="font-bold mb-2 text-blue-300">REKENING TUJUAN</h3>
             <p>Bank: <strong>DANA</strong></p>
             <p>No Rek: <strong>0812xxxxxxx</strong></p>
             <p>Atas Nama: <strong>LEO GAME</strong></p>
           </div>
           <input type="number" placeholder="Jumlah Deposit" className="w-full p-4 rounded-lg mb-4 bg-slate-800 border border-slate-700" />
           <button className="w-full p-4 rounded-lg bg-blue-600 font-bold">PROSES DEPOSIT</button>
         </div>
       </div>
     );
   }
   // ===== HALAMAN WITHDRAW =====
   if (page === 'withdraw') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center">
           <button onClick={() => setPage('home')} className="mr-4 text-2xl">←</button>
           <h1 className="text-xl font-bold">WITHDRAW</h1>
         </header>
         <div className="p-4 max-w-md mx-auto">
           <input type="number" placeholder="Jumlah Penarikan" className="w-full p-4 rounded-lg mb-4 bg-slate-800 border border-slate-700" />
           <input type="password" placeholder="Password Keamanan" className="w-full p-4 rounded-lg mb-4 bg-slate-800 border border-slate-700" />
           <button className="w-full p-4 rounded-lg bg-green-600 font-bold">PROSES WITHDRAW</button>
         </div>
       </div>
     );
   }
   // ===== HALAMAN SLOT =====
   if (page === 'slot') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center justify-between">
           <button onClick={() => setPage('home')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">GAMES SLOT</h1>
           <div></div>
         </header>
         <div className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-br from-purple-700 to-purple-900 h-32 rounded-xl flex items-center justify-center font-bold border-2 border-blue-500">PRAGMATIC</div>
           <div className="bg-gradient-to-br from-red-700 to-red-900 h-32 rounded-xl flex items-center justify-center font-bold border-2 border-blue-500">HABANERO</div>
           <div className="bg-gradient-to-br from-green-700 to-green-900 h-32 rounded-xl flex items-center justify-center font-bold border-2 border-blue-500">IDN SLOT</div>
           <div className="bg-gradient-to-br from-yellow-700 to-yellow-900 h-32 rounded-xl flex items-center justify-center font-bold border-2 border-blue-500">PG SOFT</div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN CASINO =====
   if (page === 'casino') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center justify-between">
           <button onClick={() => setPage('home')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">LIVE CASINO</h1>
           <div></div>
         </header>
         <div className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-br from-blue-700 to-blue-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold border-2 border-yellow-500">🃏 BACCARAT</div>
           <div className="bg-gradient-to-br from-green-700 to-green-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold border-2 border-yellow-500">🎡 ROULETTE</div>
           <div className="bg-gradient-to-br from-purple-700 to-purple-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold border-2 border-yellow-500">♠️ BLACKJACK</div>
           <div className="bg-gradient-to-br from-red-700 to-red-900 h-32 rounded-xl flex flex-col items-center justify-center font-bold border-2 border-yellow-500">🎲 SICBO</div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN UTAMA / HOME =====
   return (
     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
       {/* HEADER */}
       <header className="bg-slate-900/80 backdrop-blur p-4 sticky top-0 z-50">
         <div className="flex justify-between items-center">
           <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
             <div className="w-6 h-0.5 bg-white mb-1"></div>
             <div className="w-6 h-0.5 bg-white mb-1"></div>
             <div className="w-6 h-0.5 bg-white"></div>
           </button>
           
           <div className="text-3xl font-black">
             <span className="text-yellow-400">LEO</span>
             <span className="text-white">GAME</span>
           </div>
           <button onClick={() => setPage('deposit')} className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
             DEPOSIT
           </button>
         </div>
         {/* SALDO */}
         <div className="mt-3 flex justify-between items-center bg-slate-800 p-2 rounded-lg">
           <span>Saldo: <strong className="text-yellow-400">Rp 100.000</strong></span>
           <button onClick={() => setPage('login')} className="text-xs bg-red-600 px-3 py-1 rounded">Logout</button>
         </div>
       </header>
       {/* SIDEBAR MENU */}
       {menuOpen && (
         <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setMenuOpen(false)}>
           <div className="absolute left-0 top-0 h-full w-72 bg-slate-900 p-5" onClick={e=>e.stopPropagation()}>
             <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-2">MENU UTAMA</h3>
             <div className="space-y-3">
               <button onClick={()=>{setPage('home');setMenuOpen(false)}} className="w-full text-left p-3 rounded bg-blue-900/50">🏠 Beranda</button>
               <button onClick={()=>{setPage('deposit');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">💳 Deposit</button>
               <button onClick={()=>{setPage('withdraw');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">💵 Withdraw</button>
               <button onClick={()=>{setPage('slot');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">🎰 Games Slot</button>
               <button onClick={()=>{setPage('casino');setMenuOpen(false)}} className="w-full text-left p-3 rounded hover:bg-slate-800">🎲 Live Casino</button>
             </div>
           </div>
         </div>
       )}
       <main className="p-4">
         {/* BANNER PROMO */}
         <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-4 rounded-xl mb-6 text-center font-bold">
           WELCOME BONUS 100% | SLOT & CASINO
         </div>
         {/* KATEGORI GAME */}
         <h2 className="text-lg font-bold mb-3 text-blue-300">KATEGORI PERMAINAN</h2>
         <div className="grid grid-cols-2 gap-4 mb-6">
           <button onClick={() => setPage('slot')} className="bg-gradient-to-br from-blue-700 to-blue-900 p-5 rounded-xl font-bold border-2 border-blue-500">
             🎰 SLOT
           </button>
           <button onClick={() => setPage('casino')} className="bg-gradient-to-br from-purple-700 to-purple-900 p-5 rounded-xl font-bold border-2 border-purple-500">
             🎲 CASINO
           </button>
           <button className="bg-gradient-to-br from-green-700 to-green-900 p-5 rounded-xl font-bold border-2 border-green-500">
             🀄 POKER
           </button>
           <button className="bg-gradient-to-br from-orange-700 to-orange-900 p-5 rounded-xl font-bold border-2 border-orange-500">
             🎮 ARCADE
           </button>
         </div>
         {/* PROVIDER */}
         <h2 className="text-lg font-bold mb-3 text-blue-300">PROVIDER TERBAIK</h2>
         <div className="grid grid-cols-3 gap-3">
           <div className="bg-slate-800 p-3 rounded text-center text-sm font-bold border border-slate-700">PRAGMATIC</div>
           <div className="bg-slate-800 p-3 rounded text-center text-sm font-bold border border-slate-700">PG SOFT</div>
           <div className="bg-slate-800 p-3 rounded text-center text-sm font-bold border border-slate-700">HABANERO</div>
           <div className="bg-slate-800 p-3 rounded text-center text-sm font-bold border border-slate-700">IDN LIVE</div>
           <div className="bg-slate-800 p-3 rounded text-center text-sm font-bold border border
