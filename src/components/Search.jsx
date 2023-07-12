

import { useState } from "react"
const Search = ( props) => {
    const [searchEntry, setSerchEntry] = useState('')
    const newSearchInput = e => {
        setSerchEntry(e.target.value)
        
    }
    return (
        <div className="search-class">

            <input className="inputs" placeholder="Search"
                onChange={newSearchInput}
                value={searchEntry} />

            <button onClick={()=> {
                 props.inputhandler(searchEntry)
                  setSerchEntry('')
                }}
                className="icon-btn"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 19.5C15.9183 19.5 19.5 15.9183 19.5 11.5C19.5 7.08172 15.9183 3.5 11.5 3.5C7.08172 3.5 3.5 7.08172 3.5 11.5C3.5 15.9183 7.08172 19.5 11.5 19.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.5 21.5L17.15 17.15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>



        </div>
    )
}
export default Search