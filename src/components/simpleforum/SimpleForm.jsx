

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();//prevents the default loading this is must be implemented 

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

        console.log('The form was submitted');
    }

    return (
        <div>
            <div className="flex justify-center mt-[60px] border-solid border-[2px] border-yellow-600 rounded-lg shadow-lg">
                <h1>Welcome To Tuhins FoRm</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" />
                    <br />

                    <input type="email" name="email" />
                    <br />
                    <input type="text" name="phone" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default SimpleForm;