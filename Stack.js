function Stack(equalsFunction, printFunction){
	this.size = 0;
	this.storage = {};
	this.equalsFunction = equalsFunction;
	this.printFunction = printFunction;
}

Stack.prototype.push = function(data){
	this.size++;
	this.storage[this.size] = data;
}

Stack.prototype.pop = function(){
	if(this.size > 0){
		var size = this.size;
		var dataToReturn = this.storage[size];
		delete this.storage[size];
		this.size--;
		return dataToReturn;
	}
}

Stack.prototype.contains = function(data){
	if (this.size == 0){
		return false;
	}
	var currentElem = this.pop();
	if(this.equalsFunction(currentElem, data)){
		this.push(currentElem);
		return true;
	} else{
		var value = this.contains(data);
		this.push(currentElem);
		return value;
	}
}

Stack.prototype.remove = function(data){
	if(!this.contains(data) || this.size == 0){
		return;
	}
	var currentElem = this.pop();
	if(this.equalsFunction(currentElem, data)){
		return;
	} else{
		var value = this.remove(data);
		this.push(currentElem);
		return value;
	}
}

Stack.prototype.printValues = function(div){
	if(this.size == 0){
		return;
	}
	
	var currentElem = this.pop();
	div.appendChild(this.printFunction(currentElem));
	this.printValues(div);
	this.push(currentElem);
}