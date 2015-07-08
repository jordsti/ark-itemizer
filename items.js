var itemStats = [
	{"id": 1, "name": "Type"},
	{"id": 2, "name": "Armor"},
	{"id": 3, "name": "Hypothermal Insulation"},
	{"id": 4, "name": "Hyperthermal Insulation"},
	{"id": 5, "name": "Durability"},
	{"id": 6, "name": "Weapon Damage"},
	{"id": 7, "name": "Health"},
	{"id": 8, "name": "Food"},
	{"id": 9, "name": "Spoils"},
	{"id": 10, "name": "Torpor"},
	{"id": 11, "name": "Water"},
	{"id": 12, "name": "Stamina"},
	{"id": 13, "name": "Cooldown"}
];

var items = [
	{
		"name": "Bow",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 5,
		"description": "A ranged weapon that can fire Stone Arrows or Tranquilizer Arrows upgrade requires Slingshot engram.",
		"image": "bow.png",
		"weight": 8,
		"recipe": [
			{"itemId": 7, "count": 15},
			{"itemId": 76, "count": 50}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 50},
			{"id": 6, "value": "60 (fully charged), 26 (minimum charge)"}
		]
		},
	{
		"name": "Wood",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 7,
		"description": "Cut from trees.",
		"image": "wood.png",
		"weight": 0.5,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Stone",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 8,
		"description": "Mined from rocks.",
		"image": "stone.png",
		"weight": 0.5,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Metal",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 9,
		"description": "Mined from certain rocks, usually found high on mountains, in caves, rivers, or deep water sources. Can be refined in a forge or used on machines like the lathe.",
		"image": "metal.png",
		"weight": 1.0,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Hide",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 10,
		"description": "Thick skin, hacked from most dead animals.",
		"image": "hide.png",
		"weight": 0.01,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Chitin",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 11,
		"description": "This firm, flexible material makes up exoskeletons. Hacked primarily from dead insects.",
		"image": "chitin.png",
		"weight": 0.01,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Raw Meat",
		"maxStack": 20,
		"decomposes": 120,
		"itemId": 12,
		"description": "Eating raw food will sate hunger, but is unhealthy for humans. Most wild carnivores prefer raw meat to Cooked Meat.",
		"image": "raw_meat.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "-5"},
			{"id": 8, "value": "+10"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Spoiled Meat",
		"maxStack": 100,
		"decomposes": 3600,
		"itemId": 13,
		"description": "?",
		"image": "spoiled_meat.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "-12"},
			{"id": 8, "value": "+3.5"},
		]
		},
	{
		"name": "Cooked Meat",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 14,
		"description": "Sates your hunger and provides health while being digested. Wild carnivores will eat it, but prefer raw meat.",
		"image": "cooked_meat.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 12, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+5"},
			{"id": 12, "value": "+0.5"},
			{"id": 8, "value": "+20"},
			{"id": 9, "value": "20:00"}
		]
		},
	{
		"name": "Cloth Pants",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 17,
		"description": "Provides some protection from the heat and cold, but only minimal protection from injuries. Required skill to learn Hide Pants",
		"image": "cloth_pants.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":50}
		],
		"stats": [
			{"id": 1, "value": "Legs"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 8.0},
			{"id": 4, "value": 15.0}
		]
		},
	{
		"name": "Cloth Shirt",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 18,
		"description": "Provides some protection from the heat and cold, but only minimal protection from injuries. Required skill to learn Hide Shirt and other advanced armor.",
		"image": "cloth_shirt.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":40}
		],
		"stats": [
			{"id": 1, "value": "Chest"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 8.0},
			{"id": 4, "value": 15.0}
		]
		},
	{
		"name": "Cloth Hat",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 19,
		"description": "Provides some protection from the heat and cold, but only minimal protection from injuries. Required skill for Hide Hat and other advanced armor.",
		"image": "cloth_hat.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Head"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 4.0},
			{"id": 4, "value": 10.0}
		]
		},
	{
		"name": "Cloth Boots",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 20,
		"description": "Hide-soles shoes provide some protection from the heat and cold, but only minimal protection from injuries.",
		"image": "cloth_boots.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":25},
			{"itemId":10, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 5.0},
			{"id": 4, "value": 10.0}
		]
		},
	{
		"name": "Cloth Gloves",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 21,
		"description": "Hide-padded gloves provide some protection from the heat and cold, but only minimal protection from injuries.",
		"image": "cloth_gloves.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":20},
			{"itemId":10, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Hands"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 5.0},
			{"id": 4, "value": 10.0}
		]
		},
	{
		"name": "Hide Pants",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 22,
		"description": "Keeps you warm while providing some physical protection. Requires Cloth Pants Engram as well.",
		"image": "hide_pants.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":25},
			{"itemId":76, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Legs"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 20},
			{"id": 4, "value": -15.0}
		]
		},
	{
		"name": "Hide Shirt",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 23,
		"description": "Keeps you warm while providing some protection. Requires Cloth Shirt engram as well.",
		"image": "hide_shirt.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":20},
			{"itemId":76, "count":8}
		],
		"stats": [
			{"id": 1, "value": "Chest"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 20},
			{"id": 4, "value": -15.0}
		]
		},
	{
		"name": "Hide Hat",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 24,
		"description": "Keeps you warm while providing some physical protection.",
		"image": "hide_hat.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":15},
			{"itemId":76, "count":6}
		],
		"stats": [
			{"id": 1, "value": "Head"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 15},
			{"id": 4, "value": -10.0}
		]
		},
	{
		"name": "Hide Boots",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 25,
		"description": "Keeps you warm while provides some physical protection.",
		"image": "hide_boots.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":12},
			{"itemId":76, "count":5}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 15},
			{"id": 4, "value": -10.0}
		]
		},
	{
		"name": "Hide Gloves",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 26,
		"description": "Keeps you warm while providing some physical protection.",
		"image": "hide_gloves.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":10},
			{"itemId":76, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 15},
			{"id": 4, "value": -10.0}
		]
		},
	{
		"name": "Stone Arrow",
		"maxStack": 50,
		"decomposes": -1,
		"itemId": 32,
		"description": "An arrow for the Bow.",
		"image": "stone_arrow.png",
		"weight": -1,
		"recipe": [
			{"itemId":75, "count":2},
			{"itemId":76, "count":2},
			{"itemId":73, "count":1}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"}
		]
		},
	{
		"name": "Stone Pick",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 33,
		"description": "A large stone pick for harvesting primarily flint from rocks, thatch from trees, and raw meat from bodies.",
		"image": "stone_pick.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":8, "count":1},
			{"itemId":7, "count":1},
			{"itemId":75, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 17.3}
		]
		},
	{
		"name": "Stone Hatchet",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 34,
		"description": "A sharp flint hatchet for harvesting wood from trees, stone from rocks, and skin from bodies.",
		"image": "stone_hatchet.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":73, "count":1},
			{"itemId":7, "count":1},
			{"itemId":75, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 21.8}
		]
		},
	{
		"name": "Torch",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 37,
		"description": "Provides light, and some warmth. Doubles as a melee weapon in a pinch.",
		"image": "torch.png",
		"weight": 1.0,
		"recipe": [
			{"itemId":73, "count":1},
			{"itemId":7, "count":1},
			{"itemId":8, "count":1}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": "100%"}
		]
		},
	{
		"name": "Paintbrush",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 38,
		"description": "Apply a dye to this, then swing it at structures to paint them.",
		"image": "paintbrush.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":7, "count":1},
			{"itemId":10, "count":3},
			{"itemId":75, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
	{
		"name": "Campfire",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 39,
		"description": "Perfect for cooking meat, staying warm, and providing light.",
		"image": "campfire.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":75, "count":12},
			{"itemId":73, "count":1},
			{"itemId":8, "count":16},
			{"itemId":7, "count":2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100},
		]
		},
	{
		"name": "Standing Torch",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 40,
		"description": "A torch on a small piece of wood that lights and warms the immediate area.",
		"image": "standing_torch.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":75, "count":8},
			{"itemId":73, "count":1},
			{"itemId":8, "count":1},
			{"itemId":7, "count":3}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500},
		]
		},
	{
		"name": "Hide Sleeping Bag",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 41,
		"description": "This hide sleeping bag acts as a single-use respawn point, only usable by you.",
		"image": "hide_sleeping_bag.png",
		"weight": 10.0,
		"recipe": [
			{"itemId": 10, "count": 25},
			{"itemId":76, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
		]
		},
	{
		"name": "Blood Extraction Syringe",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 44,
		"description": "Use this on a human to extract their blood for transfusion.",
		"image": "blood_extraction_syringe.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count": 10},
			{"itemId":11, "itemId2": 217,"count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
		]
		},
	{
		"name": "Blood Pack",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 45,
		"description": "Use this to replace lost blood. Restores Health over time.",
		"image": "blood_pack.png",
		"weight": 0.3,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "15 over 2 seconds"},
			{"id": 13, "value": "40 seconds"}
		]
		},
	{
		"name": "Waterskin",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 47,
		"description": "Goods to keep you hydrated, but slowly leaks water.",
		"image": "waterskin.png",
		"weight": 03,
		"recipe": [
			{"itemId":10, "count":4},
			{"itemId":76, "count":12}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 11, "value": "100 or less"},
		]
		},
	{
		"name": "Spear",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 57,
		"description": "An easily made melee weapon that can also be thrown. Has a chance to break when used.",
		"image": "spear.png",
		"weight": 3.0,
		"recipe": [
			{"itemId":73, "count":2},
			{"itemId":7, "count":8},
			{"itemId":76, "count":12}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": "None (randomly breaks on melee attack)"},
			{"id": 6, "value": 30}
		]
		},
	{
		"name": "Tranquilizer Arrow",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 70,
		"description": "An arrow with lower damage but slows down the prey by increasing the prey's torpor.",
		"image": "tranquilizer_arrow.png",
		"weight": 0.2,
		"recipe": [
			{"itemId": 32, "count": 1},
			{"itemId": 123, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"},
			{"id": 10, "value": "+97 over time (3-5 seconds)"}
		]
		},
	{
		"name": "Flint",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 73,
		"description": "Ferroceric flint that holds an edge better than regular stone.",
		"image": "flint.png",
		"weight": 0.05,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Metal Ingot",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 74,
		"description": "Created by refining metal ore in a forge.",
		"image": "metal_ingot.png",
		"weight": 1.00,
		"recipe": [
			{"itemId": 9, "count": 2}
		],
		"stats": []
		},
	{
		"name": "Thatch",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 75,
		"description": "Sticks torn from trees. Useful for primitive buildings.",
		"image": "thatch.png",
		"weight": -1,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Fiber",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 76,
		"description": "Delicately collected strands of plant. Perfect for making thread, cloth or rope.",
		"image": "fiber.png",
		"weight": 0.001,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Charcoal",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 77,
		"description": "Created by burning wood.",
		"image": "charcoal.png",
		"weight": 0.25,
		"recipe": [
			{"itemId": 7, "count": 1}
		],
		"stats": []
		},
	{
		"name": "Crystal",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 78,
		"description": "This strange crystalline material can be shaped into lenses, used as an electronics component, or mixed into powerful explosives.",
		"image": "crystal.png",
		"weight": 1.0,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Thatch Roof",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 79,
		"description": "A thatched roof to protect you from the elements. Not stable enough to build on.",
		"image": "thatch_roof.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 75, "count": 15},
			{"itemId": 7, "count": 4},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1600}
		]
		},
	{
		"name": "Thatch Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 80,
		"description": "Enough sticks bundled together works as a simple door. Can be locked for security but not very strong.",
		"image": "thatch_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1600}
		]
		},
	{
		"name": "Thatch Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 81,
		"description": "A foundation is required to build structures. This on is a wooden frame with some smooth bundles of sticks that act as a floor.",
		"image": "thatch_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 75, "count": 20},
			{"itemId": 7, "count": 6},
			{"itemId": 76, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2400}
		]
		},
	{
		"name": "Thatch Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 82,
		"description": "A simple wall made of bundled sticks, and stabilized by a wooden frame. Fairly fragile, but better than nothing.",
		"image": "thatch_wall.png",
		"weight": 2.0,
		"recipe": [
			{"itemId": 75, "count": 10},
			{"itemId": 7, "count": 2},
			{"itemId": 76, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1600}
		]
		},
	{
		"name": "Thatch Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 83,
		"description": "This thatch wall has entrance in it, but requires more wood to stay stable.",
		"image": "thatch_doorframe.png",
		"weight": 2.0,
		"recipe": [
			{"itemId": 75, "count": 8},
			{"itemId": 7, "count": 6},
			{"itemId": 76, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2400}
		]
		},
	{
		"name": "Wooden Catwalk",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 84,
		"description": "A thin walkway for bridging areas together. Made from sturdy wood.",
		"image": "wooden_catwalk.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 20},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Ceiling",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 85,
		"description": "A stable wooden ceiling that insulates the inside from the outside, and doubles as a floor for higher levels.",
		"image": "wooden_ceiling.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 60},
			{"itemId": 75, "count": 15},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},	
	{
		"name": "Wooden Hatchframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 86,
		"description": "A wooden ceiling with a hole in it for trapdoors.",
		"image": "wooden_hatchframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 50},
			{"itemId": 75, "count": 12},
			{"itemId": 76, "count": 8}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 87,
		"description": "A stable wooden door that provides entrance to structures. Can be locked for security.",
		"image": "wooden_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 20},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 88,
		"description": "A foundation is required to build structures in an area. This one is made from sturdy wood.",
		"image": "wooden_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 80},
			{"itemId": 75, "count": 20},
			{"itemId": 76, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 15000}
		]
		},
	{
		"name": "Wooden Ladder",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 89,
		"description": "A simple wooden ladder used to climb up or down tall structures. Can also be used to extend existing ladders.",
		"image": "wooden_ladder.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 4},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 3125}
		]
		},
	{
		"name": "Wooden Pillar",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 90,
		"description": "Adds structural integrity to the area it is built on. Can also act as stilts for buildings on inclines. works well with wooden hatch frame for a base foundation.",
		"image": "wooden_pillar.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 40},
			{"itemId": 75, "count": 10},
			{"itemId": 76, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Ramp",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 91,
		"description": "An inclined wooden floor for travelling up or down. Can also be used to make an angled roof.",
		"image": "wooden_ramp.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 60},
			{"itemId": 75, "count": 15},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},	
	{
		"name": "Wooden Trapdoor",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 92,
		"description": "This small wooden door can be used to secure hatches.",
		"image": "wooden_trapdoor.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 20},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 93,
		"description": "A sturdy wooden wall that insulates the inside from the outside, separates rooms, and provides structural integrity.",
		"image": "wooden_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 40},
			{"itemId": 75, "count": 10},
			{"itemId": 76, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 94,
		"description": "A wooden wall that provides entrance to a structure.",
		"image": "wooden_doorframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 30},
			{"itemId": 75, "count": 8},
			{"itemId": 76, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Windowframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 95,
		"description": "A wooden wall with a hole for a window.",
		"image": "wooden_windowframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 36},
			{"itemId": 75, "count": 9},
			{"itemId": 76, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Window",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 96,
		"description": "Wooden beams on hinges that cover windows to provide protection from projectiles and spying.",
		"image": "wooden_window.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 8},
			{"itemId": 75, "count": 2},
			{"itemId": 76, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Sign",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 97,
		"description": "A simple wooden sign for landmark navigation or relaying messages.",
		"image": "wooden_sign.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 5},
			{"itemId": 75, "count": 3},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Mortar And Pestle",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 107,
		"description": "This simple stone contraption can be used to grind resources into new substances.",
		"image": "mortar_and_pestle.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8, "count": 65},
			{"itemId": 10, "count": 15}
		],
		"stats": [
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Sparkpowder",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 108,
		"description": "Created by grinding flint with stone in a Mortar and Pestle.",
		"image": "sparkpowder.png",
		"weight": 1.0,
		"recipe": [
			{"itemId": 8, "count": 2},
			{"itemId": 73, "count": 1}
		],
		"stats": []
		},
	{
		"name": "Gunpowder",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 109,
		"description": "An explosive propellant. Necessary for any firearm or explosive.",
		"image": "gunpowder.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 108, "count": 1},
			{"itemId": 77, "count": 1}
		],
		"stats": []
		},
	{
		"name": "Narcoberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 121,
		"description": "This fairly common black berry makes you sleepy when you eat it. Bitter, but can be used to make black dye.",
		"image": "narcoberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+4.0"},
			{"id": 11, "value": 0},
			{"id": 10, "value": "+7.5"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Stimberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 122,
		"description": "This fairly common white berry can be eaten in a pinch to recover food, stamina, and lose torpidity, but it will dehydrate you. Bitter, but can be used to make white dye.",
		"image": "stimberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.0"},
			{"id": 11, "value": "-10.0"},
			{"id": 10, "value": "-10.5"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Narcotic",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 123,
		"description": "Increases your health, but puts you to sleep.",
		"image": "narcotic.png",
		"weight": 0.3,
		"recipe": [
			{"itemId": 121, "count": 5},
			{"itemId": 13, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 10, "value": "+40"}
		]
		},
	{
		"name": "Stimulant",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 124,
		"description": "Keeps you awake, but dehydrates you.",
		"image": "stimulant.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 122, "count": 5},
			{"itemId": 108, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 10, "value": "-40"}
		]
		},
	{
		"name": "Refining Forge",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 125,
		"description": "Requires wood, thatch, or sparkpowder to activate. Put unrefined resources in this to refine them.",
		"image": "refining_forge.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8, "count": 125},
			{"itemId": 73, "count": 5},
			{"itemId": 10, "count": 65},
			{"itemId": 7, "count": 20},
			{"itemId": 76, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2500}
		]
		},
	{
		"name": "Smithy",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 126,
		"description": "Place materials along with blueprints in this to create certain advanced forged items.",
		"image": "smithy.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 5},
			{"itemId": 7, "count": 30},
			{"itemId": 10, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2500}
		]
		},
	{
		"name": "Cementing Paste",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 146,
		"description": "Paste created at Mortar and Pestle.",
		"image": "cementing_paste.png",
		"weight": -1,
		"recipe": [
			{"itemId":8, "count":8},
			{"itemId":11, "itemId2":217, "count":4}
		],
		"stats": []
		},
	{
		"name": "Oil",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 162,
		"description": "A thick blob of unrefined oil. Can be refined with hide to make gasoline.",
		"image": "oil.png",
		"weight": 1.0,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Fabricator",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 185,
		"description": "Place materials along with blueprints in this to create certain high-end machined items.",
		"image": "fabricator.png",
		"weight": 500.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146,"count": 20},
			{"itemId": 108,"count": 50},
			{"itemId": 78,"count": 15},
			{"itemId": 162,"count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2500}
		]
		},
	{
		"name": "Keratin",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 217,
		"description": "A firm, flexible material. Can be found in some animal horns, plates, shells, and ridges.",
		"image": "keratin.png",
		"weight": 0.01,
		"recipe": [],
		"stats": []
		},
]
