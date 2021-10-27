const elInputPassword = document.querySelector("#sandi");
const elInputEmail = document.querySelector("#email");
const elInputName = document.querySelector("#fname");
const elInputCity = document.querySelector("#kota");
const elBtnSubmit = document.querySelector("#tombol");
const nameValidator = new RegExp(/^[a-zA-Z]/);
const emailValidator = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const passwordValidator = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
elBtnSubmit.addEventListener("click", function(e) {
  if (nameValidator.test(elInputName.value)) {
  "";
 }  else {
 alert("Tolong masukan Nama sesuai dengan ketentuan");
 }
 }
 )

 elBtnSubmit.addEventListener("click", function(e) {
  if (nameValidator.test(elInputCity.value)) {
  "";
 }  else {
 alert("Tolong masukan Kota sesuai dengan ketentuan");
 }
 }
 )

elBtnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
     if (emailValidator.test(elInputEmail.value)) {
       "";
}else{
  alert("Tolong masukan Email sesuai dengan ketentuan");
}
 }
 )
 elBtnSubmit.addEventListener("click", function(e) {
 if (passwordValidator.test(elInputPassword.value)) {
  alert(" Pendaftaran Berhasil")
  elInputPassword.value = ""
  elInputEmail.value = ""
  elInputName.value = ""
  elInputCity.value = ""
 
}  else {
alert("Tolong masukan Kata Sandi sesuai dengan ketentuan");
}
}
)


    




