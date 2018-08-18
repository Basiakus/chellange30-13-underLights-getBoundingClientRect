const links = document.querySelectorAll('a');
const underliner = document.createElement('span');
const text = document.getElementById('text');

document.body.appendChild(underliner);
underliner.classList.add('underline');

function mouseOnLink() {

	const linkPositionProperty = this.getBoundingClientRect();
	console.log(linkPositionProperty);

	const linkProperty = {
		width: linkPositionProperty.width,
		height: linkPositionProperty.height,
		top: linkPositionProperty.top + window.scrollY,
		left: linkPositionProperty.left + window.scrollX
	}
	
	underliner.style.width = `${linkProperty.width}px`;
	underliner.style.height = `${linkProperty.height}px`;
	underliner.style.transform = `translate(${linkProperty.left}px, ${linkProperty.top}px)`;
}

links.forEach(link => {
	link.addEventListener('mouseenter', mouseOnLink);
})
