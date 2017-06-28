import dom from 'dom-template-strings';

export default function _education (id) {
    return dom`
<script id="${id}-list" type="text/x-handlebars-template">
	<div id="${id}">
		<ul>
		{{#${id}}}
			<li class="${id}-item" aria-role="listitem">{{name}}</li>
		{{/${id}}}
		</ul>
	</div>
</script>
`;}