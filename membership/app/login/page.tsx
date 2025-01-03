"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "../../redux/hooks";
import { loginUser } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(result)) {
      // Redirect after successful login
      localStorage.setItem("token", result.payload.token);
      router.push("/dashboard");
    }
  };

  return (
    <>
      <Form
        className="mt-[180px] w-[400px] flex flex-col gap-8"
        validationBehavior="native"
        onSubmit={handleSubmit}
      >
        <div className="items-center text-[20px] font-bold uppercase">
          Login
        </div>
        {error && <p className="text-red-500">{error}</p>}

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
      <p className="mt-8">
        Dont have an account? Register{" "}
        <Link className="text-sky-500" href="/register">
          here
        </Link>
      </p>
    </>
  );
}
