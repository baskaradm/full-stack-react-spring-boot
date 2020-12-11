import React, {Component} from "react";
import './App.css';
import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent'

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
