var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "10px Arial";

        ctx.fillText("Predicted Sales",120,45);
        ctx.fillText("January",47,295);
        ctx.fillText("Febuary",106,295);
        ctx.fillText("March",170,295);
        ctx.fillText("April",235,295);
        ctx.fillText("May",295,295); 
        // ctx.fillText("#",2,65);
        // ctx.fillText("Of",2,90);
        // ctx.fillText("Units",2,115);
        // ctx.fillText("Sold",2,140);
        ctx.fillText("#",2,40);
        ctx.fillText("O",2,65);
        ctx.fillText("F",2,90);
        ctx.fillText("U",2,115);
        ctx.fillText("N",2,140);
        ctx.fillText("I",2,165);
        ctx.fillText("T",2,190);
        ctx.fillText("S",2,215);
        ctx.beginPath();
        ctx.moveTo(30,225);
        ctx.lineTo(30,0);
        ctx.moveTo(0,25);
        ctx.lineTo(400,25);
        ctx.fillText("900",10,24);
        ctx.moveTo(0,50);
        ctx.lineTo(400,50);
        ctx.fillText("800",10,49);
        ctx.moveTo(0,75);
        ctx.lineTo(400,75);
        ctx.fillText("700",10,74);
        ctx.moveTo(0,100);
        ctx.lineTo(400,100);
        ctx.fillText("600",10,99);
        ctx.moveTo(0,125);
        ctx.lineTo(400,125);
        ctx.fillText("500",10,124);
        ctx.moveTo(0,150);
        ctx.lineTo(400,150);
        ctx.fillText("400",10,149);
        ctx.moveTo(0,175);
        ctx.lineTo(400,175);
        ctx.fillText("300",10,174);
        ctx.moveTo(0,200);
        ctx.lineTo(400,200);
        ctx.fillText("200",10,199);
        ctx.moveTo(0,225);
        ctx.lineTo(400,225);
        ctx.fillText("100",10,224);
        ctx.moveTo(0,275);
        ctx.lineTo(400,275);
        ctx.moveTo(0,0 );
        ctx.lineTo(0, 300);
        ctx.lineTo(400, 300);
        ctx.lineTo(400, 0);
        ctx.lineTo(0, 0);
        ctx.moveTo(50,275);
        ctx.lineTo(50,200);
        ctx.lineTo(80,200);
        ctx.lineTo(80,275);
        ctx.moveTo(110,275);
        ctx.lineTo(110,180);
        ctx.lineTo(140,180);
        ctx.lineTo(140,275);
        ctx.moveTo(170,275);
        ctx.lineTo(170,150);
        ctx.lineTo(200,150);
        ctx.lineTo(200,275);
        ctx.moveTo(230,275);
        ctx.lineTo(230,90);
        ctx.lineTo(260,90);
        ctx.lineTo(260,275);
        ctx.moveTo(290,275);
        ctx.lineTo(290,10);
        ctx.lineTo(320,10);
        ctx.lineTo(320,275);
        ctx.stroke();
        
        function fillJan(){
            ctx.beginPath();
            for(var i = 275;i>200;i--){
                for(var j = 51;j<81;j++){
                    ctx.lineTo(j,i);
                    
                }
            }
            ctx.stroke();
        }
        function fillFeb(){
            ctx.beginPath();
            for(var i = 275;i>180;i--){
                for(var j = 111;j<141;j++){
                    ctx.lineTo(j,i);
                    
                }
            }
            ctx.stroke();
        }
        function fillMar(){
            ctx.beginPath();
            for(var i = 275;i>150;i--){
                for(var j = 171;j<201;j++){
                    ctx.lineTo(j,i);
                    
                }
            }
            ctx.stroke();
        }
        function fillApr(){
            ctx.beginPath();
            for(var i = 275;i>90;i--){
                for(var j = 231;j<261;j++){
                    ctx.lineTo(j,i);
                    
                }
            }
            ctx.stroke();
        }
        function fillMay(){
            ctx.beginPath();
            for(var i = 275;i>10;i--){
                for(var j = 291;j<321;j++){
                    ctx.lineTo(j,i);
                    
                }
            }
            ctx.stroke();
        }
        fillJan();
        fillFeb();
        fillMar();
        fillApr();
        fillMay();

    