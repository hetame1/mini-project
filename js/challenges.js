const pppElements = document.querySelectorAll('.ppp');

pppElements.forEach(function(ppp) {
    ppp.addEventListener('click', function() {
        ppp.classList.toggle('aaa');
    });
});



