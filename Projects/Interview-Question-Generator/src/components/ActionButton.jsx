function ActionButton({ generateQuestion }) {
    return (
        <button
            className="generate-btn"
            onClick={generateQuestion}
        >
            Generate Question
        </button>
    );
}

export default ActionButton;