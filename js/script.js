let circle = document.getElementById('circle');
let pointer = document.getElementById('pointer');

const onMouseMove = (e) =>{
  circle.style.left = e.pageX - 20+ 'px';
  circle.style.top = e.pageY - 20 + 'px';
  pointer.style.left = e.pageX + 'px';
  pointer.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);


document.querySelector('.nav__burger').addEventListener('click', function() {
    
    if(document.querySelector('.open')) {
        document.querySelector('body').classList.remove('open');
    } else {
        document.querySelector('body').classList.add('open');
    }
});

$(function() {
    $('.hover').hover(function() {
      $('#circle').css('width', '110px');
      $('#circle').css('height', '110px');
      $('#circle').css('background-color', 'black');
      $('#circle').css('z-index', '-1');
      $('#pointer').css('display', "none");
    }, function() {
      $('#circle').css('width', '48px');
      $('#circle').css('height', '48px');
      $('#circle').css('background-color', 'transparent');
      $('#pointer').css('display', "block");
      $('#circle').css('z-index', '2');
    });
  });

//When the document is load add active to the 1st element
$( document ).ready(function() {
  document.querySelectorAll('#features-01').forEach(e => {
    e.classList.add("active");
  });
});

$('.features__items').click(function(e){
  const itemsData = $(this).data(); //Store the data atribut of the items
  
  //remove all the active element
  document.querySelectorAll('.active').forEach(e => {
    e.classList.add("out");
    setTimeout(function() {
      e.classList.remove("active");
      e.classList.remove("out");
    }, 1000);
    
  })

  setTimeout(function() {
      //add to the new active element
      document.querySelectorAll('#'+ itemsData["items"]).forEach(e => {
        e.classList.add("active");
        e.classList.add("in");
        setTimeout(function() {
          e.classList.remove("in");
        }, 2000); 
      })
      
  }, 1000);

});

const faders = document.querySelectorAll('.ease');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
$('.faq-item-head').click(function(e) {
  faqData = $(this).data();

  document.querySelectorAll('.faq-item').forEach(element => {
    element.classList.remove('active');
  });
  document.querySelector('#'+ faqData["faq"]).classList.add('active')
});