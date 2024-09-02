function validationForm(){

    document.getElementById('errorMessage').innerHTML = ''
    let userName = document.getElementById('inputUserName').value.trim()

    if (userName === '' || userName.length < 3 || !/\s/.test(userName)){
        document.getElementById('errorMessage').innerHTML = "Please enter your name like this 'Nagla Fathi'"
        return false
    }
    let userEmail = document.getElementById('inputUserEmail').value.trim()
    let atposn = userEmail.indexOf("@");   
    let dotposn = userEmail.lastIndexOf(".");  
    if (userEmail === '' || atposn < 1 || dotposn - atposn < 2){
        document.getElementById('errorMessage').innerHTML = "Please enter a valid email like this 'username@gmail.com' "
        return false
    }

    let userProject = document.getElementById('inputUserProject').value.trim()
    if(userProject === '' || userProject.length < 5){
        document.getElementById('errorMessage').innerHTML = 'Please enter at least five letters...'
        return false
    }
    return (true);
}
