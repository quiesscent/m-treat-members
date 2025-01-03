"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "@nextui-org/react";
import Link from 'next/link'
import { registerUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

export default function Register() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
   useEffect(() => {
    validatePasswords(password, confirmPassword);
  }, [password, confirmPassword]);

  const validatePasswords = (pwd: string, confirmPwd: string) => {
    if (pwd.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
    } else if (pwd !== confirmPwd) {
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
    }
  };  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password, phone}));
  };

  return (
    <>
    <Form
        className="mt-[10px] w-[400px] flex flex-col gap-8"
        validationBehavior="native"
        onSubmit={handleSubmit}
      >
    <div className="items-center text-[20px] font-bold uppercase"> Register </div>
        {error && <p>{error}</p>}
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          label="Email"
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
          label="Email"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your number"
          type="number"
          value={phone}
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
      <p className="mt-8">Have and account ? Login <Link href="/login" className="text-sky-500">here</Link> </p>
    </>
  );
}
