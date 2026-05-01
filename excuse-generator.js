#!/usr/bin/env node#!/usr/bin/env node

// Excuse Generator Script
// This script generates random excuses for various situations.

const who = [
    "My dog",
    "My cat",
    "My boss",
    "My teacher",
    "My neighbor"
];

const action = [
    "ate",
    "stole",
    "broke",
    "hid",
    "lost",
    "forgot",
    "misplaced"
];

const what = [
    "my homework",
    "my keys",
    "my laptop",
    "my phone",
    "my wallet",
    "my passport",
    "my car",
    "my files"
];

const when = [
    "today",
    "yesterday",
    "this morning",
    "last night",
    "last week",
    "earlier",
    "a few minutes ago",
    "on the way here"
];

// Get random value from who array
const randomWho = who[Math.floor(Math.random() * who.length)];

// Get random value from action array
const randomAction = action[Math.floor(Math.random() * action.length)];

// Get random value from what array
const randomWhat = what[Math.floor(Math.random() * what.length)];

// Get random value from when array
const randomWhen = when[Math.floor(Math.random() * when.length)];

// Concatenate random values into a single sentence
const excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

// Print the excuse
console.log(excuse);


