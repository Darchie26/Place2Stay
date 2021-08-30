import React, {useState} from 'react'
import Auth from '@aws-amplify/auth';
import "./SignUp.css"
import{useHistory} from 'react-router-dom';


    const Signup = ({onSignup}) => {
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [phone_number, setPhone_number] = useState('');
        const history = useHistory();

        

        async function signUp() {
            try {
                const { user } = await Auth.signUp({
                    firstname,
                    lastname,
                    username,
                    password,
                    attributes: {     
                        phone_number,
                        }
                        });
                        history.push('/Confirmation');
                        onSignup();
                        console.log(user);
            } catch (error) {
                console.log('error signing up:', error);
            }
        }
        
        
        
        return (
            <div className="SignUp">
            <div className="SignUp-Form">

                <div><h1 id="p2s">place2stay</h1>
                <div><h1 id="signup">Signup</h1></div>
                    <div><input value={firstname} className="inputs" placeholder="First Name" onChange={e => setFirstname (e.target.value)} /></div>
                    <div><input value={lastname} className="inputs" placeholder="Last Name" onChange={e => setLastname (e.target.value)} /></div>
                    <div><input value={username} className="inputs" placeholder="Email" onChange={e => setUsername (e.target.value)} /></div>
                    <div><input  value={phone_number} className="inputs" placeholder="phone Number" onChange={e => setPhone_number (e.target.value)} /></div>
                    <div><input value={password} type="password" id="password" className="inputs" placeholder="Password" onChange={e => setPassword(e.target.value)} /></div>
                    <div><input onClick={signUp}  type="submit" value="Signup" /></div>
                    <div className="login">Already have a account?</div>
                    <div><a className="login" href="./Login">Login</a></div>
                </div>
            </div>
        </div>
    )
    }


export default Signup
