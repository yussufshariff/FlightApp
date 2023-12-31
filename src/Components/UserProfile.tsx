import { useState, useEffect } from "react";
import { getUser } from "Utils/api";

import { Link } from "react-router-dom";

interface UserData {
  userId: number;
  userName: string;
  password: string;
  email: string;
  phone: number;
  isActive: boolean;
}

export default function UserProfile() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    getUser(1)
      .then((userData: UserData | null) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
      });
  }, []);

  return (
    <section>
      <h1>User Profile</h1>
      <p>{user?.userName}</p>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
      <Link to="/Bookings">
        <button>My Bookings</button>
      </Link>
    </section>
  );
}
