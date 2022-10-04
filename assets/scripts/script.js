// Date for Jumbotron
var today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today);

function trackTime(){
    let currentTime = moment().hour();
                                                            
          $('.time-block').each(function () {
            let listTime = parseInt($(this).attr('id'));
                                                               
                if (listTime > currentTime) {
                    $(this).addClass('future');
                } else if (listTime === currentTime) {
                    $(this).addClass('present');
                } else {
                    $(this).addClass('past');
                }
            })            
};

//SAVE BUTTON
$('.saveBtn').on('click', function() {
    var task = $(this).siblings('.task').val();
    var taskTime = $(this).siblings(".hour").text();
    localStorage.setItem(taskTime, task);
});

function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        if(currPlan !== null) {
            $(this).siblings(".task").val(currPlan);
        }
    });
}

trackTime();
usePlanner();
