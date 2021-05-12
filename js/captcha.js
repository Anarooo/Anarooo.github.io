function captchaCheck() {
	var captchaText = document.getElementById("capimg").alt;
	var userInput = document.getElementById("captcha_result").value;
	if(captchaText === userInput) {
		alert("Captcha Correct, redirecting.");
		window.location = "https://anarooo.github.io/index.html" ;
		}
	else {
		alert("Capatcha Incorrect, please try again.");
		document.location.reload(true)
		}
}
