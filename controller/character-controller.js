const {
	characters,
	advantages,
	disadvantages,
	w_types,
	rarity,
	element,
	stories,
	stats,
	skills,
	icons,
	constellation,
	build,
	weap_build,
	artifact_build,
	weapons,
	artifacts,
	materials,
	MaterialsForCharacter,
	priority,
} = require("../models");

const addCharacter = async (req, res) => {
	try {
	} catch (error) {}
};

const getCharacters = async (req, res) => {
	try {
		await characters
			.findAll({
				where: {
					isHidden: 0,
				},
				order: [["fullname", "ASC"]],
				include: [
					{
						model: rarity,
						as: "rarity",
						attributes: ["name"],
					},
				],
			})
			.then((character) => {
				res.json(character);
			});
	} catch (error) {
		console.log(error);
	}
};

const getCharacterByTitle = async (req, res) => {
	try {
		await characters
			.findOne({
				where: {
					title: req.params.title,
				},
				separate: true,
				include: [
					{
						model: advantages,
						as: "advantages",
						attributes: ["id", "title"],
					},
					{
						model: disadvantages,
						as: "disadvantages",
						attributes: ["id", "title"],
					},
					{
						model: rarity,
						as: "rarity",
						attributes: ["id", "name"],
					},
					{
						model: element,
						as: "element",
						attributes: ["id", "name", "title"],
					},
					{
						model: w_types,
						as: "w_type",
						attributes: ["id", "body"],
					},
					{
						model: stories,
						as: "stories",
						attributes: ["id", "body", "title"],
					},
					{
						model: stats,
						separate: true,
						order: [["ascension", "asc"]],
						include: {
							model: MaterialsForCharacter,
							as: "MaterialsForCharacters",
							attributes: ["id", "quantity"],
							separate: true,
							include: [
								{
									model: materials,
									include: {
										model: rarity,
									},
								},
							],
						},
					},
					{
						model: skills,
						as: "skills",
						separate: true,
						include: {
							model: icons,
							as: "icon",
						},
					},
					{
						model: constellation,
						as: "constellations",
						separate: true,
						include: {
							model: icons,
							as: "icon",
						},
					},
					{
						model: build,
						as: "builds",
						attributes: ["id", "description", "characterId", "name"],
						separate: true,
						include: [
							{
								model: weap_build,
								as: "weap_builds",
								separate: true,
								include: [
									{
										model: weapons,
										as: "weapon",
										attributes: ["id", "title", "body"],
										include: {
											model: rarity,
											as: "rarity",
											attributes: ["id", "name"],
										},
									},
								],
							},
							{
								model: artifact_build,
								as: "artifact_builds",
								separate: true,
								include: [
									{
										model: artifacts,
										as: "artifact",
										attributes: ["id", "title", "body"],
										include: {
											model: rarity,
											as: "rarity",
											attributes: ["id", "name"],
										},
									},
								],
							},
							{
								model: priority,
								separate: true,
								attributes: ["id", "stat_1", "stat_2"],
								include: {
									model: icons,
								},
							},
						],
					},
				],
			})
			.then((character) => {
				res.json(character);
			});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addCharacter,
	getCharacterByTitle,
	getCharacters,
};
