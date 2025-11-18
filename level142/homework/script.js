document.getElementById('changeBtn').addEventListener('click',()=> {
      alert('Change plan clicked (you can open a modal here).');
    });
    document.getElementById('payBtn').addEventListener('click',()=> {
      // small friendly interaction
      const confirmed = confirm('Proceed to payment for $59.99/year?');
      if(confirmed) alert('Payment flow would start now.');
    });
    document.getElementById('cancelBtn').addEventListener('click',()=> {
      if(confirm('Cancel order?')) alert('Order cancelled.');
    });