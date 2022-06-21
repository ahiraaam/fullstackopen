import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  let votes = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(votes);
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
  const selectNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const giveVote = () => {
    let copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    if (copy[selected] > copy[mostVoted]) {
      setMostVoted(selected);
    }
  };
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <button onClick={giveVote}>Vote</button>
      <button onClick={selectNumber}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {points[mostVoted]} points</p>
    </div>
  );
};

export default App;
