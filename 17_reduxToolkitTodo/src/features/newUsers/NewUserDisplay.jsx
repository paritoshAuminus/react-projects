import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './newUsersSlice'

const NewUserDisplay = () => {

    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <>
            <h1>New users list:</h1>
            {users.map((user) => {
                <ul key={user.id}>
                    <li>{user.name} - {user.email}</li>
                </ul>
            })}
        </>
    )
}

export default NewUserDisplay