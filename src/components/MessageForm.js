import React from "react";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <form className="" onSubmit={handleSubmit}>
      {/*   <label htmlFor="img">
        <Attachment />
      </label>
      <input
        onChange={(e) => setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button className="btn">Send</button>
  </div> */}

      <div className="chat-model-size-input-i">
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="img">
          <i className="fa fa-paperclip" id="featured" aria-hidden="true"></i>
        </label>
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          id="img"
          accept="image/*"
          style={{ display: "none" }}
        />
        {/*    <button type="submit" className="d-none" disabled={!text}>
          submit
</button>*/}
      </div>
    </form>
  );
};

export default MessageForm;
