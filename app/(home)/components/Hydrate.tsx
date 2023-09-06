"use client";
import { useState, useEffect, ReactNode } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [hydrated, setIsHydrated] = useState(false);

  useEffect(() => {

  }, []);
  return <>{hydrated ? <> {children} </> : <div>Loading</div>}</>;
}
