'use client';

import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2500"
      data-bs-pause="false" // ✅ ป้องกันหยุดเมื่อ hover
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/sliders/sliders-04.png"
            className="d-block w-100"
            alt="slider 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/sliders/sliders-05.png"
            className="d-block w-100"
            alt="slider 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/sliders/sliders-06.png"
            className="d-block w-100"
            alt="slider 3"
          />
        </div>
      </div>

      {/* ปุ่มควบคุมซ้าย-ขวา (เอาออกได้ถ้าไม่ต้องการควบคุมด้วยมือ) */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
