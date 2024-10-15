type journey = {
	metadata: {
		title: string;
		month?: string;
		image?: string;
	};
	default: ConstructorOfATypedSvelteComponent;
};

export const load = async () => {
	const data = import.meta.glob('/journey/*/*.md', { eager: true });

	const years = Object.keys(data)
		.map((path) => path.match(/\/(\d{4})\//)?.[1])
		.filter((year): year is string => year !== null)
		.map((year) => Number(year))
		.sort((a, b) => b - a);

	const journeyByYear: {
		[year: string]: journey[];
	} = {};

	years.forEach((year) => {
		const paths = Object.keys(data).filter((path) => path.includes(`/${year}/`));
		journeyByYear[year.toString()] = paths.map((path) => data[path]) as journey[];
	});

	for (const year in journeyByYear) {
		if (Array.isArray(journeyByYear[year])) {
			journeyByYear[year].reverse();
		}
	}

	return {
		years: [...new Set(years)],
		journeyByYear
	};
};
