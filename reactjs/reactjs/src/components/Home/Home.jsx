import React from "react";
import styles from "./Home.module.css";
//import avatar from "../../assets/img/profile.JPG";

const Home = () => (
  <section className={styles.homeSection}>
    <div className={styles.hero}>
      <img src="{avatar}" alt="Tang Xuan Duc" className={styles.avatar} />
      <h1 className={styles.name}>Tang Xuan Duc</h1>
      <h2 className={styles.role}>Backend Software Engineer</h2>
      <div className={styles.slogan}>
        "Desire to become a Fullstack Developer, always learning and dedicated to excellence."
      </div>
      <div className={styles.actions}>
        <a href="#portfolio" className={styles.btn}>Portfolio</a>
        <a href="#contact" className={styles.btn}>Contact</a>
        <a href="/assets/CV_TangXuanDuc.pdf" className={styles.btn} download>Download CV</a>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/duckio2016" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://www.facebook.com/duckio2016" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="mailto:duckio2016@gmail.com" title="Email"><i className="fa fa-envelope"></i></a>
      </div>
    </div>
  </section>
);

export default Home;
