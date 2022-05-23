import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ClickModel = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const typeMessage = () => {};

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
                <p>Hello</p>
                <span>1s</span>
              </div>
            </div>
            <div className="chat-model-size-height">
              <div
                className={`
          "chat-model-size-client"
      "chat-model-size-help"
   `}
                style={{ position: "relative" }}
              >
                <p>hello</p>
                <span>1s</span>
              </div>
            </div>

            <div className="chat-model-size-position">
              <form onSubmit={typeMessage}>
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
