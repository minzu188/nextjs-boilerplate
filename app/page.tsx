'use client';
 import React, { useState } from 'react';
 export default function THR89Site() {
   const [page, setPage] = useState('home');
   const [menuOpen, setMenuOpen] = useState(false);
   const [saldo, setSaldo] = useState(100000);
   const [gameActive, setGameActive] = useState(false);
   const [resultText, setResultText] = useState('');
   const [betAmount, setBetAmount] = useState(10000);
   const [selectedProvider, setSelectedProvider] = useState(''); // Untuk PG / Pragmatic
   // ===== SOUND EFFECT =====
   const playSound = (type) => {
     try {
       const audioContext = new (window.AudioContext || window.webkitAudioContext)();
       const oscillator = audioContext.createOscillator();
       const gainNode = audioContext.createGain();
       oscillator.connect(gainNode); gainNode.connect(audioContext.destination);
       if(type === 'win') { oscillator.frequency.value = 523.25; oscillator.start(); oscillator.stop(audioContext.currentTime+0.5); }
       else { oscillator.frequency.value = 300; oscillator.start(); oscillator.stop(audioContext.currentTime+0.1); }
     } catch(e) {}
   };
   // ===== LOGIC GAME =====
   const spinSlot = () => {
     if(saldo < betAmount) { alert('Saldo Tidak Cukup!'); return; }
     if(gameActive) return;
     playSound('click'); setGameActive(true); setSaldo(prev => prev - betAmount); setResultText('MEMUTAR...');
     const symbols = ['🍒', '🍋', '🔔', '⭐', '💎', '7️⃣'];
     let spins = 0;
     const spinInterval = setInterval(() => {
       document.getElementById('slot1').innerText = symbols[Math.floor(Math.random()*symbols.length)];
       document.getElementById('slot2').innerText = symbols[Math.floor(Math.random()*symbols.length)];
       document.getElementById('slot3').innerText = symbols[Math.floor(Math.random()*symbols.length)];
       spins++;
       if(spins > 12) { clearInterval(spinInterval); checkWin(); }
     }, 100);
   };
   const checkWin = () => {
     const s1 = document.getElementById('slot1').innerText;
     const s2 = document.getElementById('slot2').innerText;
     const s3 = document.getElementById('slot3').innerText;
     if(s1===s2 && s2===s3) {
       let win = betAmount * 5; setSaldo(prev => prev + win);
       setResultText(`JACKPOT! +${win.toLocaleString()}`); playSound('win');
     } else if(s1===s2 || s2===s3) {
       let win = betAmount * 2; setSaldo(prev => prev + win);
       setResultText(`MENANG! +${win.toLocaleString()}`); playSound('win');
     } else { setResultText('KALAH'); }
     setGameActive(false);
   };
   const playBaccarat = (pilihan) => {
     if(saldo < betAmount || gameActive) return;
     playSound('click'); setGameActive(true); setSaldo(prev => prev - betAmount); setResultText('MEMBAGIKAN KARTU...');
     setTimeout(() => {
       const p = Math.floor(Math.random()*10)+1;
       const b = Math.floor(Math.random()*10)+1;
       document.getElementById('pCard').innerText = p;
       document.getElementById('bCard').innerText = b;
       let menang = false;
       if(pilihan==='player' && p>b) menang=true;
       if(pilihan==='banker' && b>p) menang=true;
       if(pilihan==='tie' && p===b) { menang=true; let win=betAmount*8; setSaldo(prev=>prev+win); setResultText(`SERI JACKPOT! +${win.toLocaleString()}`); playSound('win'); setGameActive(false); return; }
       if(menang) { let win=betAmount*2; setSaldo(prev=>prev+win); setResultText(`MENANG! +${win.toLocaleString()}`); playSound('win'); }
       else { setResultText('KALAH'); }
       setGameActive(false);
     }, 1500);
   };
   const prosesDeposit = () => {
     const nominal = parseInt(document.getElementById('nominalDeposit').value);
     if(!nominal || nominal < 10000) { alert('Minimal Deposit Rp 10.000'); return; }
     setSaldo(prev => prev + nominal); alert(`Deposit Rp ${nominal.toLocaleString()} Berhasil!`);
     document.getElementById('nominalDeposit').value = ''; playSound('win');
   };
   // ===== HALAMAN PILIH PROVIDER =====
   if(page === 'pilihProvider') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center">
           <button onClick={() => setPage('home')} className="text-2xl mr-4">←</button>
           <h1 className="text-xl font-bold">PILIH PROVIDER</h1>
         </header>
         
         <div className="p-4 grid grid-cols-1 gap-4 max-w-md mx-auto">
           
           {/* PRAGMATIC PLAY */}
           <div onClick={() => { setSelectedProvider('pragmatic'); setPage('slot'); }} 
                className="bg-gradient-to-r from-orange-600 to-orange-800 p-6 rounded-2xl border-2 border-yellow-400 shadow-lg text-center cursor-pointer hover:scale-105 transition-transform">
             <h2 className="text-3xl font-black text-white mb-2">PRAGMATIC PLAY</h2>
             <p className="text-sm opacity-80">Game Paling Gacor & Populer</p>
             <div className="mt-3 flex justify-center gap-2 text-2xl">🎰 🎲 🃏</div>
           </div>
           {/* PG SOFT */}
           <div onClick={() => { setSelectedProvider('pgsoft'); setPage('slot'); }} 
                className="bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-2xl border-2 border-yellow-400 shadow-lg text-center cursor-pointer hover:scale-105 transition-transform">
             <h2 className="text-3xl font-black text-white mb-2">PG SOFT</h2>
             <p className="text-sm opacity-80">Game Ringan & Tampilan Keren</p>
             <div className="mt-3 flex justify-center gap-2 text-2xl">🍭 🐯 🎮</div>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN SLOT =====
   if(page === 'slot') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center justify-between">
           <button onClick={() => setPage('pilihProvider')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">{selectedProvider === 'pgsoft' ? 'PG SOFT' : 'PRAGMATIC PLAY'}</h1>
           <div className="text-yellow-400 font-bold">Rp {saldo.toLocaleString()}</div>
         </header>
         
         <div className="p-4 max-w-md mx-auto text-center">
           <div className={`p-1 rounded-2xl mb-4 ${selectedProvider === 'pgsoft' ? 'bg-gradient-to-br from-green-500 to-teal-600' : 'bg-gradient-to-br from-yellow-600 to-red-600'}`}>
             <div className="bg-slate-900 p-6 rounded-xl">
               <h2 className="text-yellow-400 font-bold mb-4 text-2xl">{selectedProvider === 'pgsoft' ? 'MEGA WIN' : 'LUCKY SLOT'}</h2>
               
               <div className="flex justify-center gap-4 mb-6">
                 <div id="slot1" className="w-20 h-20 bg-white text-black text-5xl flex items-center justify-center rounded-lg font-bold">🍒</div>
                 <div id="slot2" className="w-20 h-20 bg-white text-black text-5xl flex items-center justify-center rounded-lg font-bold">🍋</div>
                 <div id="slot3" className="w-20 h-20 bg-white text-black text-5xl flex items-center justify-center rounded-lg font-bold">🔔</div>
               </div>
               <p className="text-lg font-bold mb-4 h-6 text-yellow-300">{resultText}</p>
               <div className="mb-4">
                 <p className="text-sm mb-2">TARUHAN:</p>
                 <div className="flex justify-center gap-2">
                   <button onClick={()=>setBetAmount(10000)} className={`px-3 py-1 rounded text-xs ${betAmount===10000?'bg-yellow-500 text-black':'bg-slate-700'}`}>10rb</button>
                   <button onClick={()=>setBetAmount(20000)} className={`px-3 py-1 rounded text-xs ${betAmount===20000?'bg-yellow-500 text-black':'bg-slate-700'}`}>20rb</button>
                   <button onClick={()=>setBetAmount(50000)} className={`px-3 py-1 rounded text-xs ${betAmount===50000?'bg-yellow-500 text-black':'bg-slate-700'}`}>50rb</button>
                 </div>
               </div>
               <button onClick={spinSlot} disabled={gameActive} className="w-full p-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl shadow-lg disabled:opacity-50">
                 {gameActive ? 'MEMUTAR...' : 'SPIN'}
               </button>
             </div>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN CASINO =====
   if(page === 'casino') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center justify-between">
           <button onClick={() => setPage('home')} className="text-2xl">←</button>
           <h1 className="text-xl font-bold">LIVE CASINO</h1>
           <div className="text-yellow-400 font-bold">Rp {saldo.toLocaleString()}</div>
         </header>
         
         <div className="p-4 max-w-md mx-auto">
           <div className="bg-gradient-to-br from-red-900 to-red-950 p-6 rounded-2xl border-2 border-yellow-500">
             <h2 className="text-center text-yellow-400 font-bold text-xl mb-4">BACCARAT</h2>
             <div className="flex justify-between mb-6">
               <div className="text-center">
                 <div className="w-16 h-20 bg-gradient-to-b from-red-700 to-red-900 border-2 border-yellow-500 rounded flex items-center justify-center text-3xl font-bold" id="pCard">?</div>
                 <p className="mt-2 text-sm">PLAYER</p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-20 bg-gradient-to-b from-blue-700 to-blue-900 border-2 border-yellow-500 rounded flex items-center justify-center text-3xl font-bold" id="bCard">?</div>
                 <p className="mt-2 text-sm">BANKER</p>
               </div>
             </div>
             <p className="text-center font-bold mb-4 text-yellow-300 h-6">{resultText}</p>
             <div className="grid grid-cols-3 gap-3 mb-4">
               <button onClick={() => playBaccarat('player')} className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-xl font-bold">PLAYER</button>
               <button onClick={() => playBaccarat('banker')} className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl font-bold">BANKER</button>
               <button onClick={() => playBaccarat('tie')} className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-xl font-bold">SERI x8</button>
             </div>
             <div className="text-center">
               <p className="text-xs mb-2">Taruhan: {betAmount.toLocaleString()}</p>
             </div>
           </div>
         </div>
       </div>
     );
   }
   // ===== HALAMAN DEPOSIT =====
   if(page === 'deposit') {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black text-white">
         <header className="bg-slate-900 p-4 flex items-center">
           <button onClick={() => setPage('home')} className="text-2xl mr-4">←</button>
           <h1 className="text-xl font-bold">TOP UP SALDO</h1>
         </header>
         <div className="p-4 max-w-md mx-auto">
           
           <div className="bg-slate-800 p-5 rounded-xl mb-6 border-2 border-yellow-600">
             <h3 className="text-center font-bold text-yellow-400 mb-4">REKENING TUJUAN</h3>
             <div className="space-y-3 text-sm bg-slate-900 p-3 rounded">
               <p>🏦 Bank: <strong>BCA</strong></p>
               <p>🔢 No. Rek: <strong className="text-green-400">7750213456</strong></p>
               <p>👤 Nama: <strong>THR89 OFFICIAL</strong></p>
             </div>
             <button onClick={() => {navigator.clipboard.writeText('7750213456'); alert('Disalin!')}} className="w-full mt-3 bg-blue-700 p-2 rounded text-sm font-bold">Salin Nomor</button>
           </div>
           <div className="bg-slate-800 p-4 rounded-xl mb-4">
             <input id="nominalDeposit" type="number" placeholder="Minimal Deposit Rp 10.000" className="w-full p-4 rounded-lg bg-slate-700 border border-slate-600 mb-3" />
             <div className="grid grid-cols-4 gap-2 mb-3">
               <button onClick={() => document.getElementById('nominalDeposit').value=10000} className="bg-slate-700 p-2 rounded text-sm">10rb</button>
               <button onClick={() => document.getElementById('nominalDeposit').value=20000} className="bg-slate-700 p-2 rounded text-sm">20rb</button>
               <button onClick={() => document.getElementById('nominalDeposit').value=50000} className="bg-slate-700 p-2 rounded text-sm">50rb</button>
               <button onClick={() => document.getElementById('nominalDeposit').value=100000} className="bg-slate-700 p-2 rounded text-sm">100rb</button>
             </div>
           </div>
           <button onClick={prosesDeposit} className="w-full p-4
