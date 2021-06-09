//tl is a timeline, which lets us chain multiple animations
//if you put brackets in the parentheses here, you can set defaults
//(note: for defaults you do need the two sets of curly braces)
const tl = gsap.timeline({default: {ease: "power1.out" } });

//using the timeline we just made
//.to() says where we want the animation to go to
//first argument for .to() is the element you want to affect
//second argument is an object in curly braces, here we specify the animation we want to do
//y: "0%" says we want to move it back to 0%
//third argument is the duration
//fourth argument allows us to add a stagger or delay so things come up in sequence
tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});

//next animation will start when we add another tl.to()
//when you use a timeline variable like we have, the animations will chain together
//y: "-100" is moving the slider back up to the top
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5 });

//we want to push the black part up as well when the slider moves up
//by default this will start late, so we add a "-=1" after our object-
//-this tells us that we want it to go one second faster
//ie. our duration for the slider is 1.5s, so by starting -1s for this one, they will go closer to the same time
tl.to(".intro", {y: "-100%", duration: 1 }, "-=1");

//.fromTo() lets you set a starting point and an ending point
//here this will affect the opacity to slowly fade the nav in
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});

//here we do the same fade in for our .big-text class
tl.fromTo(".big-text", { opacity: 0 }, {opacity: 1, duration: 1 }, "-=1");
