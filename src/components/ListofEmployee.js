import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListofEmployee() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return (
        <div>
            <h1 className="main-heading">Employees List</h1>
            <table className="table table-dark table-hover fs-2">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Mobile</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td className="text-center">{user.id}</td>
                            <td className="text-center">{user.name}</td>
                            <td className="text-center">{user.email}</td>
                            <td className="text-center">{user.mobile}</td>
                            <td  className="text-center">
                                <button className="btn1"><Link to={`EditEmployee/${user.id}`} style={{marginRight: "10px"}}>Edit</Link></button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}