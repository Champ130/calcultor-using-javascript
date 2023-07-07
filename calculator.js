    var number=document.getElementById("demo")
    function fun1(a,b){
    number.innerText+=b

    }


    function fun2(){
        number.innerText=eval(number.innerText)

    }

    function fun3(){
        number.innerText=" "
    }

    function fun4(){
        
        number.innerText= Math.trunc(number.innerText/10)
        
        
    }   
