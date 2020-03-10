import React from 'react'
import axios from 'axios'

const Names = ({persons}) => {
	
	
	const personalities = persons.map(person =>
	
	<li key={person.name}>
		{person.name}   {person.number}
	</li>
	)
	
	
	return (
	<div>
		<h2>Numerot</h2>
		<ul>
		{personalities}
		
		
		</ul>
	</div>
	
	
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
      showAll: true
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
	console.log(person)
	
	const personas = this.state.persons.concat(person)

  this.setState({
    persons: personas,
	
    newName: '',
	newNumber:''
  })
	}
 
  }
  
  handleNameAdd = (event) => {
	
  
	
    
    this.setState({ newName: event.target.value })
	
  }
  
  
  handleNumberAdd = (event) => {
	
  
	
    
    this.setState({ newNumber: event.target.value })
	
  }
  
  
  
  
  
    
	

  render() {
    return (
      <div>
       
		
		<Form onSubmit = {this.addName} value1={this.state.newName} value2={this.state.newNumber} onChange1={this.handleNameAdd} onChange2={this.handleNumberAdd} />
        
        
        <Names persons = {this.state.persons} />
		

		
		
      </div>
    )
  }
}

export default App
