import './App.css';
import ButtonList from './components/buttons-List/ButtonList'
import Details from './components/details/Details'
import React, { useState, useEffect } from 'react'
import Loader from './components/loader/Loader'

function App() {

  const [Arr, setArr] = useState([]);
  const [index, setindex] = useState(0);
  const [loading, setloading] = useState(true);

  const fetching = async () => {
    try {
      setloading(true);
      const result = await fetch('https://course-api.com/react-tabs-project')
      const data = await result.json()
      setArr(data)
      setloading(false)
    }
    catch (err) {
      alert('Error', err)
    }
  }

  useEffect(() => {
    fetching()
  }, []);

  if(loading) {
    return  <div className="App"><Loader  /></div>
  }

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td className="btn-list"  >
              <ButtonList setindex={setindex} Arr={Arr} />
            </td>
            <td ><div className="list"><Details object={Arr[index]} /></div></td>
          </tr>
        </tbody>
      </table>


    </div>
  );
}

export default App;
