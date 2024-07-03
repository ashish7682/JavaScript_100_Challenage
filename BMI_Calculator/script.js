//------------Formula BMI=kg / (h/100 * h/100)------------

document.getElementById('submit').addEventListener('click',getBMI)

function getBMI()
{
   let cm=parseInt(document.getElementById('cm').value)
   let kg=parseFloat(document.getElementById('kg').value)

   let BMI;
   let newCm=parseFloat(cm/100);
   BMI=kg/(newCm * newCm);
   BMI=BMI.toFixed(2);
   document.getElementById('result').innerHTML = 'Your BMI is '+ BMI + '😊';
}