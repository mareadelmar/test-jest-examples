const cities = [
	"Ciudad de México",
	"Rosario",
	"Quito",
	"Lima",
	"Asunción",
	"Río de Janeiro",
];

const randomCity = () => {
	const string = cities[Math.floor(Math.random() * cities.length)];
	return string;
};

module.exports = randomCity;
