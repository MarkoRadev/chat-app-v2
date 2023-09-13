function Members({members, me}) {
    function Member({id, clientData}, isMe) {
        const {username, color} = clientData

        return (
            <div key={id} className="member">
                <div className="avatar" style={{backgroundColor: color}}/>
                <div className="username">{username} {isMe ? ' (you)' : ''}</div>
            </div>
        )
    }

    return (
        <div className="members">
            <div className="members-count">
                {members.length} user{members.length === 1 ? '' : 's'} online
            </div>
            <div className="members-list">
                {members.map(m => Member(m, m.id === me.id))}
            </div>
        </div>
    )
}

export default Members;