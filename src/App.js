import { useState } from 'react'
import { retrieveMnemonics } from './retrieveMnemonics.js'
import { sanitize } from './utilities.js'
import './App.css'

function App() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const results = retrieveMnemonics(sanitize(phoneNumber))

  const onClick = (digit) => {
    if (phoneNumber.length > 5) {
      return alert('Maximum input of 6 reached.')
    }

    setPhoneNumber(phoneNumber + digit)
  }

  const Button = ({ number, letters }) => (
    <button onClick={() => onClick(number)}>
      <div>{number}</div>
      <div>{letters}</div>
    </button>
  )

  return (
    <div className="app">
      <h1>{phoneNumber}</h1>

      <div className="digits">
        <Button number="1" />
        <Button number="2" letters="a b c"/>
        <Button number="3" letters="d e f"/>
        <Button number="4" letters="g h i"/>
        <Button number="5" letters="j k l"/>
        <Button number="6" letters="m n o"/>
        <Button number="7" letters="p q r s"/>
        <Button number="8" letters="t u v"/>
        <Button number="9" letters="w x y z"/>

        <button onClick={() => setPhoneNumber("")}>Clear</button>
        <Button number="0" />
        <button aria-hidden />
      </div>

      <div className="results">
        <p>There are <b>{results.length}</b> possible combinations.</p>
        <ul>{results.map(result => <li key={result}>{result}</li>)}</ul>
      </div>
    </div>
  )
}

export default App;
