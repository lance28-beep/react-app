import { useState, props, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import MultiInputForm from './components/MultiInputForm'
import DataFetcher from './components/DataFetcher'
import TodoList from './components/TodoList'
import ModalExample from './components/ModalExample'
import ScrollTracker from './components/ScrollTracker'
import Pagination from './components/Pagination'
import Tiktactoe from './components/Tiktactoe'


const App = () => {

  let obj = {
    Movie1: { title: "Lance", name: "unknown", description: "lorem15" },
    Movie2: { title: "Lance", name: "unknown", description: "lorem15" },
    Movie3: { title: "Lance", name: "unknown", description: "lorem15" },
    Movie4: { title: "Lance", name: "unknown", description: "lorem15" }
  };
const [counts, setCounts] = useState(0)
const [isVisible, setIsVisible] = useState(false)
const [inputValue,setInputValue] = useState('')
const [isChecked,setIsChecked] = useState(false)
const [selectedOption, setSelectedOption] = useState('')
const [isDarkMode, setIsDarkMode] = useState(false);

  // Add or remove the "dark-mode" class from the <body> element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return(
  <div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Dark Mode
      </button>
      <p>Current Mode: {isDarkMode ? 'Dark' : 'Light'}</p>
    <div>{inputValue}</div>
    {/* {Object.keys(obj).map((key) => (
            <Cards
            key={key} // Unique key for each card
            title={obj[key].title}
            name={obj[key].name}
            description={obj[key].description}
          />
    ))} */}

    <button onClick={() => setIsVisible(!isVisible)}>{isVisible? 'Hide': 'Show'}</button>
    {isVisible && <p>Now you See me</p>}
    <button onClick={() => setCounts(counts + 1)}>{counts}</button>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    <MultiInputForm />
    <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    <p>status: {isChecked? 'true':'false'}</p>
    {isChecked && `this is ${isChecked}`}
    {selectedOption && `your choice is ${selectedOption}`}
    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
      <option value="">Select an opiton</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <DataFetcher />
    <TodoList />
    <ModalExample />
    <ScrollTracker />
    <Pagination />
    <Tiktactoe />

  </div>
  )
}

export default App 
