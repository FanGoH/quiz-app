export const randomNumber = (topNumber: number): number =>
	Math.floor(Math.random() * topNumber) % topNumber;

export const shuffleArray = <T>(array: T[]): T[] => {
	const newArray: T[] = [];

	while (array.length !== 0) {
		newArray.push(array.splice(randomNumber(array.length), 1)[0]);
	}

	return newArray;
};
