const btn1 =document.getElementById('#btn1');
const btn2 =document.getElementById('#btn2');

// btn1.onclick = () => alert("Hello World");

// btn2.addEventListener('click', () => alert("Hello World"));

// btn1.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

//   btn2.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
//   });

  const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});