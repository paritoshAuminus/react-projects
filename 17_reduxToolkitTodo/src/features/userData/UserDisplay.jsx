import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateGmail, updateName, updatePassword } from './userSlice'

const UserDisplay = () => {

    const userName = useSelector((state) => state.user.name)
    const userGmail = useSelector((state) => state.user.gmail)
    const userPassword = useSelector((state) => state.user.password)

    const dispatch = useDispatch()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
                Name: {userName}
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => dispatch(updateName(e.target.value))}
                />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
                Gmail: ${userGmail}
                <input
                    type="email"
                    value={userGmail}
                    onChange={(e) => dispatch(updateGmail(e.target.value))}
                />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
                Password: ${userPassword}
                <input
                    type="password"
                    value={userPassword}
                    onChange={(e) => dispatch(updatePassword(e.target.value))}
                />
            </span>
        </div>
    )
}

export default UserDisplay