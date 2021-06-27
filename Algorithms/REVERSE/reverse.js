var ele=[];
var array = [];
ele = document.querySelectorAll(".array_element");
var button = document.querySelectorAll(".button_container");

for(var i = 0;i<ele.length;i++){
    array[i] = ele[i].textContent;
}

button[0].addEventListener("click",function(){
    // ele[1].classList.add("class_move_right_2");
    // ele[2].classList.add("class_move_right_3");
    // ele[3].classList.add("class_move_right_4");
    // ele[4].classList.add("class_move_right_5");
    // ele[5].classList.add("class_move_left_5");
    // ele[6].classList.add("class_move_left_4");
    // ele[7].classList.add("class_move_left_3");
    // ele[8].classList.add("class_move_left_2");
    // ele[9].classList.add("class_move_left_1");
    
    reverse(0,9)
    
});

function reverse(x,y){

    if(x>=y){
        return;
    }

    setTimeout(function(){
        let xx = x+1;
        ele[x].classList.add("class_move_right_" + xx);
        ele[y].classList.add("class_move_left_" + (10-y));
        reverse(x+1,y-1);
    },2000);
}