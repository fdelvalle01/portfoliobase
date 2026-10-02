import { useEffect, useState } from "react";

export default function useCompactLab() {
  const [compact, setCompact] = useState(() => typeof window.matchMedia === "function" && window.matchMedia("(max-width: 807px)").matches);
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const media = window.matchMedia("(max-width: 807px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return compact;
}
