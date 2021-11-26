let hidden = document.getElementsByClassName('hidden')[0];
let hidden_btn = document.getElementsByClassName('hidden_btn')[0];
let navList = document.getElementsByClassName('navPan__nav_list')[0];

let tab1 = document.getElementsByClassName('features__tabs_tab')[0];
let tab2 = document.getElementsByClassName('features__tabs_tab')[1];
let tab3 = document.getElementsByClassName('features__tabs_tab')[2];

let tabDiv1 = document.getElementsByClassName('tabDiv')[0];
let tabDiv2 = document.getElementsByClassName('tabDiv')[1];
let tabDiv3 = document.getElementsByClassName('tabDiv')[2];

tab1.addEventListener('click', function(event) {
	tab1.classList.add('selected');
	tab2.classList.remove('selected');
	tab3.classList.remove('selected');
	tabDiv1.classList.add('selectedDiv');
	tabDiv2.classList.remove('selectedDiv');
	tabDiv3.classList.remove('selectedDiv');
});
tab2.addEventListener('click', function(event) {
	tab1.classList.remove('selected');
	tab3.classList.remove('selected');
	tab2.classList.add('selected');
	tabDiv2.classList.add('selectedDiv');
	tabDiv1.classList.remove('selectedDiv');
	tabDiv3.classList.remove('selectedDiv');
});
tab3.addEventListener('click', function(event) {
	tab3.classList.add('selected');
	tab2.classList.remove('selected');
	tab1.classList.remove('selected');
	tabDiv3.classList.add('selectedDiv');
	tabDiv2.classList.remove('selectedDiv');
	tabDiv1.classList.remove('selectedDiv');
});

document.addEventListener('click', function(event) {
	if(event.target != hidden_btn) {
		hide();
	};
});


hidden.style.display = 'none';
hidden_btn.style.display = 'none';

hidden_btn.addEventListener('click', show);
function hide(event) {
	hidden.style.display = 'none';
	hidden.classList.remove('hiddenListSlide');
	hidden_btn.addEventListener('click', show);
	hidden_btn.removeEventListener('click', hide);
};
function show(event) {
	hidden.style.display = 'block';
	hidden.classList.add('hiddenListSlide');
	hidden_btn.addEventListener('click', hide);
	hidden_btn.removeEventListener('click', show);
};


window.addEventListener('scroll', hide);


if(getComputedStyle(navList).display == 'none') {
	hidden_btn.style.display = 'inline-block';
} else {
	hidden_btn.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        if(getComputedStyle(navList).display == 'none') {
	hidden_btn.style.display = 'inline-block';
} else {
	hidden_btn.style.display = 'none';
}
    };
});