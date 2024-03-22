import useInputState from "../../hooks/useInputState";



const HookForm = () => {

    // const [name,handleNameChange] = useInputState('Rojoni');

    const emailState = useInputState('Shojoni@gmail.com')

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('from data',name);

        console.log('form data',emailState.inputvalue);
    }
    return (
        <div>
            <h1>Welcome To Tuhins FoRm</h1>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br /> */}

                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;