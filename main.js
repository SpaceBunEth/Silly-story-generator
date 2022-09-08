/* Generates a silly story when the "Generate random story" button is pressed.
    1. button listen click event run a "Generate random story" function

Replaces the default name "Bob" in the story with a custom name, only if a custom name
 is entered into the "Enter custom name" text field before the generate button is pressed.
    2. if else statement checking value of customename, if customename is null use 'Bob' else
    use custome name provided by user.


Converts the default US weight and temperature quantities and units in the story into UK 
equivalents if the UK radio button is checked before the generate button is pressed.
    3. check state of uk radio button, if uk button is selected, run a function that 
    converts US weight and temperature into the queen's native tongue.

Generates a new random silly story every time the button is pressed. 
    4. Repeatablity with 'Generate random story' function  */


// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
    const customName = document.getElementById('customname');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');

    function randomValueFromArray(array){
      const random = Math.floor(Math.random()*array.length);
      return array[random];
    }
// 2. RAW TEXT STRINGS
    const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
    const insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
    const insertY = ['the soup kitchen','Disneyland','the White House'];
    const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
    randomize.addEventListener('click', result);

    function result() {
        newStory = storyText;
    
        const xItem = randomValueFromArray(insertX);
        const yItem = randomValueFromArray(insertY);
        const zItem = randomValueFromArray(insertZ);
    
        newStory = newStory.replaceAll(':insertx:', xItem);
        newStory = newStory.replace(':inserty:', yItem);
        newStory = newStory.replace(':insertz:', zItem);

        if(customName.value !== '') {
            const name = customName.value;
            
            newStory = newStory.replace('Bob', customName)
        }

        if(document.getElementById("uk").checked) {
            const weight = `${Math.round(300/14)} stone`;
            const temperature =  `${Math.round((94-32)/ 1.8000)} Centigrade`;

            newStory = newStory.replace('94 fahrenheit', temperature);
            newStory = newStory.replace('300 pounds', weight);
        }

        story.textContent = newStory;
        story.style.visibility = 'visible';
    }
