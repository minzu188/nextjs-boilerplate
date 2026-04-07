export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h1 style={{color: "red"}}>🔥 MINZU118 CASINO 🔥</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        marginTop: "20px"
      }}>
        <div style={{background:"#1a1a1a", padding:"20px", borderRadius:"10px"}}>
          🎰 Slot Game
        </div>

        <div style={{background:"#1a1a1a", padding:"20px", borderRadius:"10px"}}>
          🐟 Fishing Game
        </div>

        <div style={{background:"#1a1a1a", padding:"20px", borderRadius:"10px"}}>
          🎴 Poker
        </div>

        <div style={{background:"#1a1a1a", padding:"20px", borderRadius:"10px"}}>
          🏆 Tournament
        </div>
      </div>
    </main>
  );
}
