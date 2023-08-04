import { currentTestAtom, testProgressAtom } from "../../globalAtoms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export default function InTest(){
    const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
    const [testProgress, setTestProgress] = useAtom(testProgressAtom);

    useEffect(() => {
        console.log('in test now');
        console.log(currentTest);
    }, []);
    return(
        <h1>In Test</h1>
    );
}