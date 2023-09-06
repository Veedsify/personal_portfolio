const allElementWithScrollAnimation = document.querySelectorAll(
    ".scrolla-element-anim-1"
)

const allTextWithScrollAnimation = document.querySelectorAll(
    ".splitting-text-anim-1"
)

const allText2WithScrollAnimation = document.querySelectorAll(
    ".splitting-text-anim-2"
)

let observer = new IntersectionObserver((entries) => {
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