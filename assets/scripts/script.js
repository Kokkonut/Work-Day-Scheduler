// Date for Jumbotron
var today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today);



//Applys style to .timeblock
//Uses moment for actual time, timeblock value uses the ID of each timeblock
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

//SAVE BUTTON, saves text time column and task
$('.saveBtn').on('click', function() {
    var task = $(this).siblings('.task').val();
    var taskTime = $(this).siblings(".hour").text();
    localStorage.setItem(taskTime, task);
                                                    console.log('task ' + task);
                                                    console.log('tasktime ' + taskTime);
});

//populates shedual from local sortage, .foreach timeblock
function populate() {
    $(".hour").each(function() {
        var taskTime = $(this).text();
        var task = localStorage.getItem(taskTime);
                                                    console.log('time ' + taskTime);
                                                    console.log('task ' + task);

        if(task !== null) {
            $(this).siblings(".task").val(task);
        }
    });
}

trackTime();
populate();

