import CardPortfolio from "../../components/CardPortfolio/CardPortfolio";
import styles from "../../components/CardPortfolio/CardPortfolio.module.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      image: "/images/company.png",
      title: "E-Commerce Dashboard",
      description:
        "Website company profile dengan halaman Home, About, Services, Pricing, dan Contact.",
      techs: ["Bootstrap", "JavaScript", "CSS"],
      demoLink: "https://companyprofilebasic.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.portfolioContainer}>
        <h1 className={styles.portfolioTitle}>Portfolio Saya</h1>
        <p className={styles.portfolioSubtitle}>
          Website yang pernah saya buat
        </p>

        <div className={styles.portfolioGrid}>
          {projects.map((item) => (
            <CardPortfolio key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
