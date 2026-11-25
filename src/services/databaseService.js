// This file defines all the database functions needed for this project

import supabase from "./supabaseClient.js"

export async function fetchStacks() {
    const { data, error } = await supabase
        .from("stacks")
        .select("*");
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
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
        console.log(data);
        return data;
    }    
};

export async function fetchCards(cardIDs) {
    const { data, error } = await supabase
        .from("cards")
        .select("*")
        .in("id", cardIDs)
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        console.log(data);
        return data;
    }    
}

export async function fetchLevels() {
    const { data, error } = await supabase
        .from("levels")
        .select("*")
        .order("order_id");
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        console.log(data);
        return data;
    }
}

export async function fetchUnits(levelID) {
    const { data, error } = await supabase
        .from("units")
        .select("*")
        .eq("level_id", levelID)
        .order("order_id");
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        console.log(data);
        return data;
    }    
};

export async function fetchLessons(unitID) {
    const { data, error } = await supabase
        .from("units")
        .select("*")
        .eq("unit_id", unitID)
        .order("order_id");
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        console.log(data);
        return data;
    }    
};





// NOTE: await require the function to be async, but async does not require there to be await in the function
// function has await => function is async, but function is async does NOT imply function has await

        // use .in() to select all results that match anything in cardIDs in the "id" field/column
        // if you don't use .single, then query result will always be an array, 
        // use .single() to turm query result into an object if you know there's only gonna be one result for sure!!