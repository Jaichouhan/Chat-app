import React, { useRef, useEffect } from "react";
import Moment from "react-moment";

const Message = ({ msg, user1, text }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <div className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}>
      <div
        className={
          msg.from === user1 ? "chat-model-size-client" : "chat-model-size-help"
        }
        ref={scrollRef}
      >
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        <p> {msg.text}</p>
        <span>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
          {console.log(msg)}
        </span>
      </div>

      {/* <p className={msg.from === user1 ? "me" : "friend"}>
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
  </p>*/}
    </div>
  );
};

export default Message;
