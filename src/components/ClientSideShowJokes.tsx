"use client";

import { WhenReady } from "@/components/WhenReady";
import { WithJokes } from "@/components/WithJokes";
import { ShowJokes } from "@/components/ShowJokes";

export function ClientSideShowJokes() {
  return (
    <WhenReady
      loading={<div>Loading…</div>}
      fallback={<div>API is not ready...</div>}
    >
      {() => (
        <WithJokes
          loading={<div>Loading…</div>}
          fallback={<div>Could not fetch the jokes</div>}
        >
          <ShowJokes />
        </WithJokes>
      )}
    </WhenReady>
  );
}
