// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext(null)

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

const CountProvider = ({children}) => {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const {count} = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const {setCount} = React.useContext(CountContext)
  const [step, setStep] = React.useState(1)

  const increment = () => setCount(c => c + step)
  const decrement = () => setCount(c => c - step)
  return (
    <>
      <label>
        Count:
        <input
          type="number"
          value={step}
          onChange={e => setStep(e.target.valueAsNumber)}
        />
      </label>
      <button onClick={increment}>Increment count by {step}</button>
      <button onClick={decrement}>Decrement count by {step}</button>
    </>
  )
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
