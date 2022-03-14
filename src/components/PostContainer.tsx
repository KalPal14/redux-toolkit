import React from "react";
import IPost from "../models/IPost";
import { postAPI } from "../services/PostServise";
import PostItem from "./PostItem";

function PostContainer() {

   const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100)
   const [createPost, { }] = postAPI.useCreateNewPostMutation()
   const [deletePost] = postAPI.useDeletePostMutation()
   const [updatePost] = postAPI.useUpdatePostMutation()

   const handleAddPost = () => {
      const title = prompt("What do you want?")
      createPost({ title, body: title } as IPost)
   }

   const onDeletePost = (post: IPost) => {
      deletePost(post)
   }

   const onUpdatePost = (post: IPost) => {
      const title = prompt("What do you want?")
      updatePost({ ...post, title: title } as IPost)
   }

   return (
      <div>
         <button onClick={handleAddPost}>Add post</button>
         {isLoading && <h1>Идёт загрузка</h1>}
         {error && <h1>Ошибка</h1>}
         {posts && posts.map(post => <PostItem key={post.id} post={post} deletePost={onDeletePost} updatePost={onUpdatePost} />)}
      </div>
   )
}

export default PostContainer