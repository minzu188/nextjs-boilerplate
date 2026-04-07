'use client';
 import React, { useState } from 'react';
 export default function App() {
   const [halaman, setHalaman] = useState('home');
   // ===== STYLE GLOBAL =====
   const style = {
     container: "min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white",
     btnGreen: "bg-green-700 hover:bg-green-600 py-3 rounded-lg font-bold",
     btnBlue: "bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg font-bold",
     card: "border-2 border-red-700 rounded-lg overflow-hidden",
   };
   // ===== HALAMAN LOGIN =====
   if (halaman === 'login') {
     return (
       <div className={`${style.container} flex items-center justify-center p-4`}>
         <div className="w-full max-w-md">
           <h1 className="text-5xl font-bold text-center mb-8">
             <span className="text-white">TOTO</span><span className="text-red-500">80</span>
           </h1>
           <div className="bg-black/50 p-6 rounded-xl border border-red-700">
             <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
             <input 
               type="text" 
               placeholder="Username"
               className="w-full p-4 rounded-full mb-4 text-black" 
             />
             <input 
               type="password" 
               placeholder="Password"
               className="w-full p-4 rounded-full mb-6 text-black" 
             />
             <button 
               onClick={() => setHalaman('home')}
               className="w-full p-4 rounded-full bg-white text-black font-bold text-xl mb-2"
             >
               LOG IN
             </button>
             <button className="w-full p-4 rounded-full bg-red-700 text-white font-bold text-xl">
               DAFTAR
             </button>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN DEPOSIT =====
   if (halaman === 'deposit') {
     return (
       <div className={style.container}>
         <header className="bg-black/80 p-4 flex items-center">
           <button onClick={() => setHalaman('home')} className="text-2xl mr-4">←</button>
           <h1 className="text-xl font-bold">KASIR</h1>
         </header>
         <div className="p-4">
           <div className="bg-black/50 p-4 rounded-lg mb-4">
             <p className="mb-2">Bank: <strong>GOPAY</strong></p>
             <p className="mb-2">Nama: <strong>ALVIN</strong></p>
             <p>No Rek: <strong>0822xxxxxx</strong></p>
           </div>
           <input 
             type="number" 
             placeholder="Masukkan Nominal"
             className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 mb-4" 
           />
           <button className="w-full p-4 rounded-lg bg-blue-600 font-bold">KONFIRMASI</button>
         </div>
       </div>
     );
   }
   // ===== HALAMAN WITHDRAW =====
   if (halaman === 'withdraw') {
     return (
       <div className={style.container}>
         <header className="bg-black/80 p-4 flex items-center">
           <button onClick={() => setHalaman('home')} className="text-2xl mr-4">←</button>
           <h1 className="text-xl font-bold">MENARIK</h1>
         </header>
         <div className="p-4">
           <div className="bg-black/50 p-6 rounded-lg">
             <input 
               type="number" 
               placeholder="Jumlah Penarikan"
               className="w-full p-4 rounded-lg mb-4 text-black" 
             />
             <input 
               type="password" 
               placeholder="Password"
               className="w-full p-4 rounded-lg mb-6 text-black" 
             />
             <button className="w-full p-4 rounded-lg bg-cyan-600 font-bold">KIRIM</button>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN SLOT =====
   if (halaman === 'slot') {
     return (
       <div className={style.container}>
         <header className="bg-black/80 p-4 flex items-center justify-between">
           <button onClick={() => setHalaman('home')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">SLOT</h1>
           <div></div>
         </header>
         <div className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-r from-green-600 to-green-800 h-32 flex items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">IDN SLOT</div>
           <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 h-32 flex items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">PRAGMATIC</div>
           <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 h-32 flex items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">PG SOFT</div>
           <div className="bg-gradient-to-r from-red-700 to-red-900 h-32 flex items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">HABANERO</div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN CASINO =====
   if (halaman === 'casino') {
     return (
       <div className={style.container}>
         <header className="bg-black/80 p-4 flex items-center justify-between">
           <button onClick={() => setHalaman('home')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">CASINO</h1>
           <div></div>
         </header>
         <div className="p-4 grid grid-cols-2 gap-4">
           <div className="bg-gradient-to-r from-green-700 to-green-900 h-32 flex flex-col items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">🎡 ROULETTE</div>
           <div className="bg-gradient-to-r from-blue-700 to-blue-900 h-32 flex flex-col items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">🃏 BACCARAT</div>
           <div className="bg-gradient-to-r from-purple-700 to-purple-900 h-32 flex flex-col items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">♠️ BLACKJACK</div>
           <div className="bg-gradient-to-r from-red-700 to-red-900 h-32 flex flex-col items-center justify-center font-bold text-xl rounded-lg border-2 border-red-700">🎲 SICBO</div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN HOME / UTAMA =====
   return (
     <div className={style.container}>
       <header className="bg-black/80 p-4">
         <div className="flex items-center justify-between mb-3">
           <span className="text-3xl font-bold"><span className="text-white">TOTO</span><span className="text-red-500">80</span></span>
           <button onClick={() => setHalaman('deposit')} className={style.btnBlue}>DEPOSIT</button>
         </div>
         <div className="flex justify-between text-sm">
           <span>Saldo: <span className="text-yellow-400 font-bold">IDR. 101</span></span>
           <button onClick={() => setHalaman('login')} className="bg-red-700 px-3 py-1 rounded">LOGOUT</button>
         </div>
       </header>
       <main className="p-4">
         {/* MENU KATEGORI */}
         <div className="grid grid-cols-2 gap-3 mb-6">
           <button className={style.btnGreen} onClick={() => setHalaman('casino')}>KASINO</button>
           <button className={style.btnGreen}>TOGEL</button>
           <button className={style.btnGreen} onClick={() => setHalaman('slot')}>SLOT</button>
           <button className={style.btnGreen}>POKER</button>
         </div>
         {/* LIVE RESULT */}
         <h2 className="bg-blue-900 p-2 font-bold rounded-t-lg">LIVE RESULT</h2>
         <div className="grid grid-cols-2 gap-4 mb-6">
           <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-4 rounded-lg border-2 border-red-700">
             <h3 className="font-bold mb-2">SYDNEY</h3>
             <div className="text-3xl font-bold text-yellow-400">9089</div>
           </div>
           <div className="bg-gradient-to-br from-purple-700 to-red-800 p-4 rounded-lg border-2 border-red-700">
             <h3 className="font-bold mb-2">HONGKONG</h3>
             <div className="text-3xl font-bold text-yellow-400">4288</div>
           </div>
         </div>
         {/* MENU LAINNYA */}
         <div className="grid grid-cols-2 gap-3">
           <button onClick={() => setHalaman('deposit')} className="bg-gray-800 p-4 rounded-lg">💳 DEPOSIT</button>
           <button onClick={() => setHalaman('withdraw')} className="bg-gray-800 p-4 rounded-lg">💵 WITHDRAW</button>
           <button className="bg-gray-800 p-4 rounded-lg">📜 HISTORY</button>
           <button className="bg-gray-800 p-4 rounded-lg">👥 REFERAL</button>
         </div>
       </main>
     </div>
   );
 }
