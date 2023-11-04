import React, { useState } from 'react'
import styles from "./styles/jobs.module.scss";
import { Link } from "react-router-dom";
import logo from "./asset/icon/logo.svg";
import arrowDown from "./asset/icon/arrow_down.svg";
import useResponsive from './hook/responsive';
import { IoMdClose } from 'react-icons/io';
import { HiMenuAlt2 } from 'react-icons/hi';

const ManagerLearningDevelopment = () => {
    const {screenWidth} = useResponsive()
    const [open, setOpen] = useState(false);
  return (
    <div className={styles.jobsWrap}>
      <div className={styles.left} style={{left: screenWidth > 768 ? 0 : screenWidth <= 768  && open ? 0  : "-300px" }}>
      <div className={styles.logo_close_wrap}>
        <Link to={"/"} className={styles.logoWrap}>
          <img src={logo} alt="Logo" />
          <p>CGCCDigitech</p>
        </Link>
        <IoMdClose className={styles.barIcon} onClick={() => setOpen(false)} />
        </div>
        <div className={styles.linkWrap}>
          <p><span>Jobs</span> <img src={arrowDown} alt="arrowDown" /></p>
          <ul>
            <li>
              <Link to={"/jobs/head-of-academy"}>Head of Academy</Link>
            </li>
            <li>
              <Link to={"/jobs/business-development-manager"}>
                Business Development Manager
              </Link>
            </li>
            <li className={styles.active}>
              <Link to={"/jobs/manager-learning-development"}>
                Manager Learning & Development
              </Link>
            </li>
            <li>
              <Link to={"/jobs/technical-administrator"}>
                Technical Administrator
              </Link>
            </li>
          </ul>
        </div>
      </div>

{/* <SideBar /> */}
      <div className={styles.right}>
        <div className={styles.top}>
        <HiMenuAlt2 className={styles.barIcon} onClick={() => setOpen(true)} />
          <h3>JOB DESCRIPTION AND ANALYSIS</h3>
          <Link
            className={styles.formLink}
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSef8SWADJC_W1lRU-LEJPQbYefBUfQMOErH48f2wRbVVLF2Sw/viewform?usp=pp_url"
            }
          >
            Apply now
          </Link>
        </div>
        <div className={styles.jobProfileWrap}>
          <ul>
            <li>Job Title:</li>
            <li>Manager, Learning & Development</li>
          </ul>
          <ul>
            <li>Job Grade Level: </li>
            <li>Manager</li>
          </ul>
          <ul>
            <li>Reports to: </li>
            <li>Program Coordinator (Head of Academy)</li>
          </ul>
          <ul>
            <li>Supervises:</li>
            <li>Academy operations and administrative staff</li>
          </ul>
          <ul>
            <li>Division: </li>
            <li>CGCC Foundation</li>
          </ul>
          <ul>
            <li>Group:</li>
            <li>CGCC Learning & Development</li>
          </ul>
          <ul>
            <li>Unit:</li>
            <li>CGCCDigitech Academy</li>
          </ul>
        </div>

        {/* <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Job Accountabilities</h4>
          <p className={styles.desc}>
          Ensure proper designing and execution of learning strategies, managing training programs and developing employees’ as well as participants skills and knowledge within the organization.
          </p>
        </div> */}

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Profile</h4>
          <ul className={styles.listWrap}>
            <li>
              Bachelor’s degree in Education, Administration, or a related
              field.
            </li>
            <li>
              Master’s or higher degree in digital related field is a plus.
            </li>
            {/* <li>
            Strong organizational and communication skills.
            </li> */}
            <li>Strong organizational and communication skills.</li>
            <li>Attention to detail and ability to multitask effectively.</li>
            <li>Proficiency in using relevant software tools and databases.</li>
            <li>
              Prior experience in program coordination or education
              administration is a plus.
            </li>
          </ul>
        </div>

        {/* <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Functions & Responsibilities</h4>
          <ul className={styles.listWrap}>
            <li>
            Create and implement learning strategies and programs
            </li>
            <li>
            Own and coordinate the overall learning and development operations of the academy
            </li>
            <li>
            Design and implement various learning methods
            </li>
            <li>
            Constantly engage partners of the academy – course content generators, facilitators and trainers, examiners, coaches
            </li>
            <li>
            Collate and manage the Academy’s materials and tools effectively
            </li>
            <li>
            Generate periodic Executive Management summary report to give an overview of the Academy’s learning performance in terms of operations,
            </li>
            <li>
            Provide and track capacity planning budgets for the Academy
            </li>
            
            <li>
            Generate performance reports of all staff for Periodic Performance Review
            </li>
            <li>
            Identify and evaluate organizational development needs and advise on addressing them
            </li>
            <li>
            Communicate the Academy’s operations activities as a whole, to all stakeholders via the Academy’s newsletter.
            </li>
            
          </ul>
        </div> */}

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Skills/Competence Requirement</h4>
          <p className={styles.desc}>
            Required knowledge, skills, and abilities.
          </p>
          <ul className={styles.listWrap}>
            <li>
            Digital Education Expertise: Comprehensive knowledge of digital learning methodologies, educational technology, online platforms, and emerging trends in the field of digital education.
            </li>
            <li>
            Good knowledge and understanding of generic learning and development environment operations, procedures, products and learning methods.
            </li>
            <li>
            Curriculum Development: Proficiency in designing and developing digital learning programs, courses, and educational content that align with industry standards and meet the needs of the target audience
            </li>
            <li>
            Familiarity with e-Learning platforms for Digitech learning
            </li>
            <li>
            Excellent analytical skills
            </li>
            <li>Proficiency in MS office tools and learning management systems (LMS)</li>
            <li>Good report writing and presentation skills.</li>
            <li>Excellent data management skills</li>
          </ul>
          
          {/* <p className={styles.desc}>Generic Skills</p>

          <ul className={styles.listWrap}>
            <li>Good negotiation & communication skills (writing, verbal).</li>
            <li>
            Good interpersonal relationship
            </li>
            <li>Good negotiation skills</li>
            
          </ul>

          <p className={styles.desc}>Supervisory Skills</p>

          <ul className={styles.listWrap}>
            <li>Coaching.</li>
            <li>
            Organization/ coordination skills
            </li>
            <li>Leadership/ Team building skills</li>
            
          </ul> */}
        </div>

        {/* <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Key Performance Indicators</h4>
          <ul className={styles.listWrap}>
            <li>
            Course completion rate – modules competed on time/delayed, modules, modules delivered correctly/rejected.
            </li>
            <li>
            Training Efficiency and Effectiveness (Pre and Post Training assessments and feedback)
            </li>
            <li>
            Digital Course Quality: Monitoring the satisfaction levels of students with the overall quality of the digital courses, including content, delivery, and user experience.
            </li>
            <li>
            Training impact – attendance rate, learner satisfaction, learner retention rate, knowledge application
            </li>
            <li>Accurate and Timely report rendition, newsletters presentation</li>
            <li>Employee engagement – employee performance, satisfaction, and retention</li>
            <li>Stakeholders’ perception – Net Promoter Score (NPS), Return on Investment (RoI – quantitative and qualitative)</li>
          </ul>
        </div> */}

        <div className={styles.btnWrap}>
          <Link
            className={styles.formLink}
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSef8SWADJC_W1lRU-LEJPQbYefBUfQMOErH48f2wRbVVLF2Sw/viewform?usp=pp_url"
            }
          >
            Apply now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ManagerLearningDevelopment;