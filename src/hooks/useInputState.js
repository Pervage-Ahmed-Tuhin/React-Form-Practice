import { useState } from "react"

const useInputState = (defaultValue = '') => {

    const [inputvalue, setInputValue] = useState(defaultValue);

    // const handleChange = (e) => {
    //     setInputvalue(e.target.value);
    // }
    const onChange = (e) => {
        setInputValue(e.target.value);
    }
    // return [inputValue,handleChange];
    return {
        inputvalue,
        onChange

    }
}

export default useInputState;