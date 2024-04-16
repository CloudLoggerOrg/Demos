import React, { useEffect } from "react"; 
import { CloudLogger } from "@viovnl/cloudlogger";

function App() {
    useEffect(() => {
        CloudLogger.Create("your_project_secret");
    }, []);
    const clickHandler = () => {
        try {
            CloudLogger.Log([
                { Name: "Date", Value: "22-10-1994" },
                { Name: "Country", Value: "Netherlands" },
            ]);
        } catch (e) {
            console.log("error", e);
        }
    };

    return (
        <>
            <div className="card">
                <button onClick={clickHandler}>Click to send log</button>
            </div>
        </>
    );
}

export default App;
