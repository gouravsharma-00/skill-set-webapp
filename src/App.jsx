import data from './data/domain.json';
import { useState } from 'react';
import Skill from './component/skill';

export default function App() {
  const [selected, setSelected] = useState('Business Analyst');
  const [selectedData, setselectedData] = useState();
  const [bool, setbool] = useState(false);

  const handleInput = (e) => {
    setSelected(e.target.value);
  }
  const handleSubmit = () => {
    document.getElementById('text').style.display = 'none';
    data.map((item) => {
      if (item.name === selected) {
        setselectedData(item);
        setbool(true);
    }});
  }
  return (
    <div className='flex' id='main'>
      <div>
      <select onChange={handleInput} className='select'>
        {
          data.map((item) => (
            <option key={item.id} value={item.name} >
              {item.name}
            </option>
          ))
        }
      </select>
      <button onClick={handleSubmit} id='submit'>Submit</button>
      </div>
      <div>
        <Skill domain={selectedData} bool={bool}/>
      </div>
      <div>
        <div id='text' className='flex'>
          <p>Select your domain from drop down and see the skill requirment of it. Note: these requirments may be subject to change</p>
        </div>
      </div>
    </div>
  )
}
