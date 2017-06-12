import dom from 'dom-template-strings';

export default function _research (id) {
    return dom`
<div id="${id}">
	<div class='journals'></div>
	<div class='books'></div>
</div>
`;}