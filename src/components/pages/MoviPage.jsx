import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const MoviPage = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [id])

  return (
    <div>
      {posts && (
        <>
          <h1>{posts.title}</h1>
          <h3>{posts.body}</h3>
        </>
      )}
      <button>
        <Link to='edit'>edit this posts</Link>
      </button>
    </div>
  )
}
