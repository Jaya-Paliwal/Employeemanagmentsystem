import axios from "axios"
export default function Home(){
    function getUsers() {
        axios.get('http://localhost/api/users/').then(function(response) {
            console.log(response.data);
        });
    }
    return(
        <div>
        <h1 className="main-heading">Welcome to TFV Employee Managment System</h1>
        {/* <div>Total Number of Employees:{users.id}</div> */}
        </div>
    )
}