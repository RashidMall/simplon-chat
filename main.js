/* var socket = io.connect('http://localhost:8080');

var username = prompt('Enter your name:');
socket.emit('newClient', username);
document.title = username + " - " + document.title;

socket.on('message', function (data) {
    insertMessage(data.username, data.message);
})

socket.on('newClient', function (username) {
    var newChild = '<p><em>' + username + ' is connected!</em></p>';
    $('#section_chat').prepend(newChild);
})

$('#form_chat').submit(function () {
    var message = document.getElementById('message').value;
    socket.emit('message', message);
    insertMessage(username, message);
    document.getElementById('message').value = '';
    document.getElementById('message').focus();
    return false;
})

function insertMessage(username, message) {
    var newChild = '<p><strong>' + username + '</strong>: ' + message + '</p>';
    $('#section_chat').prepend(newChild);
} */