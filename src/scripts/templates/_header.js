import dom from 'dom-template-strings';

export default function _header (id) {
    return dom`
<div id=${id}>
	<title></title>
	<div class="nav"></div>
</div>
`}