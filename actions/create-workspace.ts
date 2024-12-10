"use server";

// import { createClient } from "@/utils/supabase/server";

// import { getUserData } from "./get-user-data";
// import { updateUserWorkspace } from "./update-user-workspace";
// import { addMemberToWorkspace } from "./add-member-to-workspace";

export const createWorkspace = async ({
  imageUrl,
  name,
  slug,
  invite_code,
}: {
  imageUrl?: string;
  name: string;
  slug: string;
  invite_code: string;
}) => {
  console.log(imageUrl, name, slug, invite_code);
};
