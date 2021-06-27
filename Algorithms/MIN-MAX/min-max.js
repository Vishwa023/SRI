var numbers = document.querySelectorAll(".number");
var numbers1 = document.querySelectorAll(".number1");

var mn = 10000;
var ind = -1;

var mx = -100000;
var ind1 = -1;

function clr(i){
	setTimeout(function(){
		if(i>0){
			if(ind!=(i-1))
			numbers[i-1].style.background = 'green';
			if((i+1) == numbers.length){
				setTimeout(function(){
					numbers[i].style.background = 'green';
					numbers[ind].style.background = 'orange';
					$("#runAgain").attr("disabled",false);
				},1000);
			}
		}
		numbers[i].style.background = 'yellow';
		document.querySelector("#cr").textContent = Number(numbers[i].textContent);
		if(mn>Number(numbers[i].textContent)){
			mn =  Number(numbers[i].textContent);
			document.querySelector("#mn").textContent = mn;
			numbers[i].style.background = "orange";
			if(ind!=-1)
			numbers[ind].style.background = "green";
			ind = i;
		}

	}, 1500*(i+1));
}

function clr1(i){
	setTimeout(function(){
		if(i>0){
			if(ind1!=(i-1))
			numbers1[i-1].style.background = 'green';
			if((i+1) == numbers1.length){
				setTimeout(function(){
					numbers1[i].style.background = 'green';
					numbers1[ind1].style.background = 'orange';
					$("#runAgain1").attr("disabled",false);

				},1000);
			}
		}
		numbers1[i].style.background = 'yellow';
		document.querySelector("#cur_max").textContent = Number(numbers1[i].textContent);
		if(mx<Number(numbers1[i].textContent)){
			mx =  Number(numbers1[i].textContent);
			document.querySelector("#mx").textContent = mx;
			numbers1[i].style.background = "orange";
			if(ind1!=-1)
			numbers1[ind1].style.background = "green";
			ind1 = i;
		}

	}, 1500*(i+1));
}



$("#runAgain").on("click",function () {
	mn = 10000000000000;
	document.querySelector("#mn").textContent = "INF";
	document.querySelector("#cr").textContent = "INF";
	runAgain();
	$("#runAgain").attr("disabled",true);
})
$("#runAgain1").on("click",function () {
	mx = -10000000000000;
	document.querySelector("#mx").textContent = "-INF";
	document.querySelector("#cur_max").textContent = "-INF";
	runAgain1();
	$("#runAgain1").attr("disabled",true);
})

function runAgain() {
	for(let i  =0;i<numbers.length;i++){
		numbers[i].style.background = 'green';
		clr(i);
	}
}

function runAgain1() {
	for(let i  =0;i<numbers1.length;i++){
		numbers1[i].style.background = 'green';
		clr1(i);
	}
}

// runAgain();
// runAgain1();







