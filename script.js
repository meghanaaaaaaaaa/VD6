document.addEventListener("DOMContentLoaded", function() {
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  // Function to handle click on the "Yes" button
  const handleYesClick = () => {
    question.innerHTML = "Okappudu ee valentines day lu ivanni mana valla ayye panlu kaadhu ani anukune danni,I never thought I would find someone as perfect as you❤️.Ninnu kalvadam and whatever we are today, Nuv na kosam pette efforts, na kosam chese every little thing is precious for me❤️. Ik Nen chaala marchukovaali, Just give me sometime, I'll work on myself.I'll try to give you my best version. this is just a small way to express my love for you❤️ Nak pedda pedda korikalem levu babe, YOU’RE MY FIRST LOVE AND I HOPE YOU TO BE MY LAST❤️. ANTHE. Just okati gurthupetko nanna, Em godavalu ayina, Ik we’ll have eachother. Nak nuvvunte chaalu. And nenu unta neeku. ALWAYS.Just dont break my trust. 
    Nenu neetho entha safe feel aithano anthakante ekkuva nammakam undhi nee paina naaku. 
    So PLEASE dont you ever try to break my trust
    and also Nuvvepppudu low feel aina nenoka danni unna ani gurthupetko, 
    Prathi roju nuvvu na life lo oka part ga avvadam, to have you is my blessing. 
    I'll take care of you. You are safe with me,just like how you make me feel<3 
    Ekkuva kathal paddav anko, em cheyyanu, inkoncham premistha😭If you’ll ever even try to break my heart, I’ll kill you, I know you wont but still. 😭 I lovee youu kannammaa❤️❤️ ";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

    // Remove the 'mouseover' event listener from noBtn
    noBtn.removeEventListener("mouseover", handleNoMouseOver);

    // Remove the noBtn from the DOM
    noBtn.remove();

    // Define predefined romantic date ideas
    const dateIdeas = [
      // List of romantic date ideas
    ];

    // Create and style a new button for Let's Go!
    const letsGoBtn = document.createElement("button");
    letsGoBtn.textContent = "Let's Goo🥂!";
    letsGoBtn.classList.add("letsgoo🥂-btn"); // You can add a class for styling if needed
    letsGoBtn.style.position = "absolute";

    // Adjust the left position based on screen width
    if (window.innerWidth <= 800) {
      letsGoBtn.style.left = "95%";
    } else {
      letsGoBtn.style.left = "63%";
    }

    letsGoBtn.style.transform = "translate(-50%, -50%)";
    letsGoBtn.style.width = "200px"; // Adjust the width as needed

    // Add a click event listener to prompt the user with random romantic date ideas
    letsGoBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * dateIdeas.length);
      const selectedDateIdea = dateIdeas[randomIndex];

      alert(`How about this romantic date idea: ${selectedDateIdea}`);
    });

    // Replace yesBtn with the new letsGoBtn
    yesBtn.replaceWith(letsGoBtn);
  };

  // Function to move the "No" button randomly when clicked
  const handleNoClick = () => {
    const { width, height } = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - width;
    const maxY = window.innerHeight - height;

    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
  };

  // Attach the handleNoClick function to the "click" event listener of the "No" button
  noBtn.addEventListener("click", handleNoClick);

  // Attach the handleYesClick function to the "click" event listener of the "Yes" button
  yesBtn.addEventListener("click", handleYesClick);
});