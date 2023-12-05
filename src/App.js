import './App.css';
import { useState } from 'react';
import Login from "./screens/Login/Login";
import Chat from './screens/Chat/Chat';

function App() {
    const [userName, setUserName] = useState('');
    const [enterChatRoom, setEnterChatRoom] = useState(true);

    return (
        <div>
            {enterChatRoom ? 
                <Chat />
                : <Login />
            }
        </div>
    );
};

export default App;