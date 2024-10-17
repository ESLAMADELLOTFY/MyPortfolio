/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
    contactMessage=document.getElementById('contact-message');
const sendEmail = (e) =>
{
    e.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_4xm7wvt','template_jxpozuj','#contact-form','aX2wztXVGjx7c54Aa')
    .then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'
        // Remove message after five seconds
        setTimeout(()=>
        {
            contactMessage.textContent=''
        },5000)
        // Clear input fields
        contactForm.reset()        
    }, () =>
    {
        // Show error message
        contactMessage.textContent=' Message not sent (service error) ❌';
    })


}
contactForm.addEventListener('submit',sendEmail);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 100 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)