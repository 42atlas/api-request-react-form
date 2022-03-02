import { useState } from "react";

const NewPostForm = ({ setPosts }) => {
  const [{ title, body }, setFormState] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return alert("Please fill all the fields");
    const data = { userId: 1, title, body };
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify({ userId: 1, title, body }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", fetchOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          if (response.status === 404) {
            throw new Error("Not found");
          }
        }
      })
      .then((newPost) => {
        setPosts((prev) => [{ ...newPost, ...data }, ...prev]);
        setFormState({
          title: "",
          body: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="body"
        value={body}
        onChange={handleInputChange}
      />
      <input type="submit" />
    </form>
  );
};

export default NewPostForm;
