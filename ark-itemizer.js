var ark_popupRegistry = new Array();
var ark_popupIterator = 0;
var ark_popupDefaultLength = 25;
var ark_mouseX = 0;
var ark_mouseY = 0;
var ark_currentItemList = new Array();

function arkLaunchSearch(containerId)
{
	//clear container first
	$('#'+containerId).empty();
	
	var itemSub = $('#ark-search-name').val();
	
	var results = arkSearchItems(itemSub);
	
	for(var i=0; i<results.length; i++)
	{
		var html = '<div class="ark-item-result">';
		
		html += '<div class="ark-item-name"><a class="ark-js-link" onclick="arkShowItemPerId('+results[i].itemId+',\'search-result\')">'+results[i].name+'</a></div>';
		
		html += '</div>';
		
		$('#'+containerId).append(html);
	}
	
}

function arkGetArkItemsVersion()
{
	return ark_itemsVersion.ark.major + '.' + ark_itemsVersion.ark.minor;
}

function arkInjectCalculator(containerId)
{
	var container = $('#'+containerId);
	
	var html = '<div class="ark-item-selector">';
	
	html += '<label for="ark-item-selector-id">Item</label>';
	html += '<select name="ark-item-selector-id" id="ark-item-selector-id">';
	
	for(var i=0; i<ark_items.length; i++)
	{
		html += '<option value="'+ark_items[i].itemId+'">'+ark_items[i].name+'</option>';
	}
	
	html += '</select>';
	
	html += '<input type="text" name="ark-calculator-quantity" id="ark-calculator-quantity" value="1" />';
	
	html += '<button onclick="arkCalculatorAddItem();">Add</button>';
	html += '<h4>Items</h4>';
	html += '<div id="ark-calculator-current-item">';
	
	html += '</div>';
	html += '<h4>Totals</h4>';
	html += '<div id="ark-calculator-totals"></div>';
	
	html += '<button onclick="arkCalculatorClearItems();">Clear</button>';
	html += '</div>';
	
	container.append(html);
	
}

function arkCalculatorClearItems()
{
	ark_currentItemList = new Array();
	arkCalculatorRenderCurrentItem();
}

function arkCalculatorAddItem()
{
	
	var _itemId = $('#ark-item-selector-id').val();
	var qty = parseInt($('#ark-calculator-quantity').val());

	var entry = {
		"itemId": _itemId,
		"count": qty,
	};

	ark_currentItemList.push(entry);
	arkCalculatorRenderCurrentItem();
}

function arkCalculatorRemoveItem(entryIndex)
{
	if(entryIndex < ark_currentItemList.length)
	{
		var oldArray = ark_currentItemList;
		ark_currentItemList = new Array();
		
		for(var i=0; i<oldArray.length; i++)
		{
			if(i != entryIndex)
			{
				ark_currentItemList.push(oldArray[i]);
			}
		}
	}
	
	arkCalculatorRenderCurrentItem();
}

function arkCalculatorRenderCurrentItem()
{
	$('#ark-calculator-current-item').empty();
	for(var i=0; i<ark_currentItemList.length; i++)
	{;
		var item = arkGetItemById(ark_currentItemList[i].itemId);
		
		
		if(item)
		{
			var html = '<div id="ark-calculator-entry-'+i+'">';
			html += '<strong>' + item.name + '</strong>';
			html += ' ' + ark_currentItemList[i].count;
			html += '<button onclick="arkCalculatorRemoveItem('+i+');">Remove</button>';
			html += '</div>';
			
			$('#ark-calculator-current-item').append(html);
		}

	}
	
	var costs = arkCalculateCostForItems(ark_currentItemList);
	
	var container = $('#ark-calculator-totals');
	container.empty();
	
	for(var i=0; i<costs.length; i++)
	{
		if(costs[i].itemId2)
		{
			var item = arkGetItemById(costs[i].itemId);
			var item2 = arkGetItemById(costs[i].itemId2);
			
			var chtml = '<div id="ark-calculator-totals-cost-'+i+'">';
			chtml += costs[i].count + ' x ' + '<img width="16" height="16" src="images/'+item.image+'" /><a class="ark-js-link" onmouseover="arkMouseOverPopup('+item.itemId+', \'ark-calculator-totals-cost-'+i+'\');">' + item.name + '</a> or <img width="16" height="16" src="images/'+item2.image+'" /><a class="ark-js-link" onmouseover="arkMouseOverPopup('+item2.itemId+', \'ark-calculator-totals-cost-'+i+'\');">' + item2.name + '</a>';
			chtml += '</div>';
			
			container.append(chtml);
		}
		else
		{
			var item = arkGetItemById(costs[i].itemId);
			
			var chtml = '<div id="ark-calculator-totals-cost-'+i+'">';
			chtml += costs[i].count + ' x ' + '<img width="16" height="16" src="images/'+item.image+'" /><a class="ark-js-link" onmouseover="arkMouseOverPopup('+item.itemId+', \'ark-calculator-totals-cost-'+i+'\');">' + item.name + '</a>';
			chtml += '</div>';
			
			container.append(chtml);
		}
	}
}

