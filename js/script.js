'use strict';

const btn = document.querySelector('.button');
console.log(btn);
const div = document.createElement('div');
console.log(div);

// btn.onclick = function () {
//     btn.textContent = 'Fuck you :)';
//     btn.style.color = 'red';
//     btn.style.borderRadius = '10px';
//     btn.classList.remove('button-head');
//     btn.classList.add('button-main');
// };


btn.addEventListener('click', () => {
    const answer = prompt('Are you sure?', 'Yes, I am');

    if (answer) {
        div.innerHTML = `
                <div class="form">
                    <h2 class="title">Insert your data</h2>
                    <input class="name" type="text" name="name" placeholder="Alex Horbenko" autofocus>
                    <input class="tel" type="tel" placeholder="(###) ###-##-##" autofocus>
                    <button onclick ='alert("Well done!")' class=" button button-head">Send form</button>
                </div>
        `
    } else {
        btn.textContent = 'Fuck you :)';
        btn.style.color = 'red';
        btn.style.borderRadius = '10px';
        btn.classList.remove('button-head');
        btn.classList.add('button-main');
        // alert('Have a nice day');
        setTimeout(function () {
            btn.classList.remove('button-main');
            btn.classList.add('button-head');
            btn.textContent = 'Contact us';
            btn.style.color = 'white';
            btn.style.borderRadius = '0px';
        }, 2000);
    }

    setTimeout(function () {
        div.classList.add('hide');
    }, 3000);
});

document.querySelector('.fourth').append(div);

