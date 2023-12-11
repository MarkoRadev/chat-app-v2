import './MessageInput.css';
import { useState } from 'react';

function MessageInput({ onSendMessage }) {
    const [text, setText] = useState('');

    function onChange(e) {
        const text = e.target.value;
        setText(text);
    }

    function onSubmit(e) {
        e.preventDefault();
        onSendMessage(text);
        setText('');
    }

    return (
        <div>
            <form className="mi-form" onSubmit={e => onSubmit(e)}>
                <input
                    className="message-input"
                    name="message"
                    onChange={e => onChange(e)}
                    value={text}
                    type='text'
                    placeholder='Enter your message and press ENTER'
                    autoFocus
                />
                <button className="mi-button">Send</button>
            </form>
        </div>
    );
}

export default MessageInput;