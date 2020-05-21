window.addEventListener('load',()=>{
    let button = document.getElementById("gen");
    let description =document.getElementById("desc");
    var lv = 0;
    let lvv = 90;
    let value = (num) => {
        if (num >= 30 && num < 35) {
            lvv= 21;
            description.textContent= "Just an Attraction";
        }
        else if (num >= 75 && num < 80){
            lvv = 53;
            description.textContent = "Infatuation";
        }
        else if (num >= 35 && num < 40) {
            lvv = 64;
            description.textContent = "Just an Attraction";
        }
        else if (num >= 40 && num < 45) {
            lvv = 97;
            description.textContent = "True Love";
        }
        else if (num >= 45 && num < 50) {
            lvv = 49;
            description.textContent = "Just an Attraction";
        }
        else if (num >= 50 && num < 55) {
            lvv = 56;
            description.textContent = "Infactuation";
        }
        else if (num >=55  && num < 60) {
            lvv = 38;
            description.textContent = "Just an Attraction";
        }
        else if (num >= 60 && num < 65) {
            lvv = 63;
            description.textContent = "Infatuation";
        }
        else if (num >= 65 && num < 70) {
            lvv = 89;
            description.textContent = "True Love";
        }
        else if (num >= 70 && num < 75) {
            lvv = 42;
            description.textContent = "Just an Attraction";
        }
        else {
            lvv = 00;
            description.textContent = "Enter Something";
        }
    }
    let meter = (str1, str2) => {
        console.log(str1,str2);
        let code1 = str1.toUpperCase().charCodeAt(0);
        let code2 = str2.toUpperCase().charCodeAt(0);
         lv = (code1 + code2) % 100;
         value(lv);
        // console.log(lv, value(lv));
    };
    let generate = (x) => {
        // to create percentage circle;
        if (x.matches){
            Circles.create({
                id: 'love',
                value: lvv,
                radius: 130,
                width: 25,
                duration: 1,
                colors: ['#D3B6C6', '#4B253A']
            });
        }else{
            Circles.create({
                id: 'love',
                value: lvv,
                radius: 160,
                width: 25,
                duration: 1,
                colors: ['#D3B6C6', '#4B253A']
            });
        }
       
    };
     
    // using media query for mobile 
    var x = window.matchMedia("(max-width: 700px)");
    button.onclick = ()=>{
        var inpt1 = document.getElementById("yourName").value;
        var inpt2 = document.getElementById("crushName").value;
        let toBttom = () => {
            // to scroll down auto while clicking Generate button;
            window.scrollTo(0, document.body.scrollHeight);
        }
    toBttom();
    meter(inpt1, inpt2);   
    generate(x);
    x.addListener(generate) // Attach listener function on state changes
};    
});

