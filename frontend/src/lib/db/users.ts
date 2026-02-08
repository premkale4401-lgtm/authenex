export interface UserLike {
  uid: string;
  email: string | null;
  name: string | null;
  photoURL: string | null;
}

export const ensureUserInDB = async (user: UserLike) => {
  if (!user || !user.uid) return;

  try {
    await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.name,
        photoURL: user.photoURL,
      }),
    });
  } catch (error) {
    console.warn("Failed to sync user with backend:", error);
  }
};
