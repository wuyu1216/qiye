$(function () {
    let text = $('textarea')[0];
    let spans = $('span');
    let maxLength=100;
    let btn = $('button')[0];
    let input = $('input')[0];
    let ul = $('.option')[0];
    text.addEventListener('keyup',function () {
        let length = this.value.length;
        spans[0].innerText=length;
        spans[1].innerText=maxLength-length;

    });
    btn.onclick = function () {
        let value = text.value;
        let title =input.value;
        text.value='';
        input.value='';
        spans[0].innerText=0;
        spans[1].innerText=maxLength;

        ul.innerHTML=`
                 <li>
                    <div class="box">
                         <img src="img/t1.jpg" alt="">
                    </div>
                    <div class="content">
                        <h3>${title}</h3>
                        <p>${value}</p>
                    </div>

                </li>`+ul.innerHTML;
    }
});
