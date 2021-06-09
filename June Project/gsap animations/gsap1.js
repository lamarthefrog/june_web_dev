//defining a timeline variable
const tl = gsap.timeline({default: {ease: "power1.out"} });

//use .to() to tell where we want the animation to go
//argument 1: the element to effect
//argument 2: an object in curly braces, here we specify what the animation should do
//argument 3: duration
//argument 4: allows us to stagger, delay, or set sequence

tl.to(".text", {y: "0%", duration: 1, stagger: 0.5 });

tl.fromTo(".text", {opacity: 1}, {opacity: 0, duration: 1});

tl.to(".text-2", {y: "0%", duration: 1, stagger: 0.5 });

tl.fromTo(".text-2", {opacity: 1}, {opacity: 0, duration: 1});

tl.fromTo(".intro", {opacity: 1}, {opacity: 0, duration: 0.25 });
tl.fromTo(".intro-2", {opacity: 1}, {opacity: 0, duration: 0.5 });