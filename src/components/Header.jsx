import { useEffect, useState } from "react"
import Search from "./Search"
import axios from "axios"


const Header = (props) => {
    const [query, setquery] = useState('mountain')
    const [amount,setAmount]=useState('6')
    const inputNumber = e => {
        setAmount(e.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // 👇 Get input value
          setAmount(event.target.value);
          console.log('shaalom');
        }
      };
    const inputHandler = e => {
        setquery(e)
        console.log(e);
    }
        useEffect(() => {

            axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fe7eb7e87f71f0712b30d5cf8b2358e2&tags=${query}&per_page=${amount}&format=json&nojsoncallback=1`
            ).then(a => {
                console.log('+++++++++++++++++++++++++++++++++++++++++');
                if (a.data && a.data.photos && a.data.photos.photo) {
                    props.setphotos(a.data.photos.photo)
                    console.log(a.data.photos.photo);
                }
            })
        }, [query, setquery,amount,setAmount])

        return (
            <div className="header-container">
                <h1>Snap Shots</h1>
                <div>
                    <Search inputhandler={inputHandler} />
                </div>
                <label htmlFor="number"><h2>Enter No.of pic </h2></label>                <input className="inputs input2" placeholder="enter amount"
                onKeyDown={handleKeyDown}
                type="number"
                onChange={inputNumber}
                value={amount} />
                <div className="btm-btn">
                    <button onClick={inputHandler}>Mountain</button>
                    <button onClick={e=>{inputHandler('birds')}}>Birds</button>
                    <button onClick={e=>{inputHandler('food')}}>Food</button>
                <button onClick={e=>{inputHandler('beaches')}}>Beaches</button>
                </div>
               
            </div>
        )
    }

    export default Header