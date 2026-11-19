import { useState, useEffect } from "react";
import supabase from "../supabase-client.js";
import Stack from "./Stack";


const FlashcardPage = () => {
    // use a state to put data in, because we need this as a signal for react to re-render
    // (yk, since after we get data we'd need to rerender to display that data, everytime some data changes and we want to fetch again)
    // we also don't want problem with normal variable being reinitialized on every render, if use states, variable value persists
    const [fetchedStacks, setFetchedStacks] = useState([]);

    // define fetchStacks function to get stacks data from supabase
    // this is a function not a constant
    const fetchStacks = async () => {
        const { data, error } = await supabase
            .from("stacks")
            .select("*");
        if (error) {
            console.log("Error fetching data: ", error);
        } else {
            // set fetchedStacks state as the data fetched
            setFetchedStacks(data);
        }
    };

    // now we call fetchStacks function with useEffect to limit the number of times it runs
    // since fetchStack calls setFetchedStacks, it causes state to change and tell react to rerender everytime
    // it will render indefinitely if we don't limit it to only call fetchStacks for the first render with empty dependency 
    // also if we call fetchStacks on EVERY re-render... it will create a lot of unnecessary requests to database, so we control it
    useEffect(() => {
        console.log("hi")
        console.log(fetchStacks());
    }, []);

    return ( 
        <div className="content">
            <h1>Flashcard Page</h1>
            {/* we map the fetchedStacks state variable, which is also a variable itself! */}
            {fetchedStacks.map((fetchedStacks) => (
                <Stack key={fetchedStacks.id} info={fetchedStacks}/>
            ))}
        </div>
     );
}
 
export default FlashcardPage;