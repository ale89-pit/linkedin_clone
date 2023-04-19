import Form from "react-bootstrap/Form";
import { sendChange } from "../../redux/actions/HomePost";
import { useSelector, useDispatch } from "react-redux";
import { API_POSTS } from "../../redux/actions/HomePost";
import { team } from "../../redux/actions";
import { useEffect, useState } from "react";

const ModalModifyPost = ({ user, userImg, post }) => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState("");

  //   const getAPost = async (user) => {
  //     try {
  //       const response = await fetch(API_POSTS + `${post._id}`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: "Bearer " + team.find((u) => u.userName === user).key,
  //         },
  //       });
  //       if (response.ok) {
  //         const data = await response.json();
  //         // setTextValue(data.text);
  //         // dispatch(sendChange(data))
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    setTextValue(post.text);
    dispatch(sendChange(textValue));
  }, []);

  const putAPost = async (user) => {
    try {
      const response = await fetch(API_POSTS + `${post._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
        body: JSON.stringify({ text: textValue }),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (user) => {
    try {
      const response = await fetch(API_POSTS + `${post._id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
    } catch (error) {
      console.log(error);
    }
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
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          putAPost(user);
          window.location.reload();
        }}
      >
        <Form.Group
          onChange={(e) => {
            dispatch(sendChange(e.target.value));
            setTextValue(e.target.value);
          }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control value={textValue} as="textarea" rows={3} />
        </Form.Group>

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
          <button type="submit" className="btn btn-secondary me-2">
            Modifica
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              deletePost(user);
              window.location.reload();
            }}
            className="btn btn-danger"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ModalModifyPost;
