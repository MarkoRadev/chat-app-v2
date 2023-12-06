import './Login.css';
import { useState } from 'react';

function Login({ handleUsernameChange, enterChat }) {
    const [username, setUsername] = useState('');
    const [selectedColor, setSelectedColor] = useState('#000000');

    console.log("Selected color: " + selectedColor);

    function handleChatClick() {
        handleUsernameChange(username);
        enterChat();
    };

    return (
        <div className="login">
            <div>Login Screen</div>
            <input 
                type="text" 
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="color"
                value={selectedColor}
                onChange={e => setSelectedColor(e.target.value)}
            />
            <button onClick={handleChatClick}>CHAT</button>
        </div>
    );
};

export default Login;