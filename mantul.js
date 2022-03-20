function saveForm(){
var mincar = 12; 
var noic = document.forms["register"]["noic"].value;
var x = noic.substr(0,2)
var y = noic.substr(2,2)
var z = noic.substr(4,2)
polanama=/^[a-zA-Z, .]{3,40}$/;
polaic=/^[0-9]{12}$/;
polabim=(/^(01)-?[\d]{8,10}$/);
polasir=(/^(299r789||299R789)$/);


    if(document.getElementById('namanya').value == ''){  
      alert('Please Insert Your Name');  
      document.getElementById('namanya').focus();  
      return false;  
    } 
    if(document.getElementById('noic').value == ''){  
      alert('Please Insert IC Number');  
      document.getElementById('noic').focus();  
      return false; 
    }

    if(document.getElementById('nosiri').value == ''){  
      alert('Please Insert Serial Number');  
      document.getElementById('nosiri').focus();  
      return false; 
    }
    if(document.getElementById('bimbit').value == ''){  
      alert('Please Your Phone Number');  
      document.getElementById('bimbit').focus();  
      return false; 
    }
    if(!polanama.test(document.getElementById('namanya').value)){  
      alert('Please Insert Your Full Name');  
      document.getElementById('namanya').focus();  
      return false;  
    } 

    if(document.getElementById('noic').value.length < mincar){  
      alert('Please Insert Correct IC Number');  
      document.getElementById('noic').focus();  
      return false; 
    }  
    if(!polaic.test(document.getElementById('noic').value)){  
      alert('Please Insert Correct IC Number');  
      document.getElementById('noic').focus();  
      return false;  
    }  
     if(x<40){  
      alert('IC Number Not Registed, Please Insert Correct IC Number'); 
      document.getElementById('noic').focus();
      return false; 
    } 
     if(y>12||y<1){  
      alert('IC Number Not Registed, Please Insert Correct IC Number'); 
      document.getElementById('noic').focus();
      return false; 
    } 
     if(z>31||z<1){  
      alert('IC Number Not Registed, Please Insert Correct IC Number');  
      document.getElementById('noic').focus();
      return false; 
    }   
 

   if (!polasir.test(document.getElementById('nosiri').value)){  
      alert (' Invalid Serial Number !');
      document.getElementById('siri').focus();  
      return false;
   }

   if (!polabim.test(document.getElementById('bimbit').value)){  
      alert ('Invalid Phone Number !');
      document.getElementById('bimbit').focus();  
      return false;
   }



    document.getElementById('register').submit();  
  }  

