import React from 'react';
import ReactDOM from 'react-dom';



const Statistic = ({action, hyvä, huono, neutraali}) => {
	
	if (hyvä === 0 && huono === 0 && neutraali === 0) {
	
	return (
	<div>
		
	
	</div>
	)
	
	
	}
	
	
	
	return (
		<div>
			<p>{action}</p>
		
		
		</div>
	
	
	
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
	
		<p>Hyvä: {hyvä}</p>
		<p>Huono: {huono}</p>
		<p>Neutraali: {neutraali}</p>
	
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

	laskeKeskiarvo = (arvo1, arvo2, arvo3) => {
		
		var tulos = (arvo1 - arvo2) / (arvo1 + arvo2 + arvo3)
		
		
		return (
			
			<div>
			<p>Keskiarvo: {tulos}</p>
			</div> 
		)
		
		
	}
	
	laskeProsentti = (arvo1, arvo2, arvo3) => {
		
	var tulos1 = arvo1/(arvo1+arvo2+arvo3) * 100
	
	return (
			
			<div>
			<p>Hyvien osuus: {tulos1} %</p>
			</div> 
		)
	
	
	
	
	}

	
  
	  
   

  render() {
    return (
      <div>
        
	<p> Anna palautetta: </p>
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

