import React from 'react'
import ReactDOM from 'react-dom'


const Course = ({course}) => {
	
	const parts = course.parts.map(part =>
	
	<li key={part.id}>
		{part.name}  {part.exercises}
	</li>
	)
	
	const name = course.name
	
	const total = course.parts.map(part => part.exercises)
	
	var sum = total.reduce(function(a, b){

        return a + b;

    }, 0);

	return (
	<div>
		<Header name = {name}/>
			<Contents parts = {parts}/>
			<Total total = {sum} />
		
		
	</div>
	
	
	
	)


}


const Header = (props) => {
	
	return (
	<div> 
		<h1>{props.name}</h1>
	</div>
	
	
	)}
	
	
const Part = ({course}) => {
	
	

	return (
	<div>
	<ul>
	{course}
	</ul>
	</div>
	
	)



}
	
const Contents = ({parts}) => {
	
	return (
	<div>
		<Part course = {parts}/>
		
	  
	</div>
	
	)


}

const Total = ({total}) => {
	
	
	return (
	<div>
	<ul>
	<li>
		Total : {total}
	</li>
	</ul>
	</div>
	)


}



const App = () => {
	const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8,
		id: 1
      },
      {
        name: 'Using props',
        exercises: 10,
		id: 2
      },
      {
        name: 'Component states',
        exercises: 12,
		id: 3
      }
    ]
  }
  
  
  
  

  return (
    <div>
      <Course course = {course} />
	  
     
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
