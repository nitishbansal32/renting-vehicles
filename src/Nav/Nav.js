import styles from "./Nav.module.css";
import Language from "../Language/Langauge.js";
import Profile from "../Profile/Profile.js";

const Nav = () => {
    return (
        <div className="nav-container">
            <img src="" alt="" />
            <div className="nav-links">
                <ul className="link">
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
