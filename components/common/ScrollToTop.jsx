import React from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  return (
    <Button
      variant="icon"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="!w-10 h-10 !bg-white border border-gray/30 rounded-full shadow-md"
    >
      <ChevronUp />
    </Button>
  );
}

export default ScrollToTop;
