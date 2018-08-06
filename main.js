var userName = document.getElementById('username');
var randomStory = document.querySelector('.random-story');
var tale = document.querySelector('.tale');


function randomArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
var mainStory = "It was an ordinary summer morning in Norway. Day as ususal. Krzysztof was looking for a new employee for his fast growing organization. While browsing candidate profiles on inputV, suddenly found Milena Kozlowska's  resume, inputR, so he decided to hire her in a glimpse."

var inputV = ['GitHub', 'finn.no', 'email'];
var inputR = ['whose experience and professional profile matched the job description perfectly', 'whose professional experience and skills looked interesting and promising ', 'whose portfolio website was delightful'];



randomStory.addEventListener('click', result);

function result() {
  var newStory = mainStory;
  var storyV = randomArray(inputV);
  var storyR = randomArray(inputR);

  newStory = newStory.replace('inputV', storyV);
  newStory = newStory.replace('inputR', storyR);


  if(userName.value != '') {
    var name = userName.value;
    newStory = newStory.replace('Krzysztof', name);
  }
  tale.textContent = newStory;
  tale.style.visibility = 'visible';
}
