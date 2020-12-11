import React, {Component} from "react";
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'

class App extends Component {
  render() {
   return <div className="App">
      My Hello World!
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent></FourthComponent>
    </div>
  ;
 }
}




class SecondComponent extends Component {
  render() {
   return (
    <div className="secondComponent">
      SecondComponent
    </div>
  );
 }
}

function ThirdComponent() {
  return  (
    <div className="thirdComponent">
       ThirdComponent
    </div>
  );
}

function FourthComponent() {

  return (
    <div className="fourthComponent">
        FourthComponent
    </div>
  );
}

export default App;
