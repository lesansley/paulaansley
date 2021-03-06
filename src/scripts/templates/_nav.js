import dom from 'dom-template-strings';

export default function _nav (id) {
    return dom`
<nav id="${id}">
	<div><a href="/home" class="nav-item home" data-navigo>Home</a></div>
	<div><a href="/about" class="nav-item about" data-navigo>About</a></div>
	<div><a href="/work" class="nav-item work" data-navigo>Work</a></div>
	<div><a href="/education" class="nav-item education" data-navigo>Education</a></div>
	<div><a href="/research" class="nav-item research" data-navigo>Research</a></div>
	<div><a href="/contact" class="nav-item contact" data-navigo>Contact</a></div>
</nav>
`}