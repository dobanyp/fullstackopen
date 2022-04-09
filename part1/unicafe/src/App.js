import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>

  )
}

const Statistics = (props) => {
  return (
    <>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
    </>
  )
}

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    return (
      setGood(good + 1)
    )
  }

  const handleNeutral = () => {
    return (
      setNeutral(neutral + 1)
    )
  }

  const handleBad = () => {
    return (
      setBad(bad + 1)
    )
  }

  return (
    <>
      <h2>Give feedback</h2>
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
