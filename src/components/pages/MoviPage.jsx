import React, { useEffect, useState, } from 'react'
import { useParams,useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export const MoviPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [posts, setPosts] = useState(null)
  const goBack = () => navigate('/movies', {state:123 })
  const goHome = () => navigate(`/`, {state: posts}) 


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [id])


  return (
    <div>
      <button onClick={goHome} >Home</button>
      {posts && (
        <div>
          <h1>{posts.title}</h1>
          <h3>{posts.body}</h3>
        </div>
      )}
      <button onClick={goBack} >go back</button>
      <Link className='right' to={`/movies/${id}/edit`}>
        etit post
      </Link>
    </div>
  )
}
