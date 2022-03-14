import React from 'react'
import IPost from '../models/IPost'

interface Props {
   post: IPost
   deletePost: (post: IPost) => void
   updatePost: (post: IPost) => void
}

function PostItem({ post, deletePost, updatePost }: Props) {

   const handleDeletePost = () => {
      deletePost(post)
   }

   const handlePostUpdate = () => {
      updatePost(post)
   }

   return (
      <>
         <div onClick={handlePostUpdate}>
            {post.id} {post.title}
         </div>
         <button onClick={handleDeletePost}>Delete</button>
      </>
   )
}

export default PostItem