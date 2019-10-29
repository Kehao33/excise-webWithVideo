/**
 * Created by Quankehao on 2019/5/11.
 */

function show(ele){
    ele.style.display = "block";    
}

function hide(ele) {
    ele.style.display = "none";    
}
//缓动动画封装
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop)/10;
        step = step > 0 ?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target - ele.offsetTop) < Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }        
    },25);
}

function scroll() {
    if(window.pageYOffset !== null){
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if (document.compatMode === "CSS1Compat"){
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }else {
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }    
}

function $(str) {
    var str1 = str.charAt(0);
    if(str1 === "#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else {
        return document.getElementsByTagName(str);
    }
}

function getFirstNode(ele) {
    return ele.firstElementChild || ele.firstChild;    
}

function getLastNode(ele){
    return ele.lastChild || ele.lastElementChild;
}

function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

function getPrevNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;    
}

function getEleOfIndex(ele,index) {
    return ele.parentNode.children[index];    
}

function getAllSiblings(ele){
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i = 0; i < arr.length; i++){
        //判断，如果不是传递过来的元素本身，那么添加到数组中
        if(ele !== arr[i]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}