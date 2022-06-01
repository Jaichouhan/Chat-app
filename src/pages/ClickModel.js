import React, { useState, useEffect, useRef } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import Moment from "react-moment";
import Img from "../image1.jpg";
const ClickModel = () => {
  const scrool = useRef();

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);
  const [user, setUser] = useState();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const userDetailsChat = JSON.parse(localStorage.getItem("os-user"));

  const user1 = auth.currentUser.uid;
  // const users = auth.onAuthStateChanged((user) => {
  //   console.log(user.uid);
  // });

  const clientId = JSON.parse(localStorage.getItem("id"));

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  }, []);

  useEffect(() => {
    scrool.current?.scrollIntoView({ behavior: "smooth" });
  }, [text]);

  useEffect(() => {
    const user2 = clientId.id;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    const msgsRef = collection(db, "messages", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setChat(msgs);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user2 = clientId.id;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      senderGmail: userDetailsChat.email,
      recevierName: clientId.name,
      recevierGmail: clientId.email,
    });
    setText("");
  };

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
              <img src={Img} alt="img" />
              <div className="chat-model-size-status">
                <p>{user && user.name}</p>
                <span>
                  <Moment fromNow>{user && user.createdAt.toDate()}</Moment>
                </span>
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
                    {data.media ? (
                      <img src={data.media} alt={data.text} />
                    ) : null}

                    <p>{data.text}</p>
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
                      value={text}
                      onInput={(e) => setText(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <button type="submit" disabled={!text}>
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
