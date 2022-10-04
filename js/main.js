const picList = document.querySelector('.frame ul');
const txtList = document.querySelector('.txt ul');
const bgList = document.querySelector('.bg ul');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const frames = [picList, txtList, bgList];
const speed = 500;

for (const el of frames) el.style.marginLeft = '-100%';

btnNext.addEventListener('click', (e) => {
	e.preventDefault();

	for (const el of frames) {
		new Anime(el, {
			prop: 'margin-left',
			value: '-200%',
			duration: speed,
			callback: () => {
				el.append(el.firstElementChild);
				el.style.marginLeft = '-100%';
			},
		});
	}
});

btnPrev.addEventListener('click', (e) => {
	e.preventDefault();

	for (const el of frames) {
		new Anime(el, {
			prop: 'margin-left',
			value: '0%',
			duration: 500,
			callback: () => {
				el.prepend(el.lastElementChild);
				el.style.marginLeft = '-100%';
			},
		});
	}
});
