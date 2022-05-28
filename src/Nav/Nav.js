import styles from "./Nav.module.css";
import Language from "../Language/Langauge.js";
import Profile from "../Profile/Profile.js";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={Logo} alt="" />
            <div className={styles.linksContainer}>
                <ul className={styles.link}>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <li>About</li>
                    <li>
                        <Language />
                    </li>
                    <li>
                        <Profile />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
