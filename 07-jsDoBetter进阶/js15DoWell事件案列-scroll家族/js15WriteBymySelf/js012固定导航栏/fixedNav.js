/**
 * Created by Quankehao on 2019/5/9.
 */
function scroll() {
    //自己封装的scrollTop
    if(window.pageYOffset !== undefined){
        //因为wendow.pageYOffset默认值是0，所以需要进行判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode == "CSS1Compat"){
        //标准浏览器，来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top : document.documentElement.scrollTop
        }
    }else {
        //没有申明DTD
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}
    
    //缓动动画封装
    function animate(ele,target){
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = (target - ele.offsetLeft)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            ele.style.left = ele.offsetLeft + step + "px";
            if(Math.abs(target-ele.offsetLeft) < Math.abs(step)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }            
        },18);
    }
    