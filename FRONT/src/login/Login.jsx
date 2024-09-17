import {useForm} from 'react-hook-form'


export const Login = ()=> {
    const {register, handleSubmit, formState:{errors}} = useForm();

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="card">
                <div className="card-body">
                    <form className="form">
                        <div className="my-5 mx-5">
                            <label htmlFor="email">Email:</label> <br />
                            <input id="email" type="email" />
                        </div>
                        <div className="my-5 mx-5">
                            <label htmlFor="password">Password:</label> <br />
                            <input id="password" type="text" />
                        </div>
                        <button type="submit" className='btn btn-primary'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}