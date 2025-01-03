"use client"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "@nextui-org/react";
import Link from 'next/link'
import { loginUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";
import { useRouter } from 'next/navigation';
export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password}));
  };

  return (
    <>
    <Form
        className="mt-[180px]  w-[400px]  flex flex-col gap-8"
        validationBehavior="native"
        onSubmit={handleSubmit}
      >
    <div className="items-center text-[20px] font-bold uppercase"> Login </div>
        {error && <p>{error}</p>}
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
          errorMessage="Please enter a valid password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-2">
          <Button color="primary" disabled={loading} type="submit">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </Form>
      <p className="mt-8">Don't have and account ? Register <Link href="/register" className="text-sky-500">here</Link> </p>
    </>
  );
}
