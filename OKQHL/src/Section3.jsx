import { cards } from "./config/cards"
function Section3() {
    return (
        <div>
            <div className=" position-relative  m-0 p-0 py-5">
                <div className="container borderrounded  bg-white z-2 py-5">
                    <div className="row  border-right position-relative justify-content-center align-items-center">
                        {cards.map((cardinfo, index) => (
                            <div className="col-md-4 brdr content  position-relative d-flex flex-column justify-content-center align-items-center" key={index}>
                                <div className="imgcontainer">
                                    <img src={cardinfo.img}></img>
                                </div>
                                <div className="text-center">
                                    <h5 className="py-1">{cardinfo.title}</h5>
                                    <p className="py-1">{cardinfo.para}</p>


                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div className="col-md-4 position-absolute top-0 yellowbox box1 d-none d-xl-block   ">
                        <img src="yellowbox.png" className="img-fluid "></img>

                    </div>
                    <div className="col-md-4 position-absolute bottom-0 end-0 yellowbox d-none d-xl-block ">
                        <img src="yellowbox.png" className="img-fluid "></img>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Section3
