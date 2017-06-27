import dom from 'dom-template-strings';

export default function _reviews (id) {
    return dom`
<script id="handlebars" type="text/x-handlebars-template">
	<div id="${id}">
		<ul>
			{{#reviews}}

			{{/reviews}}
		</ul>
	</div>
</script>
`;}