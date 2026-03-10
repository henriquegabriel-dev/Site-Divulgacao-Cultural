function login (){

    var senha;
    var gmail;

    gmail = document.getElementsByClassName('gmail')[0].value;
    senha = document.getElementsByClassName('senha')[0].value;

    if(senha == "admin" && gmail == "admin"){

        document.getElementById('login_sucesso').style.display = "block";
        document.getElementById('login_erro').style.display = "none";

    }else{
        document.getElementById('login_sucesso').style.display = "none";
        document.getElementById('login_erro').style.display = "block";
    }

}