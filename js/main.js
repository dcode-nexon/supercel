const picList = document.querySelector('.frame ul');
const txtList = document.querySelector('.txt ul');
const bgList = document.querySelector('.bg ul');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const frames = [picList, txtList, bgList];

for (const el of frames) el.style.marginLeft = '-100%';

btnNext.addEventListener('click', (e) => {
	e.preventDefault();

	new Anime(picList, {
		prop: 'margin-left',
		value: '-200%',
		duration: 500,
		callback: () => {
			picList.append(picList.firstElementChild);
			picList.style.marginLeft = '-100%';
		},
	});
});

btnPrev.addEventListener('click', (e) => {
	e.preventDefault();

	new Anime(picList, {
		prop: 'margin-left',
		value: '0%',
		duration: 500,
		callback: () => {
			console.log(picList.lastElementChild);
			picList.prepend(picList.lastElementChild);
			picList.style.marginLeft = '-100%';
		},
	});
});
