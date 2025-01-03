"use client";
import { useState, useEffect } from "react"; // Corrected import for useEffect
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "@nextui-org/react";

import { updateUser } from "../../../redux/slices/authSlice";
import { RootState } from "../../../redux/store";

export default function Update() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.auth.user);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setPhone(user.phone ? user.phone.toString() : "");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = parseInt(phone, 10);

    if (user) {
      await dispatch(updateUser({ username, phone: phoneNumber || 0 }) as any); // Cast to any to bypass type checking temporarily
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
          Update Information
        </div>
        {error && <p>{error}</p>}
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          label="Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter new username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid phone"
          label="Number"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter new number"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex gap-2">
          <Button color="primary" disabled={loading} type="submit">
            {loading ? "Updating..." : "Update"}
          </Button>
        </div>
      </Form>
    </>
  );
}
