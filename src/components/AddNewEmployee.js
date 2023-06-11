import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNewEmployee() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/users/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div className=" d-flex flex-column justify-content-center align-self-center">
            <h1 className="main-heading">Add New Employee</h1>
            <div className="container fs-2">
                <form  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="name">Full Name :</label>
                        <input type="text" className="form-control" name="name" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email address :</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label for="address">Mobile :</label>
                                <input type="text" className="form-control" name="mobile" onChange={handleChange}/>
                                </div>  
                                <button type="reset" className="btn btn-lg">Reset</button>
                                <button type="submit" className="btn btn-lg">Save</button>
                                </form>
                                </div>
                                </div>



    )
}