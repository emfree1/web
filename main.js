let number = document.querySelector('.count');
let numberTop = number.getBoundingClientRect().top;
let start = +number.innerHTML;
let end = +number.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if(window.pageXOffset > numberTop - window.innerHeight /
            2) {
            this.removeEventListener('scroll', onscroll);
            let interval = setInterval (function(){
                number.innerHTML = ++start;
                if(start == end){
                    clearInterval(interval)
                }
            }, 5);

            }

    });