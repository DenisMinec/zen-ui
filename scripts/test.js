$('.sign-up-form .head .button-info').click(function(){
  console.log('"' + this.className + '"' +' clicked');
});

$('.sign-up-form .head .button-back').click(function(){
  console.log('"' + this.className + '"' +' clicked');
});
$('#add-photo').click(function(e){
  e.preventDefault();
  console.log('"' + this.id + '"' + ' clicked');
});
$('.sign-up-form .button button').click(function(e){
  e.preventDefault();
  console.log('"' + this.className + '"' +' clicked');
});