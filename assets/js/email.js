  
const btn = document.getElementById('button');

emailjs.init('user_h27EblnJWkhrtRpVIjI8a');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Thanks - we will come back to you in 24 hours';

    const serviceID = 'default_service';
    const templateID = 'template_f34ria5';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });