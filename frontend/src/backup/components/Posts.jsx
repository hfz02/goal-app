import React from 'react'

const Posts = ({ posts, loading }) => {

    // if (loading) return <h1>Loading...</h1>

    return <ul className='list-group mb-4'>
        {loading && <h1>Loading...</h1>}
        {posts.map(post => (
            <div key={post.id} className='list-group-item'>
                {post.title}
                {/* <p className="lead">{post.body}</p> */}
            </div>
        ))}
    </ul>
    }
 
export default Posts