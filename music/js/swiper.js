window.addEventListener('load',function(){
    var arrow_r = this.document.querySelector('.arrow-r');
    var arrow_l = this.document.querySelector('.arrow-l');
    var recom_list1 = this.document.querySelector('.recom_list1');
    var swiper = this.document.querySelector('.swiper')
    var swiperWidth = swiper.offsetWidth;

    recom_list1.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    recom_list1.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })

    
    var div = this.document.querySelector('.circle')
    var ul = document.querySelector('.swiper ul');

    for (var i = 0; i < 3; i++) {
        var a = document.createElement('a');
        div.appendChild(a);

        // 给每个小园圈自定义一个属性index
        a.setAttribute('index', i);

        a.addEventListener('click', function () {
            for (var i = 0; i < div.children.length; i++) {
                div.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            circle = index;
            num = index;
            antimates(ul, -index * swiperWidth-20);

        })
    }
    div.children[0].className = 'current';


    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {

        
        if (flag) {
            flag = false;
            if (num == 2) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            antimates(ul, -num * swiperWidth - 20, function () {
                flag = true;
            });

            circle++;
            if (circle == div.children.length) {
                circle = 0;
            }
            circleChange();
        }
    })
    

    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = 3;
                ul.style.left = -num * swiperWidth + 'px';
            }
            num--;
            antimates(ul, -num * swiperWidth, function () {
                flag = true;
            });

            circle--;
            circle = circle < 0 ? div.children.length - 1 : circle;

            circleChange();
        }

    })
    function circleChange() {
        for (var i = 0; i < div.children.length; i++) {
            div.children[i].className = '';
        }
        div.children[circle].className = 'current';
    }
    
})