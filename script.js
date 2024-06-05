function calculateLove(){

    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
  
    if(name1===""||name2===""){
        alert("Please enter both names");
        return;

    }
    
    const loverPercentage= Math.floor(Math.random() *101);

    const result= document.getElementById("result");

    result.innerHTML=`${name1} and ${name2}'s Love percentage: ${loverPercentage}%` ;

    if(loverPercentage  < 30){
        result.innerHTML += "<br> Not a Great match. Keep looking!";
    } else if (loverPercentage < 70){
        result.innerHTML +=  "<br> There is a potential. Give it a try!"; 
    } else{
        result.innerHTML += "<br> Great match! Love is in the air!";
    }

}