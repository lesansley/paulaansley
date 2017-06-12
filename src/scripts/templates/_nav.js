import dom from 'dom-template-strings';

export default function _nav (id) {
    return dom`
<nav id="${id}">
	<ul>
		<li><a href="/home" class="nav-item home" data-navigo>Home</a></li>
		<li><a href="/about" class="nav-item about" data-navigo>About</a></li>
		<li><a href="/work" class="nav-item work" data-navigo>Work</a></li>
		<li><a href="/education" class="nav-item education" data-navigo>Education</a></li>
		<li><a href="/research" class="nav-item research" data-navigo>Research</a></li>
		<li><a href="/contact" class="nav-item contact" data-navigo>Contact</a></li>
	</ul>
</nav>
`}