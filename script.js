const coracao = document.getElementById("coracao");

coracao.addEventListener("click", function() {
	if (coracao.style.backgroundColor === "red") {
		coracao.style.backgroundColor = "pink";
	} else {
		coracao.style.backgroundColor = "red";
	}
});
