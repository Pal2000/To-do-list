//****  select list item****//
$("ul").on("click","li",function(){  /* ul becoz we've to add the new list in ul and "li" in brackets for showing add the new "li"*/ 
	$(this).toggleClass("completed");
});

/****  click on span to delete to do****/

/* when we click span element 'x' becoz it is inside list so that list item also fade out that's why we use stop propogation 
One more thing after fade Out we know that item is not deleted permamently that's why we use remove and this is a removing
 of entire list item [ this in 3rd line represents parent of that span i.e. corresponding list item]...*/

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


/******* add new list *********/

/*  event is an object through which we invoke any inbuilt function like in this we use 'which' for checking the character code 
So, in this case when enter key is press whose code is 13 clear the input field and add the written text to the last of the list*/

$("input[type='text']").keypress(function(event){
	if(event.which===13)
	{
		var todotext=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span> " + todotext + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(400);
});