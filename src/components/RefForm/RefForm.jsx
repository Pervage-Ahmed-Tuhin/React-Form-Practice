import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);


    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <h1>Welcome To Tuhins FoRm</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />

                <input defaultValue={'tumarnanir123@gmail.com'} type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;