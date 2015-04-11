$('.sign-up-form .head .button-info').click(function(){
  console.log('"' + this.className + '"' +' clicked');
});

$('.sign-up-form .head .button-back').click(function(){
  console.log('"' + this.className + '"' +' clicked');
});
$('.sign-up-form .photo .add-photo').click(function(e){
  e.preventDefault();
  console.log('"' + this.className + '"' + ' clicked');
});
$('.sign-up-form .button button').click(function(e){
  e.preventDefault();
  console.log('"' + this.className + '"' + ' clicked');
});
$('.sign-up-form .fields .show').click(function(e){
  e.preventDefault();
  console.log('"' + this.className + '"' + ' clicked');
});