
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
   LogOut
 } from 'lucide-react';
 export default function Toto80Page() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeMenu, setActiveMenu] = useState('home');
   const router = useRouter();
   const user = {
     username: '',
     balance: 
   };
   const menuItems = [
     { id: 'home', label: 'Home', icon: <Home size={20} /> },
     { id: 'deposit', label: 'Deposit', icon: <CreditCard size={20} />, action: () => router.push('/deposit') },
     { id: 'withdraw', label: 'Withdraw', icon: <CreditCard size={20} />, action: () => router.push('/withdraw') },
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
     { id: 'logout', label: 'Keluar', icon: <LogOut size={20} />, action: () => router.push('/login') },
   ];
   // ... (sisa kode halaman utama sama seperti sebelumnya)
 }
import React, { useState } from 'react';
 import { useRouter } from 'next/navigation';
 import { User, Lock } from 'lucide-react';
 export default function LoginPage() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const router = useRouter();
   const handleLogin = (e: React.FormEvent) => {
     e.preventDefault();
     // Logic login disini
     router.push('/');
   };
   return (
     <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white flex items-center justify-center p-4">
       <div className="w-full max-w-md">
         {/* Logo */}
         <div className="text-center mb-8">
           <h1 className="text-5xl font-bold">
             <span className="text-white">TOTO</span>
             <span className="text-red-500">80</span>
           </h1>
           <p className="text-gray-300 mt-2">SITUS TOGEL ONLINE & SLOT ONLINE TERPERCAYA</p>
         </div>
         {/* Form Login */}
         <div className="bg-black/50 rounded-2xl p-6 border border-red-700">
           <h2 className="text-2xl font-bold text-center mb-6">Silahkan Login</h2>
           
           <form onSubmit={handleLogin}>
             {/* Username */}
             <div className="mb-4">
               <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400">
                   <User size={24} />
                 </div>
                 <input
                   type="text"
                   placeholder="Username"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   className="w-full pl-14 pr-4 py-4 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                   required
                 />
               </div>
             </div>
             {/* Password */}
             <div className="mb-6">
               <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400">
                   <Lock size={24} />
                 </div>
                 <input
                   type="password"
                   placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-full pl-14 pr-12 py-4 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                   required
                 />
                 <button
                   type="button"
                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                     <circle cx="12" cy="12" r="3"></circle>
                   </svg>
                 </button>
               </div>
             </div>
             {/* Versi WAP */}
             <div className="text-center mb-4">
               <a href="#" className="text-blue-400 underline">Versi WAP</a>
             </div>
             {/* Tombol Login & Daftar */}
             <div className="space-y-3">
               <button
                 type="submit"
                 className="w-full py-4 rounded-full bg-gradient-to-r from-gray-200 to-white text-black font-bold text-xl hover:scale-105 transition-transform"
               >
                 Log in
               </button>
               
               <button
                 type="button"
                 className="w-full py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl hover:scale-105 transition-transform relative overflow-hidden"
               >
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl">🔥</span>
                 Daftar
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
 }
