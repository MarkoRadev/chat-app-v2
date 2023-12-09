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
            {/* <div>
                Username: {username === '' ? "random" : username}
            </div>
            <div>
                Color: {selectedColor === '#000000' ? "random" : selectedColor}
            </div> */}

            <table>
                <tbody>
                    <tr style={{display: username === '' ? "table-row" : "none"}}>
                        <td>
                            Username:
                        </td>
                        <td className="random-name">
                            {/* {username === '' ? "random generated" : username} */}
                            random
                        </td>
                    </tr>
                    <tr style={{display: selectedColor === '#000000' ? "table-row" : "none"}}>
                        <td>
                            Color:
                        </td>
                        <td className="random-name">
                            {/* {selectedColor === '#000000' ? "random" : selectedColor} */}
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
};

export default Login;