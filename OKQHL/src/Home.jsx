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
                    <p>is simply dummy text of thprinting and typesetting ndustry.Lorem Ipsum has been the industry's stand ard dummy text ever since </p>

                  </div>
                  <div className="col-md-8">
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



    </>
  );
}

export default Home;





