import React from 'react';

it('Should have credits', () => {
	render();
	let element = React.createElement('a', {href: "https://github.com/russinnikolov"}, "Designed and Developed! by Rusin Nikolov");
	expect(document.querySelector(".ud-footer-bottom-right").toBe(element));
});