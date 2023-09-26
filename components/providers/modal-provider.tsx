"use client";

import { useState, useEffect } from "react";
import { CreateServerModal } from "@components/modals/create-server-modal";

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  );
};
