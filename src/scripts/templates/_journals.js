import dom from 'dom-template-strings';

export default function _journals (id) {
    return dom`
<script id="handlebars" type="text/x-handlebars-template">
	<div id="${id}">
		<ul>
			{{#journals}}

			{{/journals}}
		</ul>
	</div>
</script>
`;}