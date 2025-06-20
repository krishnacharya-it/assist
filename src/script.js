function answer(qustn){
    var selector = '#a_' + qustn;
    $(selector).articulate('speak');

    $("#text_board").selfw({
        text: $(selector).text(),
        // time: 100,
        random: true
    })
}


$(document).ready(function(){
    $('#welcome').articulate('speak');
    $("#text_board").selfw({
        text: $('#welcome').text(),
        // time: 100,
        random: true
    })
})	
