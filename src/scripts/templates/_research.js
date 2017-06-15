import dom from 'dom-template-strings';

export default function _research (id) {
    return dom`
<div id="${id}">
	<h2>Journals</h2>
	<div class="journals">
		<ul></ul>
	</div>
	<h2>Book Chapters</h2>
	<div class="books">
		<ul></ul>
	</div>
</div>
`;}