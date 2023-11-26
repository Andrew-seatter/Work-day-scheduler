
$(document).ready(function () {
      const currentDayEl = $('#currentDay');
      const timeBlockEl = $('.description');
      const buttonEl = $('.btn');
      const now = dayjs().format('dddd MMMM DD  hh:mm a');
      const currentHour = dayjs().hour();
      let tasks = [];
    

      currentDayEl.text(now);

     

      
      //Loop for setting colors of boxes
      for (let i = 9; i < 18; i++){
        const hourIdEl = $('#' + i); //grabs the element based on the index in the loop
        const hourId = hourIdEl.attr('id'); //grabs the value of the id from the element so we can compare it to the current hour

        //comparisons to current hour
        //adds past, present or future depending on it's comparison to the current hour
        if(hourId < currentHour){
          hourIdEl.addClass('past');
        } else if (hourId == currentHour){
          hourIdEl.addClass('present');
        } else {
          hourIdEl.addClass('future');
        }
      }


    //function to save text to array
     const saveText = (event) => {
      event.preventDefault();
      tasks = [];
      localStorage.clear(); //clears storage upon saving

      $.each(timeBlockEl, function () {
        tasks.push($(this).val());
      });

      localStorage.setItem('tasks', JSON.stringify(tasks)); //sets local storage back at the end of the function
      console.log(localStorage.getItem('tasks'));
     }

     //start of appending local storage
     function displayTasks () {
      const localTasks = JSON.parse(localStorage.getItem('tasks'));
      let i = 0; // sets a variable to zero for the loop

      //for each timeblock take the value from the localtasks array and add it to the text box and move to the next one
        $.each(timeBlockEl, function() {
            $(this).val(localTasks[i]);
            i++;
          
          
           }) 
           console.log(localTasks);
     }

     //conditional statement where displaytasks function only runs if 'tasks' exists in local storage
     if (localStorage.length > 1) {
      displayTasks();
     }
     console.log(localStorage);
     
     buttonEl.on('click', saveText);








  });