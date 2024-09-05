document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 1.0 }
  ); // 100% элемента должно быть видно

  const targets = document.querySelectorAll(".animated_element");

  targets.forEach((target) => {
    observer.observe(target);
  });
});
