import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@components/mode-toggle";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </>
  );
}
