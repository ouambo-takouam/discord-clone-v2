"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@lib/utils";
import ActionTooltip from "@components/action-tooltip";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export default function NavigationItem({
  id,
  imageUrl,
  name,
}: NavigationItemProps) {
  return (
    <ActionTooltip label={name} side="right" align="center">
      <div>server</div>
    </ActionTooltip>
  );
}
