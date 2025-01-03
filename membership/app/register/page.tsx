"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "@nextui-org/react";
import Link from "next/link";

import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

export default function Register() {
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = parseInt(phoneNumber, 10);

    dispatch(registerUser({ username, email, password, phone }));
  };

  return (
    <>
      <Form
        className="mt-[10px] w-[400px] flex flex-col gap-8"
        validationBehavior="native"
        onSubmit={handleSubmit}
      >
        <div className="items-center text-[20px] font-bold uppercase">
          {" "}
          Register{" "}
        </div>
        {error && <p>{error}</p>}
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          label="Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          errorMessage="Please enter a valid phone"
          label="Number"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your number"
          type="number"
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
          errorMessage="Please enter a valid password"
          label="Password"
          labelPlacement="outside"
          name="confirmPassword"
          placeholder="Enter your password"
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
        Have and account ? Login{" "}
        <Link className="text-sky-500" href="/login">
          here
        </Link>{" "}
      </p>
    </>
  );
}
