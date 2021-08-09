import './App.css';
import { useState, useEffect } from 'react'
import Tourist from './components/Tourist'
import Loading from './components/Loader/Loading'

function App() {

  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)

  const remove = (id)=> {
    const newData = data.filter((tour)=>tour.id!=id)
    setdata(newData)
  }

  async function ApiFetching() {
    try {
      const url = 'https://course-api.com/react-tours-project'
      const result = await fetch(url)
      const dataO = await result.json()
      setdata(dataO)
      console.log(data)
    }
    catch (err) {
      alert('error', err)
    }
    finally {
      setloading(false)
    }
  }

  useEffect(() => {
    ApiFetching()
  }, [])

  return (
    <div className="App">
      {loading ? <Loading /> : <Tourist data={data} remove = {remove} />
      }

      {data.length == 0 ? <button type="button" className="btn btn-info" onClick={() => {
        setloading(true);
        ApiFetching()
      }}>Refresh</button> : ''}
    </div>
  );
}

export default App;
