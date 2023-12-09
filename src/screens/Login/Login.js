import './Login.css';
import { useState } from 'react';

function Login({ handleUsernameChange, handleColorChange, enterChat }) {
    const [username, setUsername] = useState('');
    const [selectedColor, setSelectedColor] = useState('#000000');

    function handleChatClick() {
        handleUsernameChange(username);
        handleColorChange(selectedColor);
        enterChat();
    }

    return (
        <div className="login">
            <div className="login-input">
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
            </div>

            <table>
                <tbody>
                    <tr style={{display: username === '' ? "table-row" : "none"}}>
                        <td>
                            Username:
                        </td>
                        <td className="random-name">
                            random
                        </td>
                    </tr>
                    <tr style={{display: selectedColor === '#000000' ? "table-row" : "none"}}>
                        <td>
                            Color:
                        </td>
                        <td className="random-name">
                            random
                        </td>
                    </tr>
                </tbody>
            </table>

            <button className="login-button" onClick={handleChatClick}>
                CHAT
            </button>
        </div>
    );
}

export default Login;