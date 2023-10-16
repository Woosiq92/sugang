
function checkId(){
	if(document.getElementById("stuno").value==""){
		alert("아이디를 입력해주세요")}
	if (document.getElementById('pwd').value==""){
		alert("비밀번호를 입력해주세요")
		return;}
	
	else {
		alert(document.getElementById("stuno").value+"님 반갑습니다.")
	
	
	return(location.href='registration.html')
		
	}
	};

	
