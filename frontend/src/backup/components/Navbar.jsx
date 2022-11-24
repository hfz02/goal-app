import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
  return (
    <div>
        <nav>
            <span className='nav-left'>
                <h1>Blog App.</h1>
            </span>
            <span className='nav-right'>
                <span>
                    <Search />
                </span>
                <span>
                    <Link to={`/`}>
                        Home
                    </Link>
                </span>
                <span>
                    <Link to={`/login`}>
                        Login
                    </Link>
                </span>
                <span>
                    <Link to={`/signup`}>
                        Signup
                    </Link>
                </span>
                {/* <span>
                    <FaBars />
                </span> */}
            </span>
        </nav>
    </div>
  )
}

export default Navbar