import { useContext } from "react";
import { AuthContext } from './../../../provider/AuthProvider';
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Swal from "sweetalert2";

const Login = () => {
    const { createUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // console.log(user)

        // create user
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: 'Success!',
                    text: 'Wow User logged in Successfully',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <div className="flex justify-center">
                <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 w-full">
                    <div>
                        <div className="mb-2 block w-full">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput name="email" id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput name="password" id="password2" type="password" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <TextInput name="repeat" id="repeat-password" type="password" required shadow />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit">Login Now</Button>
                </form>
                {/* <p className='my-4 text-center'>New to Create Account<Link className='text-orange-400' to="/register"> Sign Up</Link></p> */}
            </div>
            <p className='my-4 text-center'>New to Create Account<Link className='text-orange-400' to="/register"> Register</Link></p>
        </>
    );
};

export default Login;