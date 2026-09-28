"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

// Server and first client render must match (React hydration requirement),
// so useSyncExternalStore's getServerSnapshot reports "not mounted" while
// getSnapshot reports "mounted" for every render after hydration completes.
function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export default function DeferredSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        id={id}
        data-section
        className="h-screen w-screen shrink-0 snap-start bg-black"
      />
    );
  }

  return children;
}
