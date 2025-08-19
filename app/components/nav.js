import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* เมนูด้านซ้าย */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                ติดต่อเรา
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                บริการ
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>

          {/* ปุ่มค้นหา + ลิงก์ล็อกอินด้านขวา */}
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
            <Link href="/login" className="btn btn-outline-primary rounded-pill">
              เข้าสู่ระบบ
            </Link>
            <Link href="/register" className="btn btn-primary rounded-pill">
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
