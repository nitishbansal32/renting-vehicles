import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setdata] = useState(false);
    const [loading, setloading] = useState(true);
    const [err, seterr] = useState(false);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw "Check for error";
                }
                return res.json;
            })
            .then((data) => {
                setdata(data);
                console.log(data);
                setloading(false);
                seterr(null);
            })
            .catch((err) => {
                if (err === "AbortError") {
                    console.log("Fetch Aborted");
                } else {
                    setloading(false);
                    seterr(err.message);
                }
            });
        return () => {
            abortCont.abort();
        };
    }, [url]);
    return { data, loading, err };
};

export default useFetch;
s;
