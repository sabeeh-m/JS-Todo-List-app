
var string1="<p> "
var string2="</p>"
var input=$("input")
var todostatement= " "+ $("input").val(); +" ";
var paragraph=$("p");
var trash=$("i");

$(".list").delegate("p","click", function(){

$(this).toggleClass("clicked")


})

$(".list").delegate("p", "mouseenter", function(){
  
	
	$(this).addClass("current");
	$(this).prepend("<i class='fa fa-trash' aria-hidden='true;'></i>");
	
	$("p").delegate("i","click",function(){

		$("p").remove(".current");


	})


})
$(".list").delegate("p","mouseleave",(function(){

	$(".list i").remove();
	$(this).removeClass("current");



}))


function createstring(){
	todostatement=input.val();
	var query=  string1+todostatement+string2;
	return query;


}

function addelement(){

query=createstring();



if(event.which===13){


$(".list").append(query)
input.val("");
}}

input.on("keypress",addelement)


$("#show").click(function(){

$("#inputbar").toggleClass("nodisplay")

})
/*trash.on("click",function(){

	$(this).remove();



})*/
