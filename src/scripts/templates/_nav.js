import dom from 'dom-template-strings';

export default function _nav (id) {
    return dom`
<nav id="${id}">
	<ul>
		<li><a href="home" class="nav-item home">Home</a></li>
		<li><a href="about" class="nav-item about">About</a></li>
		<li><a href="work" class="nav-item work">Work</a></li>
		<li><a href="#" class="nav-item education">Education</a></li>
		<li><a href="research" class="nav-item research">Research</a></li>
		<li><a href="contact" class="nav-item contact">Contact</a></li>
	</ul>
	
</nav>
`}