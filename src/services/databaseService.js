// This file defines all the database functions needed for this project

import supabase from "./supabaseClient.js"

// define fetchStacks function to get stacks data from supabase
// this is a function not a constant
// note, await require the function to be async, but async does not require there to be await in the function
// function has await => function is async, but function is async does NOT imply function has await
export async function fetchStacks() {
    const { data, error } = await supabase
        .from("stacks")
        .select("*");
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        // set fetchedStacks state as the data fetched
        console.log(data);
        return data;
    }
};

export async function fetchCards(stackID) {
    const { data, error } = await supabase
        .from("stack_cards")
        .select("*")
        .eq("stack_id", stackID);
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        // set fetchedStacks state as the data fetched
        console.log(data);
        return data;
    }    
};
