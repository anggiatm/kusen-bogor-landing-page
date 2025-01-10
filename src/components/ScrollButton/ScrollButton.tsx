"use client";
import Link from "next/link";

import React from "react";

interface ScrollButtonProps {
  targetId: string;
  label: string;
  className: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, label, className }) => {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={className}
    >
      {label}
    </button>
  );
};

export default ScrollButton;
