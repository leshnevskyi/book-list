const sortObjects = (array, sorting) => {
	if (!array.length) return array;

	let sortedArray;
	const field = sorting.by;
	const order = sorting.order;

	if (typeof array[0][field] === 'number') {
		sortedArray = [...array].sort((firstBook, secondBook) => {
			return firstBook[field] - secondBook[field];
		});
	} else if (typeof array[0][field] === 'string') {
		sortedArray = [...array].sort((firstEl, secondEl) => {
			const firstValue = firstEl[field].toUpperCase();
			const secondValue = secondEl[field].toUpperCase();

			if (firstValue < secondValue) return -1;

			if (firstValue > secondValue) return 1;
		
			return 0;
		});
	}

	if (order === 'desc') sortedArray.reverse();

	return sortedArray;
}

export {
	sortObjects,
};