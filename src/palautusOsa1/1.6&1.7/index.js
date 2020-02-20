import React from 'react';
import ReactDOM from 'react-dom';


const Keskiarvo = ({hyvä, huono, neutraali}) => {
		
		var tulos = (hyvä - huono) / (hyvä + huono + neutraali)
	  
		return (
			<div>
	
				<p>Keskiarvo: {tulos}</p>
	
	
			</div>
		)
}


const Prosentti = ({hyvä, huono, neutraali}) => {
	
	var tulos1 = hyvä/(hyvä+huono+neutraali) * 100 
	
	
	return (
		<div>
		
			<p>Hyviä kaikista: {tulos1} %</p>
			
			
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
  
	  
   

  render() {
    return (
      <div>
        
		<p> Anna palautetta: </p>
	<button onClick={() => this.setState({ hyvä: this.state.hyvä +1 }) }> Hyvä </button>
	<button onClick={() => this.setState({ huono: this.state.huono +1}) }> Huono </button>
	<button onClick={() => this.setState({ neutraali: this.state.neutraali +1}) }> Neutraali </button>
	
	
	
	<p> Statistiikka</p>
	
	<p>Hyvä: {this.state.hyvä}</p>
	<p>Huono: {this.state.huono}</p>
	<p>Neutraali: {this.state.neutraali}</p>
	
	<Keskiarvo hyvä = {this.state.hyvä} huono = {this.state.huono} neutraali = {this.state.neutraali}/>
	<Prosentti hyvä = {this.state.hyvä} huono = {this.state.huono} neutraali = {this.state.neutraali}/>
	</div>
	
	


      
    )
  }
}






	











ReactDOM.render(<App />, document.getElementById('root'));

