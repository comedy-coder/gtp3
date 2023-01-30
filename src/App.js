
import './App.css';
import {Artice, Cta,Feature,Navbar} from './components/index';
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers/index'
function App() {
  return (
    <div className="App">
      <div className="gradient__bg" style={{width : '100%'}}>
        <Navbar />
        <Header />
      </div>
    <Artice />
    </div>
  );
}

export default App;
