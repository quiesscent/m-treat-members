"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Link, Button } from "@nextui-org/react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve JWT token
        const response = await fetch("http://127.0.0.1:8000/api/user-profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json();

          setUser(data);
        } else {
          setError("Failed to fetch user information.");
        }
      } catch {
        setError("An unexpected error occurred.");

        return error;
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <div className="flex  px-10 mt-10">
        <form>
          <div className="space-y-12">
            <p className="mt-5 font-bold text-[20px]">Welcome To M-Treat </p>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Profile
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    className="block text-sm/6 font-medium text-gray-900"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        {user ? user.username : "John Doe"}
                      </div>
                      <input
                        disabled
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        id="username"
                        name="username"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Personal Information
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm/6 font-medium text-gray-900"
                    htmlFor="first-name"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      disabled
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      id="first-name"
                      name="first-name"
                      placeholder={user ? user.firstname : "John"}
                      type="text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    className="block text-sm/6 font-medium text-gray-900"
                    htmlFor="last-name"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      disabled
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      id="last-name"
                      name="last-name"
                      placeholder={user ? user.lastname : "Doe"}
                      type="text"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    className="block text-sm/6 font-medium text-gray-900"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      disabled
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      id="email"
                      name="email"
                      placeholder={user ? user.email : "johndoe@gmail.com"}
                      type="email"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Notifications
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                We will always let you know about important changes, but you
                pick what else you want to hear about.
              </p>
            </div>
          </div>
          <Button
            as={Link}
            color="success"
            href="/dashboard/update"
            variant="solid"
          >
            Update
          </Button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
