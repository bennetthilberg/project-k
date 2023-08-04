import { atom } from "jotai";

export const currentTestAtom = atom(null);  // the full object for the current test

export const testProgressAtom = atom({
    complete: false, // whether the test is complete
    block: 0, // index of the current block in the test's 'blocks' array
    question: 0, // index of the current question in the block's 'questions' array
});
