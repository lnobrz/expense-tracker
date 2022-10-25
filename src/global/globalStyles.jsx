import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #F5F5F5;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.titleInputLabel{
	grid-column: 1;
	grid-row: 1;
	@media (max-width: 600px){
		grid-column: auto;
	}
}

.titleInput{
	grid-column: 1 / 5;
	grid-row: 2;
	@media (max-width: 600px){
		grid-column: auto;
	}
}

.priceInputLabel{
	grid-column: 5;
	grid-row: 1;

	@media (max-width: 600px){
		grid-column: auto;
		grid-row: 3;
	}
}

.priceInput{
	grid-column: 5 / 9;
	grid-row: 2;

	@media (max-width: 600px){
		grid-column: auto;
		grid-row: 4;
	}
}

.dateInputLabel{
	grid-column: 1;
	grid-row: 3;

	@media (max-width: 600px){
		grid-column: auto;
		grid-row: 5;
	}
}

.dateInput{
	grid-column: 1 / 5;
	grid-row: 4;

	@media (max-width: 600px){
		grid-column: auto;
		grid-row: 6;
	}
}

.cancelButton{
	background-color: #F8F9FD !important;
	color: #272639 !important;
	grid-column: 9 / 11;
	grid-row: 5;

	@media (max-width: 840px) {
		grid-column: 7 / 10;
	}

	@media (max-width: 600px) {
		grid-column: auto;
		grid-row: 7;
		margin-top: 30px;
	}
}

.addButton{
	grid-column: 11 / 13;
	grid-row: 5;

	@media (max-width: 840px) {
		grid-column: 10 / 13;
	}

	@media (max-width: 600px) {
		grid-column: auto;
		grid-row: 8;
		margin: 5px;
	}
}

.newExpenseButton{
	grid-column: 5 / 9;
}
`;

export default GlobalStyle;
