import dom from 'dom-template-strings';

export default function _contact (id) {
    return dom`
<script id="${id}-list" type="text/x-handlebars-template">
	<div id="${id}" class="row flex-wrap">
		<div class="one-half flex-wrap">
			<img class="img-responsive" src="images/paula_at_window_full.jpg">
		</div>
		<div class="one-half flex-wrap">
			<div>I would be delighted to hear from you on any of these media</div>
			<ul>
			{{#${id}}}
				<li class="${id}-item" aria-role="listitem"><a href="{{href}}" target="_blank"><img alt="{{type}}" url={{icon}}></a>{{uid}}</li>
			{{/${id}}}
			</ul>
		</div>
	</div>
</script>
`;}