import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './LogIn.css';
function LogIn() {

    let userData;

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
        let a = userData.filter(user => user.find(data => data.mobile == mobile));
        console.log('check a', a);
    }

    return (
        <div>
            <Header />
            <div className="container">
                <center><h1> LogIn</h1></center>
                {/* <form> */}
                Mobile No.:
                <input type="number" name="mobile" onChange={handleValue} /><br /><br />
                Password :
                <input type="password" name="password" onChange={handleValue} /><br /><br />
                <button onClick={logIn}>Log In</button>
                {/* </form> */}
            </div>
        </div>
    );
}
export default LogIn;