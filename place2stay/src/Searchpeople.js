import React from 'react'
import './Search.css'
import {Button} from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'

function Searchpeople() {
    return (
        <div className="Search">
            <h2>
                Number of guests
                <PeopleIcon/>
            </h2>
            <input min={0}
            defaultValue={2}
            type="number"/>
             <Button >Search Airbnb</Button>
        </div>
    )
}

export default Searchpeople
