let hidden = document.getElementsByClassName('hidden')[0];
let hidden_btn = document.getElementsByClassName('hidden_btn')[0];
let navList = document.getElementsByClassName('navPan__nav_list')[0];

hidden.style.display = 'none';
hidden_btn.style.display = 'none';

hidden_btn.addEventListener('click', show);
function hide(event) {
	hidden.style.display = 'none';
	hidden_btn.addEventListener('click', show);
	hidden_btn.removeEventListener('click', hide);
};
function show(event) {
	hidden.style.display = 'block';
	hidden_btn.addEventListener('click', hide);
	hidden_btn.removeEventListener('click', show);
};


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