function arkSearchItems(itemSubString)
{
	var results = new Array();
	
	for(var i=0; i<ark_items.length; i++)
	{
		var itemName = ark_items[i].name.toLowerCase();
		var index = itemName.indexOf(itemSubString.toLowerCase());
		if(index != -1)
		{
			results.push(ark_items[i]);
		}
	}
	
	return results;
}

function arkTestItem(containerId)
{
	var itemId = $('#test_item_id').val();
	
	arkShowItemPerId(itemId, containerId);
}

function arkShowItemStats(containerId)
{
	var container = $('#'+containerId);
	if(container)
	{
		for(var i=0; i<ark_itemStats.length; i++)
		{
			container.append(ark_itemStats[i].name+' : '+ark_itemStats[i].id+'<br />');
		}
	}
}

function arkShowItemList(containerId)
{
	var container = $('#'+containerId);
	
	if(container)
	{
		for(var i=0; i<ark_items.length; i++)
		{
			container.append(ark_items[i].name+' : '+ark_items[i].itemId+'<br />');
		}
	}
}

function arkGetStatById(statId)
{
	var stat = null;
	
	for(var i=0; i<ark_itemStats.length; i++)
	{
		if(ark_itemStats[i].id == statId)
		{
			stat = ark_itemStats[i];
		}
	}
	
	return stat;
	
}

function arkGetCostByItemId(costs, itemId)
{
	for(var i=0; i<costs.length; i++)
	{
		if(costs[i].itemId == itemId)
		{
			return costs[i];
		}
	}
	
	return null;
}

function arkMergeCosts(costs, costs2)
{
	var _costs = new Array();
	
	for(var i=0; i<costs.length; i++)
	{
		_costs.push(costs[i]);
	}
	
	for(var i=0; i<costs2.length; i++)
	{
		var cost = arkGetCostByItemId(_costs, costs2[i].itemId);
		if(cost)
		{
			cost.count = cost.count + costs2[i].count;
		}
		else
		{
			_costs.push(costs2[i]);
		}
	}
	
	
	return _costs;
}

function arkCalculateItemCost(itemId, _count)
{
	var costs = new Array();
	var item = arkGetItemById(itemId);
	if(item)
	{
		
		if(item.recipe.length > 0)
		{
			for(var i=0; i<item.recipe.length; i++)
			{
				if(item.recipe[i].itemId2)
				{
					var cost = {
							itemId: item.recipe[i].itemId,
							itemId2: item.recipe[i].itemId2,
							count: item.recipe[i].count * _count
						};
						
					costs.push(cost);
				}
				else
				{
					var _item = arkGetItemById(item.recipe[i].itemId);
					if(_item)
					{
						var _costs = arkCalculateItemCost(_item.itemId, item.recipe[i].count * _count);
						costs = arkMergeCosts(costs, _costs);
					}
				}
			}
		}
		else
		{
			var cost = {
				itemId: item.itemId,
				count: _count,
			}
			costs.push(cost);
		}
	}
	
	return costs;
}

function arkCalculateCostForItems(items)
{
	var costs = new Array();
	for(var i=0; i<items.length; i++)
	{
		var _costs = arkCalculateItemCost(items[i].itemId, items[i].count);
		costs = arkMergeCosts(costs, _costs);
	}
	return costs;
}

function arkShowItemPerId(itemId, containerId)
{
	var item = null;
	
	for(var i=0; i<ark_items.length; i++)
	{
		if(ark_items[i].itemId == itemId)
		{
			item = ark_items[i];
		}
	}
	
	if(item)
	{
		arkShowItemPopup(item, containerId);
	}
}

function arkShowItemPerName(itemName, containerId)
{
	var item = null;
	for(var i=0; i<ark_items.length; i++)
	{
		if(ark_items[i].name.toLowerCase() == itemName.toLowerCase())
		{
			item = ark_items[i];
		}
	}
	
	if(item)
	{
		arkShowItemPopup(item, containerId);
	}
}

function arkGetItemById(itemId)
{
	var item = null;
	
	for(var i=0; i<ark_items.length; i++)
	{
		if(ark_items[i].itemId == itemId)
		{
			item = ark_items[i];
		}
	}
	return item;
}


function arkFormatDecomposes(decomposes)
{
	if(decomposes == -1)
	{
		return "No";
	}
	else
	{
		var min = Math.floor(decomposes / 60);
		
		var str = "";
		
		if(min > 0)
		{
			str += min + ':';
		}
		
		var sec = decomposes % 60;
		
		if(sec < 10)
		{
			str += '0' + sec;
		}
		else
		{
			str += sec;
		}
		
		return str;
	}
}

function arkFormatWeight(itemWeight)
{
	if(itemWeight == -1)
	{
		return 'Unknown';
	}
	else
	{
		return itemWeight;
	}
}

