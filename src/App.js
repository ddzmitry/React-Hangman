import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){

      super(props);
      this.state = {
        word: "furniture",
        age: 25,
        colors :["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"] ,
        color : "maroon",
        picked : [],
        underscored : "",
        pictureLink : "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAp2AAAAJDVjMTI1OGMxLWE3ZDYtNGI5Yy04ZjIxLTk3N2Y4MzlmODQ3Yw.jpg",
      };
      // we are binding it with our component
      this.addAge = this.addAge.bind(this);
      this.takeAge = this.takeAge.bind(this);
      this.check = this.check.bind(this);
      this.checkPassport = this.checkPassport.bind(this);
      this.changeColor = this.changeColor.bind(this);
      this.random = this.random.bind(this);
      this.letter = this.letter.bind(this);
  }
    letter(e) {

        console.log(this);
       let letter = e.target.innerHTML.toLowerCase()
        
        this.state.picked.push(letter);

            console.log(this.state.underscored.split(''))
        let word = this.state.word.split('');

          word.forEach(function(elem,i){

            console.log(elem)
            //console.log(letter.toLowerCase())
              if(elem == letter){
                    console.log("Match Letter")
                  //  index matter
                    // let split = this.state.underscored.split('')
                    //    split[i] = letter;
                    //     this.state.underscored =  split
              } else {

                 // console.log(" Not Match Letter")
              }
      
          })


          
    }
   check() {

     if (this.state.age == '0'){

       alert("you are too young")
     }
   }

  addAge() {
        // we actually have to reset the state! 
        //that will mound this component again
      this.setState({ age: this.state.age + 1});
      
  }

  takeAge() {

    this.setState({ age: this.state.age - 1});
    this.check();

  }

  checkPassport() {
      
       
    if(this.state.age >= '21'){
       
      alert("You can drink")
    } else {

      alert("You can have water")
    }
  }

  changeColor() {

    this.setState({
      color : this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
    })

    console.log( this.state.color)
  }

  random() {  
        console.log('hello')
       this.setState({
      color : this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
    })
    
  }
  componentWillMount() {

            // yo can change state in this 
            if(this.props.yourName == "Dzmitry"){

              this.state.color = "green"
            } else {
              this.state.color = "pink"
            }
        // setInterval(this.random, 100);
        
          console.log(this.state.word);
          let broken = this.state.word.split('')
            console.log(broken)
            let uscore =[];

           broken.forEach((elem, i)=>{

                uscore.push('_')
            })
            console.log(uscore);

           let uscoreJoined = uscore.join('')
            console.log(uscoreJoined)
            this.state.underscored = uscoreJoined;


       // this.random()
    // I can change the state even on the component before mound
    console.log('I will mount!')
    // this.state.age =57 ;
  }
  componentDidMount() {

    // I can change the state even after the component was mound

    // this.state.age =12 ;
  }

  
  render() {

  let style = {
    margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none',
    color: this.state.color
  };

 
    return (


      <div className="App">
        <div className="App-header">    
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            {this.state.color}
        </div>
        <h4>properties(props) -> they are from pops</h4>
          
          <p style = {style}>Hello {this.props.yourName}</p>
            <h3>Your age is {this.state.age}</h3>

                      <h3> {this.state.underscored}</h3>


        <p style = {style} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        
        </p>
        <button onClick={this.addAge}> Add Age</button>
        <button onClick={this.takeAge}> Take Age</button>
        <button onClick={this.checkPassport}> PASSPORT </button>
        <button onClick={this.changeColor}> Colors</button>
    <div className ="btn-group btn-group-sm">
      <button onClick={this.letter} className ="btn btn-default">A</button>
      <button onClick={this.letter} className ="btn btn-default">B</button>
      <button onClick={this.letter} className ="btn btn-default">C</button>
      <button onClick={this.letter} className ="btn btn-default">D</button>
      <button onClick={this.letter} className ="btn btn-default">E</button>
      <button onClick={this.letter} className ="btn btn-default">F</button>
      <button onClick={this.letter} className ="btn btn-default">G</button>
      <button onClick={this.letter} className ="btn btn-default">H</button>
      <button onClick={this.letter} className ="btn btn-default">I</button>
      <button onClick={this.letter} className ="btn btn-default">J</button>
      <button onClick={this.letter} className ="btn btn-default">K</button>
      <button onClick={this.letter} className ="btn btn-default">L</button>
      <button onClick={this.letter} className ="btn btn-default">M</button>
      <button onClick={this.letter} className ="btn btn-default">N</button>
      <button onClick={this.letter} className ="btn btn-default">O</button>
      <button onClick={this.letter} className ="btn btn-default">P</button>
      <button onClick={this.letter} className ="btn btn-default">Q</button>
      <button onClick={this.letter} className ="btn btn-default">R</button>
      <button onClick={this.letter} className ="btn btn-default">S</button>
      <button onClick={this.letter} className ="btn btn-default">T</button>
      <button onClick={this.letter} className ="btn btn-default">U</button>
      <button onClick={this.letter} className ="btn btn-default">V</button>
      <button onClick={this.letter} className ="btn btn-default">W</button>
      <button onClick={this.letter} className ="btn btn-default">X</button>
      <button onClick={this.letter} className ="btn btn-default">Y</button>
      <button onClick={this.letter} className ="btn btn-default">Z</button>
    </div>

      </div>
    );
  }
}

export default App;
