import { db } from "@lib/db";
import { getCurrentProfile } from "@lib/current-profile";
import { redirect } from "next/navigation";
import NavigationAction from "./navigation-action";

export default async function NavigationSidebar() {
  const profile = await getCurrentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      <NavigationAction />
    </div>
  );
}
