function theDolar(){
    if( document.querySelector('.dolar').innerHTML === '$8',
        document.querySelector('.dolar-2').innerHTML === '$20',
        document.querySelector('.dolar-3').innerHTML === '$48',
  
      document.querySelector('.Month').innerHTML === '/Month',
      document.querySelector('.Month-2').innerHTML === '/Month',
      document.querySelector('.Month-3').innerHTML === '/Month',
      
      document.querySelector('.Yearly').innerHTML === 'Yearly',
      document.querySelector('.Monthly').innerHTML == 'Monthly price')
      
      {
      document.querySelector('.dolar').innerHTML = '$4';
      document.querySelector('.dolar-2').innerHTML = '$15';
      document.querySelector('.dolar-3').innerHTML = '$30';
  
      document.querySelector('.Month').innerHTML = '/Yearly';
      document.querySelector('.Month-2').innerHTML = '/Yearly';
      document.querySelector('.Month-3').innerHTML = '/Yearly';

      document.querySelector('.Monthly').innerHTML = 'Monthly';
      document.querySelector('.Yearly').innerHTML = 'Yearly price';
      }
      else{
      document.querySelector('.dolar').innerHTML = '$8';
      document.querySelector('.dolar-2').innerHTML = '$20';
      document.querySelector('.dolar-3').innerHTML = '$48';
  
      document.querySelector('.Month').innerHTML = '/Month';
      document.querySelector('.Month-2').innerHTML = '/Month';
      document.querySelector('.Month-3').innerHTML = '/Month';

      document.querySelector('.Monthly').innerHTML = 'Monthly price';
      document.querySelector('.Yearly').innerHTML = 'Yearly';

      }
     
  }