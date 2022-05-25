import React, { useEffect, useState } from "react";
import Img from "../image1.jpg";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

const User = ({ user1, user, selectUser, chat }) => {
  const user2 = user?.uid;
  const [data, setData] = useState("");

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  return (
    <>
      <div
        className={`user_wrapper ${chat.name === user.name && "selected_user"}`}
        onClick={() => selectUser(user)}
      >
        <div className="user_info">
          <div className="chat-page-user-info">
            <img src={user.avatar || Img} alt="avatar" />
            <div className="chat-page-user-name">
              <p>
                {user.name}
                {data?.from !== user1 && data?.unread && (
                  <small className="unread">New</small>
                )}
              </p>

              {data && (
                <p className="truncate">
                  {/*   <strong>{data.from === user1 ? "Me:" : null}</strong>*/}
                  {data.text}
                </p>
              )}
            </div>
            <p className="chat-page-user-info-p">
              <Moment fromNow>
                {user.isOnline
                  ? user.createdAt.toDate()
                  : user.createdAt.toDate()}
              </Moment>
              <div
                className={`user_status ${
                  user.isOnline ? "online" : "offline"
                }`}
              ></div>
            </p>
            {/* <div
              className={`user_status ${user.isOnline ? "online" : "offline"}`}
           ></div>*/}
          </div>
        </div>
      </div>
      <div
        onClick={() => selectUser(user)}
        className={`sm_container ${chat.name === user.name && "selected_user"}`}
      >
        <img
          src={user.avatar || Img}
          alt="avatar"
          className="avatar sm_screen"
        />
      </div>
    </>
  );
};

export default User;
