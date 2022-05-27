import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Search.module.css";
import data from "../data/search.json";
import List from "./List.js";

const Search = () => {
    const [inputText, setInputText] = useState("");
    // console.log(inputText);

    let inputHandler = (e) => {
        // console.log(e.target.value);
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className={styles.container}>
            <h1>Search for renting spots near you!!</h1>
            <div>
                <TextField
                    className={styles.input}
                    id="outlined-basic"
                    onChange={inputHandler}
                    label="Search"
                    sx={{
                        input: {
                            color: "white",
                        },
                    }}
                />
            </div>

            <List input={inputText} />
        </div>
    );
};

export default Search;
