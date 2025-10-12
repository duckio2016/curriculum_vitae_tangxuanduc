import React from "react";
import styles from "./About.module.css";
import avatar from "../../assets/img/profile.JPG";

const About = () => (
  <section className={styles.aboutSection}>
    <h2 className={styles.heading}>About Me</h2>
    <div className={styles.infoCard}>
      <div className={styles.avatarCol}>
        <img src={avatar} alt="Profile" className={styles.avatar} />
        <h4 className={styles.name}>Tang Xuan Duc</h4>
        <div className={styles.role}>Full Stack Developer</div>
        <div className={styles.details}>
          <div><i className="fas fa-birthday-cake"></i> <b>Birthday:</b> 01 Jan 2001</div>
          <div><i className="fas fa-map-marker-alt"></i> <b>Location:</b> Hanoi, Vietnam</div>
          <div><i className="fas fa-envelope"></i> <b>Email:</b> tangxuanduc.dev@gmail.com</div>
          <div><i className="fas fa-phone"></i> <b>Phone:</b> +84 123 456 789</div>
        </div>
      </div>
      <div className={styles.descCol}>
        <div className={styles.badges}>
          <span className={styles.badge}><i className="fas fa-code"></i> Front-end</span>
          <span className={styles.badge}><i className="fas fa-server"></i> Back-end</span>
          <span className={styles.badge}><i className="fas fa-pencil-ruler"></i> UI/UX</span>
          <span className={styles.badge}><i className="fas fa-users"></i> Teamwork</span>
        </div>
        <ul className={styles.summary}>
          <li>5+ năm phát triển web (Ecommerce, CMS, EDI, WMS)</li>
          <li>Thành thạo: HTML, CSS, JS, .NET, SQL, Git</li>
          <li>Kỹ năng teamwork, tự học, giải quyết vấn đề</li>
        </ul>
        <div className={styles.careerGoal}>
          <div className={styles.careerIcon}><i className="fas fa-bullseye"></i></div>
          <div>
            <div className={styles.careerTitle}>Mục tiêu nghề nghiệp</div>
            <div className={styles.careerDesc}>Tạo ra sản phẩm số có giá trị & truyền cảm hứng sáng tạo.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
