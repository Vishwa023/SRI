
var ele = [];
var animation_classes = ["class_animation_push_1","class_animation_push_2","class_animation_push_3","class_animation_push_4","class_animation_push_5"];
var animation_classes_1 = ["class_animation_pop_1","class_animation_pop_2","class_animation_pop_3","class_animation_pop_4","class_animation_pop_5"];
var button = [];
var colors=["#eadf15","#0f4ae0","#21c11f","#d80fd2","#af1839"];

button = document.querySelectorAll(".button");
ele = document.querySelectorAll(".element");

var cnt = 0;

// for(let i = 0;i<5;i++){
//     ele[i].classList.add("invinsible");
// }

button[0].addEventListener("click",function(){
    if(cnt<=4){
        ele[cnt].classList.remove("invinsible");
        ele[cnt].classList.add(animation_classes[cnt]);
        ele[cnt].classList.remove(animation_classes_1[cnt]);
        ele[cnt].style.backgroundColor=colors[cnt];
        ele[cnt].textContent = Math.ceil(Number((Math.random())*100));
        cnt++;
    }
})


var num = 0;
button[1].addEventListener("click",function(){

    if(cnt>0){
        cnt--;
        ele[cnt].classList.remove(animation_classes[cnt]);
        ele[cnt].classList.add(animation_classes_1[cnt]);
    }


})



