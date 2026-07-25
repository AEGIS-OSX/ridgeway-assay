import React from "react";

interface ProjectImageProps {
  id: "logo" | "hero" | "feature_1" | "feature_2" | "feature_3" | "social_proof";
  className?: string;
  alt?: string;
}

export default function ProjectImage({ id, className, alt }: ProjectImageProps) {
  return (
    <img
      src={`/images/${id}.png`}
      alt={alt || ""}
      className={className}
    />
  );
}
