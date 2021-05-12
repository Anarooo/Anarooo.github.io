window.onload = choosePic;

var myPix = new Array("./capatcha/cap1.jpg","./capatcha/cap2.jpg","./capatcha/cap3.jpg","./capatcha/cap4.jpg","./capatcha/cap5.jpg");
var myPixRes = new Array("X8B9A","TK58P","C46U5","HY4NM","RBSKW")
function choosePic() {
	var rand_num = Math.floor((Math.random() * 5) + 1);
	var array_ref = rand_num - 1
	chosenPic = myPix[array_ref]
	chosenPicResult = myPixRes[array_ref]
	document.getElementById("capimg").src=chosenPic
	document.getElementById("capimg").alt=chosenPicResult
}