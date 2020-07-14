
function resetAllFields(){
    
    $("#horseInput1").val("") ;
    $("#horseInput2").val("") ;
    $("#horseInput3").val("") ;
    $("#horseInput4").val("") ;
    $("#horseInput5").val("") ;
    $("#horseInput6").val("") ;
    
    $("#oddsHorse1").val("") ;
    $("#oddsHorse2").val("") ;
    $("#oddsHorse3").val("") ;
    $("#oddsHorse4").val("") ;
    $("#oddsHorse5").val("") ;
    $("#oddsHorse6").val("") ;
    

    $("#betAmount1").text("") ;
    $("#betAmount2").text("") ;
    $("#betAmount3").text("") ;
    $("#betAmount4").text("") ;
    $("#betAmount5").text("") ;
    $("#betAmount6").text("") ;

    $("#backAmount1").text("") ;
    $("#backAmount2").text("") ;
    $("#backAmount3").text("") ;
    $("#backAmount4").text("") ;
    $("#backAmount5").text("") ;
    $("#backAmount6").text("") ;
        

    $("#betProfit1").text("") ;
    $("#betProfit2").text("") ;
    $("#betProfit3").text("") ;
    $("#betProfit4").text("") ;
    $("#betProfit5").text("") ;
    $("#betProfit6").text("") ;
    

    $("#percentageProfit1").text("") ;
    $("#percentageProfit2").text("") ;
    $("#percentageProfit3").text("") ;
    $("#percentageProfit4").text("") ;
    $("#percentageProfit5").text("") ;
    $("#percentageProfit6").text("") ;
    
    
}

