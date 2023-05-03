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

	if (scrollTop >= fixHeight) {
		sidebarContent.style.transform = `translateY(-${fixHeight + 50}px)`;
		sidebarContent.style.position = 'fixed';
		sidebarContent.style.paddingRight = '200px';
		sidebarContent.style.marginRight = '200px';
	} else {
		sidebarContent.style.transform = '';
		sidebarContent.style.position = '';
		sidebarContent.style.paddingRight = '';
		sidebarContent.style.marginRight = '';
	}
}

export { setNavBarOnScroll, setSideBarOnScroll };
