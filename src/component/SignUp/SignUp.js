import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import './SignUp.css';

function SignUp() {

    const navigate = useNavigate();
    let allUserData = [];

    useEffect(() => {
        const data = localStorage.getItem('userList');
        if (data) {
            allUserData = JSON.parse(data);
        }
    }, [])

    let [firstname, setFirstName] = useState();
    let [lastname, setLastName] = useState();
    let [mobile, setMobileNumber] = useState();
    let [password, setPassword] = useState();

    const handleValue = (data) => {
        console.log('check value', data.target.name, data.target.value, data)
        if (data.target.name === "firstname") {
            setFirstName(data.target.value);
        } else if (data.target.name === "lastname") {
            setLastName(data.target.value);
        } else if (data.target.name === "mobilenumber") {
            setMobileNumber(data.target.value);
        } else {
            setPassword(data.target.value);
        }
    }

    const submit = () => {
        const fetchData = localStorage.getItem('userList');
        if (fetchData) {
            allUserData = JSON.parse(fetchData);
        }
        if (!firstname) {
            alert('Please enter first name');
            return;
        } else if (!lastname) {
            alert('Please enter last name');
            return;
        } else if (!mobile) {
            alert('Please enter mobile number');
            return;
        } else if (!password) {
            alert('Please enter password');
            return;
        }
        const data = {
            id: new Date().getTime(),
            firstname: firstname,
            lastname: lastname,
            mobile: mobile,
            password: password
        }
        allUserData.push(data);
        localStorage.setItem('userList', JSON.stringify(allUserData));
        alert('Submited!');
        navigate('/home')
    }

    return (
        <div>
            <Header />
            <div className="container">
                <center><h1> SignUp </h1></center>
                <form>
                    First name :
                    <input type="text" name="firstname" onChange={handleValue} /><br /><br />
                    Last  name :
                    <input type="text" name="lastname" onChange={handleValue} /><br /><br />
                    Mobile No.:
                    <input type="number" name="mobilenumber" onChange={handleValue} /><br /><br />
                    Password :
                    <input type="password" name="password" onChange={handleValue} /><br /><br />
                    <button type="button" onClick={submit}>Submit Form</button>
                </form>
            </div>
        </div>
    );
}
export default SignUp;