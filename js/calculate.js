
document.getElementById('triangle-btn').addEventListener('click',function(){

    const base = inputFunction('base-input');
    const height = inputFunction('triangle-height-input');

    if(isNaN(base) || isNaN(height)){
        alert('Please provide a valid number');
        return;
    }
   
    const totalTriangle= 0.5 * base * height ;

    setValuefunction('triangle-area',totalTriangle);  

})

document.getElementById('rectangle-btn').addEventListener('click',function(){

    const height = inputFunction('rectangle-height-input');

    const width = inputFunction('width-input');

    const totalRectangle = height * width ;

    setValuefunction('rectangle-area',totalRectangle);
})