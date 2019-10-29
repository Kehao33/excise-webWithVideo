
/**
 * Created by Quankehao on 2019/5/17.
 */
function getStyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }    
}

//实现多个参数的改变
function animate(ele,json,fn) {
    //先清除定时器
    clearInterval(ele.tiemr);
    ele.tiemr = setInterval(function () {
        //开闭源自
        var bool = true;
        
        //遍历属性和值，分别单独处理json中的键和值
        //attr == k （键） target == json[k](值）
        for(var k in json){
            //四部
            var leader;
            //判断如果属性为opacity的时候特殊获取值
            if(k === "opacity"){
                leader = getStyle(ele,k)*100 || 1; //获取当前的值
            }else{
                leader = parseInt(getStyle(ele,k)) || 0;
            }
            
            //1.获取步长
            var step = (json[k] - leader )/10;
            //2.二次加工步长
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            //3.赋值
            if(k === "opacity"){
                ele.style[k] = leader/100;
                //兼容ie678
                ele.style.filter = "alpha(opacity=" + leader + ")";
                //如果是层级，一次行赋值成功，不需要缓动赋值
            }else if(k === "zIndex"){
                ele.style.zIndex = json[k];
            }else{
                ele.style[k] = leader + "px";
            }
            
            //4.清除定时器
            //不考虑小数的情况下:目标位置和当前位置不相等，就不能清除定时器
            if(json[k] !== leader){
                bool = false;
            }
        }
        console.log(1);
        //只有所有的属性都到了指定位置，bool值才不会变成false；
        if(bool){
            clearInterval(ele.timer);
            //所有程序执行完毕了，现在可以执行回调函数了
            //只有传递了回调函数，才能执行
            if(fn){
                fn();
            }
        }
    },25);
}

//获取屏幕可视区域的宽高
function client(){
    if(window.innerHeight !== undefined){
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    }else{
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}