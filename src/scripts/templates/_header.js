import dom from 'dom-template-strings';

export default function _header (id) {
    return dom`
<div id="${id}">
	<div class="name"><h1>Paula Ansley</h1></div>
	<div class="nav"></div>
</div>
`}