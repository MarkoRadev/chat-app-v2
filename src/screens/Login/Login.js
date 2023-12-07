import './Login.css';
import { useState } from 'react';

function Login({ handleUsernameChange, handleColorChange, enterChat }) {
    const [username, setUsername] = useState('');
    const [selectedColor, setSelectedColor] = useState('#000000');

    // console.log("Selected color: " + selectedColor, typeof(selectedColor));

    function handleChatClick() {
        handleUsernameChange(username);
        handleColorChange(selectedColor);
        enterChat();
    };

    return (
        <div className="login">
            <input 
                type="text" 
                className="username-input"
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="color"
                className="color-picker"
                value={selectedColor}
                onChange={e => setSelectedColor(e.target.value)}
            />
            <div>
                Username: {username === '' ? "random" : username}
            </div>
            <div>
                Color: {selectedColor === '#000000' ? "random" : selectedColor}
            </div>
            <button onClick={handleChatClick}>CHAT</button>
        </div>
    );
};

export default Login;