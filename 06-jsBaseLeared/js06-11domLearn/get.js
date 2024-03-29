/**
 * Created by Quankehao on 2019/4/23.
 */
function  getEle(id) {
    return document.getElementById(id);

}
function getFirstNode(ele) {
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}

function getPrevNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}

function getEleOfIndex(ele,index) {
    return ele.parentNode.children[index];
}

//给定元素查找他的所有兄弟元素，返回数组
function getAllSiblings(ele) {
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i = 0; i < arr.length; i++){
        //判断，如果不是传递过来的元素本身，则将其放入新数组中
        if(arr[i] != ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}