import './Form.scss';
import {useState} from "react";
export default function Form () {
    const [data, setData] = useState({username: '', password: ''})
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
    }

    function handleInputChange (e, name) {
        setData({...data, [name]: e.target.value})
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__wrapper">
                <label className="form__wrapper-label" htmlFor="userName">Username</label>
                <input onChange={(e) => handleInputChange(e, 'username')} value={data.username} className="form__wrapper-input" id="userName" type="text"/>
            </div>
            <div className="form__wrapper">
                <label className="form__wrapper-label" htmlFor="password">Password</label>
                <input onChange={(e) => handleInputChange(e, 'password')} value={data.password} className="form__wrapper-input" id="password" type="password"/>
            </div>
            <button className="btn-login" type="submit">Login</button>
        </form>
    )
}