import { useState, useEffect, useRef, useCallback } from "react";

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

interface Order {
    id: string;
    tableNumber: string;
    items: OrderItem[];
    total: number;
    note?: string;
    status: "pending" | "done" | "cancelled";
    createdAt: string;
}

function timeAgo(iso: string): string {
    const secs = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
    if (secs < 60) return `${secs}s ago`;
    if (secs < 3600) return `${Math.floor(secs / 60)}m ago`;
    return `${Math.floor(secs / 3600)}h ago`;
}

function beep() {
    try {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(880, ctx.currentTime);
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.6);
    } catch {
          // blocked
    }
}

const PASSWORD = "kitchen123";

export default function Kitchen() {
    const [authed, setAuthed] = useState(false);
    const [pw, setPw] = useState("");
    const [pwError, setPwError] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [serverDown, setServerDown] = useState(false);
    const knownIds = useRef<Set<string>>(new Set());
    const [, forceRender] = useState(0);
    const flashRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function flashTitle(count: number) {
        if (flashRef.current) return;
        let on = true;
        let ticks = 0;
        flashRef.current = setInterval(() => {
                document.title = on ? `NEW ORDER x${count}!` : "Kitchen - Boston Cafe";
                on = !on;
                if (++ticks > 12) {
                          clearInterval(flashRef.current!);
                          flashRef.current = null;
                          document.title = "Kitchen - Boston Cafe";
                }
        }, 600);
  }

  const fetchOrders = useCallback(async () => {
        try {
                const res = await fetch("/api/orders");
                if (!res.ok) throw new Error();
                const data: Order[] = await res.json();
                setServerDown(false);
                setOrders(data);
                const newOnes = data.filter(
                          (o) => o.status === "pending" && !knownIds.current.has(o.id)
                        );
                if (newOnes.length > 0 && knownIds.current.size > 0) {
                          beep();
                          flashTitle(newOnes.length);
                }
                data.forEach((o) => knownIds.current.add(o.id));
        } catch {
                setServerDown(true);
        } finally {
                setLoading(false);
        }
  }, []);

  useEffect(() => {
        if (!authed) return;
        document.title = "Kitchen - Boston Cafe";
        fetchOrders();
        const poll = setInterval(fetchOrders, 3000);
        const tick = setInterval(() => forceRender((n) => n + 1), 15000);
        return () => { clearInterval(poll); clearInterval(tick); };
  }, [authed, fetchOrders]);

  function handleLogin() {
        if (pw === PASSWORD) { setAuthed(true); }
        else { setPwError(true); }
  }

  async function markStatus(id: string, status: "done" | "cancelled") {
        await fetch(`/api/orders/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
        });
        fetchOrders();
  }

  if (!authed) {
        return (
                <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#1a0a00,#3d1f00)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Inter,sans-serif" }}>
                          <div style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:20, padding:"48px 40px", width:360, display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
                                      <div style={{ fontSize:48 }}>Staff</div>div>
                                      <h1 style={{ color:"#fff", fontSize:26, fontWeight:700, margin:0 }}>Kitchen Dashboard</h1>h1>
                                      <p style={{ color:"rgba(255,255,255,0.5)", fontSize:13, margin:0 }}>Boston Cafe & Bakery - Staff Only</p>p>
                                      <input
                                                    type="password"
                                                    placeholder="Enter password"
                                                    value={pw}
                                                    onChange={(e) => { setPw(e.target.value); setPwError(false); }}
                                                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                                                    style={{ width:"100%", padding:"14px 18px", borderRadius:12, border: pwError ? "2px solid #ff5252" : "2px solid rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.08)", color:"#fff", fontSize:16, outline:"none", boxSizing:"border-box", marginTop:8 }}
                                                  />
                            {pwError && <p style={{ color:"#ff5252", fontSize:13, margin:"0 0 4px" }}>Incorrect password</p>p>}
                                      <button style={{ width:"100%", padding:"14px", borderRadius:12, background:"linear-gradient(135deg,#c0621a,#e07b2e)", color:"#fff", fontWeight:700, fontSize:16, border:"none", cursor:"pointer", marginTop:4 }} onClick={handleLogin}>
                                                    Enter Kitchen
                                      </button>button>
                          </div>div>
                </div>div>
              );
  }

  const pending = orders.filter((o) => o.status === "pending");
    const done = orders.filter((o) => o.status === "done" || o.status === "cancelled");

  return (
        <div style={{ minHeight:"100vh", background:"#0f0f0f", color:"#eee", fontFamily:"Inter,sans-serif", padding:"24px 20px 60px", maxWidth:1100, margin:"0 auto" }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:28, flexWrap:"wrap", gap:12 }}>
                          <div>
                                    <h1 style={{ fontSize:28, fontWeight:800, margin:0, color:"#fff" }}>Kitchen Dashboard</h1>h1>
                                    <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", margin:"4px 0 0" }}>Boston Cafe & Bakery - Auto-refreshes every 3s</p>p>
                          </div>div>
                        <div style={{ background:"#c0621a", color:"#fff", borderRadius:99, padding:"8px 20px", fontWeight:700, fontSize:15 }}>{pending.length} pending</div>div>
                </div>div>
          {serverDown && <div style={{ background:"#3d0000", border:"1px solid #ff5252", color:"#ff8a80", borderRadius:12, padding:"14px 18px", marginBottom:20, fontSize:14 }}>Cannot reach order server.</div>div>}
          {loading && <p style={{ color:"rgba(255,255,255,0.4)", textAlign:"center", padding:40 }}>Loading orders...</p>p>}
          {!loading && (
                  <>
                    {pending.length === 0 ? (
                                <div style={{ textAlign:"center", padding:"80px 20px" }}>
                                              <div style={{ fontSize:52, marginBottom:12 }}>Done</div>div>
                                              <p style={{ fontSize:20, fontWeight:700, color:"#fff", margin:0 }}>No pending orders right now.</p>p>
                                              <p style={{ color:"rgba(255,255,255,0.4)", marginTop:8, fontSize:14 }}>New orders will appear here automatically.</p>p>
                                </div>div>
                              ) : (
                                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:18 }}>
                                  {pending.map((order) => (
                                                  <div key={order.id} style={{ background:"linear-gradient(145deg,#1e1208,#2a1a0a)", border:"1.5px solid #c0621a", borderRadius:16, padding:20, display:"flex", flexDirection:"column", gap:12 }}>
                                                                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                                                                                        <span style={{ background:"#c0621a", color:"#fff", borderRadius:8, padding:"4px 12px", fontWeight:700, fontSize:15 }}>Table #{order.tableNumber}</span>span>
                                                                                        <span style={{ color:"rgba(255,255,255,0.4)", fontSize:12, marginLeft:"auto" }}>{timeAgo(order.createdAt)}</span>span>
                                                                    </div>div>
                                                                    <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:6 }}>
                                                                      {order.items.map((item, idx) => (
                                                                          <li key={idx} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14 }}>
                                                                                                  <span style={{ background:"rgba(255,255,255,0.1)", borderRadius:6, padding:"2px 7px", fontSize:12, fontWeight:700, color:"#e07b2e", minWidth:28, textAlign:"center" }}>x{item.quantity}</span>span>
                                                                                                  <span style={{ flex:1, color:"#ddd" }}>{item.name}</span>span>
                                                                                                  <span style={{ color:"#e07b2e", fontWeight:600, fontSize:13 }}>Rs.{item.price * item.quantity}</span>span>
                                                                          </li>li>
                                                                        ))}
                                                                    </ul>ul>
                                                    {order.note && <p style={{ background:"rgba(255,255,255,0.05)", borderRadius:8, padding:"8px 10px", fontSize:13, color:"rgba(255,255,255,0.6)", margin:0 }}>{order.note}</p>p>}
                                                                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:12 }}>
                                                                                        <span style={{ fontWeight:800, fontSize:17, color:"#fff" }}>Total: Rs.{order.total}</span>span>
                                                                                        <div style={{ display:"flex", gap:8 }}>
                                                                                                              <button style={{ background:"#2e7d32", color:"#fff", border:"none", borderRadius:10, padding:"8px 16px", fontWeight:700, fontSize:13, cursor:"pointer" }} onClick={() => markStatus(order.id, "done")}>Done</button>button>
                                                                                                              <button style={{ background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.6)", border:"none", borderRadius:10, padding:"8px 12px", fontWeight:600, fontSize:13, cursor:"pointer" }} onClick={() => markStatus(order.id, "cancelled")}>Cancel</button>button>
                                                                                          </div>div>
                                                                    </div>div>
                                                  </div>div>
                                                ))}
                                </div>div>
                            )}
                    {done.length > 0 && (
                                <div style={{ marginTop:44 }}>
                                              <h2 style={{ fontSize:16, color:"rgba(255,255,255,0.35)", fontWeight:600, marginBottom:14, textTransform:"uppercase", letterSpacing:1 }}>Completed Orders</h2>h2>
                                              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:18 }}>
                                                {done.map((order) => (
                                                    <div key={order.id} style={{ background:"#161616", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:20, display:"flex", flexDirection:"column", gap:10 }}>
                                                                        <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                                                                                              <span style={{ background:"#333", color:"#aaa", borderRadius:8, padding:"4px 12px", fontWeight:700, fontSize:14 }}>Table #{order.tableNumber}</span>span>
                                                                                              <span style={{ color:order.status === "done" ? "#4caf50" : "#ff5252", fontSize:12, fontWeight:600 }}>{order.status === "done" ? "Done" : "Cancelled"}</span>span>
                                                                        </div>div>
                                                                        <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:6, opacity:0.55 }}>
                                                                          {order.items.map((item, idx) => (
                                                                              <li key={idx} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14 }}>
                                                                                                        <span style={{ background:"rgba(255,255,255,0.1)", borderRadius:6, padding:"2px 7px", fontSize:12, fontWeight:700, color:"#e07b2e", minWidth:28, textAlign:"center" }}>x{item.quantity}</span>span>
                                                                                                        <span style={{ flex:1, color:"#ddd" }}>{item.name}</span>span>
                                                                                                        <span style={{ color:"#e07b2e", fontWeight:600, fontSize:13 }}>Rs.{item.price * item.quantity}</span>span>
                                                                                </li>li>
                                                                            ))}
                                                                        </ul>ul>
                                                                        <div style={{ opacity:0.55, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:12 }}>
                                                                                              <span style={{ fontWeight:800, fontSize:17, color:"#fff" }}>Total: Rs.{order.total}</span>span>
                                                                        </div>div>
                                                    </div>div>
                                                  ))}
                                              </div>div>
                                </div>div>
                            )}
                  </>>
                )}
        </div>div>
      );
}
</></div>
