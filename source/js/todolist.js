$(function () {
    var add = $('.todolist-add .add');
    var input = $('.todolist-widjet');
    var close = $('.todolist-widjet .todolist-widjet__btn .fa.fa-times');
    var save = $('.todolist-widjet .fa.fa-check');
    var tasks = ['Задача 1', 'Задача 2'];

    /* ----- Open input ------ */
    add.on('click', function(){
        input[0].classList.add('todolist-widjet_show');
    });

    /* ----- Close input ------ */
    close.on('click', function () {
        input[0].classList.remove('todolist-widjet_show');
    });

    /* ----- Save task ------ */
    save.on('click', function () {
        var text = $('.todolist-widjet .todolist-widjet__input').val();
        var number = tasks.length;
        createTask(number, text);
        tasks.push(text);
        $('.todolist-widjet .todolist-widjet__input').val('');
        input[0].classList.remove('todolist-widjet_show');
    });

    /* ----- Del task ------ */
    $('.todolist-list').on('click', '.del', function () {
        var numberInTasks = $(this).closest('.todolist-list__item').index();
        tasks.splice(numberInTasks, 1);
        updateTasks()
    });

    /* ----- Edit task ------ */
    $('.todolist-list').on('click', '.fa-pencil', function () {
        var numberInTasks = $(this).closest('.todolist-list__item').index();
        var int = input.clone().css('display', 'inline');
        var text = tasks[numberInTasks];

        $(this).closest('.todolist-list__item').append(int[0]);
        $('.todolist-widjet .todolist-widjet__input').val(text);
    });

    /* ----- Accept edit task ------ */
    $('.todolist-list').on('click', '.fa-check', function () {
        var text = $('.todolist-widjet__input').val();
        var numberInTasks = $(this).closest('.todolist-list__item').index();
        tasks[numberInTasks] = text;
        $('.todolist-widjet__input').val('');
        updateTasks()
    });

    /* ----- Cancel edit task ------ */
    $('.todolist-list').on('click', '.fa-times', function () {
        $('.todolist-widjet__input').val('');
        $(this).closest('.todolist-widjet').remove()
    });

function createTask(i, text){
    var number = i + 1;

    $('<li />', {
        'class': 'todolist-list__item',
        'text': number + '. ' + text
    }).appendTo($('.todolist-list')).append($('<i />',{
        'class': 'fa fa-pencil',
        'aria-hidden': 'true'
    })).append($('<i />',{
        'class': 'fa fa-times del',
        'aria-hidden': 'true'
    }));
}

function updateTasks(){
    $('.todolist-list__item').remove();
    for (var i = 0; i < tasks.length; i++){
        createTask(i, tasks[i])
    }
}
});
