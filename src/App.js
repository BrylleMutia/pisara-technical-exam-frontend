import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/actions/usersActions";
import { changeTab } from "./store/actions/controlActions";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.controls);

  const handleTabChange = (eventKey) => {
    dispatch(changeTab(eventKey));
  };

  return (
    <div className={styles.app}>
      <Tabs defaultActiveKey="users" onSelect={handleTabChange} id="uncontrolled-tab-example">
        <Tab eventKey="users" title="Users">
          <Users />
        </Tab>
        <Tab eventKey="todos" title="Todos">
          <Todos />
        </Tab>
        <Tab eventKey="albums" title="Albums">
          <Albums />
        </Tab>
        <Tab eventKey="photos" title="Photos">
          <Photos />
        </Tab>
        <Tab eventKey="posts" title="Posts">
          <Posts />
        </Tab>
        <Tab eventKey="comments" title="Comments">
          <Comments />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
