import dom from 'dom-template-strings';

export default function _home (id) {
    return dom`
<div id="${id}">
	<div>
		<div class="quote"></div>
		<div class="author"></div>
	</div>
	
</div>
`;}