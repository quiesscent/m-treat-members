"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

export default function Register() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setfirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Password Validation
  useEffect(() => {
    validatePasswords(password, confirmPassword);
  }, [password, confirmPassword]);

  const validatePasswords = (pwd: string, confirmPwd: string) => {
    if (pwd.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
    } else if (pwd !== confirmPwd) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate phone number
    const phone = parseInt(phoneNumber, 10);

    if (isNaN(phone)) {
      setErrorMessage("Please enter a valid phone number.");

      return;
    }
    const result = await dispatch(
      registerUser({
        username,
        email,
        first_name,
        last_name,
        number: phone,
        password,
      }),
    );

    if (registerUser.fulfilled.match(result)) {
      // Redirect after successful registration
      router.push("/login");
    }
  };

  return (
    <>
      <Form
        className="mt-[10px] w-[400px] flex flex-col gap-8"
        validationBehavior="native"
        onSubmit={handleSubmit}
      >
        <div className="items-center text-[20px] font-bold uppercase">
          Register
        </div>
        {error && (
          <p>{typeof error === "object" ? "An error occurred" : error}</p>
        )}
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          label="Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          isRequired
          errorMessage="Please enter your First Name"
          label="First Name"
          labelPlacement="outside"
          name="first_name"
          placeholder="Enter your First Name"
          type="text"
          value={first_name}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <Input
          isRequired
          errorMessage="Please enter your Second Name"
          label="Second Name"
          labelPlacement="outside"
          name="last_name"
          placeholder="Enter your Last Name"
          type="text"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid phone number"
          label="Number"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your number"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          isRequired
          errorMessage="Please confirm your password"
          label="Confirm Password"
          labelPlacement="outside"
          name="confirmPassword"
          placeholder="Confirm your password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <p className="text-red-500">{errorMessage}</p>
        <div className="flex gap-2">
          <Button color="primary" disabled={loading} type="submit">
            {loading ? "Registering..." : "Register"}
          </Button>
        </div>
      </Form>
      <p className="mt-8">
        Already have an account?{" "}
        <Link className="text-sky-500" href="/login">
          Login here
        </Link>
      </p>
    </>
  );
}
