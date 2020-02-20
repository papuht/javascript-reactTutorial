import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	
	return (
	<div> 
		<h1>{props.course}</h1>
	</div>
	
	
	)}
	
const Contents = (props) => {
  
	
	return (
	<div>
	  <p>{props.part} {props.exercises}</p>
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
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (
    <div>
      <Header course={course} />
	  <Contents part ={part1} exercises ={exercises1}/>
	  <Contents part ={part2} exercises ={exercises2}/>
	  <Contents part ={part3} exercises ={exercises3}/>
	  <Total part1 ={exercises1} part2={exercises2} part3={exercises3}/>
	  
     
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
