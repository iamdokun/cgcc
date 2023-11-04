import React, { useState } from 'react'
import styles from "./styles/jobs.module.scss";
import logo from "./asset/icon/logo.svg";
import arrowDown from "./asset/icon/arrow_down.svg";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from 'react-icons/hi';
import useResponsive from './hook/responsive';
import { IoMdClose } from 'react-icons/io';



const BusinessDevelopmentManager = () => {
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
          <p><span>Jobs</span> <img src={arrowDown} alt="arrowDown" /> </p>
          <ul>
            <li>
              <Link to={"/jobs/head-of-academy"}>Head of Academy</Link>
            </li>
            <li className={styles.active}>
              <Link to={"/jobs/business-development-manager"}>
                Business Development Manager
              </Link>
            </li>
            <li>
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
            <li>Manager, Business & Development (Commercial)</li>
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
            <li>Commercial unit of the Academy</li>
          </ul>
          <ul>
            <li>Division: </li>
            <li>CGCC Foundation</li>
          </ul>
          <ul>
            <li>Group:</li>
            <li>CGCC Commercial</li>
          </ul>
          <ul>
            <li>Unit:</li>
            <li>CGCCDigitech Academy</li>
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Job Accountabilities</h4>
          <p className={styles.desc}>
          The Business & Development Manager (Commercial) will play a pivotal role in driving the commercial aspects of CGCC Foundation, facilitating sustainable growth and partnerships. This position focuses on developing revenue streams and expanding the foundation's presence in its chosen sectors. Commercial Lead is to add value to the growth activities by identifying new commercial opportunities and managing marketing efforts. Keep abreast of trends and market conditions to provide strategic advice to upper management. An excellent commercial professional has an entrepreneurial mindset and great leadership skills. The ideal candidate will also be a creative strategist with excellent organizational abilities. The goal is to promote and expand the company’s commercial activity that will generate revenues and lead to sustainable growth
          </p>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Profile</h4>
          <ul className={styles.listWrap}>
            <li>
            Bachelor’s degree in sciences, or Administration.
            </li>
            <li>
              Master’s or higher degree in Business Administration..
            </li>
            <li>Strong organizational and communication skills.</li>
            <li>Prior experience in digital or relative field is a plus.</li>
            <li>Proficiency in using relevant software tools and databases.</li>
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Functions & Responsibilities</h4>
          <ul className={styles.listWrap}>
            <li>
            Develop and implement commercial strategies according to company goals and objectives aiming to build growth.
            </li>
            <li>
            Conduct market research and analysis to create detailed business plans on commercial opportunities (expansion, business development etc.)
            </li>
            <li>
            Understand the requirements of market to ensure their needs are met.
            </li>
            <li>
            Act to acquire new customers and manage client relationships (new and existing)
            </li>
            <li>
            Assist in setting financial targets and budget development and monitoring.
            </li>
            <li>
            Building brand awareness and positioning.
            </li>
            <li>
            Supporting sales and lead generation efforts.
            </li>
            <li>
            Coordinating marketing projects from start to finish.
            </li>
            <li>
            Organizing company conferences, trade shows, and major events.
            </li>
            <li>
            Overseeing social media marketing strategy and content marketing and developing promotions.
            </li>
            <li>
            Understanding and developing budgets and finance, including expenditures, research and development appropriations, return-on-investment, and profit-loss projections
            </li>
            {/* <li>
              Address any issues or challenges that may arise during program
              implementation, finding practical solutions to ensure a positive
              experience for participants.
            </li> */}
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Skills/Competence Requirement</h4>
          <p className={styles.desc}>
            Required knowledge, skills, and abilities.
          </p>
          <ul className={styles.listWrap}>
            <li>
            Communication Skills: Excellent verbal and written communication skills, including the ability to effectively convey complex concepts to diverse audiences, and to build strong relationships with industry partners
            </li>
            <li>
            Data Analysis: Proficiency in analyzing educational data and metrics to make informed decisions, assess partnership performance and continuously improve the quality of business opportunities with a view to increase ROI.
            </li>
            <li>
              Budget Management: Experience in financial planning and budget
              management, including the ability to allocate resources
              effectively, control costs, and maximize revenue generation for
              the academy.
            </li>
            <li>
            Good knowledge and understanding of generic learning and development environment operations, procedures, products and learning methods.
            </li>
            <li>
            Excellent analytical skills
            </li>
            <li>
            Proficiency in MS office tools and learning management systems (LMS)
            </li>
            <li>Good report writing and presentation skills.</li>
            <li>Excellent data management skills</li>
          </ul>
          {/* <br />
          <p className={styles.desc}>Generic Skills</p>

          <ul className={styles.listWrap}>
            <li>Good business relationship skills</li>
           
            <li>Good negotiation & communication skills (writing, verbal)</li>
            <li>Good interpersonal relationship</li>
            <li>Good negotiation skills</li>
            <li>Supervisory Skills</li>
            <li>Coaching </li>
            <li>Organization/ coordination skills</li>
            <li>Leadership/ Team building skills.</li>
          </ul> */}
        </div>

        {/* <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Key Performance Indicators</h4>
          <ul className={styles.listWrap}>
            <li>
            Revenue Generation: Monitoring the overall revenue generated through student enrolment, course sales, and any additional services or products offered by the digital academy.
            </li>
            <li>
            Strategic Partnerships: Assessing the success of forming and maintaining strategic partnerships with other educational institutions, industry organizations, or corporate entities to expand the academy's reach and offerings.
            </li>
            <li>
            Market Expansion: Measuring the success of expanding the digital academy's presence in new markets or regions, targeting specific demographics or industries to increase student enrolment and brand visibility.
            </li>
            <li>
            Industry Trends and Insights: Staying updated on industry trends, educational demands, and market needs to identify potential opportunities for new course development or adjustments to existing offerings.
            </li>
            <li>Return on Investment (ROI): Evaluating the efficiency of business development efforts by assessing the ROI on various marketing and partnership initiatives, ensuring that the resources invested yield positive results for the academy</li>
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

export default BusinessDevelopmentManager