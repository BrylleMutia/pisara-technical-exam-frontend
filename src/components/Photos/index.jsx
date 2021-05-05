import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { getPhotos } from "../../store/actions/photosActions";
import Pagination from "react-bootstrap/Pagination";


export default function Photos() {
  const { data, last_page } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  const handlePageChange = (page) => {
    dispatch(getPhotos(page));
  };


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>albumId</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {data.map((photo, index) => (
            <tr key={index}>
              <td>{photo.id}</td>
              <td>{photo.albumId}</td>
              <td>{photo.title}</td>
              <td>{photo.url}</td>
              <td>{photo.thumbnailUrl}</td>
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
