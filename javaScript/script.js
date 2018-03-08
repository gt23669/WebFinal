var fourBig;
$(document).ready(function(){
    
    $("#ContactInfo").on("click",function(){
      if(fourBig){
          $(this).height('75px');
          $(this).width('150px');
          document.getElementById("ContactInfo").style.fontSize = "large"; 
          fourBig=false;
      }
      else{
          $(this).height('200px');
          $(this).width('300px');
          document.getElementById("ContactInfo").style.fontSize = "xx-large";
          fourBig=true;
      }
    });
});