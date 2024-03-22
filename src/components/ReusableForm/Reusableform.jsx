

const Reusableform = ({ formTitle, handleSubmit, submitButtonText = 'Submit' , children}) => {


    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            {/* <h1>{formTitle}</h1> */}
            {/* showing the same dynamicality using children */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />

                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitButtonText} />
            </form>
        </div>
    );
};

export default Reusableform;