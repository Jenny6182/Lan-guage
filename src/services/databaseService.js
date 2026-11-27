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
        console.log("Levels: ", data);
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
        console.log("Units: ", data);
        return data;
    }    
};

export async function fetchLessons(unitID) {
    const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("unit_id", unitID)
        .order("order_id");
    if (error) {
        console.log("Error fetching data: ", error);
    } else {
        console.log("Lessons: ", data);
        return data;
    }    
};


// ------ Initial drafts for adding / deleting stacks and cards, will change based on future design -----
// ------ especially based on whether we are having users, or recommending stacks to users, etc.

// lesson id is optional because a stack doesn't need to be related to a lesson
// this is mostly for our dev purposes, when we are inserting all the data, we might want to use this function
export async function addStack(stack_name, lesson_id = null) {
    const { data, error } = await supabase
        .from("stacks")
        .insert({stack_name: stack_name, ...(lesson_id !== null && {lesson_id: lesson_id}) })
        .select();
    if (error) console.log("Error adding stack: ", error);
    else console.log("Stack added: ", data);
    // note that {lesson_id: 5} becomes an object bc {} means creating an object in js
    // and here we aren't writing jsx in which case {} would mean evaluate something
    // so we have to "spread", or, unwrap the object bc we don't want nested object in our row
    // we just want an int, the lesson_id!
};
// when creating stack, perhaps can ask if they want to make the stack public and findable?
// then we keep the stack even when they delete it in their stacks (user specific)
// for now let's just put everything in stacks table when add

// maybe we need to give lesson stacks a status to indicate whether it's a deletable stack or not
// bc lesson stacks shouldn't be deletable!
export async function deleteStack(stackID) {
    const { data, error } = await supabase
        .from("stacks")
        .delete()
        .eq("id", stackID)
    if (error) console.log("Error deleting stack: ", error);
    // 1. find the stack using stackid in stacks table
    // 2. check whether this stack is deletable
    // 3. delete it if it is, otherwise don't do anything, and say u cannot delete a lesson stack
};

// might need to think about "ordering" of card in the stack...
// might need to think about "shifting" order of card in the stack when adding a card in the middle...
// note: js is positional argument by default
export async function addCard(ch_name, en_name, stackID = null) {
    // 1. add a card in cards
    const { data: card, error: cardError } = await supabase
        .from("cards")
        .insert({ch_name: ch_name, en_name: en_name})
        .select();
    if (cardError) console.log("Error adding card: ", cardError);
    else console.log("Card added: ", card);

    // 2. add a stackCard in stack_cards table
    if (stackID) {  // if has stackID specified, add it to a stack too
        const { data, error } = await supabase
            .from("stack_cards")
            .add({stack_id: stackID, card_id: card[0].id});
        if (error) console.log("Error adding card to stack: ", error);
        else console.log("Stack_card added: ", data);
    }
};

// maybe we should delete card itself in cards? or no? i think we might need to start thinking about user accounts??
export async function deleteCard(cardID) {
    const { data, error } = await supabase
        .from("stack_card")
        .delete()
        .eq("card_id", cardID)
    if (error) console.log("Error deleting card from stack: ", error);
};

// should I use stackID or cardID as input? should we delete card completely, or just delete card from stack?
// I would think I let people add words by themselves, but we keep the word in our database
// even when they delete it from their stack afterward, you can only add or delete card in a stack
// that database might be able to be reused? we could look up a word when they try to add, 
// suggest meaning/def/sound, etc. rather than they having to add it themselves?
// for now let's say you can only delete it from a stack, not the card table
// but all cards are added to the card table when u add a card in a stack as well (?)





// NOTE: await require the function to be async, but async does not require there to be await in the function
// function has await => function is async, but function is async does NOT imply function has await

        // use .in() to select all results that match anything in cardIDs in the "id" field/column
        // if you don't use .single, then query result will always be an array, 
        // use .single() to turm query result into an object if you know there's only gonna be one result for sure!!