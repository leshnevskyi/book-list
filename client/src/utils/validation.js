const bookProps = {
	title: {
		type: 'string',
		name: 'title',
	},
	author: {
		type: 'string',
		name: 'author'
	},
	year: {
		type: 'number',
		name: 'year',
		pattern: /^[1-9]\d*$/,
		max: new Date().getFullYear(),
	},
	pageCount: {
		type: 'number',
		name: 'pageCount',
		shortLabel: 'pages',
		label: 'number of pages',
		pattern: /^[1-9]\d*$/,
	},
	price: {
		type: 'number',
		name: 'price',
		pattern: /^\d+(\.\d{2})?$/,
	},
};

function isBookValid(book) {
	for (const prop of Object.values(bookProps)) {
		if (!book.hasOwnProperty(prop.name)) return false;

		if (prop.hasOwnProperty('pattern')) {
			const patternMatches = prop.pattern?.test(book[prop.name]);

			if (!patternMatches) return false;
		}

		if (prop.hasOwnProperty('max')) {
			if (book[prop.name] > prop.max) return false;
		}
	}

	return true;
}

function validateBook(book) {
	if (isBookValid(book)) return true;

	console.error(`Book data is not valid`, book);

	return false;
}

function getValidBooks(books) {
	return books.filter(book => validateBook(book));
}

function normalizeBookData(data) {
	const normalizedData = {};

	for (const propKey in bookProps) {
		const prop = bookProps[propKey];
		let value = data[propKey];

		if (prop.type === 'number') value = Number(value);

		normalizedData[propKey] = value;
	}

	return normalizedData;
}

export {
	bookProps,
	isBookValid,
	getValidBooks,
	normalizeBookData,
};