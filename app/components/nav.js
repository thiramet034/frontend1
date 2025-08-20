'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <style jsx>{`
        .navbar-wrapper {
          background-color: #1e90ff;
          width: 100%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease;
          border-top: 4px solid #ffffff55;
          border-bottom: 4px solid #ffffff55;
          padding: 0.5rem 2rem;
          font-weight: bold; /* 🔥 ทำให้ข้อความทั้งหมดใน navbar-wrapper หนา */
        }

        .custom-navbar .nav-link,
        .custom-navbar .navbar-brand {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
          font-weight: bold; /* 🔥 ตัวหนาเพิ่มความชัดเจน */
        }

        .custom-navbar .nav-link:hover,
        .custom-navbar .navbar-brand:hover {
          color: #e6e6e6;
          transform: translateY(-2px);
        }

        .navbar-brand {
          font-weight: bold;
          font-size: 1.5rem;
        }

        .nav-link {
          padding: 0.5rem 1rem;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 2px;
          background-color: white;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .search-form input,
        .search-form button {
          border-radius: 0.25rem;
          transition: all 0.3s ease;
          font-weight: bold; /* 🔥 ตัวหนาใน input & ปุ่มค้นหา */
        }

        .search-form input::placeholder {
          font-weight: bold; /* 🔥 ตัวหนาใน placeholder */
        }

        .search-form input:focus {
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }

        .search-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .btn {
          transition: all 0.3s ease;
          font-weight: bold; /* 🔥 ตัวหนาในปุ่มทั้งหมด */
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .rounded-pill {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `}</style>

      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              Fishing Rod
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" className="nav-link active">
                    หน้าแรก
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    ติดต่อเรา
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services" className="nav-link">
                    บริการ
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </span>
                </li>
              </ul>

              <div className="d-flex align-items-center gap-2">
                <form className="d-flex search-form" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="ค้นหา"
                    aria-label="Search"
                  />
                  <button className="btn btn-success search-btn" type="submit">
                    ค้นหา
                  </button>
                </form>

                <Link href="/login" className="btn btn-outline-light rounded-pill">
                  เข้าสู่ระบบ
                </Link>
                <Link href="/register" className="btn btn-light text-dark rounded-pill">
                  สมัครสมาชิก
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
