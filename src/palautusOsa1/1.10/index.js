import React from 'react';
import ReactDOM from 'react-dom';



const Statistic = ({action, name}) => {
	
	
	
	
	
	return (
		<table>
			<tbody>
			<tr>
			<td>{name + " " + action}</td>
			</tr>
			</tbody>
		</table>
		)
	

	
	
	
	
}



const Statistics = ({hyvä, huono, neutraali}) => {
	
	
	if (hyvä === 0 && huono === 0 && neutraali === 0) {
	
	return (
	<div>
		<p> Statistiikka:</p>
	
		<p>Ei näytettävää</p>
		
	
	</div>
	)
	
	
	}

	
	return (
	<div>
		<p>Statistiikka:</p>
	
		<Statistic action = {hyvä} name="Hyvä"/>
		<Statistic action = {huono} name="Huono"/>
		<Statistic action = {neutraali} name="Neutraali"/>
		<Statistic action = {((hyvä-huono)/(hyvä+huono+neutraali))} name="Keskiarvo"/>
		<Statistic action = {hyvä/(hyvä+huono+neutraali) * 100} name ="Prosenttiosuus hyviä: "/>
	
	</div>
	)
	
}


const Button = ({handleClick, texti}) => {
	
	
	return (
	<div>
        
	
	<button onClick={handleClick}> {texti} </button>
	
	</div>
	)
}







class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyvä: 0,
	  huono: 0,
	  neutraali: 0
	  
	  
    }
	
}
	asetaHyvää = (arvo) => () => this.setState({ hyvä: arvo })
	
	asetaHuono = (arvo) => () => this.setState({ huono: arvo })
	
	asetaNeutraali = (arvo) => () => this.setState({ neutraali: arvo })

	
	
	

	
  
	  
   

  render() {
    return (
      <div>
        
	<p> Anna palautetta: </p>
	<Button handleClick = {this.asetaHyvää(this.state.hyvä +1)} texti = "Hyvä" />
	<Button handleClick = {this.asetaHuono(this.state.huono +1)} texti = "Huono" />
	<Button handleClick = {this.asetaNeutraali(this.state.neutraali +1)} texti = "Neutraali" />
	
	
	<Statistics hyvä = {this.state.hyvä} huono = {this.state.huono} neutraali = {this.state.neutraali} />
	
	
	
	</div>
	
	


      
    )
  }
}






	











ReactDOM.render(<App />, document.getElementById('root'));

