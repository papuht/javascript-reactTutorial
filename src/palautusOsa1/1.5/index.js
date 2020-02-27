import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	
	return (
	<div> 
		<h1>{props.course.name}</h1>
	</div>
	
	
	)}
	
	
const Part = (props) => {
	
	

	return (
	<div>
		<p>{props.part}</p>
	</div>
	
	)



}
	
const Contents = (props) => {
	
	return (
	<div>
		<Part part ={props.course.parts[0].name + " " + props.course.parts[0].exercises}/>
		<Part part ={props.course.parts[1].name + " " + props.course.parts[1].exercises}/>
		<Part part ={props.course.parts[2].name + " " + props.course.parts[2].exercises}/>
	  
	</div>
	
	)


}

const Total = (props) => {

	return (
	<div>
		<p> Total: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} </p>
	</div>
	
	)

}



const App = () => {
	const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
	  <Contents course={course}/>
	  <Total course={course}/>
	  
     
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
