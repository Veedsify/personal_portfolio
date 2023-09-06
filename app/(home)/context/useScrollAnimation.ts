"use client";
import { useEffect, useState } from "react";

export function useScrollAnimation() {
    const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const allElementWithScrollAnimation = document.querySelectorAll(
      ".scrolla-element-anim-1"
    ) as NodeListOf<HTMLElement>;

    const allTextWithScrollAnimation = document.querySelectorAll(
      ".splitting-text-anim-1"
    ) as NodeListOf<HTMLElement>;

    const allText2WithScrollAnimation = document.querySelectorAll(
      ".splitting-text-anim-2"
    ) as NodeListOf<HTMLElement>;

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    allElementWithScrollAnimation.forEach((element) => {
      observer.observe(element);
    });
    allTextWithScrollAnimation.forEach((element) => {
      observer.observe(element);
    });
    allText2WithScrollAnimation.forEach((element) => {
      observer.observe(element);
    });

    setRerender(!rerender)

    return () => {
      allElementWithScrollAnimation.forEach((element) => {
        observer.unobserve(element);
      });
      allTextWithScrollAnimation.forEach((element) => {
        observer.unobserve(element);
      });
      allText2WithScrollAnimation.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
}
