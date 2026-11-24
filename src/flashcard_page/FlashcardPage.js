import { useState, useEffect } from "react";
import Stack from "./Stack";
import { fetchStacks } from "../services/databaseService.js";


const FlashcardPage = () => {
    // use a state to put data in, because we need this as a signal for react to re-render
    // (yk, since after we get data we'd need to rerender to display that data, everytime some data changes and we want to fetch again)
    // we also don't want problem with normal variable being reinitialized on every render, if use states, variable value persists
    const [fetchedStacks, setFetchedStacks] = useState([]);

    // define fetchStacks function to get stacks data from supabase
    // this is a function not a constant
    // const fetchStacks = async () => {
    //     const { data, error } = await supabase
    //         .from("stacks")
    //         .select("*");
    //     if (error) {
    //         console.log("Error fetching data: ", error);
    //     } else {
    //         // set fetchedStacks state as the data fetched
    //         console.log(data);
    //         setFetchedStacks(data);
    //     }
    // };

    // now we call fetchStacks function with useEffect to limit the number of times it runs
    // since fetchStack calls setFetchedStacks, it causes state to change and tell react to rerender everytime
    // it will render indefinitely if we don't limit it to only call fetchStacks for the first render with empty dependency 
    // also if we call fetchStacks on EVERY re-render... it will create a lot of unnecessary requests to database, so we control it
    // NOTE: if we need to wait for an async function's return, we need to make the caller function async itself
    // bc we need to wait for it
    // useEffect can only either return undefined or clean up functions, so we cannot async useEffect
    // bc it would return a Promise, hence we cannot directly put await inside useeffect bc that => useEffect to be async
    // so we need to wrap fetchstacks and set fetchedstacks in another layer to avoid that, which itself can be async
    useEffect(() => {
        async function loadStacks() {
            console.log("Fetching Stacks...")
            const data = await fetchStacks();
            setFetchedStacks(data);
        }
        loadStacks();
    }, []);
    // we don't know if it actually succeeded or not and we don't know if fetchStacks is the problem here
    // try commenting it out to see if it really is that or something else

    return ( 
        <div className="content">
            <h1>Flashcard Page</h1>
            {/* we map the fetchedStacks state variable, which is also a variable itself! */}
            <div className="stack-list">
                {fetchedStacks.map((stack) => {
                    console.log(stack.stack_name)
                    return <Stack key={stack.id} info={stack}/>
                })}
            </div>

            {/* Use {} around anything that needs to be evaluated, such as js */}
            {/* when you use something.map( () => () ) it means implicit return, so u don't have to write return*/}
            {/* when it's something.map( () => {} ) it means explicit return, so u have to write a return */}
        </div>
     );
}

// TODO:
// and then connect the flashcards in each stack
 
export default FlashcardPage;