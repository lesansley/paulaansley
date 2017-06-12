import dom from 'dom-template-strings';

export default function _basepage (id) {
    return dom`
<div id="${id}">
	<header></header>
	<main class="page"></main>
	<footer></footer>
</div>
`}