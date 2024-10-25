document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		// { threshold: 1.0 }
	); // 100% элемента должно быть видно

	const targets = document.querySelectorAll(".animated_element");

	targets.forEach(target => {
		observer.observe(target);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		// { threshold: 1.0 }
	); // 100% элемента должно быть видно

	const targets = document.querySelectorAll(".animated_text");

	targets.forEach(target => {
		observer.observe(target);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const paragraphs = document.querySelectorAll(".animated_title");

	paragraphs.forEach(paragraph => {
		const text = paragraph.innerText;
		paragraph.innerText = ""; // очищаем текст

		text.split("").forEach((char, index) => {
			const span = document.createElement("span");
			span.textContent = char === " " ? "\u00A0" : char; // сохраняем пробелы
			span.style.animationDelay = `${index * 50}ms`; // задержка 50ms на каждый символ
			paragraph.appendChild(span);
		});
	});
});
