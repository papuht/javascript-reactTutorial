import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	
	return (
	<div> 
		<h1>{props.course}</h1>
	</div>
	
	
	)}
	
	
const Part = (props) => {
	
	

	return (
	<div>
		<p>{props.part} {props.exercises}</p>
	</div>
	
	)



}
	
const Contents = (props) => {
	
	return (
	<div>
		<Part part ={props.part1} exercises ={props.exercises1}/>
		<Part part ={props.part2} exercises ={props.exercises2}/>
		<Part part ={props.part3} exercises ={props.exercises3}/>
	  
	</div>
	
	)


}

const Total = (props) => {

	return (
	<div>
		<p> Total = {props.part1 + props.part2 + props.part3} </p>
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
      <Header course={course.name} />
	  <Contents part1 = {course.parts[0].name + " " + course.parts[0].exercises} part2 = {course.parts[1].name + " " + course.parts[1].exercises} part3 = {course.parts[2].name + " " + course.parts[2].exercises}/>
	  <Total part1 ={course.parts[0].exercises} part2 ={course.parts[1].exercises} part3 ={course.parts[2].exercises}/>
	  
     
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