function calculateDutching(){
    //Horse Odds Input

   var oddsHorse1 = JSON.stringify(Number($("#oddsHorse1").val())) ;
   var oddsHorse2 = JSON.stringify(Number($("#oddsHorse2").val())) ;
   var oddsHorse3 = JSON.stringify(Number($("#oddsHorse3").val())) ;
   var oddsHorse4 = JSON.stringify(Number($("#oddsHorse4").val())) ;
   var oddsHorse5 = JSON.stringify(Number($("#oddsHorse5").val())) ;
   var oddsHorse6 = JSON.stringify(Number($("#oddsHorse6").val())) ;

   var nameOfHorse1 = JSON.stringify(Number($("#horseInput1").val())) ;
   var nameOfHorse2 = JSON.stringify(Number($("#horseInput2").val())) ;
   var nameOfHorse3 = JSON.stringify(Number($("#horseInput3").val())) ;
   var nameOfHorse4 = JSON.stringify(Number($("#horseInput4").val())) ;
   var nameOfHorse5 = JSON.stringify(Number($("#horseInput5").val())) ;
   var nameOfHorse6 = JSON.stringify(Number($("#horseInput6").val())) ;
   

   //Profit in %
   var profitPercHorse1 = 0 ;
   var profitPercHorse2 = 0 ;
   var profitPercHorse3 = 0 ;
   var profitPercHorse4 = 0 ;
   var profitPercHorse5 = 0 ;
   var profitPercHorse6 = 0 ;
   

   var targetAmount =  JSON.stringify(Number($("#targetAmount").val())) ;
   if(targetAmount <=0){
      alert("Enter the Total Wager correctly!") ;
   }
   
   if((oddsHorse1 !== 0 && oddsHorse1 > 0) && targetAmount > 0) {
      
      $("dutchAmount").val(targetAmount) ;

      profitPercHorse1 = (1/(oddsHorse1)) * 100 ;
   $("#percentageProfit1").text(profitPercHorse1.toFixed(2)) ;

   var betAmount1 = (profitPercHorse1/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * targetAmount ;
   $("#betAmount1").text(betAmount1.toFixed(2)) ;

   var profitAmount1 = (profitPercHorse1/targetAmount) * betAmount1 ;
   $("#betProfit1").text(profitAmount1.toFixed(2)) ;

   
   var amountBack1 = profitAmount1 + betAmount1 ;
   $("#backAmount1").text(amountBack1.toFixed(2)) ;

  
   }

   if((oddsHorse2 !== 0 && oddsHorse2 > 0) && targetAmount > 0) {
   profitPercHorse2 = (1/(oddsHorse2)) * 100 ;
   $("#percentageProfit2").text(profitPercHorse2.toFixed(2)) ;

   var betAmount2 = (profitPercHorse2/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * targetAmount ;
   $("#betAmount2").text(betAmount2.toFixed(2)) ;

   // var profitAmount2 = (profitPercHorse2/100) * betAmount1 ;
   // $("#betProfit2").text(profitAmount2.toFixed(2)) ;

   var profitAmount2 = (profitPercHorse2/targetAmount) * betAmount2 ;
   $("#betProfit2").text(profitAmount2.toFixed(2)) ;

   
   var amountBack2 = profitAmount2 + betAmount2 ;
   $("#backAmount2").text(amountBack2.toFixed(2)) ;

   
   }
   
   if((oddsHorse3 !== 0 && oddsHorse3 > 0) && targetAmount > 0) {
   profitPercHorse3 = (1/(oddsHorse3)) * 100 ;
   $("#percentageProfit3").text(profitPercHorse3.toFixed(2)) ;

   var betAmount3 = (profitPercHorse3/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * targetAmount ;
   $("#betAmount3").text(betAmount3.toFixed(2)) ;

   var profitAmount3 = (profitPercHorse3/targetAmount) * betAmount3 ;
   $("#betProfit3").text(profitAmount3.toFixed(2)) ;

   
   var amountBack3 = profitAmount3 + betAmount3 ;
   $("#backAmount3").text(amountBack3.toFixed(2)) ;

   }

   if((oddsHorse4 !== 0 && oddsHorse4 > 0) && targetAmount > 0) {
   profitPercHorse4 = (1/(oddsHorse4)) * 100 ;
   $("#percentageProfit4").text(profitPercHorse4.toFixed(2)) ;

   var betAmount4 = (profitPercHorse4/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * targetAmount ;
   $("#betAmount4").text(betAmount4.toFixed(2)) ;

   var profitAmount4 = (profitPercHorse4/targetAmount) * betAmount4 ;
   $("#betProfit4").text(profitAmount4.toFixed(2)) ;

   
   var amountBack4 = profitAmount4 + betAmount4 ;
   $("#backAmount4").text(amountBack4.toFixed(2)) ;


   }
    
   if((oddsHorse5 !== 0 && oddsHorse5 > 0) && targetAmount > 0) {
   profitPercHorse5 = 100 / oddsHorse5 ;
   $("#percentageProfit5").text(profitPercHorse5.toFixed(2)) ;

   var betAmount5 = ( profitPercHorse5 / (profitPercHorse5 + profitPercHorse6)) * targetAmount ;
   $("#betAmount5").text(betAmount5.toFixed(2)) ;

   var profitAmount5 = (profitPercHorse5/targetAmount) * betAmount5 ;
   $("#betProfit5").text(profitAmount5.toFixed(2)) ;

   
   var amountBack5 = profitAmount5 + betAmount5 ;
   $("#backAmount5").text(amountBack5.toFixed(2)) ;


   }


   if((oddsHorse6 !== 0 && oddsHorse6 > 0) && targetAmount > 0) {
   profitPercHorse6 = 100 / oddsHorse6 ;
   $("#percentageProfit6").text(profitPercHorse6.toFixed(2)) ;

   var betAmount6 = ( profitPercHorse6 / (profitPercHorse5 + profitPercHorse6)) * targetAmount ;
   $("#betAmount6").text(betAmount6.toFixed(2)) ;

   var profitAmount6 = (profitPercHorse6/targetAmount) * betAmount6 ;
   $("#betProfit6").text(profitAmount6.toFixed(2)) ;

   
   var amountBack6 = profitAmount6 + betAmount6 ;
   $("#backAmount6").text(amountBack6.toFixed(2)) ;

   }
   
//    var profitPercHorse5 = (1/(oddsHorse5)) * 100 ;
//    $("#percentageProfit5").text(profitPercHorse5.toFixed(2)) ;
   
//    var profitPercHorse6 = (1/(oddsHorse6)) * 100 ;
//    $("#percentageProfit6").text(profitPercHorse6.toFixed(2)) ;

   //Amount to bet

   // var betAmount1 = (profitPercHorse1/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * 100 ;
   // $("#betAmount1").text(betAmount1.toFixed(2)) ;
   // console.log(profitPercHorse1) ;

   // var betAmount2 = (profitPercHorse2/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * 100 ;
   // $("#betAmount2").text(betAmount2.toFixed(2)) ;
   
   // var betAmount3 = (profitPercHorse3/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * 100 ;
   // $("#betAmount3").text(betAmount3.toFixed(2)) ;

   // var betAmount4 = (profitPercHorse4/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4)) * 100 ;
   // $("#betAmount4").text(betAmount4.toFixed(2)) ;

   // var betAmount5 = ( profitPercHorse5 / (profitPercHorse5 + profitPercHorse6)) * 100 ;
   // $("#betAmount5").text(betAmount5.toFixed(2)) ;

   // var betAmount6 = ( profitPercHorse6 / (profitPercHorse5 + profitPercHorse6)) * 100 ;
   // $("#betAmount6").text(betAmount6.toFixed(2)) ;


//    var betAmount5 = (profitPercHorse5/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4 + profitPercHorse5 + profitPercHorse6)) * 100 ;
//    $("#betAmount5").text(betAmount5.toFixed(2)) ;
   
//    var betAmount6 = (profitPercHorse6/(profitPercHorse1 + profitPercHorse2 + profitPercHorse3 + profitPercHorse4 + profitPercHorse5 + profitPercHorse6)) * 100 ;
//    $("#betAmount6").text(betAmount6.toFixed(2)) ;


   //Profit Amount

   // var profitAmount1 = (profitPercHorse1/100) * betAmount1 ;
   // $("#betProfit1").text(profitAmount1.toFixed(2)) ;

   // var profitAmount2 = (profitPercHorse2/100) * betAmount2 ;
   // $("#betProfit2").text(profitAmount2.toFixed(2)) ;

   // var profitAmount3 = (profitPercHorse3/100) * betAmount3 ;
   // $("#betProfit3").text(profitAmount3.toFixed(2)) ;

   // var profitAmount4 = (profitPercHorse4/100) * betAmount4 ;
   // $("#betProfit4").text(profitAmount4.toFixed(2)) ;

   // var profitAmount5 = (profitPercHorse5/100) * betAmount5 ;
   // $("#betProfit5").text(profitAmount5.toFixed(2)) ;

   // var profitAmount6 = (profitPercHorse6/100) * betAmount6 ;
   // $("#betProfit6").text(profitAmount6.toFixed(2)) ;

   //Amount back

   // var amountBack1 = profitAmount1 + betAmount1 ;
   // $("#backAmount1").text(amountBack1.toFixed(2)) ;

   // var amountBack2 = profitAmount2 + betAmount2 ;
   // $("#backAmount2").text(amountBack2.toFixed(2)) ;

   // var amountBack3 = profitAmount3 + betAmount3 ;
   // $("#backAmount3").text(amountBack3.toFixed(2)) ;

   
   // var amountBack4 = profitAmount4 + betAmount4 ;
   // $("#backAmount4").text(amountBack4.toFixed(2)) ;

   // var amountBack5 = profitAmount5 + betAmount5 ;
   // $("#backAmount5").text(amountBack5.toFixed(2)) ;

   // var amountBack6 = profitAmount6 + betAmount6 ;
   // $("#backAmount6").text(amountBack6.toFixed(2)) ;

   


   

 //  alert("Bet Horse Iput Working :- "+betHorse1) ;
}