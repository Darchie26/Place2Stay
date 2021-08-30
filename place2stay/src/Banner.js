import React, {useState} from 'react'
import "./Banner.css"
import { Button } from '@material-ui/core'
import Search from "./Search"
import Searchpeople from "./Searchpeople"

function Banner() {
    const[showSearch, setShowSearch] = useState (false);
    const[showPeople, setPeople] = useState (false);
    return (
        <div>

        <div className="Banner">
            <div className="banner-search">
                {showSearch && <Search/>}
                <Button onClick={() => setShowSearch(!showSearch)} variant="outlined" className="search-Button" >Search Date</Button>
                <Button onClick={() => setPeople(!showPeople)} variant="outlined" className="search-Button" ># of People</Button>
                {showPeople && <Searchpeople/>}
            </div>
            
        </div>
        </div>
    )
}

export default Banner
