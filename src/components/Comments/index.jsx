import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { getComments } from "../../store/actions/commentsActions";
import Pagination from "react-bootstrap/Pagination";


export default function Comments() {
  const { data, last_page } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);

  const handlePageChange = (page) => {
    dispatch(getComments(page));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>postId</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((comment, index) => (
            <tr key={index}>
              <td>{comment.id}</td>
              <td>{comment.postId}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        {Array.from(Array(last_page), (page, index) => (
          <Pagination.Item key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}