function arkNewPopup(arkItem)
{
	ark_popupIterator++;
	var _id = ark_popupIterator;
	
	var popup = {
		id: _id,
		active: true,
		item: arkItem,
		tick: 0,
		length: ark_popupDefaultLength,
	};
	
	ark_popupRegistry.push(popup);
	
	return _id;
}

function arkInit()
{
	$(document).mousemove(function(e) {
    ark_mouseX = e.pageX;
    ark_mouseY = e.pageY;
	}).mouseover();
	
	console.log('ARK Items : '+arkGetArkItemsVersion());
	
	setInterval(tickPopups, 100);
}

function tickPopups()
{
	for(var i=0; i<ark_popupRegistry.length; i++)
	{
		var popup = ark_popupRegistry[i];
		if(popup.active)
		{
			popup.tick++;
			
			if(popup.tick > popup.length)
			{
				popup.active = false;
				arkCloseItemPopup(popup.id);
			}
		}
	}
	
	//todo swap array and deleting inactive popup
}

function arkTestItemCosts()
{
	
	var itemCosts = [{
		itemId: 70,
		count: 3,
		}];
	
	var costs = arkCalculateCostForItems(itemCosts);
	console.log(costs);
	$('#item-costs').append(costs.length);
	
}

function arkClearPopups()
{
	
	for(var i=0; i<ark_popupRegistry.length; i++)
	{
		arkCloseItemPopup(ark_popupRegistry[i].id);
		console.log(ark_popupRegistry[i].id);
	}
	
	ark_popupRegistry = new Array();
	
}

function arkMouseOverPopup(itemId, containerId)
{
	
	var item = arkGetItemById(itemId);
	
	//for(var i=0; i<ark_popupRegistry.length; i++)
	//{
	//	var popup = ark_popupRegistry[i];
	//	if(popup.active && popup.item == item)
	//	{
	//		popupExists = true;
	//	}
	//}
	
	arkClearPopups();
	
	if(item)
	{
		var htmlId = arkShowItemPopup(item, containerId);
		
		$('#ark-popup-'+htmlId).css('position','fixed');
		$('#ark-popup-'+htmlId).css('z-index', 1);
		$('#ark-popup-'+htmlId).css('top',ark_mouseY+'px');
		$('#ark-popup-'+htmlId).css('left',ark_mouseX+'px');
		
	}
	
}

function arkShowItemPopup(item, containerId)
{
	
	var htmlId = arkNewPopup(item);
	var html = '<div class="ark-item-popup" id="ark-popup-'+htmlId+'">';
		
	html += '<div class="ark-item-name">'+item.name+'</div>';
	html += '<div class="ark-item-image"><img src="images/'+item.image+'"/></div>';
	html += '<div class="ark-item-description">'+item.description+'</div>';
	html += '<div class="ark-item-stats">';
	
	html += '<strong>Weight: </strong>'+arkFormatWeight(item.weight)+'<br />';
	html += '<strong>Max Stack: </strong>'+item.maxStack+'<br />';
	html += '<strong>Decompose: </strong>'+arkFormatDecomposes(item.decomposes)+'<br />';
	
	if(item.stats.length > 0)
	{
		//more stats !!
		for(var i=0; i<item.stats.length; i++)
		{
			var stat = arkGetStatById(item.stats[i].id);
			if(stat)
			{
				html += '<strong>'+stat.name+': </strong>'+item.stats[i].value+'<br />';
			}
		}
		
	}
	
	if(item.recipe.length > 0)
	{
		html += '<div class="ark-item-recipe">';
		html += '<strong>Ingredients</strong><br />';
		//todo
		//find a way for conditionnal recipe mats (like chitin and keratin)
		for(var i=0; i<item.recipe.length; i++)
		{
			var count = item.recipe[i].count;
				
			if(count == 0.5)
			{
				count = "1/2";
			}
			
			html += count + ' x ';
			
			if(item.recipe[i].itemId2)
			{	
				//two ingredients possible
				var ingItem = arkGetItemById(item.recipe[i].itemId);
				var ingItem2 = arkGetItemById(item.recipe[i].itemId2);
				if(ingItem && ingItem2)
				{
					html += '<img src="images/'+ingItem.image+'" width="16" height="16" />'+ingItem.name+' or <img src="images/'+ingItem2.image+'" width="16" height="16" />'+ingItem2.name+'<br />';
				}
			}
			else
			{
				var ingItem = arkGetItemById(item.recipe[i].itemId);
				if(ingItem)
				{
					html += '<img src="images/'+ingItem.image+'" width="16" height="16" />'+ingItem.name+'<br />';
				}
			}
			
		}
		
		html += '</div>';
	}
	
	html += '</div>';
	html += '<a class="ark-js-link" onclick="arkCloseItemPopup('+htmlId+');">Close</a>';
	html += '</div>';
	
	$('#'+containerId).append(html);
	return htmlId;
}

function arkCloseItemPopup(popupId)
{
	$('#ark-popup-'+popupId).remove();
}
