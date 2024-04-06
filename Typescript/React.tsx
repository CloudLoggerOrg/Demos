import React, {useEffect} from "react";
import {CloudLogger, CloudLoggerItem} from "@viovnl/cloudlogger";

const App: React.FC = () => {

    useEffect(() => {
        CloudLogger.Create("your_project_secret");
    }, []);
	
    const logHandler = () => {
			CloudLogger.Log([
			    {Name: "Date", Value: new Date() },
                {Name: "Count", Value: 5},
                {Name: "Name", Value: "John Doe"},
			]);
    };

    return (
        <>
            <div className="card">
                <button onClick={logHandler}>Click to send log</button>
            </div>
        </>
    );
};

export default App;