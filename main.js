var clicked=false;
$('.types').click(function(){
    if(!clicked){
    $('.item3').append('<p>The first step is to determine which visa type you need, <br> and check whether you’re eligible to apply for it. <br> You’ll also need to know the documents that you’ll have to submit along with your application, <br> how long the application might take and fees you’ll have to pay.</p>').css('text-align','left');
    clicked=true;
}
});