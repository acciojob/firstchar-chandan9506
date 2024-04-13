function firstChar(s) {
  // your code here
	let s1 =s.trim();
	if (s1=="") {
		return "";
	}
	else{
		
		return(s1[0]);
	} 
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));

