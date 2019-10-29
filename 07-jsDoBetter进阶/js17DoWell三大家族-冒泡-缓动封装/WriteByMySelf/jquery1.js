/**
 * Created by Quankehao on 2019/5/12.
 */
function show(ele){
    ele.style.display = "block";
}
function getStyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else {
        return ele.currentStyle[attr];
    }    
}
//参数变为3个
function animate(ele,json,fn){
    //先清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //开闭原则
        var bool = true;
        //遍历属性和值，分别单独处理json
        //attr == k(键，属性） target == json[k](值）
        for(var k in json){
            //四部
            // console.log(getStyle(ele,k));
            var leader = parseInt(getStyle(ele,k)) || 0; //得到该元素原来的属性值（k此时代表的是属性）并去掉px
            // console.log(leader)

// console.log(leader);
            //1.获取步长
            var step = (json[k] - leader)/10;   //json[k]代表的是要修改后的属性的值
// console.log(json[k]);
            //2.二次加工步长
            step = step > 0 ? Math.ceil(step):Math.floor(step);
            leader = leader + step;
            //3.赋值
            ele.style[k] = leader + "px";
            //4.清除定时器
            //判断：谬报值和当前的差大于步长，就不能跳出玄幻
            //不考虑小数的情况：目标位置和当前位置不相等，就不能清除定时器
            if(json[k] !== leader){
                bool = false;
            }
        }
        // console.log(1);
        //只有所有的属性都到了指定位置，bool值才不会变成fasle；
        if(bool){
            clearInterval(ele.timer);
            //所有程序执行完毕了，就可以执行回调函数了
            //只有传递了回调函数，才能执行
            if(fn){
                fn();
            }
        }
    },1);
}

//获取屏幕可是区域的宽高
function client() {
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
    }else {
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
    
}