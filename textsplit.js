// this is an array of 3 words in the div tag
const arr = gsap.utils.toArray('.word')
// logger
console.log(arr)

// array of chars within the first word in const arr
const firstWordChars = gsap.utils.toArray('.char', arr[0])
// logger
console.log(firstWordChars)

// animating each letter of the first word 'data'

gsap.to(firstWordChars, {duration: 1,
y: 200,
stagger: 0.5,
delay: 1})

// Repeating above process for text in the second line

const wellArr = gsap.utils.toArray('.char',arr[6]) 
// logger
console.log(wellArr)

// animating it

gsap.to(wellArr, {duration: 1,
x: 200,
stagger: 0.5,
delay: 1})

// testing
console.log('ok')

