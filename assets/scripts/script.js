// Date for Jumbotron
var today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today);

function trackTime(){
    let currentTime = moment().hour();
                                            console.log(currentTime);
          $('.time-block').each(function () {
            let listTime = parseInt($(this).attr('id'));
                                            console.log(listTime);
                if (listTime < currentTime) {
                    $(this).addClass('future');
                } else if (listTime === currentTime) {
                    $(this).addClass('present');
                } else {
                    $(this).addClass('past');
                }
          
          
            })            
};

trackTime();