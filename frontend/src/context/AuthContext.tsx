"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Define a simple User type compatible with what components expect
export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
  loginAsGuest: () => void;
}>({ user: null, loading: true, loginAsGuest: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing session
    const storedUid = localStorage.getItem("authenex_uid");
    if (storedUid) {
        setUser({
            uid: storedUid,
            email: "guest@authenex.com",
            displayName: "Guest User",
            photoURL: null
        });
    }
    setLoading(false);
  }, []);

  const loginAsGuest = async () => {
    const newUid = "guest_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("authenex_uid", newUid);
    
    const newUser = {
        uid: newUid,
        email: "guest@authenex.com",
        displayName: "Guest User",
        photoURL: null
    };
    
    setUser(newUser);
    
    // Notify backend
    try {
        await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });
    } catch (e) {
        console.error("Failed to sync login with backend:", e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
