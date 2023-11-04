import React, { useState } from 'react'
import styles from "./styles/jobs.module.scss";
import { Link } from "react-router-dom";
import logo from "./asset/icon/logo.svg";
import { IoMdClose } from 'react-icons/io';
import useResponsive from './hook/responsive';
import { HiMenuAlt2 } from 'react-icons/hi';
import arrowDown from "./asset/icon/arrow_down.svg";




const TechnicalAdministrator = () => {
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
            <li>
              <Link to={"/jobs/manager-learning-development"}>
                Manager Learning & Development
              </Link>
            </li>
            <li className={styles.active}>
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
            <li>Technical Administrator</li>
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
          The Technical and Business Administrator will play a crucial role in ensuring the smooth operation and growth CGCC Foundation. This position combines technical expertise with strong administrative skills to support the foundation's educational initiatives and business activities.
          </p>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Profile</h4>
          <ul className={styles.listWrap}>
            <li>
            Bachelor's degree in a relevant field (Business Administration, Information Technology, etc.).
            </li>
            <li>
            Proven experience as a technical administrator
            </li>
            <li>
            Strong knowledge of business management, IT concepts customer management.
            </li>
            <li>Excellent communication and presentation skills.</li>
            <li>Patience and adaptability in working with diverse learners.</li>
            <li>Certifications and industry credentials are a plus.</li>
            {/* <li>
              Prior experience in program coordination or education
              administration is a plus.
            </li> */}
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Functions & Responsibilities</h4>
          <p className={styles.desc}>Administrative</p>
          <ul className={styles.listWrap}>
            <li>
            Provide general administration support and advice to the Digitech Academy team.
            </li>
            <li>
            Administer academic policies and advise staff, and students on policy matters related to the academic program.
            </li>
            <li>
            Fulfil department or unit responsibilities for admissions recruitment and program.
            </li>
            <li>
            Analyse quantitative and qualitative data to produce reports for internal and external use, including accreditation reviews.
            </li>
            <li>
            Write reports and prepare presentations about the academic program, instructional activity, program planning, etc.
            </li>
            <li>
            Develop the course schedule for online/offline courses.
            </li>
            <li>
            Coordinate space requirements and classroom organization as needed to ensure seamless delivery of instruction.
            </li>
            <li>
            Coordinate the submission and development process for new course offerings, new programs, and program revisions.
            </li>
            <li>
            Serve as a liaison with other academic and administrative departments regarding the academic program, representing the program on cross-functional teams, policy committee, and work groups.
            </li>
            <li>
            Prepare materials and assessments for posting via online web pages.
            </li>
            <li>
            Perform other administrative and analytical duties supporting the academic mission of the department, college, or unit.
            </li>
            <li>
            Update documentation and records using a range of different IT systems to ensure information and data is always maintained to reflect compliance.
            </li>
            <li>Establishment and maintenance of effective communications and working relationships.</li>
            <li>Attend and create minute meetings as required.</li>
          </ul>
          <p className={styles.desc}>
          Technical
          </p>
          <ul className={styles.listWrap}>
            <li>
            Attend and create minute meetings as required.
            </li>
            <li>
            Fully support, configure, maintain, and upgrade corporate networks and in house servers.
            </li>
            <li>
            Install and integrate new computer hardware and applications.
            </li>
            <li>
            Support and administer third-party applications.
            </li>
            <li>
            Ensure network security and connectivity.
            </li>
            <li>Monitor network performance (availability, utilization, throughput, goodput, and latency) and test for weaknesses.</li>
            <li>Set up user accounts, permissions, and passwords.</li>
            <li>Resolve problems reported by end user.</li>
            <li>Define network policies and procedures.</li>
            <li>Specify system requirements and design solutions.</li>
            <li>Research and make recommendations on server system administration.</li>
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Skills/Competence Requirement</h4>
          <p className={styles.desc}>
          Required knowledge, skills, and abilities.
          </p>
          <ul className={styles.listWrap}>
            <li>
            Organizational Skills: Ability to effectively manage administrative tasks, prioritize responsibilities, and ensure the smooth functioning of the academy's operations.            </li>
            <li>
            Time Management: Efficiently managing time and tasks to meet deadlines, prioritize workloads, and handle multiple administrative responsibilities simultaneously.            </li>
            <li>
            Adaptability: Flexibility and adaptability to navigate and thrive in a dynamic and evolving digital educational environment, embracing change and implementing new administrative processes and technologies as needed.            </li>
            <li>
            Customer Service: A commitment to providing excellent customer service to students, faculty, and other stakeholders, addressing their queries and concerns promptly and professionally.            </li>
            <li>
            Excellent analytical skills
            </li>
            <li>
            Proficiency in MS office tools and learning management systems (LMS)
            </li>
            <li>
            Good report writing and presentation skills.
            </li>
           
          </ul>
          
          {/* <p className={styles.desc}>Generic Skills</p>

          <ul className={styles.listWrap}>
            <li>Excellent customer service and organizational skills.</li>
            <li>
            Good communication skills (writing, verbal)
            </li>
            <li>Good interpersonal relationship</li>
            <li>Good time management skills</li>
          </ul>

          <p className={styles.desc}>Supervisory Skills</p>

          <ul className={styles.listWrap}>
            <li>Good team player.</li>
            <li>
            Organization/ coordination skills
            </li>
            
          </ul> */}
        </div>

        {/* <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Key Performance Indicators</h4>
          <ul className={styles.listWrap}>
            <li>
            Student Support Services: Assessing the effectiveness of student support services, including responsiveness to inquiries, problem resolution, and overall student satisfaction with administrative assistance
            </li>
            <li>
            Operational Efficiency: Monitoring the efficiency of administrative processes, such as course registration, document management, scheduling, and general administrative tasks, to ensure smooth and streamlined operations within the academy.
            </li>
            <li>
            Compliance and Regulations: Ensuring adherence to educational regulations, data protection laws, and other relevant compliance standards within the digital education sector.
            </li>
            <li>
            Resource Management: Managing resources effectively, including budget allocation, facility utilization, and procurement processes, to optimize resource utilization and maintain cost efficiency.
            </li>
            <li>Process Improvement: Identifying areas for process improvement within the administrative functions, implementing streamlined processes, and integrating efficient technologies to enhance overall operational effectiveness.</li>
            <li>Customer Service Metrics: Tracking customer service metrics, including response times, query resolution rates, and overall customer satisfaction with the administrative support provided by the digital academy.</li>
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

export default TechnicalAdministrator;