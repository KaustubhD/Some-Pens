function show(){
  notification.MaterialSnackbar.showSnackbar(
    {
    message: 'Just an Icon, there is no video !',
    timeout: 3000
    });

}
var notify = document.querySelectorAll(".mdl-card__media>.material-icons");
var notification = document.querySelector('.mdl-js-snackbar');
for(var x = 0; x < notify.length; x++){
  notify[x].addEventListener('click', show);
}
