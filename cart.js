$(function() {
	
	getTable();
	getCnt();

	$(".checkall").change(function(){
		$(".j-check").prop("checked",$(this).prop("checked"));
		getSum();
	});

	$(".j-check").change(function() {
		if ($(".j-check:checked").length==$(".j-check").length){
			$(".checkall").prop('checked',true);
			getSum();
		}else{
			$(".checkall").prop("checked",false);
			getSum();
		}
	});

	$(".inc").click(function() {
		var n=$(this).siblings('.itxt').val();
		n++;
		$(this).siblings('.itxt').val(n);

		var p=$(this).parents('.p-num').siblings('.p-price').html();
		var price="NT$"+(p*n).toFixed(0);
		$(this).parents('.p-num').siblings('.p-sum').html(price)
		getSum();
	});

	$(".dec").click(function() {
		var n=$(this).siblings('.itxt').val();
		if (n == 0) {
			return false;
		}
		n--;
		$(this).siblings('.itxt').val(n);

		var p=$(this).parents('.p-num').siblings('.p-price').html();
		var price="NT$"+(p*n).toFixed(0);
		$(this).parents('.p-num').siblings('.p-sum').html(price)
		getSum();
	});

	$('.itxt').change(function() {
		var n=$(this).val();
		var p=$(this).parents('.p-num').siblings('.p-price').html();
		var price="NT$"+(p*n).toFixed(0);
		$(this).parents('.p-num').siblings('.p-sum').html(price)
		getSum();
	})

	$('.p-action').click(function() {
		$(this).parents('.p-item').remove();
		getSum();
		getCnt();

		var mybody=$("#tbody").html();
		localStorage.shopping=mybody;
	});
});

function getSum() {
	var cnt=0;
	var item=$(".j-check:checked").parents(".p-item");
	item.find(".itxt").each(function(index,element) {
		cnt += parseInt($(element).val()); 
	});
	//console.log(cnt);
	$(".p-amt em").text(cnt);

	var money = 0;
	item.find(".p-sum").each(function() {
		str=$(this).text();
		mstr=str.substring(3);
		money += parseInt(mstr);
	});
	$(".total em").text(money);
	$(".tax em").text(money*1.02);	
	if (money>=2000) {
		$(".tran em").text(0);
	}else{
		$(".tran em").text(200);
	}
	tax1=$(".tax em").text()
	tran1=$(".tran em").text()
	var all0 =0;
	all0 += parseInt(tax1);
	all0 += parseInt(tran1);
	$(".all em").text(all0)
}

function getCnt() {
	var cnt = 0;
	$(".p-item").each(function() {
		cnt++;
	});
	$(".mycnt").text(cnt);
	localStorage.count=cnt;

}
function getTable() {
	var shopping;
	if (localStorage.shopping) {
		shopping=localStorage.shopping
	}else{
		shopping="";
	}
	$("#tbody").html(shopping);
}