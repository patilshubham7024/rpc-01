import "./RPS.css";

export default function UserInput({ onUserClick }) {
    function rock() {
        onUserClick("Rock");
    }
    function paper() {
        onUserClick("Paper");
    }
    function scissor() {
        onUserClick("Scissors");
    }

    return <>
<button className="my-button" onClick={rock}>Rock</button>
<button className="my-button" onClick={paper}>Paper</button>
<button className="my-button" onClick={scissor}>Scissor</button>
    </>
}