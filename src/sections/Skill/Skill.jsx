import Slider from "react-slick";
import CardIcons from "../../components/CardIcons/CardIcons";
import Styles from "./Skill.module.css";
import "../../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skill() {
  const icons = [
    { id: 1, icon: "fa-brands fa-html5", title: "HTML5" },
    { id: 2, icon: "fa-brands fa-css3-alt", title: "CSS3" },
    { id: 3, icon: "fa-brands fa-js", title: "JavaScript" },
    { id: 4, icon: "fa-brands fa-php", title: "PHP" },
    { id: 5, icon: "fa-brands fa-laravel", title: "Laravel" },
    { id: 6, icon: "fa-brands fa-bootstrap", title: "Bootstrap" },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={Styles.skill} id="skill">
      <div className="container">
        <div className={Styles.content}>
          <h1 className="title">Keahlian Teknis</h1>
          <p className="subtitle">Teknologi yang saya kuasai</p>
        </div>
        <Slider {...settings}>
          {icons.map((item) => (
            <CardIcons key={item.id} icon={item.icon} title={item.title} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Skill;
