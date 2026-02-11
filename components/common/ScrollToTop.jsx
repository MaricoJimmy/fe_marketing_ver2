import React from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const handleScrollToTop = () => {
    const scrollOptions = { top: 0, left: 0, behavior: "smooth" };

    window.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);

    // Fallback for pages that may scroll inside a dedicated content container.
    const scrollContainer = document.querySelector(".scroll-content");
    if (scrollContainer && typeof scrollContainer.scrollTo === "function") {
      scrollContainer.scrollTo(scrollOptions);
    }
  };

  return (
    <Button
      type="button"
      title="Scroll to top"
      variant="icon"
      onClick={handleScrollToTop}
      className="!w-10 h-10 !bg-white border border-gray/30 rounded-full shadow-md"
    >
      <ChevronUp />
    </Button>
  );
}

export default ScrollToTop;
