import React, { useState, useEffect, useRef } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import Moment from "react-moment";

const ClickModel = () => {
  const scrool = useRef();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const userDetailsChat = JSON.parse(localStorage.getItem("os-user"));

  const user1 = auth.currentUser.uid;

  useEffect(() => {
    scrool.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  useEffect(() => {
    const msgsRef = collection(db, "messages", "complain", `100-${user1}`);
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
        console.log(doc.data());
      });
      setChat(msgs);
    });
  }, []);

  console.log(user1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "messages", "complain", `100-${user1}`), {
      message,
      from: user1,
      createdAt: Timestamp.fromDate(new Date()),
      senderName: userDetailsChat.name,
      senderGmail: userDetailsChat.email,
    });
    setMessage("");
  };
  console.log(chat);
  return (
    <div>
      {open === true ? (
        <Modal
          open={open}
          onClose={onCloseModal}
          classNames={{ modal: "message-pop-model" }}
          center
        >
          <div className="chat-model-size">
            <div className="chat-model-size-img">
              <img src="" alt="img" />
              <div className="chat-model-size-status">
                <p>{userDetailsChat.name}</p>
                <span>1s</span>
              </div>
            </div>
            <div className="chat-model-size-height">
              {chat &&
                chat.map((data, i) => (
                  <div
                    key={i}
                    className={
                      user1
                        ? "chat-model-size-client-model"
                        : "chat-model-size-help-model"
                    }
                    style={{ position: "relative" }}
                    ref={scrool}
                  >
                    <p>{data.message}</p>
                    <span>
                      <Moment fromNow>{data.createdAt.toDate()}</Moment>
                    </span>
                  </div>
                ))}
            </div>

            <div className="chat-model-size-position">
              <form onSubmit={handleSubmit}>
                <div className="chat-model-size-input d-flex">
                  <div className="chat-model-size-input-i">
                    <input
                      type="text"
                      placeholder="Say something"
                      value={message}
                      onInput={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <button type="submit" disabled={!message}>
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : (
        <div className="app">
          <div className="open-btn-dot"></div>
          <button type="button" className="open-btn" onClick={onOpenModal}>
            CHAT NOW
          </button>
        </div>
      )}
      {open ? (
        <div className="close-model" onClick={onCloseModal}>
          <i className="fa fa-close"></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClickModel;

//     "chat-model-size-client"
// "chat-model-size-help"
