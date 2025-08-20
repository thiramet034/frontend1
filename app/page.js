'use client';

import Card from "./components/Card";
import Carousel from "./components/Carousel";

export default function Home() {
  // สร้าง array สำหรับปลาหลายตัว
  const fishCount = 30;
  const fishes = Array.from({ length: fishCount }).map((_, i) => {
    const isSmall = i % 3 === 0; // ตัวเล็ก 1 ใน 3 ตัว
    const topPos = 30 + Math.random() * 50; // ตำแหน่ง top ระหว่าง 30% - 80%
    const delay = Math.random() * 15; // delay ต่างกัน
    return { id: i, isSmall, topPos, delay };
  });

  return (
    <div className="ocean-wrapper">
      <style jsx>{`
        .ocean-wrapper {
          position: relative;
          background: linear-gradient(to bottom, #5bd8ff, #0077be);
          min-height: 100vh;
          padding: 2rem;
          color: white;
          overflow: hidden;
        }

        .home-title {
          text-align: center;
          font-size: 2.5rem;
          margin: 2rem 0;
          font-weight: bold;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        }

        .card-section {
          margin-top: 3rem;
        }

        /* ลูกโป่ง */
        .balloon {
          position: absolute;
          width: 40px;
          height: 60px;
          background: radial-gradient(circle at 30% 30%, #fff, #ff6ec4);
          border-radius: 50%;
          animation: floatUp 10s infinite linear;
          opacity: 0.8;
        }

        .balloon::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          width: 2px;
          height: 20px;
          background: white;
          transform: translateX(-50%);
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) translateX(-20px) rotate(10deg);
          }
        }

        /* สาหร่าย */
        .seaweed {
          width: 6px;
          background: #2e8b57;
          border-radius: 10px;
          animation: sway 2s infinite ease-in-out alternate;
          transform-origin: bottom center;
        }

        .seaweed-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          z-index: 1;
          padding: 0 4px;
        }

        @keyframes sway {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(8deg);
          }
        }

        /* ปลาว่ายน้ำ */
        .fish {
          position: absolute;
          width: 60px;
          height: 30px;
          background: orange;
          border-radius: 50%;
          animation: swim 15s linear infinite;
          z-index: 2;
        }

        .fish::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 8px;
          width: 0;
          height: 0;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-right: 10px solid orange;
        }

        .fish.small {
          width: 30px;
          height: 15px;
          animation: swim 10s linear infinite reverse;
          background: #0000FF;
          border-radius: 50%;
        }

        @keyframes swim {
          0% {
            left: -100px;
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(1);
          }
          100% {
            left: 110%;
            transform: scaleX(1);
          }
        }
      `}</style>

      {/* ลูกโป่งลอยขึ้น */}
      <div className="balloon" style={{ left: "30%" }}></div>
      <div className="balloon" style={{ left: "60%", animationDelay: "3s" }}></div>
      <div className="balloon" style={{ left: "80%", animationDelay: "6s" }}></div>

      {/* สาหร่ายจำนวนมากเต็มพื้น */}
      <div className="seaweed-container">
        {Array.from({ length: 60 }).map((_, index) => {
          const height = Math.floor(Math.random() * 60) + 60; // 60px - 120px
          const delay = (index % 10) * 0.2; // ไล่ delay สวยงาม
          return (
            <div
              className="seaweed"
              key={index}
              style={{
                height: `${height}px`,
                animationDelay: `${delay}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* ปลาเยอะๆ ลดเหลือ 10 ตัว */}
      {fishes.slice(0, 10).map(({ id, isSmall, topPos, delay }) => (
        <div
        key={id}
        className={`fish ${isSmall ? "small" : ""}`}
        style={{ top: `${topPos}%`, animationDelay: `${delay}s` }}
      ></div>
    ))}


      <Carousel />

      <div className="card-section">
        <Card />
      </div>
    </div>
  );
}
