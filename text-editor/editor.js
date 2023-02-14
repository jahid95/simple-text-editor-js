let num = 0;
document.getElementById('icon-bold').addEventListener('click', function(){
    const textField = document.getElementById('input-field');
    const bg = document.getElementById('icon-bold'); 
    // const color = document.getElementById('input-color');
    // const colorValue = color.value;
    num++;
    if(num % 2 == 0){
        bg.style.backgroundColor ='inherit';
        textField.style.fontWeight = 'normal'; 
        textField.style.color = colorValue;
    } 
    else{
        bg.style.backgroundColor ='aquamarine';
        bg.style.margin ='5px';
        textField.style.fontWeight = 'bold'; 
    }  
    
    
        
})

document.getElementById('icon-italic').addEventListener('click', function(){
    const textField = document.getElementById('input-field');    
    textField.style.fontStyle = 'italic';       
})

document.getElementById('icon-underline').addEventListener('click', function(){
    const textField = document.getElementById('input-field');    
    textField.style.textDecoration = 'underline';       
})


document.getElementById('input-color').addEventListener('mousemove',function(event){
    const color = event.target.value;
    const textField = document.getElementById('input-field');
    textField.style.color = `${color}`;
})

document.getElementById('icon-up').addEventListener('click', function(){
    num++;
    const inputField = document.getElementById('font-size');
    const fontSize = inputField.value = num;
    const textField = document.getElementById('input-field');
    textField.style.fontSize = `${fontSize}em`;

})



