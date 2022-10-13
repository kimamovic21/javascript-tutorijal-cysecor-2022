console.log('JS ucitan');

let logo = document.querySelector('.lnXdpd');
console.log(logo);

logo.src = chrome.runtime.getURL("images/cysecor_logo.png");
logo.srcset = chrome.runtime.getURL("images/cysecor_logo.png");
