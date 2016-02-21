$(document).ready(function() {

  //User is presented with 5 questions, and each question has a selection of 3 multiple choice radio button (?) answers

    //Each answer button should be relative to A, B, or C as a position


      //When one button/answer is selected, the answer is stored



        //A tally and comparison of total A B and C answers leads to one being the winner (logic: in 5 questions, the most spread out results would end up having at least one position selected twice)

        $('#mySubmit').click(function() {
          var $Maui =0;
          var $Austin =0;
          var $Reykjavik =0;

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

          // figure out which results to show.

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
          else if($Austin==2&&$Reykjavik==2){
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
            $('#Maui').hide();
            $('#Austin').hide();
            $('#Reykjavik').hide();
            $('#congrats').hide();
          });
          //The result is then displayed via the branching method along with an image of the winning destination


          console.log($Maui);
          console.log($Austin);
          console.log($Reykjavik);

        });






  //After the quiz is done, there is a button to reset/start again


});

function showCongrats1Location($location) {
  $('#congrats').html('<h5>Congratulations! Based off your answers, you’d be well advised to pack your bags and book a flight for '+$location+'! Have a fantastic vacation, don’t forget to take lots of pictures and send some postcards home.</h5>')
  $('#congrats').show();
}

function showCongrats2Locations($location1,$location2) {
  $('#congrats').html('<h5>Congratulations! Based off your answers, you’d be well advised to toss a coin and pack your bags for '+$location1+' or '+$location2+'! Have a fantastic vacation, don’t forget to take lots of pictures and send some postcards home.</h5>')
  $('#congrats').show();
}
