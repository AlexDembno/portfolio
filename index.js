document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	});

	const targets = document.querySelectorAll(".animated_element");

	targets.forEach(target => {
		observer.observe(target);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	});

	const targets = document.querySelectorAll(".animated_text");

	targets.forEach(target => {
		observer.observe(target);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const paragraphs = document.querySelectorAll(".animated_title");

	paragraphs.forEach(paragraph => {
		const text = paragraph.innerText;
		paragraph.innerText = "";

		text.split("").forEach((char, index) => {
			const span = document.createElement("span");
			span.textContent = char === " " ? "\u00A0" : char;
			span.style.animationDelay = `${index * 50}ms`;
			paragraph.appendChild(span);
		});
	});
});
