import React from "react";
import styles from "./Resume.module.css";

const jobs = [
  {
    company: "TRUECOMMERCE - DICENTRAL",
    project: "TRUE-AUTO (Production - Automotive Supply Chain Solutions)",
    time: "04/2022 - 07/2025",
    team: "Team size: 14",
    desc: "Cloud-based supply chain management solution that digitally connects you to your customers, suppliers, buyers, and 3PLs on a single platform, providing real-time automation, exception alerts, and instant access to business critical transactions.",
    tasks: [
      "Developed and maintained web applications using .NET technologies (ASP.NET, .NET Core, C#.NET, LINQ, SQL Server).",
      "Fixed bugs, implemented enhancements, and improved web functionality and speed.",
      "Migrated features from .NET Framework to .NET Core, handled EDI, print reports, and label generation.",
      "Handled validation, EDI document processing, and automated email notifications.",
      "Implemented replacement service for EDI workflows and uploaded master data CSV files.",
      "Developed unit tests with NUnit and supported QA/QC testing."
    ]
  },
  {
    company: "CARPTECH CORP",
    project: "WELLSPRINGS - CMS (.NET Core)",
    time: "04/2021 - 12/2021",
    team: "Team size: 15",
    desc: "Wellspring helps professionalize school management, enabling multi-dimensional interaction between school, parents, teachers, and students.",
    tasks: [
      "Developed and maintained web applications using ASP.NET, C#.NET, LINQ, MS SQL.",
      "Built custom REST APIs and integrated with mobile apps.",
      "Fixed bugs, implemented enhancements, and improved web functionality and speed.",
      "Consulted with customers and continuously improved the system.",
      "Handled features: Authentication, Students, Teachers, Classes, Attendance, Medical, Feedback, Announcements, etc."
    ]
  },
  {
    company: "CARPTECH CORP",
    project: "CHAMP SOLUTION - AEON (.NET Core - AngularJS) (Outsource)",
    time: "11/2020 - 04/2021",
    team: "Team size: 11",
    desc: "Aeon is HRM software, helping to professionalize HR operations, manage attendance, leave, and employee benefits.",
    tasks: [
      "Developed and maintained web applications using ASP.NET 4.7, C#.NET, LINQ, MS SQL.",
      "Built custom REST APIs and integrated with HRM modules.",
      "Fixed bugs, implemented enhancements, and improved web functionality and speed.",
      "Consulted with customers and continuously improved the system.",
      "Handled features: Handover Resignation, Register Bus Station, Overtime, Business Trip."
    ]
  },
  {
    company: "TOP PRO SYSTEM",
    project: "ASP.NET MVC",
    time: "08/2020 - 11/2020",
    team: "Team size: 6",
    desc: "TopProSystem is a WMS that helps manage warehouses, minimizing manual work.",
    tasks: [
      "Developed and maintained web applications using ASP.NET 4.7, C#.NET, LINQ, MS SQL.",
      "Built custom REST APIs and integrated with warehouse modules.",
      "Fixed bugs, implemented enhancements, and improved web functionality and speed.",
      "Consulted with customers and continuously improved the system.",
      "Handled features: Warehouse, Release product, etc."
    ]
  }
];

const Resume = () => (
  <section className={styles.resumeSection}>
    <h2 className={styles.heading}>Resume</h2>
    <div className={styles.timeline}>
      {jobs.map((job, idx) => (
        <div className={styles.timelineItem} key={idx}>
          <h3>{job.company}</h3>
          <p><b>{job.project}</b> | {job.time} | {job.team}</p>
          <p>{job.desc}</p>
          <ul>
            {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Resume;
