import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/api/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div className=" d-flex flex-column justify-content-center align-self-center">
<h1 className="main-heading">Edit Employee</h1>
<div className="container fs-2">
    <form action="/action_page.php"  onSubmit={handleSubmit}>
        <div className="form-group">
            <label for="name">Full Name :</label>
            <input type="text" className="form-control" name="name" onChange={handleChange}  value={inputs.name}/>
            </div>
            <div className="form-group">
                <label for="email">Email address :</label>
                <input type="email" className="form-control" name="email" onChange={handleChange}  value={inputs.email}/>
                </div>
                <div className="form-group">
                    <label for="address">Mobile :</label>
                    <input type="text" className="form-control" name="mobile" onChange={handleChange}  value={inputs.mobile}/>
                    </div>  
                    <button type="submit" className="btn btn-lg btn-danger save">Save</button>
                    </form>
                    </div>
                    </div>
    )
}