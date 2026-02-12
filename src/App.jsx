import { useState } from 'react'
import {terrorists} from './data/terrorists_data.js'
import './App.css'
import Table from './components/Table/Table.jsx'

function App() {
  const [allTerrorists, setTerrorists] = useState(terrorists)

  return (
    <>
      <Table terrorists={allTerrorists} />
    </>
  )
}

export default App