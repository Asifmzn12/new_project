function Home() {
  return (
    <>
      <div className="container-fluid bg-img">
        <div className="container">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">

                <div className="row py-5 justify-content-center align-items-center">
                  <div className="col-md-4 text-white d-flex flex-column">
                    <div>
                      <img src="title-icon.png" className="img-fluid"></img>

                    </div>
                    <h5>WHERE IT ALL BEGAN</h5>
                    <h6>How are We?</h6>
                    <p>The Order is a non-profit charity, of the type referred to as a hereditary society .The Objects of the Order are charitable and educational and shall specifically serve to encourage the study of history; to verify the genealogy of descendants of monarchs who were present in the Holy Lands in his or her lifetime; to accomplish research, preserve manuscripts, wills, deeds, and other documents; to support the restoration of </p>

                  </div>
                  <div className="col-md-5">
                    <img src="map.png" className="img-fluid"></img>

                  </div>

                </div>
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h3>WHERE IT ALL BEGAN</h3>
            <h4>How are We?</h4>
            <p>The Order is a non-profit charity, of the type referred to as a hereditary society. The Objects of the Order are charitable and educational and shall specifically serve to encourage the study of history; to verify the genealogy of descendants of monarchs who were present in the Holy Lands in his or her lifetime; to accomplish research, preserve manuscripts, wills, deeds, and other documents; to support the restoration of</p>
          </div>
          <div className="col-md-6 position-relative">
            <img src="children.png" className="img-fluid" alt="Children" />
            <img src="playicon.png" className="img-fluid position-absolute playicon" alt="Play Icon" />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row position-relative justify-content-center align-items-center">
          <div className="col-md-4 ">
            <div className="card justify-content-center align-items-center gap-3">
             <div>
              <img src="makebitimpact.png" className="img-fluid"></img>
             </div>
                <div className="card-body text-center">
                <h4 className="fw-bold">Tackling Poverty</h4>
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          </div>
          <div className="col-md-4 ">
          <div className="card  justify-content-center align-items-center gap-3  ">
          <div>
              <img src="makebitimpact.png" className="img-fluid"></img>
             </div>
              <div className="card-body text-center">
              <h4 className="fw-bold">Tackling Poverty</h4>

                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        <div className="col-md-4 ">
        <div className="card  justify-content-center align-items-center gap-3  ">
        <div>
            <img src="makebitimpact.png" className="img-fluid"></img>
           </div>
            <div className="card-body text-center">
            <h4 className="fw-bold">Tackling Poverty</h4>

              <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>


        </div>

      </div>
    </>
  );
}

export default Home;





