console.log($)

console.log('hello world')

//Typically you DO NOT want to put your API key 
// in your javascript
// var apikey = '11d31a2dfc46476891020add38926bea'
// var fullUrl = baseUrl + apikey

//var url = 'http://openstates.org/api/v1/legislators/?state=ks&apikey=11d31a2dfc46476891020add38926bea'
var url = 'https://congress.api.sunlightfoundation.com/legislators?&apikey=11d31a2dfc46476891020add38926bea'

var congressionalPromise = $.getJSON(url)

var legislatorToHTML = function(legislatorObject){
	var newString = '<div class="legislatorContainer"><p class="legislatorName">'
		newString += legislatorObject.first_name + " " +legislatorObject.last_name 
		newString += '</p><p class="legislatorPartyState">'+ "Rep. -- " +legislatorObject.party
		newString += " " + "-" +legislatorObject.state
		newString += '</p><ul class= "listOfLegislators"><li class="legislatorEmail">'
		newString += "Email: " +legislatorObject.oc_email+'</li><li class="legislatorWebsite">'
		newString += "Website: " +legislatorObject.website+'</li><li class="legislatorFacebook">'
		newString += "Facebook: " +legislatorObject.facebook_id+'</li><li class="legislatorTwitter">'
		newString += "Twitter: " +legislatorObject.twitter_id+'</li></ul><p class="legislatorTermEnd">'
		newString += "Term End Date: "+legislatorObject.term_end+'</p></div>'
	return newString
}

var handleData = function(resultObject){
	console.log(resultArray)
	var resultArray = resultObject['results']
	var htmlString = '' 

	for(var i=0; i<resultArray.length; i++){
		var legislatorObject = resultArray[i]
		htmlString += legislatorToHTML(legislatorObject)		
	}

	var containerEl = document.querySelector("#container")
	containerEl.innerHTML = htmlString
}

congressionalPromise.then(handleData)
