import useSignIn from "../hooks/useSignIn";
import { Link } from "react-router-dom";
import signInImage from "../../src/assets/images/authenticationImage.png";
import Button from "../components/common/Button";
import { FormEvent } from "react";

const LogIn: React.FC = () => {
    const { values, handleChange, handleSubmit, apiError, errors, successmessage } = useSignIn({
        username: "",
        password: "",
    });

    return (
        <div className="max-w-5xl w-full mx-auto m-4 flex md:flex-row flex-col items-center justify-center rounded-lg bg-[#244A89]">
            <div className="md:w-1/2 flex items-center justify-center">
                <img src={signInImage} alt="signInImage" className="w-[690px] h-auto object-cover" />
            </div>
            <div className="md:w-1/2 p-6 rounded-md">
                {apiError && (
                    <div className="bg-red-500 text-white w-full rounded-md p-2 text-center mb-2">
                        {apiError}
                    </div>
                )}
                {successmessage && (
                    <div className="text-white bg-green-500 w-full rounded-md p-2 flex items-center mb-2">
                        {successmessage}
                    </div>
                )}

                <form
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault(); // Prevent page refresh
                     
                        handleSubmit();
                    }}
                    className="mx-auto rounded-md p-9"
                >
                    <h1 className="text-center text-white md:text-lg font-bold mb-4 text-sm">Welcome Back</h1>

                    <div className="mb-4 flex flex-col">
                        <label htmlFor="username" className="text-white mb-2">
                            UserName
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            className="rounded-md p-3 border border-blue-600 bg-white focus:outline-none"
                            placeholder="Abebe23232"
                        />
                        {errors.username && <p className="text-red-500">{errors.username}</p>}
                    </div>

                    <div className="mb-4 flex flex-col">
                        <label htmlFor="password" className="text-white mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className="rounded-md p-3 bg-white border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="*******"
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>

                    <div className="flex justify-center">
                        <Button type="submit" butttonLabel="Login" buttonBackgroundColor="blue" buttonDimension="medium" />
                    </div>

                    <p className="text-center mt-8 text-white">
                        Don’t have an account?{" "}
                        <Link to="/">
                            <span className="text-[#2483B9] font-bold">sign-up</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;