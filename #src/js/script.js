document.addEventListener("DOMContentLoaded", function () {
	let burger = document.querySelector(".js-burger");
	let mobileMenu = document.querySelector(".js-mobile-menu");
	let closeMobileMenu = document.querySelector(".js-close-mobile-menu");

	function showMenu(menu, isOpen) {
		if (menu !== null) {
			if (isOpen === false) {
				menu.style.display = "block";

				document.querySelector("body").classList.add("lock");

				setTimeout(() => {
					menu.classList.add("active");
				}, 100);
			} else {
				menu.classList.remove("active");

				setTimeout(() => {
					menu.style.display = "none";
					document.querySelector("body").classList.remove("lock");
				}, 400);
			}
		}
	}

	if (burger !== null) {
		burger.addEventListener("click", function () {
			showMenu(mobileMenu, false);
		});
	}

	if (closeMobileMenu !== null) {
		closeMobileMenu.addEventListener("click", function () {
			showMenu(mobileMenu, true);
		});
	}

	let sliderBanner = new Swiper(".banner__slider-container", {
		slidesPerView: 1,
		spaceBetween: 10,

		navigation: {
			nextEl: ".banner__slider .slider-next",
			prevEl: ".banner__slider .slider-prev",
		},

		pagination: {
			el: ".banner__slider .swiper-pagination",
			type: "bullets",
		},

		on: {
			init(swiper) {
				swiper.slides.forEach((element) => {
					let imageBigSrc = element.querySelector(".banner__image").getAttribute("data-image-big");
					let imageSmallSrc = element.querySelector(".banner__image").getAttribute("data-image-small");
					let image = element.querySelector("img");

					if (document.documentElement.clientWidth >= 600) {
						if (image !== null) {
							image.setAttribute("src", imageBigSrc);
						}
					} else {
						if (image !== null) {
							image.setAttribute("src", imageSmallSrc);
						}
					}
				});
			},

			resize(swiper) {
				if (document.documentElement.clientWidth >= 600) {
					swiper.slides.forEach((element) => {
						let imageBigSrc = element.querySelector(".banner__image").getAttribute("data-image-big");
						let image = element.querySelector("img");

						if (image !== null) {
							image.setAttribute("src", imageBigSrc);
						}
					});
				} else {
					swiper.slides.forEach((element) => {
						let imageSmallSrc = element.querySelector(".banner__image").getAttribute("data-image-small");
						let image = element.querySelector("img");

						if (image !== null) {
							image.setAttribute("src", imageSmallSrc);
						}
					});
				}
			},
		},
	});

	let sliderGallWarehouse = new Swiper(".gallary-warehouse__container", {
		slidesPerView: "auto",
		spaceBetween: 8,

		navigation: {
			nextEl: ".gallary-warehouse__slider .slider-next",
			prevEl: ".gallary-warehouse__slider .slider-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
		},
	});

	let sldierWorkingUs = new Swiper(".working-us__slider-container", {
		slidesPerView: 1,
		spaceBetween: 20,

		pagination: {
			el: ".working-us__slider .swiper-pagination",
			type: "bullets",
		},

		breakpoints: {
			1000: {
				slidesPerView: 4,
				spaceBetween: 20,
			},

			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},

			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});

	let sldierCooperation = new Swiper(".cooperation__slider-container", {
		slidesPerView: 1,
		spaceBetween: 40,
		grid: {
			rows: 2,
			fill: "column",
		},

		breakpoints: {
			1170: {
				slidesPerView: 4,
				spaceBetween: 19,
				grid: {
					rows: 1,
					fill: "row",
				},
			},

			768: {
				slidesPerView: 3,
				spaceBetween: 19,
				grid: {
					rows: 1,
					fill: "row",
				},
			},

			550: {
				slidesPerView: 2,
				spaceBetween: 19,
				grid: {
					rows: 1,
					fill: "row",
				},
			},
		},

		pagination: {
			el: ".cooperation__slider .swiper-pagination",
			type: "bullets",
		},
	});

	let arrGallery = document.querySelectorAll(".lightgallery");

	if (arrGallery.length > 0) {
		arrGallery.forEach((element) => {
			lightGallery(element, {
				plugins: [lgVideo],
				selector: ".lightgallery-item",
				speed: 500,
				zoomFromOrigin: false,
				mobileSettings: {
					controls: true,
				},
			});
		});
	}

	let tabContainers = Array.prototype.slice.call(document.querySelectorAll(".js-tab-container"));

	if (tabContainers.length > 0) {
		tabContainers.forEach((element) => {
			let tabItem = Array.prototype.slice.call(element.querySelectorAll(".js-tab-control"));
			let tabContent = Array.prototype.slice.call(element.querySelectorAll(".js-tab-content"));

			tabItem.forEach((el, index, array) => {
				el.addEventListener("click", (e) => {
					if (!el.classList.contains("active")) {
						e.preventDefault();

						let dataId = el.dataset.tabItem;

						let tabContentItem = tabContent.find((item) => {
							if (item.dataset.tabContent == dataId) {
								return item;
							} else {
								return null;
							}
						});

						if (tabContentItem != null) {
							tabItem.forEach((el) => el.classList.remove("active"));
							tabContent.forEach((el) => el.classList.remove("active"));

							el.classList.add("active");

							tabContentItem.classList.add("active");
						}
					}
				});
			});
		});
	}

	Inputmask({
		mask: "8 (Z99) 999-99-99",
		definitions: {
			Z: {
				validator: "[0-6,9]",
			},
		},
	}).mask('[type="tel"]');
});
