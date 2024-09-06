import React from "react";
import CategoryCard from "../ui/CategoryCard";

export default function MainPage({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </>
  );
}
