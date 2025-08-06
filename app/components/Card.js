export default function Card() {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/Card/Card-04.png" className="card-img-top" alt="Sample" />
                        <div className="card-body">
                            <h5 className="card-title">รองเท้าหนัง</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/Card/Card-05.png" className="card-img-top" alt="Sample" />
                        <div className="card-body">
                            <h5 className="card-title">รองเท้าเเตะ</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/Card/Card-06.png" className="card-img-top" alt="Sample" />
                        <div className="card-body">
                            <h5 className="card-title">รองเท้าช้างดาว</h5>
                            <p className="card-text">150 .-</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

