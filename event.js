function add() {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    document.getElementById('result').value=(parseInt(n1)+parseInt(n2))
}
    
const sub=()=>{
    let num1=document.getElementById('num1').value
    let num2=document.getElementById('num2').value
    parseInt(num1)>parseInt(num2)?(document.getElementById('result').value=(parseInt(num1)-parseInt(num2))):(document.getElementById('result').value=(parseInt(num2)-parseInt(num1)))
}
function multiply() {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    let res = (n1 * n2)
    try {
        // alert(`Result is ${res}`)
        document.getElementById('result').value=res
    } catch (error) {
        console.log("error is: ", error);
    }
}

const divide=()=>{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    // alert(`Dividing value is ${num1/num2}`)
    document.getElementById('result').value=(num1/num2)
}
// document.getElementById('owl').onclick = function(){
//     alert("It is owl")
// }

// document.getElementById('owl').addEventListener('click', function (e) {
//     // alert("It is a white owl")
//     // console.log("This is an owl");
//     console.log(e);
// }, false) // by default this value is false if I don't write it. Moreover, this by default false value is required to write to mention the exact event. This event is named as event propagation which has two events, such as eventbubbling and eventcapturing. When it is false, it means eventbubbling (i.e., first it will access the inner components and then it will access outer components). Further, when it is true, it means eventcapturing (i.e., first it will access the outer components and then it will access inner components)

// document.getElementById('images').addEventListener('click', eventPropagation=()=>{
//     console.log("This is outer component");
// }, false)

// document.getElementById('owl').addEventListener('click', eventPropagation=()=>{
//     console.log("Owl clicked, inner component");
// }, false)

// for owl img-> inner component will show first and then outer component will print
// document.getElementById('images').addEventListener('click', eventPropagation=()=>{
//     console.log("This is outer component");
// }, false)

// document.getElementById('owl').addEventListener('click', eventPropagation=(e)=>{
//     console.log("Owl clicked, inner component");
//     // event.stopPropagation() // while no parameter is defined in the function
//     e.stopPropagation() // while using stoppropagtion event, we need to use false in the event, otherwise it will access outer component first
// }, false)

document.getElementById('google').addEventListener('click', function (e) {
    console.log('google clicked');
    e.preventDefault()
    // e.stopPropagation()
})

document.getElementById('images').addEventListener('click', vanish = () => {
    // document.getElementById('images').style.display='none'
    // console.log(event.target);
    // console.log(event.target.parentNode);
    console.log(event.target.tagName);
    if (event.target.tagName === 'IMG') {
        let removeImg = event.target.parentNode
        removeImg.remove()
        
        alert('You are going to vanish one image from this page')
        // confirm('You are going to vanish one image from this page')
        // removeImg.parentNode.removeChild(removeImg)
    }
})
// for owl img-> outer component will show first and then inner component will print
// But in case, outer is false and inner is true, it will support eventbubling method which means inner component act first
// But in case, outer is true and inner is false, it will support eventcapturing method which means outer component act first

const images = document.getElementById('images');
let currentImageIndex = 0;
function next() {
    if (currentImageIndex === images.children.length - 1) {
        return;
    } else {
        currentImageIndex++;
        showCurrent();
    }

}
function previous() {
    if (currentImageIndex === 0) {
        return;
    } else {
        currentImageIndex--;
        showCurrent();
    }
}
function showCurrent() {
    for (let i = 0; i < images.children.length; i++) {
        images.children[i].style.display = 'none';
    }
    images.children[currentImageIndex].style.display = 'block';
    console.log(images.children);
}
