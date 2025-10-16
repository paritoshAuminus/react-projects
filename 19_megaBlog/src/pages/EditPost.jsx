import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'


function EditPost() {

    const [post, setPosts] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => setPosts(post))
        } else {
            navigate('/')
        }
    }, [slug, navigate])


    return (
        <>
            {post ?
                <div className='py-8'>
                    < Container >
                        <PostForm post={post} />
                    </Container >
                </div > : null}
        </>
    )
}

export default EditPost