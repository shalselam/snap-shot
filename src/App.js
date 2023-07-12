
import { useEffect, useState } from 'react';
import './App.css';
import Headers from './components/Header';
import Images from './components/Images';
import Title from './components/Title';

function App() {
  const [photos, setphotos] = useState([])


  useEffect(() => {
    console.log("*****+++++++++++++++++++++++++++++++==========================*****");
    console.log(photos);
    console.log("**********");
  }, [photos])

  return (
    <div>
      <Headers setphotos={setphotos} />
      <Title />
      <Images photos={photos} />
    </div>
  )
}
export default App;
