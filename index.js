const site_header = document.querySelector('.site-header');
const up = document.querySelector('.scroll-up');

document.addEventListener(
    'scroll',
    () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 60)
        {
            site_header.classList.add('site-header--scroll');
        }
        else
        {
            site_header.classList.remove('site-header--scroll');
        }
    
        up.addEventListener('click', () => { window.scrollTo(0,0); });
    }
);

/* Animation (card text) */

const required_elements = document.querySelectorAll('.on-scroll');
// select all elements with class 'on-scroll' and store them as an array

// Looping through all elements to find those which are visible and change add/remove a css class accordingly
function loopElements() {
    var len = required_elements.length;
    for (var i=0; i < len; i++)
    {
        var element = required_elements[i];
        if (isElementInViewport(element))
        {
            element.classList.add('visible');
        }
        else
        {
            element.classList.remove('visible');
        }
    }

    window.requestAnimationFrame(loopElements);   // loopElements passed as a callback function to scroll to keep firing it regularly
}

loopElements();

// Checking if the element is visible or not
function isElementInViewport(element){
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 20 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight - 10 || document.documentElement.clientHeight) &&
        rect.right<= (window.innerWidth || document.documentElement.clientWidth)
    )
// document.documentElement.clientHeight & clientWidth are for browsers that do not support window.innerHeight & innerWidth properties
}
/* End of animation */
