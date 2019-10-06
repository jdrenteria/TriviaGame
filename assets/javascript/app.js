$(document).ready(function() {

    //These are global variables
    var number = 30;
    var intervalId;
    var gcount = 0;
    var wcount = 0;
    var unanswered = 0;
    
    //Start the coundown
    function run() {
        intervalId = setInterval(decrement, 1000);
    }
    
    //Hide the questions and other contents
    $(window).on("load", hide);
    
    $('#start').on('click', function(){
        $(this).hide();
        show();
        run();
    });
    
    $('#done').on('click', function(){
        $('#start').hide();
        hide();
        rSummary();
        stop();
    });
 
    function decrement() {
        //  Decrease number by one on clock
        number--;
         
         //  Show the number in the #show-number tag.
         $("#timer").html(" " + number + " seconds");
        
        //  Once number hits one...
        if (number === 1) {
            $("#timer").html(" " + number + " second");
        }
          //  Once number hits zero this will cause it to run the stop function.
        else if (number === 0) {
            //  
            $('#start').hide();
            hide();
            rSummary();
            stop();
        }
    }
    
    function stop() {
        clearInterval(intervalId);
    }
    
    
    
   
    
    //Grab all radio buttons to see which answers were correct and which were not.
    $('input[type=radio]').on("change", function() {
       gcount =  $('input[value=goodanswer]:checked').length;
       wcount = $('input[value=wrong]:checked').length;
       unanswered = (7-(gcount + wcount));
    });
    
    });
