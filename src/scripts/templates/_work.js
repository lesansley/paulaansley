import dom from 'dom-template-strings';

export default function _work (id) {
    return dom`
<script id="${id}-list" type="text/x-handlebars-template">
	<div id="${id}">
		{{#${id}}}
			<div class="${id}-company row" aria-role="company"><a href={{url}} target="_blank"><h2>{{company}}</h2></a></div>
			<div class="${id}-role row" aria-role="role">{{role}}</div>
			<div class="row">
				<div class="${id}-dates one-half">
					<span class="${id}-startdate" aria-role="start date">{{startDate}}<span>&mdash;<span class="${id}-enddate" aria-role="end date">{{endDate}}<span>
				</div>
				<div class="${id}-location one-half" aria-role="location">{{location}}</div>
			</div>
			<div class="row">
				<span class="float-right">more</span><img src="">
			</div>
		{{/${id}}}
	</div>
</script>
`;}