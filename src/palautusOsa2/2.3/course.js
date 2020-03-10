import React from 'react';


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

export default Course;