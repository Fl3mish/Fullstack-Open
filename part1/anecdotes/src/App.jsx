import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState([
    {
      phrase: "If it hurts, do it more often.",
      votes: 0,
    },
    {
      phrase: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      phrase:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      phrase:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    {
      phrase: "Premature optimization is the root of all evil.",
      votes: 0,
    },
    {
      phrase:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      phrase:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    {
      phrase: "The only way to go fast, is to go well.",
      votes: 0,
    },
  ]);

  // Retrieve random anecdote based on how many there are in the array.
  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  // Increase vote on click.
  const handleVote = () => {
    const updatedVote = anecdotes.map((anecdote, index) =>
      index === selected ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote
    );
    setAnecdotes(updatedVote);
  };

  // Retrieve object with most votes
  const mostVotes = anecdotes.reduce((acc, curr, index) => {
    if (curr.votes > acc.votes) {
      return { ...curr, index };
    }
    return { ...acc, index };
  });

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].phrase}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <Button text="vote" onClick={handleVote} />
      <Button text="next anecdote" onClick={handleNextAnecdote} />
      <h1>Anecdote with most votes</h1>
      <p>{mostVotes.phrase}</p>
      <p>has {mostVotes.votes} votes</p>
    </div>
  );
};
export default App;
