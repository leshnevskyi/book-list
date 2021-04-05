const bookProps = [
	{name: 'title'},
	{name: 'author'},
	{
		name: 'year',
		pattern: /^\d{4}$/,
		max: new Date().getFullYear(),
	},
	{
		name: 'pageCount',
		pattern: /^\d+$/,
	},
	{
		name: 'price',
		pattern: /^\d+(\.\d{2})?$/,
	},
];

function isBookValid(book) {
	for (const prop of bookProps) {
		if (!book.hasOwnProperty(prop.name)) return false;

		if (prop.hasOwnProperty('pattern')) {
			const patternMatches = prop.pattern?.test(book[prop.name]);

			if (!patternMatches) return false;
		}

		if (prop.hasOwnProperty('max')) {
			if (book[prop.name] >= prop.max) return false;
		}
	}

	return true;
}

function getValidBooks(books) {
	return books.filter(book => isBookValid(book));
}

export {
	bookProps,
	isBookValid,
	getValidBooks,
};