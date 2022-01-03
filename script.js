/* 
1. Create variable circle for the circles element
2. Create variable progress for progress element
3. Create variable nextBtn for next button
4. Create variable prevBtn for prev button
5. Create variable currentActive to and initialize to 0


1. Attached an event listener to the nextBtn
    a. Listen for click
    b. Increment the currentActive
    c. Test your currentActive with a console.log to make sure it is incrementing
    d. If it is incrementing, check if currentActice is greater than the length of the circle array.  If it is assign the activeTracker to the circle length. This would ensure that the activeTracker doesn't go higher than the length of the circles. Test with console.log
    e. Call an update method which we will implement later.

2.  Attached an event listener to the prevBtn
    a. Listen for click
    b. Increment the currentActive [believe should be decrement]
    c. Test your currentActive with a console.log to make sure it is incrementing [I believe should say decrementing]
    d. If it is incrementing, check if currentActice is greater than the length of the circle array.  If it is assign the activeTracker to the circle length. This would ensure that the activeTracker doesn't go higher than the length of the circles. Test with console.log
    e. Call an update method which we will implement later.


1.  Create a function called update
    a.  Run forEach method on the circles and get both the element and index. Check forEach documentation.
    b.  If the index is less than activeTracker
        i.  Add the class active class to the circle
        ii. Else remove the active class
    c.  Create a variable actives to hold all actives classes.
    d.  Change the width of the progress bar with this formula (actives.length -1)/(circles.length -1)*100
    e.  Implement an if else statement to check and disable or enable the prev and next buttons.
*/


const circles = document.querySelectorAll('.circle');
    // console.log(circle)
const progress = document.getElementById('progress');
    // console.log (progress)
const nextBtn = document.querySelector('.next');
    // console.log (nextBtn)
const prevBtn = document.querySelector('.prev');
    // console.log (prevBtn)
// const actives = document.querySelectorAll('.active');

let currentActive = 0;

// let activeTracker = currentActive;

    nextBtn.addEventListener('click', () => {
        currentActive++;
        // console.log (currentActive);
    if (currentActive > circles.length){
            // activeTracker = circles.length;
            currentActive = circles.length;
        }
        // console.log (activeTracker);
        update ();
});

    prevBtn.addEventListener('click', () => {
        currentActive--;
    // console.log(currentActive);
    if (currentActive > circles.length){
            // activeTracker = circles.length;
            currentActive = circles.length;
    }
    // console.log(activeTracker);
    update();
});

function update (){
    let actives = [];
    circles.forEach((element, index) => {
        // what do mean when you say check for documentation
        if(index < currentActive){
            // add the element to each class active
            element.classList.add('active');
            actives.push(element);
        }else{
            element.classList.remove('active')
        }
        // progress.setAttribute('style','width:' +(actives.length -1)/(circles.length -1)*100 + '%' );
        progress.style.width = (actives.length -1)/(circles.length -1)*100 + '%';
    })
    if(actives.length >= 4){
        nextBtn.disabled = true;
        prevBtn.removeAttribute('disabled');
    }else if(actives.length <= 1) {
        prevBtn.disabled = true;
        nextBtn.removeAttribute('disabled');
    }
}
   
console.log(actives.length, circles.length);


// progress.style.width = (actives.length -1)/(circles.length -1)*100
// progress.setAttribute ('width', ((actives.length -1)/(circles.length -1)*100))