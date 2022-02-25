$(document).ready(function(){
    console.log("Yup");
    $(".RightUlHeader").css("left", "100%");
    $("#Background").css("height", "0px");

    $(".letterText").css("opacity" ,"0");


    $("#ONama").animate({margin:0},{duration:800});

    $('#Background').animate({height: '300px'},{
        duration: 1000,complete:function(){
          $(".letterText").animate({opacity:'1'},{duration:500,complete:function(){
            $(".RightUlHeader").animate({left: '0%'},{duration: 500})

          }});

        }}); 


    
})

function ScrollTo(name){
    console.log("did it?");
    var element = document.getElementById(name);
    $(".letterText").css("opacity" ,"0");
    $("#firstLetter").css("opacity" ,"1");
    $("#firstLetter1").css("opacity" ,"1");
    element.scrollIntoView({behavior: "smooth"});
    $(".letterText").animate({opacity:'1'},{duration:1500});
  
}
