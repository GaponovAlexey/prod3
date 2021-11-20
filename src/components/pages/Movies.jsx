import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'

export const Movies = () => {
  const [posts, setPosts] = useState([])
  const location = useLocation()
console.log(location.state);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div>
      <Link to='create' className='right' >CreatePage</Link>
      {posts.map((el) => (
        <Link key={el.id} to={`${el.id}`}>
          <li>{el.title}</li>
        </Link>
      ))}
    </div>
  )
}
