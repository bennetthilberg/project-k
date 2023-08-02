import React, { useState, useEffect } from "react";
import tests from "../tests/testsProvider";
import Modal from "react-modal";
Modal.setAppElement("#root");


export default function Tests() {
    const [testPreviewed, setTestPreviewed] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        console.log(tests);
    }, []);
    /*const modalStyle = {
        content: {
          height: "50vh",
        },
      };*/
    function handleTestClick(testToPreview) {
        console.log(`about to set testPreviewed to ${testToPreview}`);
        setTestPreviewed(testToPreview);
        console.log(`testPreviewed: ${testPreviewed} (after setTestPreviewed)`)
        setModalIsOpen(true);
        console.log('made it to end of handleTestClick');
    }
    function handleCloseModal() {
        setModalIsOpen(false);
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
                    </Modal>
                )

            }

        </div>
    );
}