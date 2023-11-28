import { useForm} from "react-hook-form"

function Registration(){
   
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors);
    
    return(
        <div>
        <section id="reg">
        <div class="reg-container">
            <h1 class="title">Registration</h1>
           <form onSubmit={handleSubmit((data)=>{
                console.log(data);
                  })}>
                <div class="user">
                    <div class="user-input">
                        <label for="fullname">First Name</label>
                        <input type="text" {...register("name",{required:"Name is Required"})} id="fullname"placeholder="Full Name" />
                         {errors.name && <span>{errors.name.message}</span>}
                    </div>

                    <div class="user-input">
                        <label for="username">Last name</label>
                        <input type="text" {...register("uname",{required:"Name is Required"})} id="username"placeholder="Last Name" />
                        {errors.uname && <span>{errors.uname.message}</span>}
                    </div>

                    <div class="user-input">
                        <label for="email" id="emaillabel">Email</label>
                        <input type="email" {...register("mail",{required:"Email is Required"})} id="email"placeholder="Email" />
                        {errors.mail && <span>{errors.mail.message}</span>}
                    </div>

                    <div class="user-input">
                        <label for="phone">Phone Number</label>
                        <input type="text" {...register("num",{required:"Number is Required"})}  id="phone"placeholder="Phone Number" />
                        {errors.num && <span>{errors.num.message}</span>}
                    </div>

                    <div class="user-input">
                        <label for="password">Password</label>
                        <input type="password" {...register("psw",{required:"Password is Required"})} id="password"placeholder="Password" />
                        {errors.psw && <span>{errors.psw.message}</span>}
                    </div>

                    <div class="user-input">
                        <label for="fullname">Confirm Password</label>
                        <input type="password" {...register("cpsw",{required:"Password is Required"})} id="confirmpass"placeholder="Confirm Password" />
                        {errors.cpsw && <span>{errors.cpsw.message}</span>}
                    </div>

                </div>
                <div class="gender">
                    <span class="gender-title">Gender</span>
                    <div class="gender-category">
                        <input type="radio" name="gender" id="male" />
                        <label for="male">Male</label>

                        <input type="radio" name="gender" id="female" />
                        <label for="female">Female</label>

                        <input type="radio" name="gender" id="other" />
                        <label for="other">Other</label>
                    </div>
                </div>

                <div class="form-submit">
                    
                    <input type="submit" id="click" class="btn"value="Register"  />

                </div>
            </form>
        </div>
        </section>

        </div>
    )
}
export default Registration