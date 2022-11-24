import { useState } from 'react'
import data from '../data1.json' 

const Search = () => {
  const [filter, setFilter] = useState([])
  const [word, setWord] = useState("")

  const handleFilter = e => {
    const search = e.target.value
    setWord(search)
    const newFilter = data.filter(d => {
        return d.title.toLowerCase().includes(search.toLowerCase())
    })

    if (search === "") {
        // setFilter(data)
        setFilter([])
    } else {
        setFilter(newFilter)
    }
  }

  return (
    <div className='container mt-5'>
        <ul className='list-group mb-4'>
            <div className="search">
                <div className="inputs">
                    <input 
                        type="text" 
                        placeholder="Enter a Book Name..."
                        value={word}
                        onChange={handleFilter}
                    />
                    {/* <div className="search"></div> */}
                </div>
                {filter.length !== 0 && (
                    <div className="results">
                        {filter.slice(0, 15).map(d => (
                            <a className="dataItem" href={d.link}>
                                <p>{d.title}</p>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </ul>
    </div>  
  )
}

export default Search