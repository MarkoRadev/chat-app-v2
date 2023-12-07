import './Login.css';
import { useState } from 'react';

function Login({ handleUsernameChange, handleColorChange, enterChat }) {
    const [username, setUsername] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    // console.log("Selected color: " + selectedColor, typeof(selectedColor));

    function handleChatClick() {
        handleUsernameChange(username);
        handleColorChange(selectedColor);
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