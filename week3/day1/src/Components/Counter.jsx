import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleReduce = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce} disabled={count < 1}>
                Reduce
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter;