import { useState } from "react";

const Statistics = ({ value, calculations }) => {
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={value[0]} />
          <StatisticLine text="neutral" value={value[1]} />
          <StatisticLine text="bad" value={value[2]} />
          <StatisticLine text="all" value={calculations[0]} />
          <StatisticLine text="average" value={calculations[1]} />
          <StatisticLine text="positive" value={calculations[2]} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all / 3;
  const positive = all && (good / all) * 100 + "%";
  const values = [good, neutral, bad];
  const calculations = [all, average, positive];

  const handleClickGood = () => {
    setGood(good + 1);
    console.log("good", good);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    console.log("neutral", neutral);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    console.log("bad", bad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
      <h1>statistics</h1>
      {all !== 0 && <Statistics value={values} calculations={calculations} />}
    </div>
  );
};

export default App;
