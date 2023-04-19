import { useSelector } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ModalModifyPost from "./ModalModifyPost";

const ShowPost = ({ post }) => {
  const user = useSelector((state) => state.login.user.username);
  const userImg = useSelector((state) => state.profile.content.image);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="whiteBg rounded border p-3 w-100 d-flex flex-column mb-2">
      <div className="d-flex justify-content-between">
        <small className="fw-bold">{post.username}</small>
        {post.username === user && (
          <div>
            <button
              onClick={openModal}
              className="btn btn-secondary rounded-circle"
            >
              <i className="far fa-edit"></i>
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <ModalModifyPost user={user} userImg={userImg} post={post} />
            </Modal>
          </div>
        )}
      </div>
      <p className="lh-1">{post.text}</p>
      <small className="align-self-end text-bg-info rounded-pill p-1">
        {post.createdAt.slice(0, 10)}
      </small>
    </div>
  );
};

export default ShowPost;
