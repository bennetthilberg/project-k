import React,{useState,useEffect,useMemo} from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { currentTestAtom, testProgressAtom, testResultsAtom, testReportsAtom } from "../../globalAtoms";

export default function ResultsPage() {
    const [testReports, setTestReports] = useAtom(testReportsAtom);
    return (
        <div className="parentPage" id='results'>
            <h1>Results</h1>
            {testReports.map((report, index) => {
                return(
                    <div className="testReportCard" key={index}>
                    <p>id: {report.id}</p>
                    <p>affinity score white+good,black+bad: {report.affinityScores[0]}</p>
                    <p>affinity score white+bad,black+good: {report.affinityScores[1]}</p>
                </div>
                );
                
            })}
        </div>
    );
  }