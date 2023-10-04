window.addEventListener('DOMContentLoaded', () => {
  const contactUsButton = document.querySelector('.js-contact-us')

  if(contactUsButton) {
    contactUsButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal', 'open')
    })
  }

  const backToContactUsRuModal = document.querySelector('.js-back-to-contact-us-ru-modal')

  if(backToContactUsRuModal) {
    backToContactUsRuModal.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question-to-the-publisher', 'close')
      window.popup('js-popup-contact-us-ru-modal', 'open')
    })
  }

  const openQuestionToThePublisherModalButton = document.querySelector('.js-open-question-to-the-publisher')

  if(openQuestionToThePublisherModalButton) {
    openQuestionToThePublisherModalButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-to-the-publisher', 'open')
    })
  }

  const openQuestionToThePublisherFormModalButton = document.querySelector('.js-open-question-to-the-publisher-form')

  if(openQuestionToThePublisherFormModalButton) {
    openQuestionToThePublisherFormModalButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question-to-the-publisher', 'close')
      window.popup('js_popup_contact_us_ru_modal-question-to-the-publisher-form', 'open')
    })
  }

  const backFromPublisherFormButton = document.querySelector('.js-back-to-question-to-the-publisher-from-publisher-form') 

  if(backFromPublisherFormButton) {
    backFromPublisherFormButton.addEventListener('click', function() {
      window.popup('js_popup_contact_us_ru_modal-question-to-the-publisher-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-to-the-publisher', 'open')
    }) 
  }

  const openOfferCooperationModalButton = document.querySelector('.js-open-offer-cooperation-form')

  if(openOfferCooperationModalButton) {
    openOfferCooperationModalButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question-to-the-publisher', 'close')
      window.popup('js-popup-contact-us-ru-modal-offer-cooperation-form', 'open') 
    })
  }

  const backFromCooperationFormButton = document.querySelector('.js-back-to-question-to-the-publisher-from-cooperation-form')

  if(backFromCooperationFormButton) {
    backFromCooperationFormButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-offer-cooperation-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-to-the-publisher', 'open') 
    })
  }

  const openQuestionToToysModalButton = document.querySelector('.js-open-question-to-toys')

  if(openQuestionToToysModalButton) {
    openQuestionToToysModalButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-to-toys', 'open') 
    })
  }

  const openQuestionToToysFormButton = document.querySelector('.js-open-question-to-toys-question-form')

  if(openQuestionToToysFormButton) {
    openQuestionToToysFormButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question-to-toys', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-to-the-toys-form', 'open') 
    })
  }

  const backToQuestionToTheToysFromToysFormButton = document.querySelector('.js-back-to-question-to-the-toys-from-toys-form')

  if(backToQuestionToTheToysFromToysFormButton) {

    backToQuestionToTheToysFromToysFormButton.addEventListener('click', function() {
      console.log('skdfjlks')
      window.popup('js-popup-contact-us-ru-modal-question-to-the-toys-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-to-toys', 'open') 
    })
  }

  const openOfferToysModalButton = document.querySelector('.js-open-offer-to-toys-form')

  if(openOfferToysModalButton) {

    openOfferToysModalButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question-to-toys', 'close')
      window.popup('js-popup-contact-us-ru-modal-offer-to-the-toys-form', 'open') 
    })
  }

  const backToQuestionToToysFromToysOfferFormButton = document.querySelector('.js-back-to-question-to-the-toys-from-toys-offer-form')

  if(backToQuestionToToysFromToysOfferFormButton) {

    backToQuestionToToysFromToysOfferFormButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-offer-to-the-toys-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-to-toys', 'open') 
    })
  }

  const backToContactUsRuModalFromToysQuestionButton = document.querySelector('.js-back-to-contact-us-ru-modal-from-toys-question')

  if(backToContactUsRuModalFromToysQuestionButton) {
    backToContactUsRuModalFromToysQuestionButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question-to-toys', 'close')
      window.popup('js-popup-contact-us-ru-modal', 'open') 
    })
  }

  const openApplicationForCooperationFormButton = document.querySelectorAll('.js-open-application-for-cooperation')
  for (let elem of openApplicationForCooperationFormButton) {
    if(elem) {
      elem.addEventListener('click', function() {
        window.popup('js-popup-contact-us-ru-modal', 'close')
        window.popup('js-popup-contact-us-ru-modal-application-for-cooperation', 'open') 
      })
    }
  }

  const backToContactUsRuModalFromApplicationForCooperationButton = document.querySelector('.js-back-to-contact-us-from-application-for-cooperation')

  if(backToContactUsRuModalFromApplicationForCooperationButton) {
    backToContactUsRuModalFromApplicationForCooperationButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-application-for-cooperation', 'close')
      window.popup('js-popup-contact-us-ru-modal', 'open') 
    })
  }

  const sendFormFromApplicationForCooperation = document.querySelector('.js-send-form-from-application-for-cooperation')

  if(sendFormFromApplicationForCooperation) {
    sendFormFromApplicationForCooperation.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-application-for-cooperation', 'close')
      window.popup('js-popup-contact-us-ru-modal-application-received', 'open') 
    })
  }

  const openQuestionModalButton = document.querySelector('.js-open-question-modal')

  if(openQuestionModalButton) {
    openQuestionModalButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal', 'close')
      window.popup('js-popup-contact-us-ru-modal-question', 'open') 
    })
  }

  const backToContactUsRuModalFromQuestionButton = document.querySelector('.js-back-to-contact-us-modal-from-question-form')

  if(backToContactUsRuModalFromQuestionButton) {
    backToContactUsRuModalFromQuestionButton.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question', 'close')
      window.popup('js-popup-contact-us-ru-modal', 'open') 
    })
  }

  const sendFormFromCooperationForm = document.querySelector('.js-send-from-offer-cooperation-form')

  if(sendFormFromCooperationForm) {
    sendFormFromCooperationForm.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-offer-cooperation-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-application-received', 'open') 
    })
  }

  const sendFormFromToysOfferForm = document.querySelector('.js-send-from-offter-to-toys-form')

  if(sendFormFromToysOfferForm) {
    sendFormFromToysOfferForm.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-offer-to-the-toys-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-application-received', 'open') 
    })
  }

  const openQuestionRecivedModalFromQuestionPublisherFormButton = document.querySelector('.js-open-question-recived-modal-from-question-publisher-form')

  if(openQuestionRecivedModalFromQuestionPublisherFormButton) {
    openQuestionRecivedModalFromQuestionPublisherFormButton.addEventListener('click', function() {
      window.popup('js_popup_contact_us_ru_modal-question-to-the-publisher-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-received', 'open') 
    })
  }

  const openQuestionRecivedModalFromToysQuestionForm = document.querySelector('.js-open-question-recived-modal-from-toys-question-form')

  if(openQuestionRecivedModalFromToysQuestionForm) {
    openQuestionRecivedModalFromToysQuestionForm.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question-to-the-toys-form', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-received', 'open') 
    })
  }

  const openQuestionRecivedModalFromQuestionForm = document.querySelector('.js-open-question-recived-modal-from-question-form')

  if(openQuestionRecivedModalFromQuestionForm) {
    openQuestionRecivedModalFromQuestionForm.addEventListener('click', function() {
      window.popup('js-popup-contact-us-ru-modal-question', 'close')
      window.popup('js-popup-contact-us-ru-modal-question-received', 'open') 
    })
  }





  const phoneInputs = document.querySelectorAll(".js-phone-number-input");

  if (phoneInputs.length) {
    for(let i = 0; i < phoneInputs.length; i++) {
      IMask(phoneInputs[i], {
        mask: "+{7} (000) 000-00-00",
      });
    }
  }

  const isElementXPercentInViewport = function(el, percentVisible) {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };

  const elephantSilder = document.querySelector('#elephant-slider')

  const trackElephantSliderOnViewPort = function() {
    if(isElementXPercentInViewport(elephantSilder, 50)) {
      elephantSilder.classList.add('bounce-animation')    


      const firstDropDown = document.querySelector('.elephant-dropdown.upper.first');
      const zeroDropDown = document.querySelector('.elephant-dropdown.bottom.zero');
      const secondDropDown = document.querySelector('.elephant-dropdown.upper.second');

      setTimeout(() => {
        firstDropDown.querySelector('.elephant-more-down-button').classList.add('active-js')
        firstDropDown.querySelector('.elephant-more-up-content').classList.add('active-js')
      }, 6000)

      setTimeout(() => {
        zeroDropDown.querySelector('.elephant-more-up-button').classList.add('active-js')
        zeroDropDown.querySelector('.elephant-more-down-content').classList.add('active-js')
      }, 6500)

      setTimeout(() => {
        secondDropDown.querySelector('.elephant-more-down-button').classList.add('active-js')
        secondDropDown.querySelector('.elephant-more-up-content').classList.add('active-js')
      }, 7000)
    }
  }

  if(elephantSilder) {
    window.addEventListener('scroll', function() {
      trackElephantSliderOnViewPort()
    })
  }

  const elephantYearsText = document.querySelectorAll('.year-text')

  if(elephantYearsText.length) {
    for(let i = 0; i < elephantYearsText.length; i++) { 
      elephantYearsText[i].addEventListener('click', function(e) {
        e.target.nextElementSibling.querySelector('.elephant-more-down')?.querySelector('div').classList.toggle('active-js')
        e.target.nextElementSibling.querySelector('.elephant-more-down')?.querySelector('button').classList.toggle('active-js')
        e.target.nextElementSibling.querySelector('.elephant-more-up')?.querySelector('div').classList.toggle('active-js')
        e.target.nextElementSibling.querySelector('.elephant-more-up')?.querySelector('button').classList.toggle('active-js')
      })    
    }
  }

  const mobileToolbarMenu = document.querySelector('#js-mobile-toolbar-menu')
  const mobileToolbarMenuTrigger = document.querySelector('.js-mobile-toolbar-menu-trigger')

  if(mobileToolbarMenu && mobileToolbarMenuTrigger) {
    mobileToolbarMenuTrigger.addEventListener('click', function() {
      mobileToolbarMenu.classList.toggle('--active')
      mobileToolbarMenuTrigger.classList.toggle('--active')
    }) 
  }

  const closeAutorButton = document.querySelector('#js-autor-modal-close')

  if(closeAutorButton) {
    closeAutorButton.addEventListener('click', function() {
      window.popup('js_popup_all_filters_modal', 'close')
    })
  }

  // animated index-block images

  function animIndexBlock() {
    const blocks = document.querySelectorAll('.index-block__animated')
    blocks.forEach(element => {
      const imgWrap = element.querySelector('.index-block__img')
      const imagesWrap = element.querySelector('.index-block__images')
      const images = element.querySelectorAll('.index-block__images img')
      let intervalId = null
      if (!(imgWrap && imagesWrap && images.length)) {
        return
      }
      imgWrap.addEventListener('mouseenter', () => {
        console.log('start')
        imgWrap.style.display = 'none'
        imagesWrap.style.display = 'block'
        images[0].style.display = 'block'
        let index = 0
        element.classList.add('isHover')
        intervalId = setInterval(() => {
          if (index >= images.length - 1) {
            
            console.log('end')
            intervalId ? clearInterval(intervalId) : null;
            intervalId = null
            return
          }
          images[index].style.display = 'none'
          images[index + 1].style.display = 'block'
          index = index + 1
        }, 300)
      })
      imagesWrap.addEventListener('mouseleave', () => {
        imagesWrap.style.display = 'none'
        imgWrap.style.display = 'block'
        images.forEach(img => {
          img.style.display = 'none'
        })
        element.classList.remove('isHover')
        intervalId ? clearInterval(intervalId) : null;
      })
    })
  }
  animIndexBlock()

  const polka = () => {
    setTimeout(() => {
      const ll = []
      const ff = []
      $('.polka-wrap').each(function( index ) {
        const f = $(this).find('.polka__front').outerWidth()
        const l = $(this).find('.polka__left').outerWidth()
        ll.push(l)
        ff.push(f)
        $(this).width(l)
        $(this).on('mouseenter', function(event) {
          $('.polka-wrap').not(this).removeClass('active').animate({
              width: ll[index] + "px"
          }, {
              duration: 300,
              specialEasing: {
                  width: 'linear'
              },
              complete: function() {
                
              }
          }).find('.polka').animate({
              left: 0 + "px"
          }, {
              duration: 300,
              specialEasing: {
                left: 'linear'
              },
          })

          $(this).addClass('active')
          $(this).animate({
              width: f + "px",
          }, {
              duration: 400,
              specialEasing: {
                  width: 'linear'
              },
              complete: function() {
              }
          }).find('.polka').animate({
              left: -ll[index] + "px"
          }, {
              duration: 1000,
              specialEasing: {
                left: 'linear'
              },
          })
        })
      });
      $('.polka-container').scrollLeft($('.polka-container').outerWidth() / 2)
    }, 2000)
  }

  polka()
})