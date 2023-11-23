let body = document.body;
// document.body.innerHTML ='';

let title = document.createElement('title');
title.innerHTML = 'Homework 8';

let metaUlf8 = document.createElement('meta');
metaUlf8.setAttribute('charset', 'UTF-8');

let lang = document.querySelector('html');
lang.setAttribute('lang', 'en');

document.head.appendChild(title);
document.head.appendChild(metaUlf8);


let h1 = document.createElement('h1');
h1.innerHTML ='Choose Your Option'
h1.className = 'header_title';

body.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p.className = 'header_text';

body.appendChild(p);


let div = document.createElement('div');
div.className = 'main';
body.appendChild(div)




let div1 = document.createElement('div');
div1.className = 'left';
div.appendChild(div1)

let div2 = document.createElement('div');
div2.className = 'right';
div.appendChild(div2);

let p1 = document.createElement('p');
p1.className = 'left_header';
p1.innerHTML = 'FREELANCER';
div1.appendChild(p1);

let h2 = document.createElement('h2');
h2.className = 'left_h2';
h2.innerHTML = 'Initially designed to';
div1.appendChild(h2);

let p2 = document.createElement('p');
p2.className = 'left_text';
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div1.appendChild(p2);

let button1 = document.createElement('button');
button1.className = 'btn_left';
button1.innerHTML = 'START HERE';
div1.appendChild(button1);




let p3 = document.createElement('p');
p3.className = 'right_header';
p3.innerHTML = 'STUDIO';
div2.appendChild(p3);

let h3 = document.createElement('h2');
h3.className = 'right_h2';
h3.innerHTML = 'Initially designed to';
div2.appendChild(h3);

let p4 = document.createElement('p');
p4.className = 'right_text';
p4.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div2.appendChild(p4);

let button2 = document.createElement('button');
button2.className = 'btn_right';
button2.innerHTML = 'START HERE';
div2.appendChild(button2);


let style = document.createElement('style');
style.innerHTML = `

    body {
        padding: 10%;
        margin: 0;
        width: 1280px;
        height: 880px;
    }

    .header_title {
        text-align: center;
    }
    .header_text {
        text-align: center;
        color: gray;
    }



    .main {
                display: flex;
                width: 600px;
                padding-top: 55px;
                margin: auto;
                text-align: center;
        
            }

    .left {
        display: flex;
        flex-direction: column;
        padding: 50px;
        background-color: #fff;
        border: 1px solid rgba(232, 233, 237, 1);

    }

    .left_header {
        color: gray;
    }

    .left_text {
        color: gray;
    }


    .right {
        display: flex;
        flex-direction: column;
        padding: 50px;
        background-color: #8F75BE;
    }

    .right_header {
        color: yellow;
    }

  



    .btn_left {
                padding: 8.5px 14.5px;
                border: 3px solid #FFC80A;
                border-radius: 30px;
                width: 120px;
                align-self: center;
                background-color: white;
            }

    .btn_right {
                padding: 8.5px 14.5px;
                border: 3px solid #FFC80A;
                border-radius: 30px;
                width: 120px;
                align-self: center;
                background-color: #8F75BE;
                color: yellow;
            }



`


document.head.appendChild(style);



