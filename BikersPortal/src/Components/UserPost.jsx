import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserPost.css";
import { toast } from "react-toastify";

const UserPost = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    User_ID: localStorage.getItem("User_ID") || "",
    Heading: "",
    Description: "",
    Post_Category: "",
    Post_Image: null,
    Is_Approved: true,
    Post_Date: new Date().toISOString().split("T")[0],
    Is_Active: "1", // Default active
  });

  const imageBasePath = "https://localhost:44384/User_post/";

  useEffect(() => {
    fetch("https://localhost:44384/api/userpost")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching posts: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "Post_Image") {
      setFormData({ ...formData, Post_Image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    const { Heading, Description, Post_Category, Post_Image } = formData;

    if (!Heading.trim() || !Description.trim() || !Post_Category.trim()) {
      alert("All fields are required!");
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
        });
      return false;
    }

    if (Description.length < 10) {
      alert("Description should be at least 10 characters long.");
      toast.error("Description should be at least 10 characters long.", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
        });
      return false;
    }

    if (Post_Image) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(Post_Image.type)) {
        alert("Only JPG, JPEG, and PNG images are allowed.");
        toast.error("Only JPG, JPEG, and PNG images are allowed.", {
          position: "top-right",
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
          theme: "colored",
          });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("User_ID");

    if (!userId) {
      alert("You need to log in to create a post!");
      toast.error("You need to log in to create a post!", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
        });
      navigate("/login");
      return;
    }

    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("User_ID", userId);
    formDataToSend.append("Heading", formData.Heading);
    formDataToSend.append("Description", formData.Description);
    formDataToSend.append("Post_Category", formData.Post_Category);

    if (formData.Post_Image) {
      formDataToSend.append("Post_Image", formData.Post_Image);
    }

    formDataToSend.append("Is_Approved", formData.Is_Approved);
    formDataToSend.append("Post_Date", formData.Post_Date);
    formDataToSend.append("Is_Active", formData.Is_Active);

    fetch("https://localhost:44384/api/addpost", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Post Created Successfully!");
        toast.success("Post Created Successfully!", {
          position: "top-right",
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
          theme: "colored",
          });
        setPosts([...posts, data]);
        window.location.reload(); // Reload the page to see the new post
        document.getElementById("closeCanvas").click();
        
      })
      .catch((error) => console.error("Error creating post:", error));

  };

  const handleCreatePostClick = () => {
    const islogin = localStorage.getItem("isLoggedIn");
    if (!islogin) {
      alert("You need to log in to create a post!");
      toast.error("You need to log in to create a post!", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
      });
      navigate("/login");
    }
  };

  return (
    <div className="main-container p-6 max-w-4xl mx-auto">
      <div className="d-flex justify-content-between align-items-center mb-6">
        <h1 className="text-3xl font-bold text-center flex-grow-1">Latest Posts</h1>
        <button
          className="btn btn-primary"
          style={{ width: "150px" }}
          data-bs-toggle="offcanvas"
          data-bs-target="#createPostCanvas"
          onClick={handleCreatePostClick}
        >
          Create Post
        </button>
      </div>

      {/* Render Only Active Posts */}
      <div className="grid gap-6">
        {posts
          .filter((post) => post.Is_Active === "1" || post.Is_Active === 1)
          .map((post, index) => (
            <div key={post.Post_ID || index} className="bg-white shadow-lg rounded-2xl p-4">
              <img
                src={`${imageBasePath}${post.Post_Image}`}
                alt={post.Heading}
                className="w-full object-cover rounded-lg"
                style={{ height: "240px" }}
              />
              <h2 className="text-xl font-semibold mt-4 text-center">{post.Heading}</h2>
              <p className="text-gray-600 mt-2">{post.Description}</p>
              <p className="text-sm text-gray-400 mt-2">
                Posted on: {new Date(post.Post_Date).toLocaleDateString()}
              </p>
              <h4 className="text-sm text-gray-400 mt-2 text-center">Category: {post.Post_Category}</h4>
            </div>
          ))}
      </div>

      {/* Create Post Offcanvas */}
      <div className="offcanvas offcanvas-end" id="createPostCanvas" style={{ marginTop: "110px" }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Create a New Post</h5>
          <button id="closeCanvas" type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Heading:</label>
              <input
                type="text"
                name="Heading"
                className="form-control"
                value={formData.Heading}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description:</label>
              <textarea
                name="Description"
                className="form-control"
                value={formData.Description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Category:</label>
              <input
                type="text"
                name="Post_Category"
                className="form-control"
                value={formData.Post_Category}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image Upload:</label>
              <input type="file" name="Post_Image" className="form-control" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
