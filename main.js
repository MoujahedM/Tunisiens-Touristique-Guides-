// $('.main').css( {
//     'position':'absolute',
//     'top':'0',
//     'left':'0',
//     'z-index':'1',
//     'bottom': '0',
//   'background': 'rgba(0, 0, 0, 0.5)',
//   'color': '#f1f1f1',
//   'width': '100%',
//   'padding': '10px',
//   'font-size': '20px',
// })
// $('#myVideo').css( {
//   'position': 'fixed',
//   'right': '0',
//   'bottom': '0',
//   'min-width': '100%', 
//   'min-height': '100%',
// })
$('.button').css({
  //'background-color': '#FFEBCD',

'color': 'white',  
'padding': '20px 60px',
'text-align': 'center',
'text-decoration': 'none',  
'display': 'inline-block',
'opacity': '0.5'})
var data=[
{place:'Hammamet',
discription:'Hammamet is a town in Tunisia. Thanks to its beaches, it is a popular destination for swimming and water sports and is one of the primary tourist destinations in Tunisia. It is located in the south-eastern section of Cap Bon and is part of the Nabeul Governorate',
imgSrc:['TR/img1/caption.jpg','TR/img1/hammamet.jpg','TR/img1/hammamet2.jpg'],
imgMap:'TR/img/carte_hammamet.png'},
{
	place:'Sousse',
	discription:"Sousse or Soussa is a city in Tunisia, capital of the Sousse Governorate. Located 140 km south of the capital Tunis, the city has 271,428 inhabitants. Sousse is in the central-east of the country, on the Gulf of Hammamet, which is a part of the Mediterranean Sea.",
	imgSrc:['.TR/img2/sousse1.JPG','.TR/img2/sousse2.JPG','.TR/img2/sousse3.JPG'],
	imgMap:'./sousse/sousse4.PNG'
},
{place:'Bizert',
discription:'Bizerte or Bizerta the classical Hippo, is a city of Bizerte Governorate in Tunisia. It is the northernmost city in Africa, located 65 km north of the capital Tunis. It is also known as the last town to remain under French control after the rest of the country won its independence from France.',
imgSrc:['./bizerte/Bizerte_1.JPG','./bizerte/Bizerte_2.JPG','./bizerte/Bizerte_3.JPG'],
imgMap:'./bizerte/carte.PNG'},
{place:'Djerba',
discription:'Djerba, an island off the coast of Tunisia, is known for Mediterranean beaches and whitewashed desert towns influenced by Berber, Arab, Jewish and African cultures. Houmt Souk is the main city, known for its handicraft markets, fishing port and 16th-century fortress, Borj el Kebir. To the south is El Ghriba synagogue, a pilgrimage site for North African Jews.',
imgSrc:['./djerba/djerba1.JPG','./djerba/djerba2.JPG','./djerba/djerba3.JPG'],
imgMap:'./djerba/maps1.PNG'},
{place:'Touzer',
discription:'Tozeur is a city in southwest Tunisia. The city is located northwest of Chott el Djerid, in between this Chott and the smaller Chott el Gharsa. It is the capital of Tozeur Governorate. It was the site of the ancient city and former bishopric Tusuros, which remains a Latin Catholic titular see.',
imgSrc:['./tozer/tozer1.JPG','./tozer/tozer2.JPG','./tozer/tozer3.JPG'],
imgMap:'./tozer/map.JFIF'}]
//localStorage.setItem("data",JSON.stringify(data))

// var state="home"
// if(state==="home"){
// 	$('body').remove

// }
var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}

var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
function storage(array){
	each(array,function(e,i){
		var p= $('<p></p>')
		p.text(e.place)
		var div=$("<div class='place'></div>")
		div.append(p)
		$('#container').append(div)
		
		var disc=$('<p></p>')
		disc.text(e.discription)
		var div2=$("<div class='discription'></div>")
		div2.append(disc)
		$('#container').append(div2)

for(var i=0;i<e.imgSrc.length;i++){
		var img=$("<img>")
        img.attr('src',e.imgSrc)
        var div3=$("<div class='image'></div>")
        div3.append(img)
$('#container').append(div3) }

		var imgMap=$('<img>')
		imgMap.attr('src',e.imgMap)
		var div4=$("<div class='imgMaps'></div>")
		div4.append(imgMap)
		$('#container').append(div4)

		 }

	)
}
storage(data)
