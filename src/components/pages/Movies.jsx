import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Movies = () => {
  const [posts, setPosts] = useState([])
  // const { id } = useParams()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div>
      <button to='/create'>
      Create Posts
      </button>
      {posts.map((e) => (
        <Link key={e.id} to={`/movies/${e.id}`}>
          <li>{e.title}</li>
        </Link>
      ))}
    </div>
  )
}
