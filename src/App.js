import React from 'react'
import axios from 'axios'

    


const Person = ({person, removePerson}) => {
	
	
	
	
	
	return (
	<li>
		{person.name}   {person.number} <button onClick = {removePerson}> Poista </button>
	</li>
	
	
	
	)

	

}

const Form = ({onSubmit, value1, value2, onChange1, onChange2}) => {
	
	return (
	<div>
	<h2>Puhelinluettelo</h2>
        <form onSubmit ={onSubmit}>
          <div>
            nimi: <input value={value1} onChange={onChange1}/>
          </div>
		  <div>
		    numero: <input value={value2} onChange={onChange2} />
		  </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
		</div>
	)


}






class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
	  newNumber:''
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  
  addName = (event) => {
    event.preventDefault()
	
	const testnames = this.state.persons.map(person => person.name)
	console.log(testnames)
	const testnumbers = this.state.persons.map(person => person.number)
	console.log(testnumbers)
	if (testnames.includes(this.state.newName) || testnumbers.includes(this.state.newNumber)) {
	console.log("this person is already on the list");
	
	this.setState({
		persons: this.state.persons, 
		newName:'',
		newNumber:''
	}
	)
	
    }
	else {
	
	const person = {
    name: this.state.newName,
    number: this.state.newNumber
	}

	axios.post('http://localhost:3001/persons', person)
	.then(response => {
    this.setState({
		persons: this.state.persons.concat(response.data),
        newName: '',
		newNumber: ''
      })
    })
	
	
	
  }
	
  }



	removePerson = (id) =>{  
	return() => {
    const url = `http://localhost:3001/persons/${id}`
    const person = this.state.persons.find(p => p.id === {id})
    const removePerson = {person}

    axios
      .delete(url, removePerson)
	  .then(response => {
		this.setState({
		persons: this.state.persons.concat(person => person.id === id ? person : response.data)
    })
      
  }
	)
	
	
	
	
	
	
	
	}
	}
	
	
  


	
 
  
  
  handleNameAdd = (event) => {
	
  
	
    
    this.setState({ newName: event.target.value })
	
  }
  
  
  handleNumberAdd = (event) => {
	
  
	
    
    this.setState({ newNumber: event.target.value })
	
  }
  
  
 
  
  
    
	

  render() {
	const persons = this.state.persons
	  
	  
	  
    return (
      <div>
       
		
		<Form onSubmit = {this.addName} value1={this.state.newName} value2={this.state.newNumber} onChange1={this.handleNameAdd} onChange2={this.handleNumberAdd} />
      
		<h2>Numerot</h2>
		<ul>
		{persons.map(person =>
		<Person 
			key = {person.id}
			person = {person}
			removePerson ={this.removePerson(person.id)} 
			
			
			/>
		
		
		
		)} 
		
		
		</ul>
	</div>
        
		

		
		
      
    )
  }
}


export default App
