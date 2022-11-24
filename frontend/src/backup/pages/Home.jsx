import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../features/postSlice'
// import Posts from '../components/Posts'
// import axios from 'axios'
// import Pagination from '../components/Pagination'

const Home = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()
    const postList = useSelector(state => state.posts.posts)


    // const [isLoading, setIsLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage] = useState(10)

    useEffect(() => {
        // const fetchPosts = async () => {
        //     setIsLoading(true)
        //     const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
        //     setPosts(res.data)
        //     setIsLoading(false)
        // }
        // fetchPosts()

    }, [])

    // Current Posts
    // const indexOfLastPost = currentPage * postsPerPage
    // const indexOfFirstPost = indexOfLastPost - postsPerPage
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change Page
    // const paginate = pageNumber => setCurrentPage(pageNumber)

    const handlePost = e => {
        e.preventDefault()

        dispatch(addPost({
            id: postList[postList.length - 1].id + 1,
            title: title,
            text: text,
            author: author,
        }))
        console.log(title, text, author)
    }

    return (
        <>
            <Navbar />
            <main id='home'>
                <div className='form-post'>
                    <label htmlFor="">Title :</label>
                    <input type='text' placeholder='title' onChange={e => setTitle(e.target.value)} />
                    <label htmlFor="">Text :</label>
                    <textarea type='text' placeholder='text' onChange={e => setText(e.target.value)} />
                    <label htmlFor="">Author :</label>
                    <input type='text' placeholder='author' onChange={e => setAuthor(e.target.value)} />
                    <button onClick={handlePost}>Post</button>
                </div>
                <div className="posts">
                    {postList.map(p => (
                        <div key={p.id} className="card">
                            <h1>{p.title}</h1>
                            <p>{p.text}</p>
                            <h5>Author: {p.author}</h5>
                        </div>
                    ))}
                </div>
                {/* <Posts posts={currentPosts} loading={isLoading} />
                <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length} 
                paginate={paginate}
                /> */}
            </main>
        </>
    )
}

export default Home