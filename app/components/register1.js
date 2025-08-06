"use client";

import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Register1() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    let frameId = null;

    const handleMouseMove = (e) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = ((y / height) - 0.5) * 10;
        const rotateY = ((x / width) - 0.5) * 10;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const resetTransform = () => {
      if (frameId) cancelAnimationFrame(frameId);
      // เพิ่ม transition ยาวสำหรับตอนรีเซ็ต
      card.style.transition = "transform 0.5s ease";
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    const clearTransition = () => {
      // ลด transition ลงตอน hover เพื่อให้การหมุนตามเมาส์สมูท
      card.style.transition = "transform 0.1s ease";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTransform);
    card.addEventListener("mouseenter", clearTransition);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTransform);
      card.removeEventListener("mouseenter", clearTransition);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>สมัครสมาชิก</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        html, body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(-45deg, #f3ec78, #af4261, #74ebd5, #acb6e5);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .register-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 15px;
          perspective: 1000px;
        }

        .register-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 40px 30px;
          width: 100%;
          max-width: 700px;
          animation: fadeInUp 0.6s ease;
          /* transition แบบสั้นตอน hover */
          transition: transform 0.1s ease-in-out;
          transform-style: preserve-3d;
          will-change: transform; /* ช่วยให้ browser จัดการ animation ดีขึ้น */
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-label {
          font-weight: 600;
          color: #333;
        }

        .form-control:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);
        }

        .input-group-text {
          background-color: #f1f1f1;
          border-right: 0;
        }

        .form-control {
          border-left: 0;
        }

        .btn-success {
          background-color: #28a745;
          border: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-success:hover {
          background-color: #1e7e34;
          transform: scale(1.01);
        }

        a {
          color: #28a745;
          text-decoration: underline;
        }

        a:hover {
          color: #1e7e34;
        }
      `}</style>

      <div className="register-wrapper">
        <div className="register-card" ref={cardRef}>
          <h3 className="text-center mb-4 text-success">
            <i className="fas fa-user-plus me-2"></i>สมัครสมาชิก
          </h3>

          <form>
            {/* คำนำหน้าชื่อ */}
            <div className="mb-3">
              <label htmlFor="prefix" className="form-label">คำนำหน้าชื่อ</label>
              <select className="form-select" id="prefix" required>
                <option value="">-- เลือก --</option>
                <option value="mr">นาย</option>
                <option value="mrs">นาง</option>
                <option value="miss">นางสาว</option>
              </select>
            </div>

            {/* ชื่อและนามสกุล */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">ชื่อ</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                  <input type="text" className="form-control" id="firstName" required />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">นามสกุล</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="fas fa-user-tag"></i></span>
                  <input type="text" className="form-control" id="lastName" required />
                </div>
              </div>
            </div>

            {/* ชื่อผู้ใช้ */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fas fa-id-badge"></i></span>
                <input type="text" className="form-control" id="username" required />
              </div>
            </div>

            {/* รหัสผ่าน */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">รหัสผ่าน</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fas fa-lock"></i></span>
                <input type="password" className="form-control" id="password" required />
              </div>
            </div>

            {/* ที่อยู่ */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">ที่อยู่</label>
              <textarea className="form-control" id="address" rows="3" required />
            </div>

            {/* เพศ */}
            <div className="mb-3">
              <label className="form-label">เพศ</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="male" required />
                  <label className="form-check-label" htmlFor="male">ชาย</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                  <label className="form-check-label" htmlFor="female">หญิง</label>
                </div>
              </div>
            </div>

            {/* วันเกิด */}
            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">วันเกิด</label>
              <input type="date" className="form-control" id="birthdate" required />
            </div>

            {/* ยอมรับเงื่อนไข */}
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                ฉันยอมรับ <a href="#">เงื่อนไขและข้อตกลง</a>
              </label>
            </div>

            {/* ปุ่มสมัคร */}
            <button type="submit" className="btn btn-success w-100">
              <i className="fas fa-user-plus me-2"></i>สมัครสมาชิก
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
