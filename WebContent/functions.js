function searchPeople() {
	theMovieDb.search.getPerson({"page": $("#page").val() != "na" ? parseInt($("#page").val()) : 1
			,"query": document.getElementById("searchValue").value }, successPeople, errorCB);
}

function searchTV() {
	theMovieDb.search.getTv({"page": $("#page").val() != "na" ? parseInt($("#page").val()) : 1
			,"query": document.getElementById("searchValue").value }, successTV, errorCB);
}

function searchMovie() {
	theMovieDb.search.getMovie({"page": $("#page").val() != "na" ? parseInt($("#page").val()) : 1
			,"query": document.getElementById("searchValue").value }, successMovie, errorCB);
}

function searchKeywords() {
	theMovieDb.search.getKeyword({"page": $("#page").val() != "na" ? parseInt($("#page").val()) : 1
			,"query": document.getElementById("searchValue").value }, successKeywords, errorCB);
}

function searchLists() {
	theMovieDb.search.getList({"page": $("#page").val() != "na" ? parseInt($("#page").val()) : 1
			,"query": document.getElementById("searchValue").value }, successLists, errorCB);
}

function searchCollections() {
	theMovieDb.search.getCollection({"page": $("#page").val() != "na" ? parseInt($("#page").val()) : 1
			,"query": document.getElementById("searchValue").value }, successCollections, errorCB);
}

function searchCompanies() {
	theMovieDb.search.getCompany({"page": $("#page").val() != "na" ? parseInt($("#page").val()) : 1
			,"query": document.getElementById("searchValue").value }, successCompanies, errorCB);
}

function successPeople(data) {
	var x = JSON.parse(data);
	//add headers
	$("#results thead").empty();
	$("#results thead").append("<tr><td></td><td>Name</td><td>Popularity</td></tr>");

	//create table
	$("#results tbody").empty();
	for(var i = 0; i < x.results.length; i++) {
		$("#results tbody").append(
			"<tr>" 
				+ '<td><img src="' +  "http://image.tmdb.org/t/p/w500/" + x.results[i].profile_path +'" height="138" width="92"></td>' 
				+ "<td>" + x.results[i].name + "</td>" 
				+ "<td>" + x.results[i].popularity + "</td>" +
			"</tr>"
		);
	}
	
	//create page selector based on total pages.
	$("#page").empty();
	for(var i = 0; i < x.total_pages; i++) 
	{
		$("#page").append('<option value="'+ (i + 1) + '">' + (i + 1) + "</option>");
		$("#page").val(x.page);
	}

}

function successTV(data) {
	var x = JSON.parse(data);
	//add headers
	$("#results thead").empty();
	$("#results thead").append("<tr><td></td><td>Title</td><td>First Aired</td><td>Vote Average</td><td>Vote Count</td></tr>");

	//create table
	$("#results tbody").empty();
	for(var i = 0; i < x.results.length; i++) {
		$("#results tbody").append(
			"<tr>" 
				+ '<td><img src="' +  "http://image.tmdb.org/t/p/w500/" + x.results[i].poster_path +'" height="138" width="92"></td>' 
				+ "<td>" + x.results[i].name + "</td>" 
				+ "<td>" + x.results[i].first_air_date + "</td>" 
				+ "<td>" + x.results[i].vote_average + "</td>" 
				+ "<td>" + x.results[i].vote_count + "</td>" +
			"</tr>"
		);
	}
	
	//create page selector based on total pages.
	$("#page").empty();
	for(var i = 0; i < x.total_pages; i++) 
	{
		$("#page").append('<option value="'+ (i + 1) + '">' + (i + 1) + "</option>");
		$("#page").val(x.page);
	}
}

function successMovie(data) {			
	var x = JSON.parse(data);
	//add headers
	$("#results thead").empty();
	$("#results thead").append("<tr><td></td><td>Title</td><td>Release Date</td><td>Vote Average</td><td>Vote Count</td></tr>");

	//create table
	$("#results tbody").empty();
	for(var i = 0; i < x.results.length; i++) {
		$("#results tbody").append(
			"<tr>" 
				+ '<td><img src="' +  "http://image.tmdb.org/t/p/w500/" + x.results[i].poster_path +'" height="138" width="92"></td>' 
				+ "<td>" + x.results[i].title + "</td>" 
				+ "<td>" + x.results[i].release_date + "</td>" 
				+ "<td>" + x.results[i].vote_average + "</td>" 
				+ "<td>" + x.results[i].vote_count + "</td>" +
			"</tr>"
		);
	}
	
	//create page selector based on total pages.
	$("#page").empty();
	for(var i = 0; i < x.total_pages; i++) 
	{
		$("#page").append('<option value="'+ (i + 1) + '">' + (i + 1) + "</option>");
		$("#page").val(x.page);
	}
};

