import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './UserList.css';

function UserList() {

    let [userData, setUserData] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('userList');
        if (data)
            setUserData(JSON.parse(data));
    }, []);

    return (
        <div className="container">
            <center><h1> UserList </h1></center>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && userData.length && userData.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.mobile}</td>
                            <td>{item.password}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
export default UserList;