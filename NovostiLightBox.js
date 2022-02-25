var imgArray;
var selectedImgSrc;
var nextImg;
let curIndex;
$(document).ready(function(){
    const lightBoxContainer=document.getElementById("lightboxContainer");
    imgArray=$(".lightBoxEnabled");
    console.log(imgArray);
    $(".lightBoxEnabled").on("click",function(){
        selectedImgSrc= $(this).attr('src');
        console.log($(this).index());
        curIndex=$(this).index();
        console.log("indexpart1",curIndex);
        if(curIndex===0) nextImg=imgArray[1];
        if(curIndex===1) nextImg=imgArray[0];


        $(".lightboxImg").attr('src',selectedImgSrc)
        $(".secondImageForAnimation").attr('src',$(nextImg).attr('src'));

        lightBoxContainer.classList.add("active");
        lightBoxContainer.classList.remove("inactive");

    })
    $("#lightboxContainer").on("click",function(){
        lightBoxContainer.classList.remove("active");
        lightBoxContainer.classList.add("inactive");
        })
    $("#RightButton").on("click",function(event){
        console.log("index is",curIndex);
        if(curIndex==0){ 
            nextImg=imgArray[0];
            curIndex=1;
       }
       else if(curIndex==1){ nextImg=imgArray[1];curIndex=0;}
        console.log("index for next is",curIndex);
        $(".secondImageForAnimation").css('left', '100%');
        $(".secondImageForAnimation").animate({
            left:"0%"
        },500,function(){
            console.log("animation complete")
        })

        $(".lightboxImg").animate({
            left:"-100%"
        },500,function(){
            $(".secondImageForAnimation").css('left','100%');
            $(".lightboxImg").css('left','0%');

            
           var curImage= imgArray[curIndex];
    
            $(".lightboxImg").attr('src',$(curImage).attr('src'));
            $(".secondImageForAnimation").attr('src',$(nextImg).attr('src'));

           //TO DO REPLACE SECONDIMAGE SRC WITH ORIGINAL AND SET IMAGE TO ORIGINAL
            console.log("animation complete")
        })
        
        event.stopPropagation();

    })

    $("#LeftButton").on("click",function(event){
        $(".secondImageForAnimation").css('left', '-100%');
        if(curIndex===0){ nextImg=imgArray[0];curIndex=1;}
       else if(curIndex===1){ nextImg=imgArray[1];curIndex=0;}
       // $(".secondImageForAnimation").attr('right', '100%');
        $(".secondImageForAnimation").animate({
            left:"0%"
        },500,function(){
        })

        $(".lightboxImg").animate({
            left:"100%"
        },500,function(){
           //TO DO REPLACE SECONDIMAGE SRC WITH ORIGINAL AND SET IMAGE TO ORIGINAL
           $(".secondImageForAnimation").css('left','100%');
           $(".lightboxImg").css('left','0%');

           
          var curImage= imgArray[curIndex];
   
           $(".lightboxImg").attr('src',$(curImage).attr('src'));
           $(".secondImageForAnimation").attr('src',$(nextImg).attr('src'));

        })
        
        event.stopPropagation();

    })



})