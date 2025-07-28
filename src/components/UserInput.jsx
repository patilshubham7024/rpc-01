export default function UserInput(onUserClick) {
    return <>
        <button class="my-button" onClick={onUserClick(1)}>Rock</button>
        <button class="my-button" onClick={onUserClick(2)}>Paper</button>
        <button class="my-button" onClick={onUserClick(3)}>Scissor</button>
    </>
}