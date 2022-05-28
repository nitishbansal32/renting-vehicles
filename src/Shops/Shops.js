import { useParams } from "react-router-dom";
import useFetch from "../useFetch.js";
import styles from "./Shops.module.css";
import Search from "../Search/Search.js";

const Shops = () => {
    const { id } = useParams();
    const {
        data: shops,
        loading,
        err,
    } = useFetch("http://localhost:8000/search/" + id);
    // console.log(shops);
    return (
        <>
            {/* <Search /> */}
            <ul className={styles.container}>
                <li>{shops && <h1>{shops.name}</h1>}</li>
                <li>{shops && <h1>{shops.price}</h1>}</li>
                <li>{shops && <h1>{shops.Pincode}</h1>}</li>
            </ul>
        </>
    );
};

export default Shops;
