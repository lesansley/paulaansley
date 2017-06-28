import dom from 'dom-template-strings';

export default function _footer (id) {
    return dom`
<script id="${id}-list" type="text/x-handlebars-template">
	<div id="${id}">
		<ul>
		{{#contact}}
			<li class="${id}-item" aria-role="listitem"><a href="{{href}}" target="_blank"><img alt="{{type}}" url={{icon}}></a></li>
		{{/contact}}
		</ul>
	</div>
</script>
`;}