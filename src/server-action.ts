"use server";

import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Dummy credentials


  if (email && password) {
    // Redirect to dashboard if correct
    redirect("/dashboard");
  }

  // If wrong credentials, throw error
  throw new Error("Invalid email or password");
}