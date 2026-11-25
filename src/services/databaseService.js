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

export async function fetchCardIDs(stackID) {
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

export async function fetchCard(cardID) {
    const { data, error } = await supabase
        .from("cards")
        .select("*")
        .eq("id", cardID)
        .single();
        // if you don't use .single, then query result will always be an array, 
        // use .single to turm query result into an object if you know there's only gonna be one result for sure!!
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        // set fetchedStacks state as the data fetched
        console.log(data);
        return data;
    }    
}


// TODO 11/25: Refactor the way you fetch cards (should fetch in one query)
// so that you are not making one query call for every single card,
// which would induce a lot of overhead cost and time...
// Should try to change to either use one or the other approach:
// 1. use supabase foreign key relation, special java client syntax to get the ch_name and en_name for each card
// 2. use two simpler queries, one get all id (which u did), 
// second get all cards that match any id in ur list of ids
// aka use .in() sql method
// const { data: cards, error: cardError } = await supabase
    // .from("Card")
    // .select("*")
    // .in("id", cardIds);