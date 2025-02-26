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

document.addEventListener("DOMContentLoaded", function () {
	const refs = {
		list: document.querySelector(".form"),
		formSend: document.querySelector(".submit"),
		text: document.querySelector(".sign-text"),
	};

	if (!refs.list) return;

	refs.list.addEventListener("submit", event => {
		event.preventDefault();

		refs.formSend.disabled = true;

		const formData = new FormData(refs.list);
		const data = {
			name: formData.get("name"),
			phone: formData.get("telefon"),
			message: formData.get("textarea"),
		};

		setTimeout(() => {
			refs.text.innerHTML = `Message sent. We'll contact you soon.`;
		}, 1500);

		fetch("https://lawcompanyback.onrender.com/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error("Ошибка отправки данных");
				}
				return response.text();
			})
			.catch(error => {
				console.error("Ошибка:", error);
			});
	});
});
