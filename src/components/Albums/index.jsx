import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { getAlbums } from "../../store/actions/albumsActions";
import Pagination from "react-bootstrap/Pagination";


export default function Albums() {
  const { data, last_page } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  const handlePageChange = (page) => {
    dispatch(getAlbums(page));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((album, index) => (
            <tr key={index}>
              <td>{album.id}</td>
              <td>{album.userId}</td>
              <td>{album.title}</td>
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
