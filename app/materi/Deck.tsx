"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const W = 1280;
const H = 720;

function readHash(total: number) {
  const n = parseInt(window.location.hash.replace(/^#\/?/, ""), 10);
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), total - 1) : 0;
}

export default function Deck({ slides, titles }: { slides: React.ReactNode[]; titles: string[] }) {
  const total = slides.length;
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(1);
  const [menu, setMenu] = useState(false);
  const touch = useRef<number | null>(null);

  const go = useCallback(
    (n: number) => {
      const next = Math.min(Math.max(n, 0), total - 1);
      setI(next);
      history.replaceState(null, "", `#${next + 1}`);
    },
    [total],
  );

  useEffect(() => {
    setI(readHash(total));
    const onHash = () => setI(readHash(total));
    const fit = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
    fit();
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", fit);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", fit);
    };
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); go(i + 1); }
      else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); go(i - 1); }
      else if (k === "Home") go(0);
      else if (k === "End") go(total - 1);
      else if (k === "m" || k === "M") setMenu((v) => !v);
      else if (k === "Escape") setMenu(false);
      else if (k === "f" || k === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go, total]);

  return (
    <main
      className="deck"
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
        touch.current = null;
      }}
    >
      <div className="stage" style={{ width: W, height: H, transform: `translate(-50%, -50%) scale(${scale})` }}>
        {slides.map((s, idx) => (
          <div key={idx} className={idx === i ? "frame active" : "frame"} aria-hidden={idx !== i}>
            {s}
          </div>
        ))}
        <div className="footer">
          <span>Materi Next.js · nextjs.dihapra.dev/materi</span>
          <span>{i + 1} / {total}</span>
        </div>
        <div className="progress" style={{ width: `${((i + 1) / total) * 100}%` }} />
      </div>

      <nav className="controls" aria-label="Navigasi slide">
        <button onClick={() => go(i - 1)} disabled={i === 0} aria-label="Sebelumnya">‹</button>
        <button onClick={() => setMenu((v) => !v)} aria-label="Daftar slide">☰</button>
        <button onClick={() => go(i + 1)} disabled={i === total - 1} aria-label="Berikutnya">›</button>
      </nav>

      {menu && (
        <div className="menu" onClick={() => setMenu(false)}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="menu-head">
              <strong>Daftar Slide</strong>
              <span>← → pindah · M menu · F fullscreen</span>
            </div>
            <ol>
              {titles.map((t, idx) => (
                <li key={idx}>
                  <button className={idx === i ? "cur" : ""} onClick={() => { go(idx); setMenu(false); }}>
                    <span>{idx + 1}</span> {t}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </main>
  );
}
