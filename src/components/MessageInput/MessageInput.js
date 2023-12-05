import { useEffect, useState } from 'react';

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
        <div className="input">
            <form onSubmit={e => onSubmit(e)}>
                <input
                    name="message"
                    onChange={e => onChange(e)}
                    value={text}
                    type='text'
                    placeholder='Enter your message and press ENTER'
                    autoFocus
                />
                <button>Send</button>
            </form>
        </div>
    );
};

export default MessageInput;