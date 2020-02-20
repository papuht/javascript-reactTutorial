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
	
const Contents = () => {
	
	const part1 = 'Basics of React'
	const exercises1 = 8
	const part2 = 'Using props'
	const exercises2 = 10
	const part3 = 'Component states'
	const exercises3 = 12
	
	return (
	<div>
		<Part part ={part1} exercises ={exercises1}/>
		<Part part ={part2} exercises ={exercises2}/>
		<Part part ={part3} exercises ={exercises3}/>
	  
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
	const exercises1 = 8
	const exercises2 = 10
	const exercises3 = 12
  
 const course = 'Superadvanced web and mobile programming'

  return (
    <div>
      <Header course={course} />
	  <Contents />
	  <Total part1 ={exercises1} part2={exercises2} part3={exercises3}/>
	  
     
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
