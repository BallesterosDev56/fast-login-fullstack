import {useForm} from 'react-hook-form'

export const Register = ()=> {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data)=> {
        console.log(data);
        
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <d      iv className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="my-5 mx-5">
                            <label htmlFor="email">Email:</label> <br />
                            <input {...register('email')} id="email" type="email" />
                        </div>
                        <div className="my-5 mx-5">
                            <label htmlFor="password">Password:</label> <br />
                            <input {...register('pswrd')} id="password" type="text" />
                        </div>
                        <div className="my-5 mx-5">
                            <label htmlFor="password">Repeat password:</label> <br />
                            <input {...register('repeat-pswrd')} id="password" type="text" />
                        </div>
                        <button type="submit" className='btn btn-primary'>Submit</button>

                    </form>
                </div>
            </d>
        </div>
    )
}