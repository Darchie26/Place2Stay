import React, { useState, useEffect } from 'react'
import "./header.css"
import Amplify, { Auth } from 'aws-amplify'
import Confirmationcode from "./Confirmationcode"
import awsconfig from './aws-exports'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import { Button } from '@material-ui/core';
import Signin from './Signin'
import{useHistory} from 'react-router-dom';


Amplify.configure(awsconfig)




const Header = ({onHeader}) => {
    const [{user}] = useState('');
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();



    const assessloggedInstate = () => {
        Auth.currentAuthenticatedUser().then(sess => {
            console.log('logged in');
            setLoggedIn(true);
            setUsername(true);
        })
            .catch(() => {
                console.log('not logged in');
                setLoggedIn(false);
            });
    };
    useEffect(() => {
        assessloggedInstate();
    }, []);

    const signOut = async () => {
        try {
            await Auth.signOut();
            setLoggedIn(false);
        } catch (error) {
            console.log('error signing out:', error);
        }
    }

    


    // async function () {
    //     try {
    //         const user = await Auth.signIn(firstname);
    //     } catch (error) {
    //         console.log('error signing in', error);
    //     }
    // }


    return (
        <div className="header">
            
                <img src="https://firebasestorage.googleapis.com/v0/b/place2stay-35c8f.appspot.com/o/place2stayLogo.png?alt=media&token=83d0da13-f557-4957-abe3-f730d94765a5"/>
         
            <div className="headerRight">
                
                <h4 onChange={e => setUsername (e.target.value)}>Hello {user?.username}</h4>
                {loggedIn ? <Button onClick={signOut} variant="contained" color="primary">Log Out</Button> :
            <Link to="/Login">
            <Button variant="contained" color="primary">Log In</Button>
            </Link>
          }


            </div>


        </div>
    )
}

export default Header
