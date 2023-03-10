import './Home.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Home() {

    let userData;
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('userList');
        if (data) {
            userData = JSON.parse(data);
        }
    }, []);

    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();

    const handleValue = (value) => {
        if (value.target.name === "mobile") {
            setMobile(value.target.value);
        } else {
            setPassword(value.target.value);
        }
    }

    const logIn = () => {
        const data = localStorage.getItem('userList');
        if (data) {
            userData = JSON.parse(data);
        } else {
            alert('There is not any user please sign up first!');
            return;
        }
        let isUser = userData.filter(user => { return user.mobile == mobile && user.password == password });
        if (isUser && isUser.length) {
            navigate('/user-list');
        } else {
            alert('user id not match!');
        }
    }

    return (
        <div className="home">
            <Header />
            <div className="container">
                <center><h1> LogIn</h1></center>
                Mobile No.:
                <input type="number" name="mobile" onChange={handleValue} /><br /><br />
                Password :
                <input type="password" name="password" onChange={handleValue} /><br /><br />
                <button onClick={logIn}>Log In</button>
                <div>
                    <Link to="/SignUp">SignUp</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
