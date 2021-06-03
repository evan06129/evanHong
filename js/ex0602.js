$(function(){
	//let lang=document.querySelector('html').lang;
	let lang=$("html").attr("lang");
	console.log(lang);
	document.getElementById("myform").select.onchange=function() {
		location.href=document.getElementById("myform").select.value;
	}

	$(".slidebar h3").click(function() {
		$(this).next().toggle('hidden');
	});
});