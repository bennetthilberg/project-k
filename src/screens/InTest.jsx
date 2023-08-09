import { currentTestAtom, testProgressAtom } from "../../globalAtoms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect, useState, useMemo } from "react";

export default function InTest() {
    const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
    const [testProgress, setTestProgress] = useAtom(testProgressAtom);
    // currentQuestion?
    const currentQuestion = useMemo(() => {
        if (currentTest === null) {
            return null;
        }
        return currentTest.blocks[testProgress.block].questions[testProgress.question];
    }, [currentTest, testProgress]);


    useEffect(() => {

    }, []);

    function handleButton(resLabelIndex) {
        // resLabelIndex means the index of the button in currentQuestion's buttonLabels array.
        // except for edge cases, button A (on left) will be 0, and button B (on right) will be 1
        // for the continue button on info questions, it's 0 (since it's the only button)

        if (currentQuestion.type === 'info') {
            goToNextQuestion();
        }
        else if (currentQuestion.type === 'practice') {
            // was the response correct?
            console.log('response: ' + currentQuestion.buttonLabels[resLabelIndex]);
            if (currentQuestion.buttonLabels[resLabelIndex] === currentQuestion.correctAnswer) {
                console.log('correct');
                goToNextQuestion();
            }
            else {
                // TODO: tell user they were wrong somehow?
                alert('wrong');
            }
        }
        else if (currentQuestion.type === 'bin') { // 'bin' = binary = 'a or b' question
            // TODO: log the response (buttonLabels[resLabelIndex])
            goToNextQuestion();
        }
    }
    function goToNextQuestion() {
        // check if this is last in block
        // if it's not, increment testProgres
        // if it is, set testProgress.question to 0 and increment testProgress.block
        if (testProgress.block === currentTest.blocks.length - 1 &&
            testProgress.question === currentTest.blocks[testProgress.block].questions.length - 1) {
            // Logic to handle test completion
            console.log("Test completed");
            return;
        }
        else if (testProgress.question < currentTest.blocks[testProgress.block].questions.length - 1) {
            setTestProgress({ ...testProgress, question: testProgress.question + 1 });
        }
        else {
            setTestProgress({ ...testProgress, question: 0, block: testProgress.block + 1 });
        }
    }

    return (
        <div className="parentPage" id="inTest">
            {currentTest && currentQuestion && (
                <>
                    {
                        currentQuestion.contentType === 'text' && (
                            <h2 className="questionText">{currentQuestion.text}</h2>
                        )
                    }
                    {
                        currentQuestion.contentType === 'image' && (
                            <img
                                src={`/assets/faces/${currentQuestion.imgName}`}
                                className="questionImg"
                            />
                        )
                    }

                    <div className="btnsHolder">
                        {currentQuestion?.buttonLabels?.[0] && (
                            <div className="testBtn a" onClick={() => handleButton(0)}>
                                <p>{currentQuestion.buttonLabels[0]}</p>
                            </div>
                        )}

                        {currentQuestion?.buttonLabels?.[1] && (
                            <div className="testBtn b" onClick={() => handleButton(1)}>
                                <p>{currentQuestion.buttonLabels[1]}</p>
                            </div>
                        )}
                    </div>

                </>
            )}
        </div>
    );

}