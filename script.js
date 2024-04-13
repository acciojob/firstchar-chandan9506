function firstChar(s) {
  // your code here
	
	if (s=="" || s== " " ) {
		return "";
	}
	else{
		let s1 =s.trim();
		return s1[0];
	} 
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));