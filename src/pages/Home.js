import React, { useEffect, useState } from "react";
import { db, auth, storage } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import User from "../components/User";
import MessageForm from "../components/MessageForm";
import Message from "../components/Message";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs, setMsgs] = useState([]);

  const user1 = auth.currentUser.uid;

  const clientId = JSON.parse(localStorage.getItem("id"));

  const user2 = clientId?.id;
  const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

  const msgsRef = collection(db, "messages", id, "chat");
  const q = query(msgsRef, orderBy("createdAt", "asc"));
  // var recentPostsRef = collection(db, "/messages");
  // recentPostsRef.once("value").then((snapshot) => {
  //   this.setState({ stores: snapshot.val() });
  // });

  // useEffect(() => {
  //   db.collection("lists").onSnapshot((snapshot) =>
  //     snapshot.docs.fiter((doc) =>
  //       doc
  //         .data()
  //         .users.find(
  //           (user) =>
  //             user.name === userName && setMyList((prev) => [...prev, doc])
  //         )
  //     )
  //   );
  // }, []);

  useEffect(() => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "not-in", [user1]));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

  // useEffect(() => {
  //   for (var i = 0; i < msgsRef._path.segments.length; i++) {
  //     if (msgsRef._path.segments[i] === user1) {
  //       console.log(3);
  //       console.log("ITEM DATA :: " + msgsRef._path.segments[i]);
  //     } else {
  //       console.log(2);
  //     }
  // }
  // }, []);

  const selectUser = async (user) => {
    setChat(user);

    const msgsRef = collection(db, "messages", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });

    // get last message b/w logged in user and selected user
    const docSnap = await getDoc(doc(db, "lastMsg", id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, "lastMsg", id), { unread: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      return false;
    }
    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      senderName: clientId.name,
      senderGmail: clientId.email,
    });

    setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
      senderName: clientId.name,
      senderGmail: clientId.email,
    });
    setText("");
    setImg("");
  };

  return (
    <div className="home_container">
      <div className="users_container">
        <div className="chat-page-border">
          <label className="switch">
            <input type="checkbox" className="switch-input" />
            <span className="switch-label"></span>
            <span className="switch-handle"></span>
          </label>
          <p>Desktop Notification</p>
        </div>
        {users.map((user) => (
          <User
            key={user.uid}
            user={user}
            selectUser={selectUser}
            user1={user1}
            chat={chat}
          />
        ))}
      </div>

      <div className="messages_container">
        {chat ? (
          <>
            <div className="chat-model-size-img">
              <img src="/static/media/image1.f02b66c0.jpg" alt="img" />

              {
                <div className="chat-model-size-status">
                  <p>{chat.name}</p>
                  <span>1 min</span>
                </div>
              }
            </div>
            <div className="messages">
              {msgs.length
                ? msgs.map((msg, i) => (
                    <Message key={i} msg={msg} user1={user1} text={text} />
                  ))
                : null}
            </div>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
            />
          </>
        ) : (
          <h3 className="no_conv">Select a user to start conversation</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
// Sir I have tried my best but user list filter is not working please forgive me for this
// I've searched all this and coded all this
