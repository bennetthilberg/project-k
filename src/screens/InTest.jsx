import { currentTestAtom, testProgressAtom, testResultsAtom } from "../../globalAtoms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect, useState, useMemo } from "react";

export default function InTest() {
    const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
    const [testProgress, setTestProgress] = useAtom(testProgressAtom);
    const [testResults, setTestResults] = useAtom(testResultsAtom);
    const [responseTimer, setResponseTimer] = useState(0);
    const [showTextBig, setShowTextBig] = useState(false);
    
    const currentQuestion = useMemo(() => {
        if (currentTest === null) {
            return null;
        }
        return currentTest.blocks[testProgress.block].questions[testProgress.question];
    }, [currentTest, testProgress]);


    useEffect(() => {
        if (currentQuestion?.contentType === 'text' 
        && currentQuestion?.type !== 'info') {
            setShowTextBig(true);
        }
        else{
            setShowTextBig(false);
        }
    }, [currentQuestion]);

    useEffect(()=>{
        if(!testResults.testId){
            setTestResults({...testResults, testId: currentTest.id});
        }
    },[]) // this might run all the time because the check might happen before react has gotten testResults. fix?

    

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
    else if (currentQuestion.type === 'scored') { 
        let timeTaken = Date.now() - responseTimer;
        /*
        DONE if there's no results id yet, create one
        then, check if this block's index in currentTest's blocks array matches the last object's blockId in testResults.blocks
            DONE if not, push a new block into currentTest.blocks with blockId: (the index of this current block in currentTest.blocks)
        DONE then, make a stagingResponse object
        DONE then, check if the response was correct
            DONE if it was, stagingResponse.correct = true
            DONE it not, stagingResponse.correct = false
        DONE then, set stagingResponse.responseTime = timeTaken
        */

        if( // if this current block isn't in testResults yet, add it
            testProgress.block !== testResults.blocks[testResults.blocks.length - 1]
        ) {
            setTestResults(prevResults => {
                const newBlock = {
                    blockId: testProgress.block,
                    questions: []
                }
                return {
                    ...prevResults,
                    blocks: [...prevResults.blocks, newBlock]
                }
            })
        }
        let stagingQuestionResponse = {};
        if(currentQuestion.buttonLabels[resLabelIndex] === currentQuestion.correctAnswer){ //checking if answer was right
            stagingQuestionResponse.correct = true;
        }
        else{
            stagingQuestionResponse.correct = false;
        }
        stagingQuestionResponse.responseTime = timeTaken;

        setTestResults(prevResults => {
            const lastBlockIndex = prevResults.blocks.length - 1;
            const lastBlock = prevResults.blocks[lastBlockIndex];
            const newLastBlock = {
                ...lastBlock,
                questions: [...lastBlock.questions, stagingQuestionResponse]
            };
            const updatedBlocks = [
                ...prevResults.blocks.slice(0, lastBlockIndex),
                newLastBlock
            ];
            return {
                ...prevResults,
                blocks: updatedBlocks
            };
        });

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
    setResponseTimer(Date.now());
}

return (
    <div className="parentPage" id="inTest">
        {currentTest && currentQuestion && (
            <>
                {
                    currentQuestion.contentType === 'text' && (
                        <div className='questionContent'>
                            {showTextBig ? (
                                <h2 className="questionText bigText">
                                    {currentQuestion.text}
                                </h2>
                            ) : (
                                <h2 className="questionText">
                                    {currentQuestion.text}
                                </h2>
                            )}

                        </div>

                    )
                }
                {
                    currentQuestion.contentType === 'image' && (
                        <div className="questionContent">
                            <img
                                src={`/assets/faces/${currentQuestion.imgName}`}
                                className="questionImg"
                            />
                        </div>

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