function Book(id, title, author, topic){
	this.id = id;
	this.title = title;
	this.author = author;
	this.topic = topic;
	this.reserverList = new Stack();
}

var booksAreEqual = function(book1, book2){
	return book1.id == book2.id;
}

 var printBook = function(book){
	var btn = document.createElement('input');
	btn.type="button";
	btn.onclick=function(){removeBook(book.id);};
	btn.value="Remove";
	var span = document.createElement('span');
	span.id = "book_"+book.id;
	span.style="clear:both; display:block;";
	var str = "Book{\n";
	str = str + "\tid: "+book.id + "\n";
	str = str + "\ttitle: "+book.title + "\n";
	str = str + "\tauthor: "+book.author + "\n";
	str = str + "\ttopic: "+book.topic + "\n}";
	span.innerHTML = str;
	span.appendChild(btn);
	return span;
}