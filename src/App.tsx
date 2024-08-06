import data from './data/domain.json';
import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState('');

  const handleInput = (e: any) => {
    setSelected(e.target.value);
  }
  const handleSubmit = () => {
    console.log(selected);
  }
  return (
    <div>
      <select onChange={handleInput}>
        {
          data.map((item) => (
            <option key={item.id} value={item.name} >
              {item.name}
            </option>
          ))
        }
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}