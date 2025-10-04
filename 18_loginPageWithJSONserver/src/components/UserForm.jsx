import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateEmail, updateName } from '../features/users/userSlice'

const UserForm = () => {

    const dispatch = useDispatch()
    const { name, email, status } = useSelector((state) => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({name, email}))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter your name'
                    value={name}
                    onChange={ (e) => dispatch(updateName(e.target.value)) }
                />
                <br />
                <input
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={ (e) => dispatch(updateEmail(e.target.value)) }
                />
                <br />
                <br />
                {status === 'loading' && <p>Submitting...</p>}
                {status === 'succeeded' && <p>User Logged in successfully!!</p>}
                {status === 'failed' && <p>Error</p>}
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default UserForm