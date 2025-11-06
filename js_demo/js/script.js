function askName() {
    var p = prompt('Please enter your name in the box below.')
    if (p != null) {
        document.getElementById('ask-name').innerHTML = 'Please use the proper format and try again.'
    }
}