export default function ComputerOutput() {
    // 1 - Rock
    // 2 - Paper
    // 3 - Scissor
    function getRandomNumber(from, to) {
        return Math.floor(Math.random() * to) + from;
      }

    return getRandomNumber(1, 3)
}