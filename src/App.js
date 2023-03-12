import './App.css';
import { useState } from 'react';
import { sredData } from './sredData';

function App() {
const initialsred = {
  value: sredData,
}

const [sred,setsred] = useState(initialsred)

  return (
    <div className="App">

      <div className='boardtitle'>
        <h1>新着スレッド</h1>
        <hr/>
      </div>

      <div className='sreddisplay'>
        {sred.value.map((sred)=>(
        <div key = {sred.id} className='sred'>
          <div className='sredName'>
            <h1>{sred.name}</h1>
          </div>
        </div>))}
        
      </div>
    </div>
  );
}

export default App;