import React, { useState } from 'react';
 import { useRouter } from 'next/navigation';
 export default function DepositPage() {
   const [nominal, setNominal] = useState('');
   const router = useRouter();
   return (
     <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
       {/* Header */}
       <header className="bg-black/80 p-4 sticky top-0 z-10">
         <div className="flex items-center justify-between">
           <button onClick={() => router.back()} className="text-2xl">←</button>
           <h1 className="text-2xl font-bold">Kasir</h1>
           <div></div>
         </div>
       </header>
       <main className="p-4">
         {/* Pilihan Metode */}
         <div className="grid grid-cols-2 gap-4 mb-6">
           <button className="bg-blue-800 py-4 rounded-lg font-bold flex items-center justify-center gap-2">
             🏦 Bank
           </button>
           <button className="bg-blue-800 py-4 rounded-lg font-bold flex items-center justify-center gap-2">
             📱 Pembayaran QRIS
           </button>
         </div>
         {/* Info Rekening */}
         <div className="bg-black/50 rounded-lg p-4 mb-6 border border-red-700">
           <div className="space-y-2">
             <p><span className="text-gray-400">Nama Bank:</span> <span className="font-bold">GoPay</span></p>
             <p><span className="text-gray-400">Nama Rekening:</span> <span className="font-bold">Alvin</span></p>
             <p><span className="text-gray-400">No Rekening:</span> <span className="font-bold">082-290-****</span></p>
             <p><span className="text-gray-400">Pilih Bank:</span> 
               <select className="ml-2 bg-white text-black px-2 py-1 rounded">
                 <option>GOPAY</option>
                 <option>DANA</option>
                 <option>OVO</option>
               </select>
             </p>
           </div>
         </div>
         {/* Instruksi */}
         <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4 mb-6">
           <p className="text-yellow-200 text-center font-bold">
             Setelah Transfer Selesai,<br/>
             Silakan Refresh Akun Anda<br/>
             Tanpa Mengisi Formulir Deposit.
           </p>
         </div>
         {/* Form Deposit */}
         <div className="bg-black/50 rounded-lg p-6 border border-red-700">
           <div className="mb-4">
             <label className="block text-gray-400 mb-2">Nama Pengguna / ID Anggota</label>
             <input
               type="text"
               value=""
               readOnly
               className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
             />
           </div>
           <div className="mb-6">
             <label className="block text-gray-400 mb-2">Deposito Nominal</label>
             <input
               type="number"
               placeholder="Masukkan Nominal"
               value={nominal}
               onChange={(e) => setNominal(e.target.value)}
               className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
             />
           </div>
           <div className="grid grid-cols-2 gap-4">
             <button className="py-4 rounded-lg bg-black hover:bg-gray-900 font-bold">
               Depo QR
             </button>
             <button className="py-4 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold">
               Depo DANA
             </button>
           </div>
         </div>
       </main>
     </div>
   );
 }
import React, { useState } from 'react';
 import { useRouter } from 'next/navigation';
 export default function WithdrawPage() {
   const [jumlah, setJumlah] = useState('');
   const [password, setPassword] = useState('');
   const router = useRouter();
   return (
     <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
       {/* Header */}
       <header className="bg-black/80 p-4 sticky top-0 z-10">
         <div className="flex items-center justify-between">
           <button onClick={() => router.back()} className="text-2xl">←</button>
           <h1 className="text-2xl font-bold">Menarik</h1>
           <div></div>
         </div>
         <div className="mt-2 text-center">
           <h2 className="text-xl font-bold">WANDAAA</h2>
           <p className="text-gray-300">Balance: <span className="text-yellow-400 font-bold">IDR. 101</span></p>
         </div>
       </header>
       <main className="p-4">
         <form className="bg-black/50 rounded-lg p-6 border border-red-700">
           {/* Jumlah Penarikan */}
           <div className="mb-4">
             <label className="block text-gray-400 mb-2">Jumlah Penarikan</label>
             <input
               type="number"
               placeholder="Jumlah Masukan..."
               value={jumlah}
               onChange={(e) => setJumlah(e.target.value)}
               className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
               required
             />
           </div>
           {/* Password */}
           <div className="mb-6">
             <label className="block text-gray-400 mb-2">Kata sandi</label>
             <input
               type="password"
               placeholder="Masukkan kata sandi..."
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
               required
             />
           </div>
           {/* Info Tujuan */}
           <div className="mb-6 p-4 bg-gray-900 rounded-lg">
             <h3 className="font-bold mb-2">Dana akan dikirim ke</h3>
             <p><span className="text-gray-400">Nama Bank:</span> gopay</p>
             <p><span className="text-gray-400">Nama Rekening:</span> Alvin</p>
             <p><span className="text-gray-400">No Rekening:</span> 082-290-****</p>
           </div>
           {/* Tombol */}
           <div className="space-y-3">
             <button
               type="submit"
               className="w-full py-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-bold text-xl"
             >
               Kirim
             </button>
             <button
               type="button"
               onClick={() => router.back()}
               className="w-full py-4 rounded-lg bg-gray-700 hover:bg-gray-600 font-bold text-xl"
             >
               Batal
             </button>
           </div>
         </form>
         {/* Daftar Bank */}
         <div className="mt-6 grid grid-cols-4 gap-2">
           {['BCA', 'BNI', 'BRI', 'DANA', 'GOPAY', 'MANDIRI', 'OVO', 'BRI'].map((bank, idx) => (
             <div key={idx} className="bg-white p-2 rounded text-center text-xs text-black font-bold">
               {bank}
             </div>
           ))}
         </div>
       </main>
     </div>
   );
 }
