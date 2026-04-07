'use client';
 import React, { useState } from 'react';
 import { useRouter } from 'next/navigation';
 import { 
   Home, 
   CreditCard, 
   History, 
   Users, 
   FileText, 
   Mail, 
   Lock, 
   Gift, 
   Newspaper, 
   HelpCircle,
   Search,
   RefreshCw,
   LogOut,
   User
 } from 'lucide-react';
 export default function Toto80App() {
   const [page, setPage] = useState('home'); // home, login, deposit, withdraw, slot, casino
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [nominal, setNominal] = useState('');
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const router = useRouter();
   const user = {
     name: 'WANDAAA',
     balance: 101
   };
   // ===== DATA MENU =====
   const menuItems = [
     { id: 'home', label: 'Home', icon: <Home size={20} /> },
     { id: 'deposit', label: 'Deposit', icon: <CreditCard size={20} /> },
     { id: 'withdraw', label: 'Withdraw', icon: <CreditCard size={20} /> },
     { id: 'history', label: 'History', icon: <History size={20} /> },
     { id: 'referral', label: 'Referral', icon: <Users size={20} /> },
     { id: 'transaksi', label: 'Transaksi', icon: <FileText size={20} /> },
     { id: 'invoice', label: 'Invoice', icon: <FileText size={20} /> },
     { id: 'memo', label: 'Memo', icon: <Mail size={20} />, badge: 0 },
     { id: 'password', label: 'Ubah Password', icon: <Lock size={20} /> },
     { id: 'promosi', label: 'Promosi', icon: <Gift size={20} /> },
     { id: 'hadiah', label: 'Hadiah', icon: <Gift size={20} /> },
     { id: 'berita', label: 'Berita', icon: <Newspaper size={20} /> },
     { id: 'cara', label: 'Cara Bermain', icon: <HelpCircle size={20} /> },
     { id: 'logout', label: 'Keluar', icon: <LogOut size={20} /> },
   ];
   const gameCategories = [
     { id: 'semua', label: 'SEMUA' },
     { id: 'kasino', label: 'KASINO' },
     { id: 'togel', label: 'TOGEL' },
     { id: 'slot', label: 'SLOT' },
     { id: 'lotere', label: 'LOTERE ELEKTRONIK' },
     { id: 'arkade', label: 'ARKADE' },
     { id: 'poker', label: 'POKER', isNew: true },
   ];
   const lotteryResults = [
     { id: 'sydney', name: 'SYDNEY LOTTO', number: '9089', time: '22:40:24', color: 'bg-gradient-to-br from-blue-600 to-blue-900' },
     { id: 'hongkong', name: 'HONGKONG LOTTO', number: '4288', time: '07:50:24', color: 'bg-gradient-to-br from-purple-700 to-red-800' },
     { id: 'macau4d', name: '4DTOTOMACAU', number: '0450', time: '00:50:24', color: 'bg-gradient-to-br from-gray-800 to-gray-900' },
     { id: 'macau5d', name: '5DTOTOMACAU', number: '89979', time: '00:06:24', color: 'bg-gradient-to-br from-gray-800 to-gray-900' },
   ];
   const slotProviders = [
     { id: 'idnslot', name: 'IDN SLOT', color: 'bg-gradient-to-r from-green-600 to-green-800' },
     { id: 'pragmatic', name: 'PRAGMATIC PLAY', color: 'bg-gradient-to-r from-yellow-600 to-yellow-800' },
     { id: 'pgsoft', name: 'PG SOFT', color: 'bg-gradient-to-r from-indigo-600 to-indigo-800' },
     { id: 'habanero', name: 'HABANERO', color: 'bg-gradient-to-r from-red-700 to-red-900' },
   ];
   const casinoGames = [
     { id: 'roulette', name: 'ROULETTE', icon: '🎡', color: 'bg-gradient-to-r from-green-700 to-green-900' },
     { id: 'baccarat', name: 'BACCARAT', icon: '🃏', color: 'bg-gradient-to-r from-blue-700 to-blue-900' },
     { id: 'blackjack', name: 'BLACKJACK', icon: '♠️', color: 'bg-gradient-to-r from-purple-700 to-purple-900' },
     { id: 'sicbo', name: 'SICBO', icon: '🎲', color: 'bg-gradient-to-r from-red-700 to-red-900' },
   ];
   const handleLogin = (e: React.FormEvent) => {
     e.preventDefault();
     setPage('home');
   };
   // ===== RENDER HALAMAN LOGIN =====
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
             <form onSubmit={handleLogin}>
               <div className="mb-4">
                 <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" size={24} />
                   <input
                     type="text"
                     placeholder="Username"
                     className="w-full pl-14 pr-4 py-4 rounded-full bg-white text-gray-800"
                     required
                   />
                 </div>
               </div>
               <div className="mb-6">
                 <div className="relative">
                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" size={24} />
                   <input
                     type="password"
                     placeholder="Password"
                     className="w-full pl-14 pr-12 py-4 rounded-full bg-white text-gray-800"
                     required
                   />
                 </div>
               </div>
               <div className="space-y-3">
                 <button type="submit" className="w-full py-4 rounded-full bg-white text-black font-bold text-xl">
                   Log in
                 </button>
                 <button type="button" className="w-full py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl">
                   Daftar
                 </button>
               </div>
             </form>
           </div>
         </div>
       </div>
     );
   }
   // ===== RENDER HALAMAN DEPOSIT =====
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
             <p className="mb-4"><span className="text-gray-400">No Rekening:</span> <span className="font-bold">0822xxxxxx</span></p>
           </div>
           <div className="bg-black/50 rounded-lg p-6 border border-red-700">
             <div className="mb-4">
               <label className="block text-gray-400 mb-2">Nominal Deposit</label>
               <input
                 type="number"
                 placeholder="Masukkan Nominal"
                 value={nominal}
                 onChange={(e) => setNominal(e.target.value)}
                 className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
               />
             </div>
             <button className="w-full py-4 rounded-lg bg-blue-600 font-bold text-xl">
               Konfirmasi Deposit
             </button>
           </div>
         </main>
       </div>
     );
   }
   // ===== RENDER HALAMAN WITHDRAW =====
   if (page === 'withdraw') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
         <header className="bg-black/80 p-4">
           <div className="flex items-center justify-between">
             <button onClick={() => setPage('home')} className="text-2xl">←</button>
             <h1 className="text-2xl font-bold">Menarik</h1>
             <div></div>
           </div>
           <div className="mt-2 text-center">
             <p>Balance: <span className="text-yellow-400 font-bold">IDR. {user.balance}</span></p>
           </div>
         </header>
         <main className="p-4">
           <div className="bg-black/50 rounded-lg p-6 border border-red-700">
             <div className="mb-4">
               <label className="block text-gray-400 mb-2">Jumlah Penarikan</label>
               <input type="number" className="w-full px-4 py-3 rounded-lg bg-white text-black" placeholder="0" />
             </div>
             <div className="mb-6">
               <label className="block text-gray-400 mb-2">Password</label>
               <input type="password" className="w-full px-4 py-3 rounded-lg bg-white text-black" placeholder="******" />
             </div>
             <button className="w-full py-4 rounded-lg bg-cyan-600 font-bold text-xl">Kirim</button>
           </div>
         </main>
       </div>
     );
   }
   // ===== RENDER HALAMAN SLOT =====
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
         <main className="p-4">
           <div className="grid grid-cols-2 gap-4">
             {slotProviders.map((provider) => (
               <div key={provider.id} className={`${provider.color} rounded-lg border-2 border-red-700 h-32 flex items-center justify-center cursor-pointer`}>
                 <h3 className="text-xl font-bold">{provider.name}</h3>
               </div>
             ))}
           </div>
         </main>
       </div>
     );
   }
   // ===== RENDER HALAMAN CASINO =====
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
         <main className="p-4">
           <div className="grid grid-cols-2 gap-4">
             {casinoGames.map((game) => (
               <div key={game.id} className={`${game.color} rounded-lg border-2 border-red-700 h-36 flex flex-col items-center justify-center`}>
                 <span className="text-5xl mb-2">{game.icon}</span>
                 <h3 className="text-xl font-bold">{game.name}</h3>
               </div>
             ))}
           </div>
         </main>
       </div>
     );
   }
   // ===== RENDER HALAMAN UTAMA / HOME =====
   return (
     <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
       <header className="bg-black/80 p-4">
         <div className="flex items-center justify-between">
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
               <line x1="3" y1="12" x2="21" y2="12"></line>
               <line x1="3" y1="6" x2="21" y2="6"></line>
               <line x1="3" y1="18" x2="21" y2="18"></line>
             </svg>
           </button>
           <div className="text-3xl font-bold">
             <span className="text-white">TOTO</span><span className="text-red-500">80</span>
           </div>
           <button onClick={() => setPage('deposit')} className="bg-blue-700 px-4 py-2 rounded-lg font-bold">
             DEPOSITO
           </button>
         </div>
         <div className="mt-3 flex justify-between items-center">
           <span>Saldo: <span className="text-yellow-400 font-bold">IDR. {user.balance}</span></span>
           <button className="bg-blue-700/50 px-3 py-1 rounded flex items-center gap-2">
             <RefreshCw size={16} /> Refresh
           </button>
         </div>
       </header>
       {/* SIDEBAR MENU */}
       {isMenuOpen && (
         <div className="fixed inset
  
