function create(element) {
    return document.createElement(element)
}

function append(parent, child) {
    return parent.appendChild(child);
}


const list = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=12';

fetch(url)
    .then(function (result) {
        return result.json(); 
    })  
    .then(function (data) {
        let res = data.results;

        return res.map(function (author) {
            let li = create('li');
            let img = create('img');
            let span = create('span');

            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;

            append(li, img);
            append(li, span);
            append(list, li);
        })

    })
    .catch(function (error) {
        return 'ERROR!';
    });

