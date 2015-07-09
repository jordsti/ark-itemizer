//ARK Item Database
// Data coming from : http://ark.gamepedia.com/
// and http://www.arkchives.com/
// all items and in the array "ark_items"
// each items contains these attributes
//		name : Item Name
//		maxStack : Maximum item per stack
//		decomposes : Time before the item diseappear
//		itemId : ARK item Id
//		description : Item Description
//		image : Image name
//		weight : Item Weight
//		recipe : list of ingredients to craft the item
//			each ingredients must contain
//				itemId : item of the ingredient
//				itemId2 : (Optional) second item id of the ingredient (for item that need Chitin/Keratin)
//				count : count of items needed
//		stats : list of item stat
//			id : Stat ID
//			value : Stat Value

var ark_itemsVersion = {
	itemizer: 0,
	ark: {major: 184, minor: 0}
};

var ark_itemStats = [
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

var ark_items = [
	{
		"name": "Simple Pistol",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 1,
		"description": "This simple revolver trades accuracy for flexibility.",
		"image": "simple_pistol.png",
		"weight": 5,
		"recipe": [
			{"itemId": 74, "count": 60},
			{"itemId": 7, "count": 5},
			{"itemId": 10, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 42.6}
		]
		},
	{
		"name": "Assault Rifle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 2,
		"description": "The fastest way to fill a target with holes.",
		"image": "assault_rifle.png",
		"weight": 10,
		"recipe": [
			{"itemId": 166, "count": 60},
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 50}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 30}
		]
		},
	{
		"name": "Rocket Launcher",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 3,
		"description": "Mankind's ultimate portable killing device.",
		"image": "rocket_launcher.png",
		"weight": 20,
		"recipe": [
			{"itemId": 166, "count": 80},
			{"itemId": 74, "count": 50},
			{"itemId": 146, "count": 60}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 50},
			{"id": 6, "value": "149 (direct hit)"}
		]
		},
	{
		"name": "Simple Bullet",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 4,
		"description": "Primarily used with forged handguns.",
		"image": "simple_bullet.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 1},
			{"itemId": 109, "count": 3}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"}
		]
		},
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
		"name": "Grenade",
		"maxStack": 10,
		"decomposes": 120,
		"itemId": 6,
		"description": "Pulling the pin starts a 5 second timer to an explosion. Make sure you've thrown it by then.",
		"image": "grenade.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 76, "count": 15},
			{"itemId": 8, "count": 20},
			{"itemId": 109, "count": 30},
			{"itemId": 10, "count": 5},
			{"itemId": 74, "count": 2},
			{"itemId": 162, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 750}
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
		"name": "Water Jar",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 15,
		"description": "Safely carries a lot of water, but is also a bit heavy.",
		"image": "water_jar.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 146, "count": 15},
			{"itemId": 10, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 11, "value": "+150"},
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
		"name": "Chitin Leggings",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 27,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_leggings.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":25},
			{"itemId":10, "count":12},
			{"itemId":76, "count":5}
		],
		"stats": [
			{"id": 1, "value": "Legs"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Chestpiece",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 28,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_chestpiece.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":20},
			{"itemId":10, "count":10},
			{"itemId":76, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Chest"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Helmet",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 29,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_helmet.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":15},
			{"itemId":10, "count":7},
			{"itemId":76, "count":3}
		],
		"stats": [
			{"id": 1, "value": "Head"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Boots",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 30,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_boots.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":12},
			{"itemId":10, "count":6},
			{"itemId":76, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Gauntlets",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 31,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_gauntlets.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":10},
			{"itemId":10, "count":5},
			{"itemId":76, "count":2}
		],
		"stats": [
			{"id": 1, "value": "Hands"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Stone Arrow",
		"maxStack": 50,
		"decomposes": 120,
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
		"decomposes": 120,
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
		"decomposes": 120,
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
		"name": "Metal Pick",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 35,
		"description": "A sharp metal pick for harvesting metal from mountain rocks, flint from rocks, and meat from bodies.",
		"image": "metal_pick.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":74, "count":1},
			{"itemId":7, "count":1},
			{"itemId":10, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 160},
			{"id": 6, "value": 34.3}
		]
		},
	{
		"name": "Metal Hatchet",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 36,
		"description": "A sharp metal hatchet for harvesting wood from trees, stone from rocks, and skin from bodies.",
		"image": "metal_hatchet.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":74, "count":8},
			{"itemId":7, "count":1},
			{"itemId":10, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 41.4}
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
		"name": "C4 Remote Detonator",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 42,
		"description": "This device uses radio waves to detonate primed C4 packages on the same frequency.",
		"image": "c4_remote_detonator.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 166, "count": 20},
			{"itemId": 165, "count": 50},
			{"itemId": 78, "count": 10},
			{"itemId": 74, "count": 10},
			{"itemId": 146, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
		]
		},
	{
		"name": "C4 Charge",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 43,
		"description": "This advanced explosive can annihilate structures.",
		"image": "c4_charge.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 109, "count": 75},
			{"itemId": 78, "count": 25},
			{"itemId": 146, "count": 5},
			{"itemId": 76, "count": 50},
			{"itemId": 10, "count": 5},
			{"itemId": 166, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"},
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
		"name": "Improvised Explosive Device",
		"maxStack": 10,
		"decomposes": 120,
		"itemId": 46,
		"description": "Place two of these near each other to create an explosive trap.",
		"image": "improvised_explosive_device.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 109, "count": 50},
			{"itemId": 78, "count": 10},
			{"itemId": 76, "count": 35},
			{"itemId": 10, "count": 5},
			{"itemId": 74, "count": 10},
			{"itemId": 7, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Weapon"}
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
		"name": "Rex Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 69,
		"description": "Equip a T-rex with this to ride it.",
		"image": "rex_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":380},
			{"itemId":76, "count":200},
			{"itemId":74, "count":50}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "GPS",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 72,
		"description": "Detects strange energy from the three Obelisks to triangulate your exact location on the island.",
		"image": "gps.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":166, "count":5},
			{"itemId":165, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
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
			{"itemId": 7, "count": 1},
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
		"name": "Citronal",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 99,
		"description": "This citrus fruit grows naturally along the coast. It will probably prevent scurvy.",
		"image": "citronal.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+5"},
			{"id": 8, "value": "+20"},
			{"id": 11, "value": "+15"}
		]
		},
	{
		"name": "Parasaur Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 100,
		"description": "Equip a Parasaur with this to ride it.",
		"image": "parasaur_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":80},
			{"itemId":76, "count":50},
			{"itemId":7, "count":15}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Raptor Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 101,
		"description": "Equip a Raptor with this to ride it.",
		"image": "raptor_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":110},
			{"itemId":76, "count":65},
			{"itemId":7, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Stegosaurus Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 102,
		"description": "Equip a Stego with this to ride it.",
		"image": "stego_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":200},
			{"itemId":76, "count":110},
			{"itemId":7, "count":35}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 27.2},
		]
		},
	{
		"name": "Triceratops Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 103,
		"description": "Equip a Triceratops with this to ride it.",
		"image": "trike_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":140},
			{"itemId":76, "count":80},
			{"itemId":7, "count":25}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Pulmonoscorpius Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 104,
		"description": "Equip a Pulmonoscorpius with this to ride it.",
		"image": "pulmonoscorpius_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":170},
			{"itemId":76, "count":95},
			{"itemId":7, "count":30}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 27.5},
		]
		},
	{
		"name": "Storage Box",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 105,
		"description": "A small box to store goods in.",
		"image": "storage_box.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 25},
			{"itemId": 75, "count": 20},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Large Storage Box",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 106,
		"description": "A large box to store goods in.",
		"image": "large_storage_box.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 50},
			{"itemId": 75, "count": 35},
			{"itemId": 76, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
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
		"name": "Stone Irrigation Pipe - Intake",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 110,
		"description": "The stone intake for an irrigation network that transports water over land.",
		"image": "stone_irrigation_intake.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Straight",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 111,
		"description": "A straight stone pipe for an irrigation network, used for transporting water across land.",
		"image": "stone_irrigation_straight.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Inclined",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 112,
		"description": "An inclined stone pipe for an irrigation network, used for transporting water up and down hills.",
		"image": "stone_irrigation_inclined.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Intersection",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 113,
		"description": "A plus-shaped stone intersection for an irrigation network, used for splitting one water source into three.",
		"image": "stone_irrigation_intersection.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Vertical",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 114,
		"description": "A vertical stone pipe for an irrigation network, used for transporting water up and down cliffs.",
		"image": "stone_irrigation_vertical.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Tap",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 115,
		"description": "This stone tap allows access to the water in an irrigation network. Can refill containers, irrigate crop plots, or provide a refreshing drink.",
		"image": "stone_irrigation_tap.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 10},
			{"itemId": 7, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Amarberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 116,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own amarberry bush. Can be planted in Small, Medium, or Large crop plots.",
		"image": "amarberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1"}
		]
		},
	{
		"name": "Amarberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 117,
		"description": "This yellow berry grows mostly on the beaches. Tasty, and can be used to make yellow dye.",
		"image": "amarberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Azulberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 118,
		"description": "This blue berry grows mostly in dense jungles. Tasty, and can be used to make blue dye.",
		"image": "azulberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Tintoberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 119,
		"description": "This blue berry grows mostly in dense jungles. Tasty, and can be used to make blue dye.",
		"image": "tintoberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Mejoberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 120,
		"description": "This wild berry grows mostly on mountains. While not tasty on it's own, its juices improve almost every meal.",
		"image": "mejoberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
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
		"name": "Compost Bin",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 127,
		"description": "A large bin for converting thatch and dung into high-quality fertilizer.",
		"image": "compost_bin.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 50},
			{"itemId": 73, "count": 15},
			{"itemId": 76, "count": 12}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500}
		]
		},
	{
		"name": "Cooking Pot",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 128,
		"description": "Must contain basic fuel to light the fire. Put various ingredients with water in this to make soups, stews, and dyes.",
		"image": "cooking_pot.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 75},
			{"itemId": 75, "count": 15},
			{"itemId": 8, "count": 10},
			{"itemId": 73, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500}
		]
		},
	{
		"name": "Simple Bed",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 129,
		"description": "Thatch may not make the most comfortable mattress, but this bed acts as a respawn point for you and your tribe.",
		"image": "simple_bed.png",
		"weight": 8.0,
		"recipe": [
			{"itemId": 7, "count": 15},         
			{"itemId": 75, "count": 80},
			{"itemId": 76, "count": 30},
			{"itemId": 10, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Pteranodon Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 131,
		"description": "Equip a Pteranodon with this to ride it.",
		"image": "pteranodon_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":230},
			{"itemId":76, "count":125},
			{"itemId":11, "itemId2":217, "count":75}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Citronal Seed",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 133,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own citronal crop. Can be planted in Medium or Large crop plots.",
		"image": "citronal_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1"}
		]
		},
	{
		"name": "Bronto Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 135,
		"description": "Equip a Bronto with this to ride it.",
		"image": "bronto_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":350},
			{"itemId":76, "count":185},
			{"itemId":74, "count":40}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Wooden Fence Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 136,
		"description": "This very cheap, narrow foundation is used to build fences around an area.",
		"image": "wooden_fence_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 10},         
			{"itemId": 75, "count": 3},
			{"itemId": 76, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Compass",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 137,
		"description": "Use this to find which direction your are traveling.",
		"image": "compass.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 74, "count": 5},         
			{"itemId": 73, "count": 5},
			{"itemId": 76, "count": 30}
		],
		"stats": [
			{"id": 1, "value": "Navigation"}
		]
		},
	{
		"name": "Slingshot",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 139,
		"description": "A simple ranged weapon that deals damage from afar. Better for knocking out a target than killing it outright. Requires stone to fire.",
		"image": "slingshot.png",
		"weight": 3.0,
		"recipe": [
			{"itemId":7, "count":5},
			{"itemId":76, "count":20},
			{"itemId":10, "count":1}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
		]
		},
	{
		"name": "Pike",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 140,
		"description": "A powerful weapon tipped with metal. Unlike the Spear, it cannot be thrown.",
		"image": "pike.png",
		"weight": 10.0,
		"recipe": [
			{"itemId":74, "count":10},
			{"itemId":7, "count":10},
			{"itemId":10, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 57.9}
		]
		},
	{
		"name": "Obsidian",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 142,
		"description": "A very rare resource, found underground. Can be broken down and used to make modern tech.",
		"image": "obsidian.png",
		"weight": 1.0,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Dinosaur Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 143,
		"description": "A large wood and stone gateway that can be used with a Gate to keep most dinosaurs in or out.",
		"image": "dinosaur_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 140},
			{"itemId": 8, "count": 40},
			{"itemId": 75, "count": 35},
			{"itemId": 76, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 12500}
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
		"name": "Dinosaur Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 147,
		"description": "A large wooden gate that can be used with a gateway to keep dinosaurs in or out. Cannot be destroyed by any dinosaur.",
		"image": "dinosaur_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 60},
			{"itemId": 75, "count": 15},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 7500}
		]
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
		"name": "Silica Pearls",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 163,
		"description": "These pearls are made almost entirely of silicon. Can be refined into silicon plates.",
		"image": "silica_pearls.png",
		"weight": 0.02,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Electronics",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 165,
		"description": "This multipurpose computer chip can be used to create electronic devices.",
		"image": "electronics.png",
		"weight": 0.01,
		"recipe": [
			{"itemId": 163, "count": 3},
			{"itemId": 74, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Polymer",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 166,
		"description": "These incredibly strong, lightweight plates can be shaped and then heat treated into casings for anything.",
		"image": "polymer.png",
		"weight": 0.25,
		"recipe": [
			{"itemId": 140, "count": 2},
			{"itemId": 146, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Metal Catwalk",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 167,
		"description": "A thin walkway for bridging areas together. Made from metal plates.",
		"image": "metal_catwalk.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 15},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Ceiling",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 168,
		"description": "A stable metal-plated concrete ceiling that provides insulation, and doubles as a floor for higher levels.",
		"image": "metal_ceiling.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Hatchframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 169,
		"description": "This metal-plated concrete ceiling has a hole in it for trapdoors.",
		"image": "metal_hatchframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 30},
			{"itemId": 146, "count": 8}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 170,
		"description": "A stable metal-plated concrete door that provides entrance to structures. Can be locked for security.",
		"image": "metal_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 10},
			{"itemId": 146, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Fence Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 171,
		"description": "This very strong, narrow foundation is used to build walls around an area.",
		"image": "metal_fence_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 5},
			{"itemId": 146, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 172,
		"description": "A foundation is required to build structures in an area. This one is made from sturdy metal-plated concrete.",
		"image": "metal_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 50},
			{"itemId": 146, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 15000}
		]
		},
	{
		"name": "Behemoth Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 173,
		"description": "A large metal-plated concrete gate that can be used with a Behemoth Gateway to allow even the largest of creatures in or out.",
		"image": "behemoth_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 60},
			{"itemId": 146, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 12500}
		]
		},
	{
		"name": "Behemoth Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 174,
		"description": "A large metal-plated concrete gateway, reinforced with obsidian polymer, that can be used with a Behemoth Gate to allow even the largest of creatures in or out.",
		"image": "behemoth_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 135},
			{"itemId": 146, "count": 35},
			{"itemId": 166, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 20000}
		]
		},
	{
		"name": "Metal Ladder",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 175,
		"description": "A simple metal ladder used to climb up or down tall structures. Can also be used to extend existing ladders.",
		"image": "metal_ladder.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 3125}
		]
		},
	{
		"name": "Metal Pillar",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 176,
		"description": "This metal-plated concrete pillar adds structural integrity to the area it is built under. Can also act as stilts for building on inclines.",
		"image": "metal_pillar.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 25},
			{"itemId": 146, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Ramp",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 177,
		"description": "An inclined metal-plated concrete floor for travelling up or down levels. Can also be used to make an angled roof.",
		"image": "metal_ramp.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Trapdoor",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 178,
		"description": "This metal-plated concrete slab can be used to secure hatches.",
		"image": "metal_trapdoor.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 10},
			{"itemId": 146, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 179,
		"description": "A metal-plated concrete wall that insulates the inside from the outside and separates rooms.",
		"image": "metal_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 25},
			{"itemId": 146, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 180,
		"description": "A metal-plated concrete wall that provides entrance to a structure.",
		"image": "metal_doorframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 20},
			{"itemId": 146, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Windowframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 181,
		"description": "A metal-plated concrete wall, with a hole for a window.",
		"image": "metal_windowframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 20},
			{"itemId": 146, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Window",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 182,
		"description": "Metal plates on hinges that cover windows to provide protection from projectiles and spying.",
		"image": "metal_window.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
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
		"name": "Parachute",
		"maxStack": 20,
		"decomposes": 120,
		"itemId": 187,
		"description": "Use this while falling to slow your fall. Jump while parachuting to deactivate it.",
		"image": "parachute.png",
		"weight": 3.0,
		"recipe": [
			{"itemId": 75, "count": 40},
			{"itemId": 76,"count": 20},
			{"itemId": 10,"count": 10},
		],
		"stats": [
			{"id": 1, "value": "Consumable"}
		]
		},
	{
		"name": "Carbonemys Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 207,
		"description": "Equip a Carbonemys with this to ride it.",
		"image": "carbonemys_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":170},
			{"itemId":76, "count":95},
			{"itemId":146, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Sarco Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 208,
		"description": "Equip a Sarco with this to ride it.",
		"image": "sarco_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":230},
			{"itemId":76, "count":75},
			{"itemId":146, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Ankylo Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 209,
		"description": "Equip a Ankylo with this to ride it.",
		"image": "ankylo_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":260},
			{"itemId":76, "count":140},
			{"itemId":74, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Mammoth Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 210,
		"description": "Equip a Mammoth with this to ride it.",
		"image": "mammoth_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":260},
			{"itemId":76, "count":140},
			{"itemId":74, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Megalodon Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 211,
		"description": "Equip a Megalodon with this to ride it.",
		"image": "megalodon_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":290},
			{"itemId":76, "count":155},
			{"itemId":74, "count":30}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Sabertooth Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 212,
		"description": "Equip a Sabertooth with this to ride it.",
		"image": "sabertooth_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":290},
			{"itemId":76, "count":155},
			{"itemId":74, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Carno Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 213,
		"description": "Equip a Carno with this to ride it.",
		"image": "carno_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":320},
			{"itemId":76, "count":170},
			{"itemId":74, "count":30}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Argentavis Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 214,
		"description": "Equip an Argentavis with this to ride it.",
		"image": "argentavis_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":350},
			{"itemId":76, "count":185},
			{"itemId": 11, "itemId2": 217, "count":30}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Plesiosaur Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 215,
		"description": "Equip a Plesiosaur with this to ride it.",
		"image": "plesiosaur_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 10, "count": 400},
			{"itemId": 76, "count": 250},
			{"itemId": 146, "count": 65},
			{"itemId": 163, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
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
	{
		"name": "Azulberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 235,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own azulberry bush. Can be planted in Small, Medium, or Large crop plots.",
		"image": "azulberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Tintoberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 236,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Tintoberry bush. Can be planted in Small, Medium, or Large Crop plots.",
		"image": "tintoberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Mejoberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 237,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Mejoberry bush. Can be planted in Small, Medium, or Large Crop plots.",
		"image": "mejoberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Narcoberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 238,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Nacroberry bush. Can be planted in Small, Medium, or Large Crop Plots.",
		"image": "narcoberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Stimberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 239,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Stimberry bush. Can be planted in Small, Medium, or Large Crop plots.",
		"image": "stimberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Savoroot Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 240,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own savoroot crop. Can be planted in Medium or Large crop plots.",
		"image": "savoroot_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},	
	{
		"name": "Longrass Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 241,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own longrass crop. Can be planted in Medium or Large crop plots.",
		"image": "longrass_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},	
	{
		"name": "Rockarrot Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 242,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own rockarrot crop. Can be planted in Medium or Large crop plots.",
		"image": "rockarrot_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Raw Prime Meat",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 252,
		"description": "Eating raw food will sate hunger, but is unhealthy for humans. This excellent cut spoils very quickly. Most wild carnivores love this meat.",
		"image": "raw_prime_meat.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "-5"},
			{"id": 8, "value": "+20"},
			{"id": 9, "value": "2:20"}
		]
		},
	{
		"name": "Cooked Prime Meat",
		"maxStack": 30,
		"decomposes": 120,
		"itemId": 253,
		"description": "Sates your hunger, and provides health while being digested. More effective than normal meat. Wild Carnivores like this meat a lot.",
		"image": "cooked_prime_meat.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 252, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+20"},
			{"id": 8, "value": "+35"},
			{"id": 9, "value": "45:00"}
		]
		},
	{
		"name": "Metal Dinosaur Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 265,
		"description": "A large metal gateway that can be used with a gate to keep most dinosaurs in or out.",
		"image": "metal_dinosaur_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 85},
			{"itemId": 146, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Dinosaur Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 266,
		"description": "A large metal gate that can be used with a Gateway to keep most dinosaurs in or out.",
		"image": "metal_dinosaur_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Preserving Bin",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 295,
		"description": "Burns simple fuel at low temperatures to dehydrate food and kill bacteria. Keeps perishables from spoiling for a small time.",
		"image": "preserving_bin.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8, "count": 30},
			{"itemId": 7, "count": 30},
			{"itemId": 75, "count": 10},
			{"itemId": 76, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 600}
		]
		},
	{
		"name": "Metal Spike Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 296,
		"description": "These incredibly sharp metal spikes are dangerous to any that touch them. Large creatures take more damage.",
		"image": "metal_spike_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 25},
			{"itemId": 10, "count": 15},
			{"itemId": 76, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 5000}
		]
		},
	{
		"name": "Spino Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 303,
		"description": "Equip a Spino with this to ride it.",
		"image": "spino_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 10, "count": 380},
			{"itemId": 76, "count": 200},
			{"itemId": 146, "count": 45},
			{"itemId": 163, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Vault",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 306,
		"description": "A large metal vault to securely store goods in.",
		"image": "vault.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 74, "count": 300},
			{"itemId": 146, "count": 60},
			{"itemId": 162, "count": 30},
			{"itemId": 166, "count": 60}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 50000}
		]
		},
	{
		"name": "Wooden Spike Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 307,
		"description": "These incredibly sharp wooden stakes are dangerous to any that touch them. Larger creatures take more damage.",
		"image": "wooden_spike_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7,"count": 40},
			{"itemId": 10,"count": 10},
			{"itemId": 76,"count": 30}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 3500}
		]
		},
	{
		"name": "Stone Fence Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 310,
		"description": "This strong, narrow foundation is used to build walls around an area.",
		"image": "stone_fence_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 15},
			{"itemId": 7,"count": 10},
			{"itemId": 75,"count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 311,
		"description": "A brick-and-mortar wall that insulates the inside from the outside and seperates rooms.",
		"image": "stone_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 40},
			{"itemId": 7,"count": 20},
			{"itemId": 75,"count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Ichthyosaurus Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 314,
		"description": "Equip a Ichthyosaurus with this to ride it.",
		"image": "ichthyosaurus_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 10, "count": 55},
			{"itemId": 76, "count": 50},
			{"itemId": 7, "count": 20},
			{"itemId": 9, "count": 10},
			{"itemId": 73, "count": 8}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Stone Ceiling",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 315,
		"description": "A stable brick-and-mortar ceiling that insulates the inside from the outside, and doubles as a floor for higher levels.",
		"image": "stone_ceiling.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 60},
			{"itemId": 7,"count": 30},
			{"itemId": 75,"count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Hatchframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 316,
		"description": "This brick-and-mortar ceiling has a hole in it for trapdoor.",
		"image": "stone_hatchframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 50},
			{"itemId": 7,"count": 25},
			{"itemId": 75,"count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Reinforced Wooden Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 317,
		"description": "A reinforced wooden door that provides entrance to structures. Can be locked for security.",
		"image": "reinforced_wooden_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 20},
			{"itemId": 7,"count": 14},
			{"itemId": 75,"count": 8}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Stone Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 318,
		"description": "A foundation is required to build structures in an area. This one is made from brick-and-mortar.",
		"image": "stone_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 80},
			{"itemId": 7,"count": 40},
			{"itemId": 75,"count": 30}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 15000}
		]
		},
	{
		"name": "Reinforced Dinosaur Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 319,
		"description": "A large, reinforced wooden gat that can be used with a Gateway to keep dinosaurs in or out.",
		"image": "reinforced_dinosaur_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 60},
			{"itemId": 7,"count": 30},
			{"itemId": 75,"count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Stone Dinosaur Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 320,
		"description": "A large brick-and-mortar gateway that can be used with a Gate to keep most dinosaurs in or out.",
		"image": "stone_dinosaur_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 140},
			{"itemId": 7,"count": 70},
			{"itemId": 75,"count": 50}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Pillar",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 321,
		"description": "Adds structural integrity to the area it is built under.",
		"image": "stone_pillar.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 30},
			{"itemId": 7,"count": 15},
			{"itemId": 75,"count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Stone Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 322,
		"description": "A brick-and-mortar wall that provides entrance to a structure.",
		"image": "stone_doorframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 30},
			{"itemId": 7,"count": 16},
			{"itemId": 75,"count": 12}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Windowframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 323,
		"description": "A brick-and-mortar wall with a hole for a window.",
		"image": "stone_windowframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 35},
			{"itemId": 7,"count": 18},
			{"itemId": 75,"count": 12}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
]
