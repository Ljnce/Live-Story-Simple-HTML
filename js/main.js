// Ajax call

const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming";

$.ajax({
    url: apiUrl,
    method: 'GET',
    success: function(data){
            var setup = data.setup;
            var delivery = data.delivery;
            var joke = data.joke;
            $('.delivery h4').html(setup);
            $('.left p').html("&#8246;" + delivery + "&#8243;");
            $('.joke p').html(joke);
            // Different View between questions and joke
            if (joke == null) {
                $('.delivery').show();
            } else {
                $('.joke').show();
            }
        },
        error: function(){
            alert('errore')
        }
});


// Show button
$('.delivery').on('click', '.show-this-button', function(){
    $('.left p').show();
    $('.delivery h2').hide();
});

// Hello
$('.svg-intro').on('mouseenter', '#main-logo-intro', function(){
    $('.enter').show();
});
