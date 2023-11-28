import { useForm} from "react-hook-form"
function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors);
    return(
        <section id="card-section">
        <div className="container">
            <div className="card">
            <form onSubmit={handleSubmit((data)=>{
                console.log(data);
                  })}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" {...register("lname",{required:"Name is Required"})} id="logname" placeholder="Username" />
                        <i className='bx bxs-user'></i>
                        {errors.lname && <span>{errors.lname.message}</span>}
                        
                    </div>
                    <div className="input-box">
                        <input type="password"  {...register("lpsw",{required:"Password is Required"})} id="logpass" placeholder="Password" />
                        <i class='bx bxs-lock-alt'></i>
                        {errors.lpsw && <span>{errors.lpsw.message}</span>}
                        
                    </div>
                    <div className="remember">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forget Password?</a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    <div class="register">
                        <p>Don't have an account?<a href="#">Register</a></p>
                    </div>
                </form>
            </div>

        </div>

    </section>

    )
}

export default Login