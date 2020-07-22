let discount = document.querySelector("#Discount");
let mUp = document.querySelector("#markup");
let vat = document.querySelector("#VAT");
let mdValue = document.querySelectorAll(".md");
let output = document.querySelectorAll(".output");
let mdAdjust = document.getElementById("mdAdjust");

mdArr = [];
for(i = 0; i < mdValue.length; i++){
		a = parseFloat(mdValue[i].textContent)/100;
		mdArr.push(a);
} 



function calculation(){
	for(i = 0; i < mdArr.length; i++){
		x = ((mUp.value/(1+vat.value/100)*(1-mdArr[i]))-(1*(1-discount.value/100)))/(mUp.value/(1+vat.value/100)*(1-mdArr[i]));
		if(isFinite(x)){
		output[i].textContent = (x*100).toFixed(1) + "%";
	 	if(x<0.37){
			output[i].style.backgroundColor = "#d12e11";
		} else if(x>0.44){
			output[i].style.backgroundColor = "#40a125";
		} else{
			output[i].style.backgroundColor = "#d9b814";
		}
		}
	}
}


discount.addEventListener("change", function(){
	calculation();
});

vat.addEventListener("change", function(){
	calculation();
});

mUp.addEventListener("change", function(){
	calculation();
});
mdAdjust.addEventListener("change", function(){
	if(mdAdjust.value == ""){
		mdArr.push(mdAdjust.value/100);
		calculation();
	} else {
		mdArr[12] = mdAdjust.value/100;
		calculation(mdArr[12]);
	}
	
})
 