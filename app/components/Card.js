"use client"
import { useState } from 'react';

export default function Card() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cardData = [
        {
            id: 1,
            image: "/images/Card/Card-04.png",
            title: "รองเท้าหนัง",
            description: "รองเท้าหนังแท้คุณภาพสูง ใส่สบาย ทนทาน เหมาะสำหรับงานทางการ",
            price: "2,990",
            originalPrice: "3,500",
            rating: 4.8,
            reviews: 127
        },
        {
            id: 2,
            image: "/images/Card/Card-05.png",
            title: "รองเท้าแตะ",
            description: "รองเท้าแตะสไตล์สปอร์ต วัสดุคุณภาพ น้ำหนักเบา ใส่สบายตลอดวัน",
            price: "890",
            originalPrice: "1,200",
            rating: 4.5,
            reviews: 89
        },
        {
            id: 3,
            image: "/images/Card/Card-06.png",
            title: "รองเท้าช้างดาว",
            description: "รองเท้าผ้าใบคลาสสิค สไตล์วินเทจ ใส่ได้ทุกโอกาส",
            price: "150",
            originalPrice: null,
            rating: 4.2,
            reviews: 234
        }
    ];

    return (
        <>
            <style jsx>{`
                .enhanced-card {
                    border: none;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    background: white;
                    position: relative;
                }

                .enhanced-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
                }

                .card-image-container {
                    position: relative;
                    overflow: hidden;
                    height: 250px;
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                }

                .enhanced-card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .enhanced-card:hover .enhanced-card-img {
                    transform: scale(1.05);
                }

                .discount-badge {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    z-index: 2;
                }

                .card-body-enhanced {
                    padding: 1.5rem;
                }

                .card-title-enhanced {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                }

                .card-description {
                    color: #64748b;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                }

                .rating-container {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .stars {
                    color: #fbbf24;
                    font-size: 0.9rem;
                }

                .rating-text {
                    color: #64748b;
                    font-size: 0.8rem;
                }

                .price-container {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }

                .current-price {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #059669;
                }

                .original-price {
                    font-size: 1rem;
                    color: #94a3b8;
                    text-decoration: line-through;
                }

                .currency {
                    font-size: 1rem;
                    color: #059669;
                    font-weight: 500;
                }

                .btn-enhanced {
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    border: none;
                    border-radius: 12px;
                    padding: 0.75rem 1.5rem;
                    color: white;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .btn-enhanced:hover {
                    background: linear-gradient(135deg, #1d4ed8, #1e40af);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
                    color: white;
                }

                .btn-enhanced:active {
                    transform: translateY(0);
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 3rem;
                    color: #1e293b;
                }

                .section-title h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .section-title p {
                    color: #64748b;
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .container-enhanced {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 4rem 1rem;
                }

                @media (max-width: 768px) {
                    .card-image-container {
                        height: 200px;
                    }
                    
                    .section-title h2 {
                        font-size: 2rem;
                    }
                    
                    .container-enhanced {
                        padding: 2rem 1rem;
                    }
                }

                .heart-icon {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    color: #64748b;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    z-index: 2;
                }

                .heart-icon:hover {
                    background: #ef4444;
                    color: white;
                    transform: scale(1.1);
                }
            `}</style>
            
            <div className="container-enhanced">
                <div className="section-title">
                    <h2>🛍️ สินค้าแนะนำ</h2>
                    <p>เลือกสรรสินค้าคุณภาพดี ราคาดี จากร้านของเรา</p>
                </div>
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {cardData.map((item, index) => (
                        <div className="col" key={item.id}>
                            <div 
                                className="card h-100 enhanced-card"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="card-image-container">
                                    <button className="heart-icon">
                                        {hoveredCard === index ? '❤️' : '🤍'}
                                    </button>
                                    
                                    {item.originalPrice && (
                                        <div className="discount-badge">
                                            -{Math.round((1 - parseFloat(item.price.replace(',', '')) / parseFloat(item.originalPrice.replace(',', ''))) * 100)}%
                                        </div>
                                    )}
                                    
                                    <img 
                                        src={item.image} 
                                        className="enhanced-card-img" 
                                        alt={item.title}
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/300x250/f1f5f9/64748b?text=${encodeURIComponent(item.title)}`;
                                        }}
                                    />
                                </div>
                                
                                <div className="card-body-enhanced">
                                    <h5 className="card-title-enhanced">{item.title}</h5>
                                    <p className="card-description">{item.description}</p>
                                    
                                    <div className="rating-container">
                                        <div className="stars">
                                            {'★'.repeat(Math.floor(item.rating))}
                                            {'☆'.repeat(5 - Math.floor(item.rating))}
                                        </div>
                                        <span className="rating-text">
                                            {item.rating} ({item.reviews} รีวิว)
                                        </span>
                                    </div>
                                    
                                    <div className="price-container">
                                        <span className="current-price">
                                            ฿{item.price}
                                        </span>
                                        {item.originalPrice && (
                                            <span className="original-price">
                                                ฿{item.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <button className="btn btn-enhanced">
                                        🛒 เพิ่มลงตะกร้า
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}