"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from "axios"; // Add axios for making API requests

import { RootState } from "../../../redux/store";

export default function Update() {
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.auth.user);

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    number: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        number: user.number ? user.number.toString() : "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = formData.number ? parseInt(formData.number, 10) : null;

    try {
      // Get the token from localStorage or sessionStorage
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:8000/api/update/",
        {
          username: formData.username,
          first_name: formData.first_name,
          last_name: formData.last_name,
          number: phoneNumber || user?.number,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // Redirect to dashboard on successful update
      router.push("/dashboard");
    } catch {}
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
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid first name"
          label="First Name"
          labelPlacement="outside"
          name="first_name"
          placeholder="Enter new first name"
          type="text"
          value={formData.first_name}
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid last name"
          label="Last Name"
          labelPlacement="outside"
          name="last_name"
          placeholder="Enter new last name"
          type="text"
          value={formData.last_name}
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid phone number"
          label="Phone Number"
          labelPlacement="outside"
          name="number"
          placeholder="Enter new phone number"
          type="number"
          value={formData.number}
          onChange={handleChange}
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
