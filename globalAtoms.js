import { atomWithStorage } from "jotai/utils";

export const currentTestAtom = atomWithStorage('currentTestAtom', null);  // the full object for the current test

export const testProgressAtom = atomWithStorage('testProgressAtom',{
    complete: false, // whether the test is complete
    block: 0, // index of the current block in the test's 'blocks' array
    question: 0, // index of the current question in the block's 'questions' array
});
