
var ele=[];
var array = [];
ele = document.querySelectorAll(".array_element");
find = document.querySelectorAll(".button");

for(var i = 0;i<ele.length;i++){
    array[i] = ele[i].textContent;
}

find[0].addEventListener("click",function(){
    var target = document.querySelectorAll(".target")[0].value;

    if(target){

        for(let  i =0;i<ele.length;i++){
            ele[i].style.backgroundColor = "rgb(149, 3, 165)";
        }

        document.querySelectorAll("#index")[0].textContent = "finding...";
        var l = 0,r = 9,mid = Math.floor((l+r)/2);
        ele[l].style.backgroundColor = "green";
        ele[r].style.backgroundColor = "green";
        ele[mid].style.backgroundColor = "red";
        BS(target,l,r);
    }
});


function BS(target,l,r){ 
    if(l>r)
    {
        for(let i  =0;i<=9;i++){
            ele[i].style.backgroundColor = "rgb(149, 3, 165,.3)";
        }
        document.querySelectorAll("#index")[0].textContent = "Not Found";
        return;
    }
    setTimeout(function(){
        var mid = Math.floor((l+r)/2);
        ele[l].style.backgroundColor = "rgb(149, 3, 165)";
        ele[r].style.backgroundColor = "rgb(149, 3, 165)";
        ele[mid].style.backgroundColor = "rgb(149, 3, 165)";
        if(Number(array[mid])<Number(target)){
            l = mid + 1;
            mid = Math.floor((l+r)/2);
            ele[l].style.backgroundColor = "green";
            ele[r].style.backgroundColor = "green";
            ele[mid].style.backgroundColor = "red";
            for(let i = 0;i<l;i++){
                ele[i].style.backgroundColor = "rgb(149, 3, 165,.3)";
            }
            BS(target,l,r);
        }
        else if(Number(array[mid])>Number(target)){
            for(let i = mid;i<=r;i++){
                ele[i].style.backgroundColor = "rgb(149, 3, 165,.3)";
            }
            r = mid-1;
            mid = Math.floor((l+r)/2);
            ele[l].style.backgroundColor = "green";
            ele[r].style.backgroundColor = "green";
            ele[mid].style.backgroundColor = "red";
            BS(target,l,r);
        }
        else {
            for(let i  =0;i<=9;i++){
                if(i == mid){
                    continue;
                }
                ele[i].style.backgroundColor = "rgb(149, 3, 165,.3)";
            }
            ele[mid].style.backgroundColor = "orangered";
            flag=1;
            document.querySelectorAll("#index")[0].textContent = mid;
        }
    },3000);
}





