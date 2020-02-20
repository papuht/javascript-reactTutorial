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
  const parts = [
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


  return (
    <div>
      <Header course={course} />
	  <Contents part1 ={parts[0].name + " " + parts[0].exercises} part2={parts[1].name + " " + parts[1].exercises} part3={parts[2].name + " " + parts[2].exercises}/>
	  <Total part1 ={parts[0].exercises} part2={parts[1].exercises} part3={parts[2].exercises}/>
	  
     
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
