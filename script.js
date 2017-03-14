// Function: creates a new paragraph and append it to the bottom of the HTML body.

function bigappend(a) {
    var i = 0;
    var div;
    var html;

    for (i = 0; i < a.length; i += 1) {
        html = [
            '<img class="icon" src="./assets/images/', a[i].is_up, '.ico"><h2>', a[i].name, '</h2>',
            '<p><a target="_blank" href="', a[i].url,'"><em>', a[i].url, '</a></em></p>',
            '<p>Text searched: ', a[i].text, '</p>',
        ].join('');

        div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.innerHTML = html;
        document.getElementById('sites').appendChild(div);
    }
}


function getApiVars() {
    var r = new XMLHttpRequest();
    r.open('GET', 'http://whats-up-api.herokuapp.com/collections/1/webpages', false);
    r.send();
    var api_vars = JSON.parse(r.responseText);
    return api_vars;
}

window.onload = function() {
    bigappend(getApiVars());
};
