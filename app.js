function displaysInput(){

    var $divWrapper = document.createElement('div');
    var $inputEmail = document.createElement('INPUT');
    var $inputPassword = document.createElement('INPUT');
    var btn = document.createElement('INPUT');

    $inputEmail.setAttribute("type", "email");
    $inputEmail.setAttribute("id", "submit");
    $inputEmail.setAttribute("value", "example@email.com");

    $inputPassword.setAttribute("type", "password");
    $inputPassword.setAttribute("id", "submit");
    $inputPassword.setAttribute("value", "******");
    
    btn.setAttribute("type", "submit");
    btn.setAttribute("class", "submit-btn");
    btn.setAttribute("value", "Save");
    $divWrapper.setAttribute("class", "div-group")
    $divWrapper.appendChild($inputEmail);
    $divWrapper.appendChild($inputPassword);
    $divWrapper.appendChild(btn);

    document.body.appendChild($divWrapper);
}

    