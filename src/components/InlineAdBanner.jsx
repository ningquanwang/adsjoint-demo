import React, { useEffect, useRef, useState } from "react";
import { renderInlineAd, canRenderInlineAd } from "@adsjoint/sdk";

export default function InlineAdBanner({ message }) {
  const idRef = useRef(`inline-ad-${Math.random().toString(36).slice(2, 8)}`);
  const containerId = idRef.current;
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (!hasRendered && canRenderInlineAd(message)) {
      renderInlineAd(containerId, message);
      setHasRendered(true);
    }
  }, [message]);

  if (!hasRendered && !canRenderInlineAd(message)) return null;

  return (
    <div
      id={containerId}
      style={{
        width: "100%",
        height: "160px",
        margin: "12px 0",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
      }}
    />
  );
}