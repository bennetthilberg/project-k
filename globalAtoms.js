import { atomWithStorage } from "jotai/utils";

export const currentTestAtom = atomWithStorage('currentTestAtom', null);  // the full object for the current test

export const testProgressAtom = atomWithStorage('testProgressAtom',{
    complete: false, // whether the test is complete
    block: 0, // index of the current block in the test's 'blocks' array
    question: 0, // index of the current question in the block's 'questions' array
});

export const testResultsAtom = atomWithStorage('testResultsAtom', {
    testId: null,
    blocks: [],
    /* example...
    testId: 0 // from 'id' key in currentTestAtom/test file
    blocks: [ NOTE: start with first actually scored block
        {
            blockId: 2, // index of the block in the test's 'blocks' array
            questions: [ // array of questions in the block
                {
                    correct: true, // whether the user's response was correct
                    responseTime: 100, // time in ms from when the question was displayed to when the user responded
                },
                ...
            ]
        },
        ...
    ]

    */
});