import React from 'react';
import ReactDOM from 'react-dom';



const Statistic = ({action, hyvä, huono, neutraali}) => {
	
	if (hyvä === 0 && huono === 0 && neutraali === 0) {
	
	return (
		<h1>  </h1>
	)
	
	
	}
	
	
	
	return (
		<table>
			<tbody>
			<tr>
			<td>{action}</td>
			</tr>
			</tbody>
		</table>
		)
	
}



const Statistics = ({hyvä, huono, neutraali}) => {
	if (hyvä === 0 && huono === 0 && neutraali === 0) {
	
	return (
	
		
		<h1>Statistiikka</h1>
		
		
	
	
	)
	
	
	}

	
	return (
	<div>
	<h1> Statistiikka: </h1>
	<table>
		
		<tbody>
		<tr>
			<td>Hyvä:</td>
			<td>Huono:</td>
			<td>Neutraali:</td>
  
		</tr>
		
		<tr> 
		
			<td>{hyvä}</td>
			<td>{huono}</td>
			<td>{neutraali}</td>
		</tr>
		</tbody>
		</table>
		
	</div>
	
	
	)
	
}

const Button = ({handleClick, texti}) => {
	
	
	return (
	
        
	
	<button onClick={handleClick}> {texti} </button>
	
	
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

	laskeKeskiarvo = (arvo1, arvo2, arvo3) => {
		
		var tulos = (arvo1 - arvo2) / (arvo1 + arvo2 + arvo3)
		
		
		return (
			
			
			<p>Keskiarvo: {tulos}</p>
			 
		)
		
		
	}
	
	laskeProsentti = (arvo1, arvo2, arvo3) => {
		
	var tulos1 = arvo1/(arvo1+arvo2+arvo3) * 100
	
	return (
			
			
			<p>Hyvien osuus: {tulos1} %</p>
			 
		)
	
	
	
	
	}

	
  
	  
   

  render() {
    return (
    <div>  
	<h1> Anna palautetta: </h1>
	<Button handleClick = {this.asetaHyvää(this.state.hyvä +1)} texti = "Hyvä" />
	<Button handleClick = {this.asetaHuono(this.state.huono +1)} texti = "Huono" />
	<Button handleClick = {this.asetaNeutraali(this.state.neutraali +1)} texti = "Neutraali" />
	
	
	<Statistics hyvä = {this.state.hyvä} huono = {this.state.huono} neutraali = {this.state.neutraali} />
	
	<Statistic action = {this.laskeKeskiarvo(this.state.hyvä, this.state.huono, this.state.neutraali) } hyvä = {this.state.hyvä} huono = {this.state.huono} neutraali = {this.state.neutraali}  />
	<Statistic action = {this.laskeProsentti(this.state.hyvä, this.state.huono, this.state.neutraali)} hyvä = {this.state.hyvä} huono = {this.state.huono} neutraali = {this.state.neutraali}/>
	
	</div>
	
	


      
    )
  }
}






	











ReactDOM.render(<App />, document.getElementById('root'));

