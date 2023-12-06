import './App.css';
import { useState } from 'react';
import Login from "./screens/Login/Login";
import Chat from './screens/Chat/Chat';

function App() {
    const [username, setUsername] = useState('');
    const [enterChatRoom, setEnterChatRoom] = useState(false);

    function handleUsernameChange(text) {
        setUsername(text);
    };

    return (
        <div>
            {enterChatRoom ? 
                <Chat username={username} />
                : <Login handleUsernameChange={handleUsernameChange} enterChat={() => setEnterChatRoom(true)} />
            }
        </div>
    );
};

export default App;