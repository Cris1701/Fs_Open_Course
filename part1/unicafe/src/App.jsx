import { useState } from 'react'


const Statics = ({good, neutral, bad, all}) => {

  const calculateAverage = () => {
    const points = good - bad;
    const total = points / all;
    return total || 0
  }

  const calculatePositivePercent = () => {
    const division = good / all;
    const percent = division * 100
    return `${percent || 0}%`;
  }
    
  return (
    <table>
      <tr>
      <StatisticsLine text={"good"} value={good}/>
      </tr>
      <tr>
      <StatisticsLine text={"neutral"} value={neutral}/>
      </tr>
      <tr>
      <StatisticsLine text={"bad"} value={bad}/>
      </tr>
      <tr>
      <StatisticsLine text={"all"} value={all}/>
      </tr>
      <tr>
      <StatisticsLine text={"average"} value={calculateAverage()}/>
      </tr>
      <tr>
      <StatisticsLine text={"positive"} value={calculatePositivePercent()}/>
      </tr>
    </table>
    )
}

const StatisticsLine = ({text, value}) => {
  return (
      <p>{text} {value}</p>
  ) 
}

const Button = ({text, onClickFunction}) => {
  return (
    <button onClick={onClickFunction}>{text}</button>
  ) 
}
 
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleClickGood = () => { 
    setGood(good+1) 
    setAll(all+1)
  }
  const handleClickNeutral = () => { 
    setNeutral(neutral+1) 
    setAll(all+1)
  }
  const handleClickBad = () => { 
    setBad(bad+1) 
    setAll(all+1)
  }


  return (
    <div>
      <h1>give feedback</h1>
     
        <Button text={'good'} onClickFunction={handleClickGood}/>
        <Button text={'neutral'} onClickFunction={handleClickNeutral}/>
        <Button text={'bad'} onClickFunction={handleClickBad}/>

      <h2>statistics</h2>

      { all > 0 ? (
        <Statics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        />
      ) : (
        <p>No feedback given</p>
      )}      
    
    </div>
  )
}

export default App