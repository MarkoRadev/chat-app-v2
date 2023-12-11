import './App.css';
import { useState } from 'react';
import Login from "./screens/Login/Login";
import Chat from './screens/Chat/Chat';

function App() {
    const [username, setUsername] = useState('');
    const [userColor, setUserColor] = useState('#000000');
    const [enterChatRoom, setEnterChatRoom] = useState(false);

    function handleUsernameChange(text) {
        setUsername(text);
    };

    function handleColorChange(color) {
        setUserColor(color);
    };

    return (
        <div className="App">
            {enterChatRoom ? 
                <Chat username={username} userColor={userColor} />
                : <Login 
                    handleUsernameChange={handleUsernameChange}
                    handleColorChange={handleColorChange} 
                    enterChat={() => setEnterChatRoom(true)} 
                />
            }
        </div>
    );
};

export default App;