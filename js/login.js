var cnt = 1;
var jbAry = []

$(document).ready(function(){
	
	$(".list_btn_1").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'a', jbAry );
		if (jbResult!=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 }
			
	});
	}	
		jbAry.push("a");
		
		
		cnt+=1;	
		
}); 
	
	$(".list_btn_2").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'b', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 } 
			 
		});
		}
		
		jbAry.push("b");
		cnt+=1;	

}); 

	$(".list_btn_3").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'c', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 }  
			
		});
		}
		jbAry.push("c");
		cnt+=1;	

}); 	
	$(".list_btn_4").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();

		var jbResult = jQuery.inArray( 'd', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 } 
			 
		});
		}
		jbAry.push("d");
		cnt+=1;	

}); 	
	$(".list_btn_5").click(function(){
		var str= " "
		var list_btn = $(this);
		var tdArr = new Array(); 
		var tr = list_btn.parent().parent();
		var td = tr.children();
		
		var jbResult = jQuery.inArray( 'e', jbAry );
		if (jbResult !=-1){
			alert("이미 신청한 과목(동일과목) 입니다!")
			return false;
		}
		
		
		for(var i=1; i<10 ; i++){
		var sh = $(".temp_"+cnt+" td:nth-child("+i+")"); //1 child(?) 여기 안에는 이수구분  값의 위치 1~9
		 sh.each(function(index, value){
			 if($(value).text()==''){ value.append(td.eq(i-1).text(),);
			 } 
			 
			 
			
		});
		}
		jbAry.push("e");
		cnt+=1;	

}); 	
	
	
	$(".delete_btn_1").click(function(){
		jbAry.pop("a")
		$(".deltd_1").empty();
	});
	
	
	$(".delete_btn_2").click(function(){
		jbAry.pop("b")
		$(".deltd_2").empty();

	});
	
	
	$(".delete_btn_3").click(function(){
		jbAry.pop("c")
		$(".deltd_3").empty();

	});
	
	
	$(".delete_btn_4").click(function(){
		jbAry.pop("d")
		$(".deltd_4").empty();

	});
	$(".delete_btn_5").click(function(){
		jbAry.pop("e")
		$(".deltd_5").empty();

		
	});
	
	

}); 