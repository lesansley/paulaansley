import dom from 'dom-template-strings';

export default function _publications (id) {
    return dom`
<script id="${id}-list" type="text/x-handlebars-template">
	<div id="${id}">
		<ul>
		{{#${id}}}
			<li class="${id}-item" aria-role="listitem">{{uid}}</li>
		{{/${id}}}
		</ul>
	</div>
</script>
`;}