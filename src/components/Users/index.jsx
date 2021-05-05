import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { getUsers } from "../../store/actions/usersActions";
import Pagination from "react-bootstrap/Pagination";

export default function Users() {
  const { data, last_page } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handlePageChange = (page) => {
    dispatch(getUsers(page));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
            <th>address</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                {Object.keys(user.address).map((addressInfo, index) => {
                  if (addressInfo === "geo") {
                    return Object.keys(user.address["geo"]).map((geoInfo, index) => (
                      <div key={index}>
                        {geoInfo}: {user.address["geo"][geoInfo]}
                      </div>
                    ));
                  } else
                    return (
                      <div key={index}>
                        {addressInfo}: {user.address[addressInfo]}
                      </div>
                    );
                })}
              </td>
              <td>
                {Object.keys(user.company).map((companyDetail, index) => (
                  <div key={index}>
                    {companyDetail}: {user.company[companyDetail]}
                  </div>
                ))}
              </td>
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
