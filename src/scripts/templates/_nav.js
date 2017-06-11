import dom from 'dom-template-strings';

export default function _nav (id) {
    return dom`
<div id=${id}>
	<div href="home" class="nav-item home" data-navigo>Home</div>
	<div href="about" class="nav-item about" data-navigo>About</div>
	<div href="work" class="nav-item work" data-navigo>Work</div>
	<div href="education" class="nav-item education" data-navigo>Education</div>
	<div href="research" class="nav-item research" data-navigo>Research</div>
	<div href="contact" class="nav-item contact" data-navigo>Contact</div>
</div>
`}