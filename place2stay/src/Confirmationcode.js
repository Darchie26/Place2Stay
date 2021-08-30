import React, {useState} from 'react'
import "./Confirmationcode.css"
import Auth from '@aws-amplify/auth';
import{useHistory} from 'react-router-dom';


const Confirmationcode = ({onConfirmationcode}) => {
    const [username, setUsername] = useState('');
        const [code, setCode] = useState('');
        const history = useHistory();

        async function confirmSignUp() {
            try {
            await Auth.confirmSignUp(username, code);
            history.push('/Login');
            onConfirmationcode();
            } catch (error) {
                console.log('error confirming sign up', error);
            }
        }
    return (
        <div className="confirmationCode">
            <div className="confirmation-Form">

                <div><h1 id="p2s">place2stay</h1>
                    <div><h1 id="code">Confirmation Code</h1></div>
                    <div><input vlaue={username}  className="inputs2" placeholder="Email" onChange={e => setUsername (e.target.value)} /></div>
                    <div><input value={code}  type="number" className="inputs2" placeholder="Code" onChange={e => setCode (e.target.value)}  /></div>
                    <div><input onClick={confirmSignUp} type="submit" className="input" placeholder="Confirm"  /></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Confirmationcode;
