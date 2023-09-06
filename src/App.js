import { useState } from 'react';
import './App.css';
import Messages from './components/Messages';

function App() {
    const [messages, setMessages] = useState([{
        id: '1',
        data: 'This is a test message!',
        member: {
            id: '1',
            clientData: {
                color: 'blue',
                username: 'bluemoon',
            },
        },  
    }]);
    const [me, setMe] = useState({
        username: randomName(),
        color: randomColor(),
    });

    function randomName() {
        const adjectives = [
            'autumn', 'hidden', 'bitter', 'misty', 'silent', 'empty', 'dry', 'dark',
            'summer', 'icy', 'delicate', 'quiet', 'white', 'cool', 'spring', 'winter',
            'patient', 'twilight', 'dawn', 'crimson', 'wispy', 'weathered', 'blue',
            'billowing', 'broken', 'cold', 'damp', 'falling', 'frosty', 'green', 'long',
            'late', 'lingering', 'bold', 'little', 'morning', 'muddy', 'old', 'red',
            'rough', 'still', 'small', 'sparkling', 'shy', 'wandering',
            'withered', 'wild', 'black', 'young', 'holy', 'solitary', 'fragrant',
            'aged', 'snowy', 'proud', 'floral', 'restless', 'divine', 'polished',
            'ancient', 'purple', 'lively', 'nameless'
        ];
        const nouns = [
            'waterfall', 'river', 'breeze', 'moon', 'rain', 'wind', 'sea', 'morning',
            'snow', 'lake', 'sunset', 'pine', 'shadow', 'leaf', 'dawn', 'glitter',
            'forest', 'hill', 'cloud', 'meadow', 'sun', 'glade', 'bird', 'brook',
            'butterfly', 'bush', 'dew', 'dust', 'field', 'fire', 'flower', 'firefly',
            'feather', 'grass', 'haze', 'mountain', 'night', 'pond', 'darkness',
            'snowflake', 'silence', 'sound', 'sky', 'shape', 'surf', 'thunder',
            'violet', 'water', 'wildflower', 'wave', 'water', 'resonance', 'sun',
            'wood', 'dream', 'cherry', 'tree', 'fog', 'frost', 'voice', 'paper', 'frog',
            'smoke', 'star'
        ];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];

        return adjective + noun;
    }
      
    function randomColor() {
        return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }

    return (
        <div className="app">
            <div className="app-content">
                <Messages messages={messages} me={me} />
            </div>
        </div>
    );
}

export default App;
