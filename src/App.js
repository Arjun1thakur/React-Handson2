import './App.css';
import {useState} from 'react'
import CardFun from './Components/functComp';
import ClsComp from './Components/classComp';

function App() {
  return (
    <div className="main">
      <nav className="flex">
        <div className="logo">Styling using Functional and Class Component</div>
      </nav>
    </div>
  );
}

function Box(){
  let [c,s]=useState(false);
  const cons =()=>s(c=>!c);
  let [k,j]=useState(false);
  const cons1 =()=>j(k=>!k);
  return (
    <div className="heading">
        <button className='function btn' onClick={cons}>To see styling in function component</button>
        <button className='class btn' onClick={cons1}>To see styling in class component</button>
        <div>{ c && <CardFun /> }</div>
        <div>{ k && <ClsComp /> }</div>
    </div>
  );
}

export {App,Box}
