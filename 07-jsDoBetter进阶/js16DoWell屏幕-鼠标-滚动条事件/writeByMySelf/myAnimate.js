/**
 * Created by Quankehao on 2019/5/10.
 */
//缓动封装动画
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop)/10;
        //随着滚动，offsetTop会逐渐的增大，而step会减少，从而达到缓动的效果
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target - ele.offsetTop) < Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }        
    },25)
}

function scroll() {
    if(window.pageYOffset != null){
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }else {
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollLeft
        }
    }
}
//通过传递不同的参数获取不同的元素
function $(str) {
    var str1 = str.charAt(0);
    if(str1 == "#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else {
        return document.getElementsByTagName(str.slice(1));
    }
}

//功能：给定元素查找他的第一个元素子节点，并返回
function getFirstNode(ele){
    var node = ele.firstChild || ele.firstElementChild;
    return node;
}

//功能：给定元素查找他的最后一个元素子节点，并返回
function getLastNode(ele) {
    return ele.lastChild || ele.lastElementChild;    
}

//功能：给定元素查找他的下一个元素兄弟节点，并返回
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;    
}

//给定元素查找他的上一个兄弟元素节点，并返回
function getPreNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;    
}

//功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
function getEleOfIndex(ele,index) {
    return ele.parentNode.children[index];    
}

//给定元素查找他的所有兄弟元素，并返回数组
function getAllSiblings(ele) {
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;    
}