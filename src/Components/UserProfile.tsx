import { useState, useEffect } from "react";
import { getUser } from "Utils/api";

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

  console.log(getUser(1));

  return (
    <section>
      <h1>User Profile</h1>
      <p>{user?.userName}</p>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
    </section>
  );
}
