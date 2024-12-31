import React from "react";

interface Post {
  userID: number;
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
};

export default PostCard;
