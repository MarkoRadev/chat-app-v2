import './Messages.css';
import {useEffect, useRef} from 'react';

function Messages({messages, me}) {
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef && bottomRef.current) {
            bottomRef.current.scrollIntoView({behavior: 'smooth'});
        }
    });

    function Message({member, data, id}, me) {
        const {username, color} = member.clientData;
        const messageFromMe = member.id === me.id;
        const className = messageFromMe ? "messages-message current-member" : "messages-message";

        return (
            <li key={data} className={className}>
                <span
                    className="avatar"
                    style={{backgroundColor: color}}
                />
                <div className="message-content">
                    <div className="username">
                        {username}
                    </div>
                    <div className="text">
                        {data}
                    </div>
                </div>
            </li>
        );
    }

    return (
        <ul className="messages-list">
            {messages.map(m => Message(m, me))}
            <div ref={bottomRef}></div>
        </ul>
    );
}

export default Messages;