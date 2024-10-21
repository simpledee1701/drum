
const drumlen = document.querySelectorAll(".drum").length;

for(let i=0;i<drumlen;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
        let vari = this.innerHTML;
        noice(vari);
    })
}
function noice(key){

    switch(key){
        case "Kick":
            const tom1 = new Audio("sounds/kick.mp3"); 
            tom1.play();
            break;

        case "Hi Hat":
            const hihat = new Audio("sounds/hiii hatt.mp3");
            hihat.play();
            break;

        case "Pf snare":
            const pfsnare = new Audio("sounds/pf snare.mp3");
            pfsnare.play();
            break;

        case "K snare":
            const ksnare = new Audio("sounds/k snare.mp3");
            ksnare.play();
            break;

        case "Ps snare":
            const pssnare = new Audio("sounds/ps snare.mp3");
            pssnare.play();
            break;

        case "Drop":
            const drop = new Audio("sounds/drop.mp3");
            drop.play();
            break;

        case "Whisle":
            const whisle = new Audio("sounds/whisle.mp3");
            whisle.play();
            break;
        default:
            break;
    }
}