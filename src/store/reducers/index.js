import { combineReducers } from "redux";
import controlReducer from "./controlReducer"
import usersReducer from "./usersReducer"
import todosReducer from "./todosReducer"
import albumsReducer from "./albumsReducer"
import photosReducer from "./photosReducer"
import postsReducer from "./postsReducer"
import commentsReducer from "./commentsReducer"

export default combineReducers({
  controls: controlReducer,
  users: usersReducer,
  todos: todosReducer,
  albums: albumsReducer,
  photos: photosReducer,
  posts: postsReducer,
  comments: commentsReducer
})