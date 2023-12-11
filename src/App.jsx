import { useState, useEffect } from 'react'
import { getArt } from './api/api'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getArt();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
      </div>
      <div className="card">
        <p>
          {data.id}
        </p>
        <p>
          {data.api_model}
        </p>
      </div>
    </>
  )
}

export default App
