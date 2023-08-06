import { currentTestAtom, testProgressAtom } from "../../globalAtoms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect, useState ,useMemo} from "react";

export default function InTest(){
    const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
    const [testProgress, setTestProgress] = useAtom(testProgressAtom);
    // currentQuestion?
    const currentQuestion = useMemo(()=>{
        return currentTest.blocks[testProgress.block].questions[testProgress.question];
    }, [currentTest, testProgress]);

    useEffect(() => {
        console.log('in test now. currentTest:');
        console.log(currentTest);

        console.log('current question:');
        //console.log(currentTest.blocks[testProgress.block].questions[testProgress.question]);
        console.log(currentQuestion);
    }, []);
    useEffect(() => {}, [testProgress]);
    return(
        <div className="parentPage">
            <h2>{currentQuestion.text}</h2>
            <button>{currentQuestion.buttonLabels[0]}</button>
            {currentQuestion.buttonLabels[1] && <button>{currentQuestion.buttonLabels[1]}</button>}
        </div>
    );
}