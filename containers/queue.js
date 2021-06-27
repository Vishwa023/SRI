
var ele = [];
var animation_classes = ["class_animation_push_1","class_animation_push_2","class_animation_push_3","class_animation_push_4","class_animation_push_5"];
var animation_classes_2 = ["class_animation_qpop_1","class_animation_qpop_2","class_animation_qpop_3","class_animation_qpop_4","class_animation_qpop_5"];
var queue_classes = ["queue_classes_1","queue_classes_2","queue_classes_3","queue_classes_4","queue_classes_5"];
var button = [];
var colors=["#eadf15","#0f4ae0","#21c11f","#d80fd2","#af1839"];

button = document.querySelectorAll(".button");
// ele = document.querySelectorAll(".element");
ele1 = document.querySelectorAll(".element_queue");

var cnt1 = 0;

var index = [],num = 0,csz = 0,ac=[];


button[0].addEventListener("click",function(){
    if(csz<=4){

        for(let i = 0;i<5;i++){
            ele1[cnt1].classList.remove(queue_classes[i]);
            ele1[cnt1].classList.remove(animation_classes[i]);
            ele1[cnt1].classList.remove("invinsible");
        }

        ele1[cnt1].classList.remove(animation_classes_2[0]);
        ele1[cnt1].classList.add(animation_classes[csz]);
        ele1[cnt1].style.backgroundColor=colors[cnt1];
        ele1[cnt1].textContent = Math.ceil(Number((Math.random())*100));
        index[csz] = cnt1;
        cnt1++;
        csz++;
    }
    cnt1%=5;
})

var cnt2=0;
button[1].addEventListener("click",function(){
    cnt2 = 0;
    if(csz>=1){
        ele1[index[0]].classList.remove(animation_classes[0]);
        ele1[index[0]].classList.add(animation_classes_2[0]);

        for(let i = 1;i<csz;i++){
            ele1[index[i]].classList.add(queue_classes[i]);
        }

        for(let i = 1;i<=4;i++){
            index[i-1] = index[i];
        }

        csz--;
    }
    console.log(cnt1);
})



