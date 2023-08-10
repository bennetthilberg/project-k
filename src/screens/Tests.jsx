import React, { useState, useEffect } from "react";
import tests from "../tests/testsProvider";
import Modal from "react-modal";
import { currentTestAtom,testProgressAtom,testResultsAtom } from "../../globalAtoms";
import { useAtom } from "jotai";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import InTest from "./InTest";
Modal.setAppElement("#root");


export function Tests() {
    const navigate = useNavigate();
    const [testPreviewed, setTestPreviewed] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
    const [testProgress, setTestProgress] = useAtom(testProgressAtom);
    const [testResults, setTestResults] = useAtom(testResultsAtom);
    useEffect(() => {
        console.log(tests);
    }, []);
   
    function handleTestClick(testToPreview) {
        setTestPreviewed(testToPreview);
        setModalIsOpen(true);
    }
    function handleCloseModal() {
        setModalIsOpen(false);
    }
    function handleTestStart(){
        setCurrentTest(testPreviewed);
        setTestProgress({
            complete: false,
            block: 0,
            question: 0,
        });
        setTestResults({
            testId: testPreviewed.id,
            blocks: []
        });
        navigate('/tests/in-test');
    }
    return (
        <div className="parentPage">
            <h1>Tests Page</h1>
            {tests.map((test, index) => {
                return (
                    <button
                        className="takeableTest"
                        key={index}
                        onClick={() => {
                            console.log(test);
                            handleTestClick(test);
                        }}
                    >
                        <h2>{test.name}</h2>
                    </button>
                );
            })}
            {
                testPreviewed && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={handleCloseModal}
                        //style={modalStyle}
                    >
                        <h2>{`${testPreviewed.name}`}</h2>
                        <h3>{`${testPreviewed.description}`}</h3>
                        <button onClick={handleTestStart}><h2>Begin</h2></button>
                    </Modal>
                )

            }

        </div>
    );
}

export default function TestsMain() {
    return(
        <Routes>
            <Route path="/" element={<Tests />} />
            <Route path="/in-test" element={<InTest />} />
        </Routes>
    );
}
