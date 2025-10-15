import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // ------------------------------------------------
        // This example is a bit easier but not very secure
        // ------------------------------------------------

        // if (authStatus === true) {
        //     navigate('/')
        // } else if (authStatus === false) {
        //     navigate('/login')
        // }

        // --------------------------------------------------------------
        // This example is a bit complex but very robust and future proof
        // --------------------------------------------------------------

        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])


    return loader ? <h1>Loading...</h1> : { children }
}