import React from "react";

const App = () => {
    let time = new Date().toLocaleTimeString();

    const [cTime,setCTime] = React.useState(time);

    const upDate = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(upDate,1000);

    return (
        <div className="div">
            <h1>{cTime}</h1>
        </div>
    )
}

export default App;