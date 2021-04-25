var formdata = new FormData();
var userName = document.getElementById('userName');
var email = document.getElementById('email');
var files = document.querySelectorAll('.mission');
const submit = document.querySelector('.submit');

submit.addEventListener('click', e => {
    e.preventDefault();
    formdata.append(userName.name,  userName.value);
    formdata.append(email.name,  email.value);
    files.forEach((file,i)=> {
        if(file.value.length!=0){
          formdata.append(file.name,  file.files[0]);
        }
    })
    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://0.0.0.0:8000/form/", requestOptions)
        .then(response => {if(response.ok){
          window.location.replace("submit.html");}
          else{
            alert("An Error Happened plz check Fields");
          }

        })
        .then(result => {
	      console.log(result)
        })
        .catch(error => {
          alert("Something Went Wrong");}
      );
},false)
