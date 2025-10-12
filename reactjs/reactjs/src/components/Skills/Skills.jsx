import React, { useState } from "react";
import styles from "./Skills.module.css";

const skillsData = [
  {
    title: "Backend",
    icon: "fa-server",
    skills: [
      { name: "C#, .NET Framework, .NET Core, ASP.NET, ADO.NET, LINQ, Winform, ASP.NET MVC", level: "95%" },
      { name: "RESTful API, Web API, SignalR, JWT, OAuth2", level: "90%" },
      { name: "EDI, WMS, CMS, Ecommerce, HRM", level: "85%" }
    ]
  },
  {
    title: "Frontend",
    icon: "fa-code",
    skills: [
      { name: "HTML5, CSS3, JavaScript (ES6+)", level: "85%" },
      { name: "Responsive Design, Figma, Photoshop, Bootstrap", level: "80%" }
    ]
  },
  {
    title: "Database",
    icon: "fa-database",
    skills: [
      { name: "SQL Server, MySQL, Microsoft Access", level: "90%" },
      { name: "Tối ưu truy vấn, thiết kế CSDL, backup/restore, migration", level: "85%" }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: "fa-tools",
    skills: [
      { name: "Git, GitHub, GitLab, Bitbucket, SourceTree", level: "85%" },
      { name: "Jira, Azure DevOps, TFS", level: "80%" }
    ]
  },
  {
    title: "IDEs",
    icon: "fa-laptop-code",
    skills: [
      { name: "Visual Studio 2019/2022, VS Code, SSMS", level: "80%" }
    ]
  }
];

const Skills = () => {
  const [open, setOpen] = useState([]);
  const toggle = idx => {
    setOpen(open => open.includes(idx) ? open.filter(i => i !== idx) : [...open, idx]);
  };
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.accordion}>
        {skillsData.map((cat, idx) => (
          <div className={styles.accordionItem} key={idx}>
            <button className={styles.accordionHeader + (open.includes(idx) ? ' ' + styles.active : '')} onClick={() => toggle(idx)}>
              <span><i className={`fa ${cat.icon}`}></i> {cat.title}</span>
              <i className={`fa fa-chevron-down`}></i>
            </button>
            <div className={styles.accordionBody + (open.includes(idx) ? ' ' + styles.open : '')} style={open.includes(idx) ? {maxHeight: 200 + cat.skills.length * 30 + 'px'} : {}}>
              {cat.skills.map((skill, i) => (
                <div className={styles.skill} key={i}>
                  <div className={styles.skillName}><b>{skill.name}</b></div>
                  <div className={styles.skillBarContainer}>
                    <div className={styles.skillBar} style={{width: open.includes(idx) ? skill.level : 0}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
