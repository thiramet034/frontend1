'use client';

export default function Footer() {
  return (
    <>
      <style jsx>{`
        .enhanced-footer {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: #e2e8f0;
          margin-top: auto;
        }

        .social-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
        }

        .social-text {
          color: #cbd5e1;
          font-weight: 500;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #e2e8f0;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
        }

        .social-link.facebook:hover { background: #1877f2; border-color: #1877f2; }
        .social-link.twitter:hover { background: #1da1f2; border-color: #1da1f2; }
        .social-link.instagram:hover { 
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
          border-color: #e6683c;
        }
        .social-link.linkedin:hover { background: #0077b5; border-color: #0077b5; }
        .social-link.github:hover { background: #333; border-color: #333; }
        .social-link.google:hover { background: #ea4335; border-color: #ea4335; }

        .main-content {
          padding: 3rem 0 2rem;
        }

        .footer-section {
          margin-bottom: 2rem;
        }

        .section-title {
          color: #f8fafc;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-align: center;
        }

        .section-title::after {
          content: '';
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          border-radius: 1px;
        }

        .section-title .icon {
          color: #3b82f6;
          font-size: 1.2rem;
        }

        .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          padding: 0.3rem 0;
          position: relative;
        }

        .footer-link:hover {
          color: #3b82f6;
          padding-left: 0.5rem;
        }

        .footer-text {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #cbd5e1;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 0.9rem;
        }

        .company-section {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding-right: 2rem;
        }

        .copyright-section {
          background: rgba(0, 0, 0, 0.3);
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .copyright-text {
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
        }

        .copyright-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .copyright-link:hover {
          color: #60a5fa;
        }

        @media (max-width: 768px) {
          .social-section {
            text-align: center;
          }
          
          .social-text {
            margin-bottom: 1rem;
          }
          
          .company-section {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 2rem;
            margin-bottom: 2rem;
          }
          
          .main-content {
            padding: 2rem 0 1rem;
          }
        }

        .newsletter-section {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }

        .newsletter-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: white;
          width: 100%;
          margin-bottom: 1rem;
        }

        .newsletter-input::placeholder {
          color: #94a3b8;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-btn {
          background: #3b82f6;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
          width: 100%;
        }

        .newsletter-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      <footer className="enhanced-footer">
        {/* Social Media Section */}
        <section className="social-section">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <p className="social-text d-none d-lg-block">
                🌟 ติดตามเราบนโซเชียลมีเดีย
              </p>
              <div className="social-links">
                <a href="#" className="social-link facebook" title="Facebook">
                  📘
                </a>
                <a href="#" className="social-link twitter" title="Twitter">
                  🐦
                </a>
                <a href="#" className="social-link google" title="Google">
                  📧
                </a>
                <a href="#" className="social-link instagram" title="Instagram">
                  📸
                </a>
                <a href="#" className="social-link linkedin" title="LinkedIn">
                  💼
                </a>
                <a href="#" className="social-link github" title="GitHub">
                  💻
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="main-content">
          <div className="container">
            <div className="row">
              {/* Company Info */}
              <div className="col-lg-4 col-md-6 footer-section company-section">
                <h6 className="section-title">
                  <span className="icon">✨</span>
                  บริษัทของเรา
                </h6>
                <p className="footer-text">
                  เราเป็นบริษัทที่มุ่งมั่นในการพัฒนาผลิตภัณฑ์และบริการที่มีคุณภาพสูง 
                  เพื่อตอบสนองความต้องการของลูกค้าในยุคดิจิทัล
                </p>
                
                <div className="newsletter-section">
                  <h6 style={{color: '#f8fafc', fontSize: '0.9rem', marginBottom: '1rem'}}>
                    📬 สมัครรับข่าวสาร
                  </h6>
                  <input 
                    type="email" 
                    className="newsletter-input" 
                    placeholder="อีเมลของคุณ..."
                  />
                  <button className="newsletter-btn">
                    สมัครสมาชิก
                  </button>
                </div>
              </div>

              {/* Services */}
              <div className="col-lg-2 col-md-6 footer-section">
                <h6 className="section-title">
                  <span className="icon">🛠️</span>
                  บริการ
                </h6>
                <p><a href="#" className="footer-link">พัฒนาเว็บไซต์</a></p>
                <p><a href="#" className="footer-link">แอปพลิเคชัน</a></p>
                <p><a href="#" className="footer-link">ระบบจัดการ</a></p>
                <p><a href="#" className="footer-link">ปรึกษาด้าน IT</a></p>
                <p><a href="#" className="footer-link">บำรุงรักษา</a></p>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6 footer-section">
                <h6 className="section-title">
                  <span className="icon">🔗</span>
                  ลิงก์ด่วน
                </h6>
                <p><a href="contact" className="footer-link">เกี่ยวกับเรา</a></p>
                <p><a href="contact" className="footer-link">ติดต่อเรา</a></p>
                <p><a href="#" className="footer-link">นโยบายความเป็นส่วนตัว</a></p>
                <p><a href="#" className="footer-link">เงื่อนไขการใช้งาน</a></p>
                <p><a href="#" className="footer-link">คำถามที่พบบ่อย</a></p>
              </div>

              {/* Contact */}
              <div className="col-lg-4 col-md-6 footer-section">
                <h6 className="section-title">
                  <span className="icon">📞</span>
                  ติดต่อเรา
                </h6>
                
                <div className="contact-item">
                  <div className="contact-icon">🏢</div>
                  <span>123 ถนน xxxxx</span>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <span>info@company.co.th</span>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <span>+66 2 123 4567</span>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📠</div>
                  <span>+66 2 123 4568</span>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <span>จันทร์-ศุกร์ 9:00-18:00 น.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="copyright-section">
          <div className="container">
            <p className="copyright-text">
              © {new Date().getFullYear()} สงวนลิขสิทธิ์ | 
              <a className="copyright-link" href="#"> บริษัท เทคโนโลยี จำกัด</a> | 
              Made with ❤️ in Thailand
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}