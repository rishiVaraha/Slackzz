"use server";

import { createClient } from "@/utils/supabase/server";

export async function registerWithEmail({ email }: { email: string }) {
  const supabase = await createClient(); // No need to await; it's synchronous

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: process.env.NEXT_PUBLIC_CURRENT_ORIGIN,
    },
  });

  return JSON.stringify(response);
}
