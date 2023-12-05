import './Login.css';
import { useState } from 'react';

function Login({ enterChat }) {
    const [username, setUsername] = useState('');

    function onChangeName(e) {
        const text = e.target.value;
        setUsername(text);
    };

    return (
        <div className="login">
            <div>Login Screen</div>
            <input 
                type="text" 
                placeholder='Username'
                value={username}
                onChange={e => onChangeName(e)}
            />
            <button onClick={enterChat}>CHAT</button>
        </div>
    );
};

export default Login;