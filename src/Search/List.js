import data from "../data/search.json";
import styles from "./Search.module.css";

const List = (props) => {
    console.log(props.input);
    const filteredData = data.search.filter((el) => {
        //if no input the return the original
        if (props.input === "") {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input);
            console.log(el.text.toLowerCase().includes(props.input));
        }
    });

    return (
        <ul className={styles.list}>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
};

export default List;
