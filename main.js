var clicked=false;
$('.types').click(function(){
    if(!clicked){
    $('.item3').append('<p>The first step is to determine which visa type you need, <br> and check whether you’re eligible to apply for it. <br> You’ll also need to know the documents that you’ll have to submit along with your application, <br> how long the application might take and fees you’ll have to pay.</p>').css('text-align','left');
    $('.item3').append('<FORM><SELECT><OPTION> Please select visa type! <OPTION> Business <OPTION> Visit Family/Friend <OPTION> Tourist <OPTION> Study <OPTION> Trade Fair <OPTION> Medical </SELECT></FORM>');
    $('.item3').append('<FORM><INPUT type="button" name="nom" value= "Check List"></FORM>');

    clicked=true;
}
});