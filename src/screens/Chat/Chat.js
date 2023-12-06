import './Chat.css';
import { useState, useRef, useEffect } from 'react';
import Messages from '../../components/Messages/Messages';
import MessageInput from '../../components/MessageInput/MessageInput';
import Members from '../../components/Members/Members';

// Channel ID: tpYFcdWOaiMUU6ug
// Secret Key: 2Uc3MHSFmeg0H85xYHegfzkTPO5WcQuV

let drone = null;

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

function Chat({ username }) {
    const [messages, setMessages] = useState([]);
    const [members, setMembers] = useState([]);
    const [me, setMe] = useState({
        username: username === '' ? randomName() : username,
        color: randomColor(),
    });

    console.log("App rendered");
    console.log(Math.floor(Math.random() * 0xFFFFFF));

    // const [me, setMe] = useState({
    //     // username: randomName(),
    //     // color: randomColor(),
    //     id: '2',
    //     clientData: {
    //         color: randomColor(),
    //         username: randomName(),
    //     },
    // });

    // const [members, setMembers] = useState([{
    //     id: "1",
    //     clientData: {
    //       color: 'blue',
    //       username: 'bluemoon',
    //     },
    // }])

    // const [messages, setMessages] = useState([{
    //     id: '1',
    //     data: 'This is a test message!',
    //     member: {
    //         id: '1',
    //         clientData: {
    //             color: 'blue',
    //             username: 'bluemoon',
    //         },
    //     },  
    // }]);

    const meRef = useRef();
    meRef.current = me;

    const membersRef = useRef();
    membersRef.current = members;

    const messagesRef = useRef();
    messagesRef.current = messages;

    function connectToScaledrone() {
        drone = new window.Scaledrone('tpYFcdWOaiMUU6ug', {
            data: meRef.current,
        });

        drone.on('open', error => {
            if (error) {
                return console.error(error);
            }
            meRef.current.id = drone.clientId;
            setMe(meRef.current);
        });

        const room = drone.subscribe('observable-room');

        room.on('message', message => {
            const {data, member} = message;
            setMessages([...messagesRef.current, message]);
        });

        room.on('members', members => {
            setMembers(members);
        });
        room.on('member_join', member => {
            setMembers([...membersRef.current, member]);
        });
        room.on('member_leave', ({id}) => {
            const index = membersRef.current.findIndex(m => m.id === id);
            const newMembers = [...membersRef.current];
            newMembers.splice(index, 1);
            setMembers(newMembers);
        });
    }

    useEffect(() => {
        console.log("Use effect: connect to Scaledrone!")
        if (drone === null) {
            connectToScaledrone();
        }
    }, []);

    function onSendMessage(message) {
        drone.publish({
            room: 'observable-room',
            message
        });
        // const newMessage = {
        //     data: message,
        //     member: me
        // }
        // setMessages([...messages, newMessage])
    }

    return (
        <div className="app">
            <div className="app-content">
                <Members members={members} me={me}/>
                <Messages messages={messages} me={me} />
                <MessageInput onSendMessage={onSendMessage} />
            </div>
        </div>
    );
}

export default Chat;
