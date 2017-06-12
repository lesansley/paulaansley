import dom from 'dom-template-strings';

export default function _header (id) {
    return dom`
<div id="${id}">
	<div class="name">Paula Ansley</div>
	<div class="nav"></div>
</div>
`}