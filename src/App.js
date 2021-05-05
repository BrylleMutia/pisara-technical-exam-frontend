import React, { useEffect } from "react";
import styles from "./App.module.scss";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { getPosts } from "./store/actions/postsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className={styles.app}>
      <Button variant="primary">Test</Button>
    </div>
  );
}

export default App;
