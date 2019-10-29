/**
 * Created by Quankehao on 2019/5/10.
 */

function $(id) {
    return document.getElementById(id);    
}

function show(id) {
    $(id).style.display = "block";
}

function hide(id) {
    $(id).style.display = "none";
}
//封装自己的scrollTop
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
            top: document.body.scrollTop
        }
    }
}