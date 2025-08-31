function validateRegistrationForm()
{
    const username=document.getElementById('username').Value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const Confirmpassword=document.getElementById('Confirmpassword').value;

    if(username === '' || email === '' || password === '' || Confirmpassword === '')
{
        alert('All fields are required');
        return false;

}
const emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
if(!emailpattern.test(email))
{
    alert('please enter a valid email address.');
    return false;
}
if(!password !== Confirmpassword)
{
        alert('passwords do not match .');
        return false;
}
return true;
}