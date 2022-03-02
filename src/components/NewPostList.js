const NewPostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title} <br></br>
          {post.body}
        </li>
      ))}
    </ul>
  );
};

export default NewPostList;
