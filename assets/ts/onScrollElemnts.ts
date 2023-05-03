async function setNavBarOnScroll() {
	const headerNavbar = document.querySelector('.navbar-area');
	const sticky = headerNavbar.offsetTop;
	if (window.scrollY > sticky) {
		headerNavbar.classList.add('sticky');
	} else {
		headerNavbar.classList.remove('sticky');
	}
}

async function setSideBarOnScroll() {
	// Sidebar Sticky
	let sidebarContent = document.getElementsByClassName('sidebar-single')[0];

	let scrollTop = window.scrollY;
	let fixHeight =
		sidebarContent.getBoundingClientRect().height - window.innerHeight;

	if (scrollTop - 200 >= fixHeight) {
		sidebarContent.style.top = `-20px`;
		sidebarContent.style.position = 'fixed';
		sidebarContent.style.marginRight = '100px';
	} else {
		sidebarContent.style.top = '';
		sidebarContent.style.position = '';
		sidebarContent.style.marginRight = '';
	}
}

export { setNavBarOnScroll, setSideBarOnScroll };
