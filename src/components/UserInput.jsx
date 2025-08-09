export default function UserInput({ onUserClick }) {
    function rock() {
        onUserClick("Rock");
    }
    function paper() {
        onUserClick("Paper");
    }
    function scissor() {
        onUserClick("Scissor");
    }

    return <>
        <button class="my-button" onClick={rock}>Rock</button>
        <button class="my-button" onClick={paper}>Paper</button>
        <button class="my-button" onClick={scissor}>Scissor</button>
    </>
}