import dom from 'dom-template-strings';

export default function _basepage (id) {
    return dom`
<div id=${id}>
	<header></header>
	<nav></nav>
	<main></main>
	<footer></footer>
</div>
`}