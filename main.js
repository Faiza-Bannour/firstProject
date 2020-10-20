var clicked=false;

$('.home').click(function(){
    if(!clicked && $(".Tvisa").fadeOut()){
        $(".toHome").fadeIn();
        $('.toHome').append('<h1> Welcome to Global Visa Service</h1> <br> <p> Apply Your Visa Application at: </p>');
        $('.toHome').append('<a href="https://visa.vfsglobal.com/tun/en/deu" target="_blank"><img src="logo2.jpg" ></a>');
        clicked=true;
        $(".Tvisa").fadeOut();
        
    }
});

var clickedd=false;
$('.types').click(function(){
    if(!clickedd && $(".toHome").fadeOut()){
    
    $('.Tvisa').append('<p>The first step is to determine which visa type you need, <br> and check whether you’re eligible to apply for it. <br> You’ll also need to know the documents that you’ll have to submit along with your application, <br> how long the application might take and fees you’ll have to pay.</p>').css('text-align','justify');
    $('.Tvisa').append('<FORM><SELECT><OPTION> Please select visa type! <OPTION> Business <OPTION> Visit Family/Friend <OPTION> Tourist <OPTION> Study <OPTION> Trade Fair <OPTION> Medical </SELECT></FORM>');
    $('.Tvisa').append('<FORM> <INPUT id="check" type="button" name="nom" value= "Check List" ></FORM>');
    $('#check').click(function() {
        window.location = "https://visa.vfsglobal.com/one-pager/Germany/Tunisia/English/pdf/visa-checklist.pdf";
     });
     clickedd=true;    
}
}); 




