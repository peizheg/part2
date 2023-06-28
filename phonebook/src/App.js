import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filtered, setNewFiltered] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(() => {
    PersonServices
      .getAll()
      .then(response => setPersons(response))
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter filtered={filtered} setNewFiltered={setNewFiltered} />
      
      <h3>add a new</h3>
      
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      
      <h2>Numbers</h2>
      <Persons persons={persons} filtered={filtered} setPersons={setPersons}/>
    </div>
  )
}

export default App