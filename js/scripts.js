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
            else {
              // Or an unchecked one here...
            }
          });

          if ($Maui >= 3) {
            $('#Maui').show();
          }
          if ($Austin >= 3) {
            $('#Austin').show();
          }
          if ($Reykjavik >= 3) {
            $('#Reykjavik').show();
          }
          //The result is then displayed via the branching method along with an image of the winning destination


          console.log($Maui);
          console.log($Austin);
          console.log($Reykjavik);

        });






  //After the quiz is done, there is a button to reset/start again


});
