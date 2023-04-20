import Form from "react-bootstrap/Form";
import { sendChange } from "../../redux/actions/HomePost";
import { useSelector, useDispatch } from "react-redux";
import { API_POSTS } from "../../redux/actions/HomePost";
import { team } from "../../redux/actions";
import { useEffect, useState } from "react";

const ModalMakePost = ({ user, userImg, post }) => {
  const textPost = useSelector((state) => state.home.text);
  const dispatch = useDispatch();
  console.log(post);

  const postAPost = async (user) => {
    try {
      const response = await fetch(API_POSTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
        body: JSON.stringify({ text: textPost }),
      });
      if (response.ok) {
        let savedPost = await response.json();
        postAFilePost(user, savedPost._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [fileState, setFileState] = useState(new FormData());

  const postAFilePost = async (user, id) => {
    try {
      const response = await fetch(API_POSTS + `${id}`, {
        method: "POST",
        body: fileState,
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (ev) => {
    setFileState((current) => {
      current.delete("post");
      current.append("post", ev.target.files[0]);
      return current;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    postAPost(user);
    // window.location.reload();
  };

  return (
    <div className="whiteBg rounded modalMakePost ">
      <div className="p-2 d-flex align-items-center">
        <img
          src={userImg}
          width={60}
          height={60}
          className="rounded-circle me-"
        />
        <h2>{user}</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          onChange={(e) => {
            dispatch(sendChange(e.target.value));
            console.log(textPost);
          }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <input
          className="btn btn-primary mb-3"
          type="file"
          onChange={handleFile}
        />

        <div className="d-flex">
          <button className="rounded-circle">
            <i className="fas fa-image text-transparent"></i>
          </button>
          <button className="rounded-circle">
            <i className="fab fa-youtube text-success me-1"></i>
          </button>
          <button className="rounded-circle">
            <i className="fas fa-calendar-alt text-warning me-1"></i>
          </button>
          <button className="rounded-circle">
            <i className="far fa-newspaper text-danger me-1"></i>
          </button>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-secondary">
            Pubblica
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ModalMakePost;
