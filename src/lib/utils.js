export const getYearProgress = () => {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 1);
	const diff = now.getTime() - start.getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay);
	return Math.round((dayOfYear / 365) * 100);
};

export const getRandomQuote = () => {
	const quotes = ["Dreams don't work unless you do.", 'Every great dream begins with a dreamer.'];
	return quotes[Math.floor(Math.random() * quotes.length)];
};
