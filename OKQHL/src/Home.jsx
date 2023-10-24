function Home() {
  return (
    <>
      <div className="container-fluid bg-img py-5 mt-lg-5">
        <div className="container">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">

                <div className="row py-5 justify-content-center align-items-center">
                  <div className="col-md-4 text-white d-flex flex-column gap-2">
                    <div>
                      <img src="title-icon.png" className="img-fluid"></img>

                    </div>
                    <h5 className="home-title homeHeading"> <span className=" home-slderHeading">Order of the</span> <br></br>
                      Kings and Queens <br />
                      in the Holy Lands</h5>
                    <p className="content">is simply dummy text of thprinting and typesetting ndustry.Lorem Ipsum has been the industry&apos;s stand ard dummy text ever since
                    </p>
                    <button className="learnMore">Membership</button>
                  </div>
                  <div className="col-md-8 position-relative">
                  <img src="firecenter.png" className="img-fluid "></img>
                    <img src="map.png" className="img-fluid "></img>
                   

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





