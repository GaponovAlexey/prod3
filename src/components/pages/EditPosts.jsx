import React from 'react'
import { useParams } from 'react-router'

export const EditPosts = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>edit Posts</h1>
    </div>
  )
}
