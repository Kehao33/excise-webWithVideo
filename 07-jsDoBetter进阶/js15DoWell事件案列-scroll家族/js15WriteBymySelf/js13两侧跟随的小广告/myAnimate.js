/**
 * Created by Quankehao on 2019/5/9.
 */
//缓动动画封装
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        if (Math.abs(target - ele.offsetTop) <= Math.abs(step)) {
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, 25);
}
    //开始封装自己的scrollTop
    function scroll() {
        if(window.pageYOffset != null){
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }else if(document.documentElement === "CSS1Compat"){
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }else{
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
    }else if(str1 == "."){
        return document.getElementsByClassName(str.slice(1));
    }else {
        return document.getElementsByTagName(str);
    }
}