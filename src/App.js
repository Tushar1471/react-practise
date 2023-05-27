import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

const [mode,setMode] = useState('light');
const [btn,setBtn] = useState('success');

const toggleMode=()=>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#4c5258';
  setBtn('primary');
}
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  setBtn('success');
}

}
return (
<>
<Navbar heading = 'TextUtils' aboutServices = 'About Services' home='Home' mode={mode} toggleSwitch={toggleMode} contact='Contact Us'  />
<Textform title='Enter the text to analyze' mode={mode} btn ={btn}/>


</>   
   
  );
}

export default App;
