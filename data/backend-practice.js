const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/');    //first --> type of message we want to send  second--> where to send this message to
xhr.send();

//xhr.response in order to wait for the response we will create a eventlistner
//load means response is loaded
// xhr.response returns a string 