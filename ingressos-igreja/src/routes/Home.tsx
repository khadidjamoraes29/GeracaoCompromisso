import Slider from "react-slick";
import "slick-carousel/slick/slick.css";   // IMPORTANTE
import "slick-carousel/slick/slick-theme.css"; // IMPORTANTE
import "./Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const images = [
    "/carrossel/DSC_0028.JPG",
    "/carrossel/DSC_0110.JPG",
    "/carrossel/DSC_0111.JPG",
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: images.length < 3 ? images.length : 3, // evita bug se tiver poucas imagens
    speed: 500,
    dots: true,
    arrows: true, // mostra setas (opcional)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <div className="home">
      <NavBar />
      <div className="hero-images">
        <img
          src="/desktop-hero.svg"
          alt="Banner para Desktop"
          className="desktop-image"
        />
        <img
          src="/mobile-hero.svg"
          alt="Banner para Mobile"
          className="mobile-image"
        />
      </div>

      <div className="button-container">
        <a href="/comprar" className="btn">Comprar Ingresso</a>
      </div>

      <div className="scroll-indicator">
        <p>Veja mais do evento</p>
        <div className="arrow-down"></div>
      </div>

      <div className="carousel">
        <Slider {...settings}>
          {images.map((imgSrc, index) => (
            <div key={index} className="slick-image-container">
              <img src={imgSrc} alt={`Carrossel ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
}
