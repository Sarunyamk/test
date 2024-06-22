function submitData() {
    let firstNameD = document.querySelector('input[name=FirstName]')
    let lastnameD = document.querySelector('input[name=LastName]')
    let emailD = document.querySelector('input[name=email]')
    let passwordD = document.querySelector('input[name=password]')
    let repasswordD = document.querySelector('input[name=re-password]')






    let userData = {
        firstname: firstNameD.value,
        lastname: lastnameD.value,
        email: emailD.value,
        password: passwordD.value,
        re_password: repasswordD.value,





    }
    console.log('submit data', userData)

}