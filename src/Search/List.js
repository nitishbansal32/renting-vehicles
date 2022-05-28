import data from "../data/search.json";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";

const List = (props) => {
    let Input = props.input;
    const filteredData = data.search.filter((el) => {
        if (props.input === "") {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input);
        }
    });

    return (
        <div>
            {Input && (
                <ul className={styles.list}>
                    {filteredData.map((item) => (
                        <li key={item.id}>
                            <Link to={`/search/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default List;
