var fourBig;
$(document).ready(function(){
    
  
});
var chrt = document.getElementById("mycanvas").getContext("2d");
var myarr=[65,59,80,81,56,55,40];
var data={
    //This is the X-axis
    labels: ["Jan","Feb","March","April","May","June","July"],
}
datasets:[
    {
        label: "Projected Sales",
        fillColor: "rgba(220,220,220,0.8)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightsFill:"rgba(220,220,220,0.75)",
        highlightsStroke:"rgba(220,220,220,1)",
        data:[65,59,80,81,56,55,40] //Y-axis
    },
    {
        label: "Projected Sales",
        fillColor: "rgba(220,120,220,0.8)",
        strokeColor: "rgba(220,120,220,0.8)",
        highlightsFill:"rgba(220,220,220,0.75)",
        highlightsStroke:"rgba(220,220,220,1)",
        data: myarr
    }
]
{

};
var ProjectedSales = new Chart(chrt).bar(data);
