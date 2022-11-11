import "./Carousel.css";

type CarouselProps={

}

export default function Carousel(props:CarouselProps) {
    return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1" ></button>
            <div className="carousel-item active">
                <img src={"https://i.seadn.io/gae/oE-jyaS5RcIRkjVRqJ8nqYLN8U5G6wU5gWqBcKI_n3aUxu17TA24t2CK6ZBKxmQsKOW6rKdflexBG9EpbtEiSqB4wiw-Qcx6-qzyhg?auto=format&w=512"} className="d-block w-100" alt="..."/>
            </div>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

            <div className="carousel-item">
                <img src={"https://i.seadn.io/gae/c2YKTRh5PCNXIwDxMqPq2I1nTeYjUNCS3HS1Z-REd6H0UaXghXaD5Qd-BJjK8_V31U6sr39G_5zNHPN6A6asBvKHWwS9UT0fiN-C?auto=format&w=512"} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>)
};



