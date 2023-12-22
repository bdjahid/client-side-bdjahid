import { useContext, useState } from "react";
import { AuthContext } from './../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;
        console.log(name, photo, email, password, terms)
        // console.log(user)

        // reset error
        setError('')
        setSuccess('')
        // validation and condition
        if (password < 6) {
            setError('Password should be at least 6 characters or longer')
            return;
        }

        else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()])/.test(password)) {
            setError('Password should have at least one uppercase characters');
            return;
        }

        // else if (!terms) {
        //     setError('Please accept our terms and conditions');
        //     return;
        // }
        // create user
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess('User Created Successfully')
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Wow User Created Successfully',
                    confirmButtonText: 'ok'
                })
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate(from, { replace: true })
                        console.log('profile update')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>Tours and Guide Agency | Register</title>
            </Helmet>
            <div className="flex justify-center">
                <form onSubmit={handleRegister} className="flex max-w-md flex-col gap-4 w-full">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name2" value="Your name" />
                        </div>
                        <TextInput name="name" id="name2" type="text" placeholder="inter your name" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name2" value="Photo URL" />
                        </div>
                        <TextInput name="photo" id="photo2" type="text" placeholder="inter your Photo URL" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput name="email" id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <div className="relative">
                            <TextInput name="password" id="password2" type={show ? 'text' : 'password'} placeholder="password" required shadow />

                            <span className="mt-2 absolute top-1 right-2"
                                onClick={() => setShow(!show)}
                            >
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> :
                                        <FaEye></FaEye>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <input type="checkbox" name="terms" id="terms" /> */}
                        <Checkbox id="agree" type="checkbox" name="terms" />
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit">Register new account</Button>
                </form>
            </div>
            <p className='my-4 text-center'>Already have an account <Link className='text-orange-400' to="/login"> Login</Link></p>
            <div className="text-center mb-5">
                {
                    error && <p className="text-red-800">{error}</p>
                }
                {
                    success && <p className="text-green-800">{success}</p>
                }
            </div>
        </>
    );
};

export default Register;