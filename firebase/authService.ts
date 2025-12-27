import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
} from "firebase/auth";

import { auth } from "./config";

/* 🔹 REGISTER USER */
export async function registerUser(
  email: string,
  password: string
): Promise<User> {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

/* 🔹 LOGIN USER */
export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

/* 🔹 LOGOUT USER */
export async function logoutUser(): Promise<void> {
  await signOut(auth);
}
