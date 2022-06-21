import { useState } from "react";
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} </td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return <p>No feedback given </p>;
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Bad"} value={bad} />
            <StatisticLine text={"All"} value={all} />
            <StatisticLine text={"Average"} value={(good + bad * -1) / all} />
            <StatisticLine
              text={"Positive"}
              value={(good * 100) / (good + bad + neutral)}
            />
          </tbody>
        </table>
      </div>
    );
  }
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
