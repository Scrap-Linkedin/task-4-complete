function auth()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="Nishant123"&&password=="nishant@12"){
        window.location.assign("video.html");
        alert("Login Successful");
    }
    else{
        alert("Invalid Authentication");
    return;    
    }
}