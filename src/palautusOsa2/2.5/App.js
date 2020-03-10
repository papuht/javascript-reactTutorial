import React from 'react';

const Names = ({persons}) => {
	
	
	const personalities = persons.map(person =>
	
	<li key={person.name}>
		{person.name} 
	</li>
	)
	
	
	return (
		<ul>
		{personalities}
		
		
		</ul>
	
	
	
	)

	

}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }
  
  addName = (event) => {
    event.preventDefault()
	
	
	const testnames = this.state.persons.map(person => person.name)
	console.log(testnames)
	if (testnames.includes(this.state.newName)) {
	console.log("this person is already on the list");
	
	this.setState({
		persons: this.state.persons, 
		newName:''
	}
	)
	
    }
	
	
	else {
	
	const nameObject = {
		name:this.state.newName
    }
	
  

  const names = this.state.persons.concat(nameObject)

  this.setState({
    persons: names,
    newName: ''
  })
	}
 
  }
  
  handleNameAdd = (event) => {
	
  
	
    
    this.setState({ newName: event.target.value })
	
  }
    
	

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit ={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameAdd}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <Names persons = {this.state.persons} />
      </div>
    )
  }
}

export default App
