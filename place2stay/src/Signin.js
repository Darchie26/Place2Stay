import React, {useState} from 'react';
import Auth from '@aws-amplify/auth';
import { Button } from '@material-ui/core';
import "./LogIn.css"
import{useHistory} from 'react-router-dom';




    

        const Signin = ({onSignin}) => {
            const [username, setUsername] = useState('');
            const [password, setPassword] = useState('');
            const history = useHistory();
            
            
            const signIn = async () => {
                try {
                    const user = await Auth.signIn(username, password);
                    history.push('/');
                    onSignin();
                } catch (error) {
                    console.log ('error signing in', error);
                }
            };
            
            return (
                <div className="LogIn">
            <div className="LogIn-Form">

                <div><h1 id="p2s">place2stay</h1>
                    <div><h1 id="login">Login</h1></div>
                    <div><input value={username} className="inputs2" placeholder="Email"onChange={e => setUsername (e.target.value)} /></div>
                    <div><input value={password} type="password" className="inputs2" placeholder="Password" onChange={e => setPassword (e.target.value)} /></div>
                    
                    <div><input onClick={signIn} type="submit" value="Signin"/></div>
                    <div className="signup">Need a account?</div>
                    <div><a className="signup" href="./Signup">Signup</a></div>

                </div>
            </div>
        </div>
    );
}
    



export default Signin;
