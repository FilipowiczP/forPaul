const paragraph = document.querySelector('p');
const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const button3 = document.querySelector('.btn3')

button1.addEventListener('click',function(){
  paragraph.classList.remove('style2', 'style3')
  paragraph.classList.add('style1')
})
button2.addEventListener('click',function(){
  paragraph.classList.remove('style1', 'style3')
  paragraph.classList.add('style2')
})
button3.addEventListener('click',function(){
  paragraph.classList.remove('style2', 'style1')
  paragraph.classList.add('style3')
})