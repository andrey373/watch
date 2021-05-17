

let circle = document.querySelector('.circle'),
    arrowHour = circle.querySelector('.circle_hour'),
    arrowMinute = circle.querySelector('.circle_minute'),
    arrowSecond = circle.querySelector('.circle_second');


    let timer = function (){
        let time = new Date(),
            hour = time.getHours(),
            minute = time.getMinutes(),
            second = time.getSeconds();

            arrowHour.style.transform = `rotate(${(hour * 5 * 6) + (minute * 6 / 12)}deg)`;
            arrowMinute.style.transform = `rotate(${minute * 6 + (second * 6 / 60)}deg)`;
            arrowSecond.style.transform = `rotate(${second * 6}deg)`;
    };
    timer();
    setInterval(function () {
        timer();
    })

