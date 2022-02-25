function CalculateEctsSati(){
  
    var ectsSum=0;
    $(".ectsSlot").each(function(){
        ectsSum+=parseFloat($(this).text());
    })
    var satiSum=0;
    $(".satiSlot").each(function(){
        satiSum+=parseFloat($(this).text());
    })
    $("#tfootRow").remove();
    let markupFoot='<tr id="tfootRow"> <td><b>UKUPNO</b> </td> <td> <b class="ukupnoBroj">'+ectsSum+'</b></td> <td> <b class="ukupnoBroj">'+satiSum+'</b></td> </tr>'
    $("#table tfoot").append(markupFoot);
    if(ectsSum&&ectsSum==0){
        $("#table").hide();
    }

}    

$(document).ready(function(){

    $("#kolegijInput").select();
   
 $("#table").on('click','.redButton',function(){
    $(this).closest('tr').remove();

    CalculateEctsSati();
    if($(".ectsSlot").length==0){
        $("#table").css('visibility','hidden');

    }

  });

    var kolegijiArray=[];
    $.getJSON("http://www.fulek.com/VUA/SUPIT/GetNastavniPlan",function(data){
        $.each(data, function (index, value) {
            kolegijiArray.push(value)
        });    });
    

        $("#kolegijInput").autocomplete({
            source: kolegijiArray,
            change: function( event, ui ) {
                console.log("Change Event Triggered");
            },
            focus:function(event){event.preventDefault(); },
            select: function( event, ui ) { 

                $("#table").css('visibility','visible');
                

                event.preventDefault();
                $('#kolegijInput').val(ui.item.label);

                //get value from input that is the id 
               var kolegijIndex=ui.item.value;
                console.log("koelgij index",kolegijIndex);
                console.log("http://www.fulek.com/VUA/supit/GetKolegij/"+kolegijIndex.toString());
                    $.getJSON("http://www.fulek.com/VUA/supit/GetKolegij/"+kolegijIndex.toString(),function(data){
                      console.log(data);
                      //and add to the table info from get id
                      var kolegijIme=data.kolegij;
                    let markup="<tr><td>"+kolegijIme+"</td><td class='ectsSlot'>"+data.ects+"</td><td class='satiSlot'>"
                    +data.sati+"</td><td>"+data.predavanja+"</td><td>"+data.vjezbe+
                    "</td><td>"+data.tip+"</td> <td><button class='redButton' >Obriši</button></td></tr>";
                    $("#table tbody").append(markup);

                    CalculateEctsSati();

                    //TODO add red button to markup,and calculate ects and sati
                });
                               console.log("Select Event Triggered");
        },
        response:function(){ 
            console.log("jup");
                               $('#kolegijInput').attr('value',''); 
                            
                            }


        });
        
})