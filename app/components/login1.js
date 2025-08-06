"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login1() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // รอให้ component โหลดเสร็จ แล้ว trigger animation
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>เข้าสู่ระบบ</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        body, html {
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(-45deg, #74ebd5, #acb6e5, #ffdde1, #c1dfc4);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

        .login-card {
          border: none;
          border-radius: 20px;
          padding: 30px;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .login-card.loaded {
          animation: fadeInUp 0.5s forwards ease-out;
        }

        .login-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .login-icon {
          font-size: 3rem;
          color: #007bff;
        }

        .btn-primary {
          background-color: #007bff;
          border: none;
          transition: background-color 0.3s ease, transform 0.15s ease;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        .input-group-text {
          background-color: #f8f9fa;
        }

        .form-label {
          font-weight: 500;
        }

        .text-link {
          color: #007bff;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .text-link:hover {
          text-decoration: underline;
          color: #0056b3;
        }
      `}</style>

      <div className="d-flex align-items-center justify-content-center vh-100">
        <div
          className={`login-card ${loaded ? "loaded" : ""}`}
          style={{ width: "100%", maxWidth: "420px" }}
        >
          <div className="text-center mb-4">
            <i className="fas fa-user-circle login-icon"></i>
            <h3 className="mt-2">เข้าสู่ระบบ</h3>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">อีเมล</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope text-primary"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">รหัสผ่าน</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock text-primary"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="รหัสผ่าน"
                  required
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">จำฉันไว้</label>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              <i className="fas fa-sign-in-alt me-2"></i>เข้าสู่ระบบ
            </button>

            <div className="text-center">
              <span>ยังไม่มีบัญชีใช่ไหม? </span>
              <Link href="/register" className="text-link">สมัครสมาชิก</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
