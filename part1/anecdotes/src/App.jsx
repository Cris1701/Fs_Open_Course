import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0);

  const initVotes = Array(8).fill(0);

  const [votesList, setVotesList] = useState(initVotes)

  //this function is from mdn web docs
  const getRandomNumber = () => {
    const min = Math.ceil(0);
    const max = Math.floor(7);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClickNextAnecdote = () => {
    const value = getRandomNumber();    
    setSelected(value)
  }

  const handleClickVote = () => {
    const copy = {...votesList}
    copy[selected] += 1;
    setVotesList(copy);
    console.log(votesList)
    // get Max voted value
    const maxValue = Math.max(...Object.values(copy));

    // get index of the max value
    const maxIndex = Object.keys(copy).find(key => copy[key] === maxValue);
    setMostVotedAnecdote(maxIndex)
  }

  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>
      {anecdotes[selected]}
    </div>
    <p>has {votesList[selected]} votes</p>
    <button onClick={handleClickVote}>vote</button>
    <button onClick={handleClickNextAnecdote}>next anecdote</button>

    <h1>Anecdote with most votes</h1>
    <div>
      {anecdotes[mostVotedAnecdote]}
      <p>has {votesList[mostVotedAnecdote]} votes</p>
    </div>
    </>
  )
}

export default App;