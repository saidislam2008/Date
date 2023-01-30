// let day = new Date().getDate()      // 30
// let month = new Date().getMonth()
// month = month + 1
// if(month < 10){
//     month = '0' + month
// }
// let year = new Date().getFullYear()     // 2023
// console.log(day + "." + month + "." + year);

// let data = new Date().toLocaleDateString()
// console.log(data);

// let hours = new Date().getHours()
// console.log(hours , "hours");

// let min = new Date().getMinutes()
// console.log(min);

// let sec = new Date().getSeconds()
// console.log();

// console.log(hours + "." + min + "." + sec);

let time = new Date().toLocaleTimeString()
console.log(time);

let hours = new Date().getHours()
let text = document.querySelector('.text')
if(hours > 6 && hours < 12){
    text.innerHTML = "Доброе утро"
    document.querySelector('.moon').style.background = 'yellow'
} else if(hours < 17){
    text.innerHTML = "Доброе день"
    document.querySelector('.moon').style.background = 'yellow'
} else if(hours < 24){
    text.innerHTML = "Добрый вечер"
    document.querySelector('.moon').style.background = 'white'
    document.body.style.background = 'black'
    text.style.color = 'white'
} else if(hours > 24 && hours < 6){
    text.innerHTML = "Доброй ночи"
    document.querySelector('.moon').style.background = 'white'
    document.body.style.background = 'black'
    text.style.color = 'white'
}

let month = new Date().getMonth()
let img = document.querySelector('img')
month = month + 1

if(month == 3 || month == 4 || month == 4){
    img.src = 'https://natworld.info/wp-content/uploads/2018/02/Vremja-goda-vesna.jpeg'
} else if(month == 6 || month == 7 || month == 8){
    img.src = 'https://aif-s3.aif.ru/images/011/707/29d7043dced25e5f45e701436bf1e984.jpg'
} else if(month == 9 || month == 10 || month == 11){
    img.src = 'https://interesnyefakty.org/wp-content/uploads/Interesnye-fakty-pro-osen.jpg'
} else if(month == 12 || month == 1 || month == 2){
    img.src = 'https://emosurff.com/i/0002gg0wgpyu/rabstol_net_winter_52.jpg'
}