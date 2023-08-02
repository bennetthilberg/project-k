import raceIAT from "./raceIAT";

const testFns = [() => raceIAT()];

let tests = [];
testFns.forEach((testFn) => {
    tests.push(testFn());
});
export default tests;
