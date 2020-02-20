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
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }


  return (
    <div>
      <Header course={course} />
      <Contents part1 = {part1.name + " " + part1.exercises} part2 = {part2.name + " " + part2.exercises} part3 = {part3.name + " " + part3.exercises}/>
	  <Total part1 ={part1.exercises} part2={part2.exercises} part3={part3.exercises}/>
	  
     
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
