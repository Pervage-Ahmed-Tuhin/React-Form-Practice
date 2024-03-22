import { useState } from "react";


const StateFulForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassWord] = useState(null);
    const [pass, setPass] = useState('');
    // const [name, setName] = useState(null);
    // this a case of using this another we will set default value 
    const [name, setName] = useState('Name');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        if (password.length < 6) {
            setPass('Password must be 6 character longer');
        }
        else {
            setPass('');
            console.log(password);
        }

    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);

    }
    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);

    }
    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassWord(e.target.value);

    }
    return (
        <div>
            <h1>Welcome To Tuhins FoRm</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={handleNameChange}
                    type="text" name="name" />
                <br />

                <input

                    onChange={handleEmailChange}

                    type="email" name="email" />
                <br />
                <input

                    onChange={handlePasswordChange}
                    // required is to make give a value to progress
                    type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
            </form>
            {
                pass&&<p>{pass}</p>
            }
        </div>
    );
};

export default StateFulForm;