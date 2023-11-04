import React, {  useState } from "react";
import styles from "./styles/home.module.scss";
import logo from "./asset/icon/logo.svg";
import { Link } from "react-router-dom";
import {HiMenuAlt2} from "react-icons/hi" ;
import {IoMdClose} from "react-icons/io" ;
import useResponsive from "./hook/responsive";


const Home = () => {
    const [open, setOpen] = useState(false);
    const {screenWidth} = useResponsive()


  return (
    <div className={styles.homeWrap}>
      <header>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Logo" />
          <p>CGCCDigitech Academy</p>
        </div>
        <nav style={{left: screenWidth <= 600 && open ? 0 : "-100%"}}>
          <Link to={"/"} className={styles.navLink} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to={"/jobs/head-of-academy"} className={styles.navLink}>
            Jobs
          </Link>
          <Link to={"/jobs/head-of-academy"} className={`${styles.navbtn} ${styles.navLink}`}>
            Apply now
          </Link>
        </nav>
        <div className={styles.barWrap}>
            {open ? <IoMdClose className={styles.barIcon} onClick={() => setOpen(false)} /> : <HiMenuAlt2 className={styles.barIcon} onClick={() => setOpen(true)} />
            }
        </div>
      </header>

      <main>
        <h1>Job Opportunities</h1>
        <h3>
          Advance your career and take the next steps with job oppurtunities
          available at CGCCDigitech academy
        </h3>
        <p>
          Are you ready to begin your journey towards mastering digital
          technologies? Our academy is a gateway to a world of digital skills
          and knowledge.
        </p>
        <h3>Vacant positions:</h3>
        <ul>
          <li>Head of Academy</li>
          <li>Business Development Manager</li>
          <li>Manager Learning & Development</li>
          <li>Administrative Officer</li>
        </ul>
        <Link to={"/jobs/head-of-academy"} className={`${styles.btn}`}>
          Apply now
        </Link>
      </main>

      <footer>
        <p>© Powerd by Citadel Global Community Church Digitech Academy</p>
      </footer>
    </div>
  );
};

export default Home;
