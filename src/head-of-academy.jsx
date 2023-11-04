import React, { useEffect, useState } from "react";
import styles from "./styles/jobs.module.scss";
import logo from "./asset/icon/logo.svg";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import useResponsive from "./hook/responsive";
import { IoMdClose } from "react-icons/io";
import arrowDown from "./asset/icon/arrow_down.svg";



const HeadAcademy = () => {
  const {screenWidth} = useResponsive()
  const [open, setOpen] = useState(false);

  useEffect(() => {
   console.log(open);
  }, [open]);

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
            <li className={styles.active}>
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
            <li>Program Coordinator (Head of Academy)</li>
          </ul>
          <ul>
            <li>Job Grade Level: </li>
            <li>Chief Executive Officer</li>
          </ul>
          <ul>
            <li>Reports to: </li>
            <li>The Board of Directors, CGCC DIGITECH Academy</li>
          </ul>
          <ul>
            <li>Supervises:</li>
            <li>Academy operations and commercial units</li>
          </ul>
          <ul>
            <li>Division: </li>
            <li>CGCC Foundation</li>
          </ul>
          <ul>
            <li>Group:</li>
            <li>CGCC Academy</li>
          </ul>
          <ul>
            <li>Unit:</li>
            <li>CGCCDigitech Academy</li>
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Job Accountabilities</h4>
          <p className={styles.desc}>
            This role is responsible to lead the Digitech Academy of the Citadel
            Global Community Church (CGCC). This position will control and
            oversee all business operations, people, and ventures, and will be
            responsible for the overall success of the business. As a Program
            Coordinator, this position will be responsible for the planning,
            implementation, and coordination of operational activities and will
            work closely with commercial lead, technical administrative staff,
            and lead trainer to ensure the smooth operation of these programs.
          </p>
        </div>

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
            <li>
              Prior experience as a General Managerial or Manging Director in a
              mid-sized organization is a plus
            </li>
            <li>Strong organizational and communication skills.</li>
            <li>Attention to detail and ability to multitask effectively.</li>
            <li>Proficiency in using relevant software tools and databases.</li>
            <li>
              Prior experience in program coordination or education
              administration is a plus.
            </li>
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Functions & Responsibilities</h4>
          <ul className={styles.listWrap}>
            <li>
              Prepare and implement comprehensive business plans to facilitate
              achievement by planning cost-effective operations and market
              development activities.
            </li>
            <li>
              Collaborate with training staff and commercial lead to ensure
              business plan are aligned with the academy's objectives and
              curriculum.
            </li>
            <li>
              Assist in budget planning and management for programs, ensuring
              that resources are allocated efficiently and cost-effectively.{" "}
            </li>
            <li>
              Conduct market research and analysis to create detailed business
              plans on commercial opportunities (expansion, business development
              etc.)
            </li>
            <li>
              Ensure company policies and legal guidelines are communicated all
              the way from the top down in the company and that they are always
              followed.
            </li>
            <li>
              Ensure that all programs adhere to relevant regulations, policies,
              and safety guidelines.
            </li>
            <li>
              Provide strategic advice to the Board of Directors so that they
              will have accurate view of the evolution of the digital economy
              and the company’s future.
            </li>
            <li>
              This position will oversee the company’s financial performance,
              investments, and other business ventures.
            </li>
            <li>
              Delegate responsibilities and supervise the work of team members
              providing guidance and motivation to drive maximum performance.
              Maintain effective communication with direct reports.
            </li>
            <li>
              Monitor and assess the effectiveness of programs through feedback
              collection, surveys, and performance metrics. Suggest improvements
              and adjustments, as necessary.
            </li>
            <li>
              Maintain accurate records of program activities, attendance, and
              participant information. Generate reports and summaries for
              academy management.
            </li>
            <li>
              Address any issues or challenges that may arise during program
              implementation, finding practical solutions to ensure a positive
              experience for participants.
            </li>
          </ul>
        </div>

        <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Skills/Competence Requirement</h4>
          <p className={styles.desc}>
            Required knowledge, skills, and abilities.
          </p>
          <ul className={styles.listWrap}>
            <li>
              Educational Leadership: Strong leadership skills and the ability
              to effectively manage and motivate direct reports and entire
              staff.
            </li>
            <li>
              Strategic Planning: Ability to create and implement long-term
              strategies for DIGITECH Academy, including identifying market
              opportunities, and expanding the academy's reach and influence
            </li>
            <li>
              Budget Management: Experience in financial planning and budget
              management, including the ability to allocate resources
              effectively, control costs, and maximize revenue generation for
              the academy.
            </li>
            <li>
              Team Development: Skill in recruiting, training, and developing a
              diverse team of educators and support staff, fostering a
              collaborative and innovative work environment conducive to
              continuous growth and improvement.
            </li>
            <li>
              Stakeholder Engagement: Ability to engage and collaborate with
              various stakeholders, including students, faculty, industry
              partners, and regulatory bodies, to foster meaningful partnerships
              and ensure the success and relevance of the academy within the
              broader educational landscape
            </li>
          </ul>
          {/* <br />
          <p className={styles.desc}>Generic Skills</p>

          <ul className={styles.listWrap}>
            <li>Excellent Managerial and planning skills.</li>
            <li>
              Good leadership skills (Servant leadership skill will be an
              advantage)
            </li>
            <li>Good negotiation & communication skills (writing, verbal)</li>
            <li>Good interpersonal relationship</li>
            <li>Good negotiation skills</li>
            <li>Supervisory Skills</li>
            <li>Coaching / Mentoring</li>
            <li>Organization/ coordination skills</li>
            <li>Leadership/ Team building skills.</li>
          </ul> */}
        </div>

        {/* <div className={styles.sectionWrap}>
          <h4 className={styles.subHead}>Key Performance Indicators</h4>
          <ul className={styles.listWrap}>
            <li>
              Revenue and Growth: Tracking the financial performance of DIGITECH
              Academy, including revenue generation, cost management, and
              overall growth in student enrolment and course offerings.
            </li>
            <li>
              Technology Adoption: Evaluating the successful integration and
              adoption of new digital tools and technologies within the
              academy’s curriculum and operations.
            </li>
            <li>
              Instructor Performance: Assessing the effectiveness of instructors
              and facilitators in delivering high-quality digital education and
              support to students. Industry Partnerships: Measuring the success
              of partnerships with relevant industry players, including
              companies, organizations, or professionals, for the purpose of
              enhancing job placements and real-world exposure for students.
            </li>
            <li>
              Market Competitiveness: Monitoring the academy’s position within
              the digital education market, including its offerings, reputation,
              and competitiveness compared to other similar institutions or
              online platforms.
            </li>
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
  );
};

export default HeadAcademy;
