$(document).ready(function() {

        $('#mySubmit').click(function() {
          var $Maui =0;
          var $Austin =0;
          var $Reykjavik =0;
          hideEverything();

          $('input:radio').each(function() {
            if($(this).is(':checked')) {
              console.log("one point for choice:"+$(this).val());
              if($(this).val()=="a"){
                $Maui++;
              }
              if($(this).val()=="b"){
                $Austin++;
              }
              if($(this).val()=="c"){
                $Reykjavik++;
              }
            }
          });

          if($Maui==2&&$Austin==2){
            showCongrats2Locations("Maui","Austin");
            $('#Maui').show();
            $('#Austin').show();
          }
          else if($Maui==2&&$Reykjavik==2){
            showCongrats2Locations("Maui","Reykjavik");
            $('#Maui').show();
            $('#Reykjavik').show();
          }
          else if($Reykjavik==2&&$Austin==2){
            showCongrats2Locations("Reykjavik","Austin");
            $('#Reykjavik').show();
            $('#Austin').show();
          }
          else if ($Maui >= 3) {
            showCongrats1Location("Maui");
            $('#Maui').show();
          }
          else if ($Austin >= 3) {
            showCongrats1Location("Austin");
            $('#Austin').show();
          }
          else if ($Reykjavik >= 3) {
            showCongrats1Location("Reykjavik");
            $('#Reykjavik').show();
          }

          $('#myReset').click(function() {
            $('#myForm').trigger('reset');
            hideEverything();
          });


          console.log($Maui);
          console.log($Austin);
          console.log($Reykjavik);

        });


});

function hideEverything() {
  $('#Maui').hide();
  $('#Austin').hide();
  $('#Reykjavik').hide();
  $('#congrats').hide();
}

function showCongrats1Location($location) {
  $('#congrats').html('<h5>Congratulations! Based off your answers, you’d be well advised to pack your bags and book a flight for '+$location+'! Have a fantastic vacation, don’t forget to take lots of pictures and send some postcards home.</h5>')
  $('#congrats').show();
}

function showCongrats2Locations($location1,$location2) {
  $('#congrats').html('<h5>Congratulations! Based off your answers, you’d be well advised to toss a coin and pack your bags for '+$location1+' or '+$location2+'! Have a fantastic vacation, don’t forget to take lots of pictures and send some postcards home.</h5>')
  $('#congrats').show();
}