function successKeywords(data) {
	var x = JSON.parse(data);
	//add headers
	$("#results thead").empty();
	$("#results thead").append("<tr><td></td><td>Keyword</td></tr>");

	//create table
	$("#results tbody").empty();
	for(var i = 0; i < x.results.length; i++) {
		$("#results tbody").append(
			"<tr>" 
				+ "<td>" + (i + 1) + "</td>" 
				+ "<td>" + x.results[i].name + "</td>" +
			"</tr>"
		);
	}
	
	//create page selector based on total pages.
	$("#page").empty();
	for(var i = 0; i < x.total_pages; i++) 
	{
		$("#page").append('<option value="'+ (i + 1) + '">' + (i + 1) + "</option>");
		$("#page").val(x.page);
	}
}

function successLists(data) {
	var x = JSON.parse(data);
	//add headers
	$("#results thead").empty();
	$("#results thead").append("<tr><td></td><td>Name</td><td>Description</td><td>Favorite Count</td><td>Item Count</td><td>Type</td></tr>");

	//create table
	$("#results tbody").empty();
	for(var i = 0; i < x.results.length; i++) {
		$("#results tbody").append(
			"<tr>" 
				+ '<td><img src="' +  "http://image.tmdb.org/t/p/w500/" + x.results[i].poster_path +'" height="138" width="92"></td>' 
				+ "<td>" + x.results[i].name + "</td>" 
				+ "<td>" + x.results[i].description + "</td>" 
				+ "<td>" + x.results[i].favorite_count + "</td>" 
				+ "<td>" + x.results[i].item_count + "</td>" 
				+ "<td>" + x.results[i].list_type + "</td>" +
			"</tr>"
		);
	}
	
	//create page selector based on total pages.
	$("#page").empty();
	for(var i = 0; i < x.total_pages; i++) 
	{
		$("#page").append('<option value="'+ (i + 1) + '">' + (i + 1) + "</option>");
		$("#page").val(x.page);
	}
}

function successCollections(data) {
	var x = JSON.parse(data);
	//add headers
	$("#results thead").empty();
	$("#results thead").append("<tr><td></td><td>Name</td></tr>");

	//create table
	$("#results tbody").empty();
	for(var i = 0; i < x.results.length; i++) {
		$("#results tbody").append(
			"<tr>" 
				+ '<td><img src="' +  "http://image.tmdb.org/t/p/w500/" + x.results[i].poster_path +'" height="138" width="92"></td>' 
				+ "<td>" + x.results[i].name + "</td>" +
			"</tr>"
		);
	}
	
	//create page selector based on total pages.
	$("#page").empty();
	for(var i = 0; i < x.total_pages; i++) 
	{
		$("#page").append('<option value="'+ (i + 1) + '">' + (i + 1) + "</option>");
		$("#page").val(x.page);
	}
}

function successCompanies(data) {
	var x = JSON.parse(data);
	//add headers
	$("#results thead").empty();
	$("#results thead").append("<tr><td></td><td>Company</td></tr>");

	//create table
	$("#results tbody").empty();
	for(var i = 0; i < x.results.length; i++) {
		$("#results tbody").append(
			"<tr>" 
				+ "<td>" + (i + 1) + "</td>" 
				+ "<td>" + x.results[i].name + "</td>" +
			"</tr>"
		);
	}
	
	//create page selector based on total pages.
	$("#page").empty();
	for(var i = 0; i < x.total_pages; i++) 
	{
		$("#page").append('<option value="'+ (i + 1) + '">' + (i + 1) + "</option>");
		$("#page").val(x.page);
	}
}

function errorCB(data) {
	$("#page").empty();
	$("#page").append('<option value="na">n/a</option>');
	$("#results thead").empty();
	$("#results tbody").empty();
}