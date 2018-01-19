window.onload = function () {
    // 顶部
    let nav = document.querySelector('nav');
    window.onscroll = function () {
        if (window.pageYOffset> 15) {
            nav.style.backgroundColor='#fff';
            nav.style.borderBottomColor='#ccc';
        }else{
            nav.style.backgroundColor='rgba(0,0,0,0.2)';
            nav.style.borderBottomColor='transparent';
        }
    };
    // 轮播图
    let imgs = document.querySelectorAll('.banner-img');
    let banner = document.querySelector(' .picture');
    let spot = document.querySelectorAll('.banner-dian>li');
    let zuo = document.querySelector('.left');
    let you =document.querySelector('.right');
    let now=0; //模拟下标，设置当前状态
    let t = setInterval(move,3000);  //开启时间函数
    function move(type){
        type=type || 'right';
        if(type=='right'){
            now++;
            if(now==imgs.length){
                now=0;
            }
        }else if(type=='left'){
            now--;
            if(now<0){
                now=imgs.length-1;
            }
        }
        // console.log(now);
        imgs.forEach(function(val,index){      //遍历每张图片，进行重置
            val.style.opacity= 0;
            val.classList.remove('active');
            spot[index].style.backgroundColor='rgba(255,255,255,.3)';
        });
        imgs[now].style.opacity=1;                //设置当前状态
        imgs[now].classList.add('active');                //设置当前状态
        spot[now].style.backgroundColor='#92C4CC';




    }
    banner.onmouseover=function(){
        clearInterval(t);
    };
    banner.onmouseout=function(){
        t = setInterval(move,3000);
    };
    spot.forEach(function(val,index){
        val.addEventListener('click',function(){
            imgs.forEach(function(ele,index1){      //遍历每张图片，进行重置
                ele.style.opacity=0;
                spot[index1].style.backgroundColor='rgba(255,255,255,.3)';
            });
            imgs[index].style.opacity=1;                //设置当前状态
            this.style.backgroundColor='#92C4CC';
            now=index;
        });
    });
    zuo.onclick=function(){
        move('left');
    };
    you.onclick=function(){
        move('right');
    };
};

// 返回顶部Top

    let button = document.querySelector('button');
    window.addEventListener('scroll',function () {
        //            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (window.pageYOffset> 500) {
            button.style.opacity=1;
            button.style.width = "45px";
        } else {
            button.style.opacity=0;
            button.style.width = "0";
        }
    });
    button.onclick = function () {
        var t = setInterval(function () {
            window.scrollBy(0,-10);
    //        操作滚动条移动位置
            if(window.pageYOffset==0){
                clearInterval(t);
            }
        },20)

};