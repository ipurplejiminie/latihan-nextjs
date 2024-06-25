"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/user");
      const users = await res.json();
      console.log(users);
      setUsers(users);
    };
    fetchUsers();
  }, []);

  const postUser = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
    });
    const user = await res.json();
  };

  const handleClick = () => {
    console.log("Clicked");
    postUser();
  };

  return (
    <div className="container mx-auto">
      <div className=" flex flex-col h-screen items-center justify-center">
        <h1 className="font-bold text-5xl">Home</h1>
        <button
          onClick={handleClick}
          className="bg-black text-white border-2 rounded-full px-4 py-2 m-10"
        >
          Send
        </button>
        {users.map((user) => (
          <p>{JSON.stringify(user)}</p>
        ))}
      </div>
    </div>
  );
}
