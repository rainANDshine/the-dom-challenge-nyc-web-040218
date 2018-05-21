const counter = document.getElementById('counter');
let interval = setInterval(counterAdd, 1000);
function counterAdd() {
    const counterInt = parseInt(counter.innerText);
    counter.innerText = counterInt + 1;
}

document.getElementById('+').addEventListener('click', () => {
    const counterInt = parseInt(counter.innerText);
    counter.innerText = counterInt + 1;
});

document.getElementById('-').addEventListener('click', () => {
    const counterInt = parseInt(counter.innerText);
    counter.innerText = counterInt - 1;
});

document.getElementById('<3').addEventListener('click', () => {
    const likes = document.querySelector('.likes');
    const text = counter.innerText;
    let likesLi = Array.from(likes.children).find(child => child.innerText.startsWith(text));

    if (likesLi) {
        const splited = likesLi.innerText.split(" ");
        splited[4] = parseInt(splited[4]) + 1;
        splited[5] = "times";
        likesLi.innerText = splited.join(" ");
    } else {
        const li = document.createElement('li');
        li.innerText = `${text} has been liked 1 time`;
        likes.appendChild(li);
    }
});

pause = document.getElementById('pause');
pause.addEventListener('click', () => {
    if (pause.innerText === 'pause'){
        document.getElementById('-').disabled = true;
        document.getElementById('+').disabled = true;
        document.getElementById('<3').disabled = true;
        document.getElementById('submit').disabled = true;
        pause.innerText = 'resume';
        clearInterval(interval);
    } else {
        document.getElementById('-').disabled = false;
        document.getElementById('+').disabled = false;
        document.getElementById('<3').disabled = false;
        document.getElementById('submit').disabled = false;
        pause.innerText = 'pause';
        interval = setInterval(counterAdd, 1000);
    }
});

// const form = document.getElementsByTagName('form')[0];
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const input = this.children[0];
//     const p = document.createElement('p');
//     p.innerText = input.value;
//     input.value = "";
//     document.querySelector('.comments').appendChild(p);
// });

document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.getElementById('input');
    const p = document.createElement('p');
    p.innerText = input.value;
    input.value = "";
    document.querySelector('.comments').appendChild(p);
});
