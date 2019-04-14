import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css'
import 'tachyons'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'


const app = new Clarifai.App({
 apiKey: '4b19d7c740004b418e7eae7e81de0dab'
});



const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    }
  }



  onInputChange = (event) => {
   this.setState({input: event.target.value});
  }

onSubmit = () => {
  this.setState({imageUrl: this.state.input});
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  .then( function(response) {
   
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);// do something with response
    },
    function(err) {
      // there was an error
    }
  );

}


  render() {
    return (
      <div className="App">
      <Particles
      params={particleOptions}
      className = 'particles'
      />
                
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
