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
		var min = decomposes / 60;
		
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

function arkShowItemPopup(item, containerId)
{
	var html = '<div class="ark-item-popup" id="ark-item-'+item.itemId+'">';
		
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
			if(item.recipe[i].itemId2)
			{
				//two ingredients possible
				var ingItem = arkGetItemById(item.recipe[i].itemId);
				var ingItem2 = arkGetItemById(item.recipe[i].itemId2);
				if(ingItem && ingItem2)
				{
					html += item.recipe[i].count+' x <img src="images/'+ingItem.image+'" width="16" height="16" />'+ingItem.name+' or <img src="images/'+ingItem2.image+'" width="16" height="16" />'+ingItem2.name+'<br />';
				}
			}
			else
			{
				var ingItem = arkGetItemById(item.recipe[i].itemId);
				if(ingItem)
				{
					html += item.recipe[i].count+' x <img src="images/'+ingItem.image+'" width="16" height="16" />'+ingItem.name+'<br />';
				}
			}
			
		}
		
		html += '</div>';
	}
	
	html += '</div>';
	html += '<a class="ark-js-link" onclick="arkCloseItemPopup('+item.itemId+');">Close</a>';
	html += '</div>';
	
	$('#'+containerId).append(html);
}

function arkCloseItemPopup(itemId)
{
	$('#ark-item-'+itemId).remove();
}
