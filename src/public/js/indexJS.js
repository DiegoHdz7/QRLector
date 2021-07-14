

window.onload = main();


function main(){

    

    
    
    //DOM vatiables
    const submit = document.querySelector("#login-form");
    const loginValidation = document.querySelector('#login-ServerFeedback');

    //CONST HTML
    

    //initial settings 
    loginValidation.style.display = 'none';




    //EVENT LISTENERS
    submit.addEventListener('submit', async(e)=>{
        e.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const data = {
            email:email,
            password:password
        };
        /*const formData = new FormData(); 
        formData.append('email', email);
        formData.append('password', password);*/



        //console.log({email:email, password:password});
       
        //Alert: cambiar cuando se use localhost o cloud
        const response =   await fetch('http://localhost:3000/login', {
        //const response = await fetch('https://qr-lector.herokuapp.com/login', {
            headers: {'content-type':'application/json'}, // funciona con o sin este tipo de content-type
            method:'POST',
            body:JSON.stringify(data)
        });


        const resData = await response.json();
        console.log(resData); 
        
        if(resData.canLogin){
            loginValidation.style.display = 'none';

        } else {
            loginValidation.style.display = 'initial';

        }
           
      
    
    });


    
    
}









