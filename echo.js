function echoname() {
    var fname = document.getElementsByName('firstname')[0].value;
    var lname = document.getElementsByName('lastname')[0].value;
    document.getElementById('fullname').innerHTML = fname + ' ' + lname;
}