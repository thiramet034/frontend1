'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <style>{`
        body, html {
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          background-color: #f8f9fa;
        }

        .login-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          max-width: 400px;
          width: 100%;
        }

        .login-header {
          font-weight: 800;
          font-size: 1.75rem;
          color: #333;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .form-label {
          font-weight: 600;
        }

        .form-control {
          border-radius: 10px;
        }

        .input-group-text {
          background: #f1f1f1;
          border-radius: 10px 0 0 10px;
        }

        .btn-login {
          background-color: #2575fc;
          border: none;
          font-weight: 700;
          border-radius: 10px;
          padding: 0.75rem;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          color: white;
        }

        .btn-login:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(37, 117, 252, 0.4);
        }

        .text-link {
          color: #2575fc;
          font-weight: 600;
          text-decoration: none;
        }

        .text-link:hover {
          text-decoration: underline;
        }

        .fade-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          flex-direction: column;
        }
      `}</style>

      <div className="fade-wrapper">
        <div className="login-card">
          <div className="text-center mb-4">
            <i className="fas fa-user-circle fa-3x text-primary mb-2"></i>
            <div className="login-header">เข้าสู่ระบบ</div>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">อีเมล</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">รหัสผ่าน</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="รหัสผ่านของคุณ"
                  required
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">จำฉันไว้</label>
            </div>

            <button type="submit" className="btn btn-login w-100 mb-3">
              <i className="fas fa-sign-in-alt me-2"></i> เข้าสู่ระบบ
            </button>

            <div className="text-center">
              <span>ยังไม่มีบัญชี? </span>
              <Link href="/register" className="text-link">สมัครสมาชิก</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
