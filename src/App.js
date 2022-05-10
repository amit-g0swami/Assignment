import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db, auth } from "./firebase";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";
import Uploader from "./Uploader";
import PostLeft from "./PostLeft";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%,-${left}%)`,
  };
}

const usestyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #985eff",
    boxShadow: 24,
    p: 4,
  },
}));

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = usestyles();
  const [modelStyle] = useState(getModalStyle);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [number, setNumber] = useState("");

  const name = "Guest User";
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpen(false);
  };

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenSignIn(false);
  };

  return (
    <div className="app">
      <Modal className="modal" open={open} onClose={() => setOpen(false)}>
        <div style={modelStyle} className={classes.paper}>
          <form className="app__signup" style={{ padding: "50px" }}>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ color: "white" }}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: "white" }}
            />
            <Input
              placeholder="Phone no."
              type="number"
              max={10}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              style={{ color: "white" }}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: "white" }}
            />
            <Button
              type="submit"
              onClick={signUp}
              style={{ backgroundColor: "#985eff" }}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modelStyle} className={classes.paper}>
          <form className="app__signup" style={{ padding: "50px" }}>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: "white" }}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: "white" }}
            />
            <Button
              type="submit"
              onClick={signIn}
              style={{ backgroundColor: "#985eff" }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <div></div>
        {user ? (
          <div className="app__logoutContainer">
            <Button onClick={() => auth.signOut()} style={{ color: "white" }}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="app__loginContainer">
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
            <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
          </div>
        )}
      </div>
      <div className="app__nadospost">
        <div className="nadospost__left">
          {user?.email ? (
            <>
              <PostLeft username={user.email} />
            </>
          ) : (
            <>
              <PostLeft name={name} />
            </>
          )}
        </div>

        <div className="nadospost__center">
          {user?.email ? (
            <>
              <Uploader username={user.email} realname={user.displayName} />
            </>
          ) : (
            <>
            </>
          )}

          {posts.map(({ id, post }) => (
            <Post
              key={id}
              username={post.username}
              caption={post.caption}
              profileUrl={post.profileUrl}
              imageUrl={post.imageUrl}
              title={post.title}
            // timeStamp={post.timeStamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;