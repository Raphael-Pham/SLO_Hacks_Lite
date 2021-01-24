function animate(){
    animateColor1();
    animateColor2();
    animateColor3();
}

function animateColor1(){
    document.getElementById("line1").style.color = "#585858";
    document.getElementById("line2").style.color = "#686868";
    document.getElementById("line3").style.color = "#484848";

    var state = -1;
    var id = setInterval(animate1, 25);

    function animate1(){
        elem1 = document.getElementById("line1").style.color;

        if(elem1 == "rgb(42, 42, 42)"){
            state = 1;
            newColor = greyPlusOne(elem1);
            document.getElementById("line1").style.color = newColor;
        }
        if(elem1 == "rgb(99, 99, 99)"){
            state = -1;
            newColor = greyMinusOne(elem1);
            document.getElementById("line1").style.color = newColor;
        }
        else{
            if(state == -1){
                newColor = greyMinusOne(elem1);
                document.getElementById("line1").style.color = newColor;
            }
            else if(state == 1){
                newColor = greyPlusOne(elem1);
                document.getElementById("line1").style.color = newColor;
            }
        }
    }
}

function animateColor2(){
    document.getElementById("line2").style.color = "#636363";

    var state = -1;
    var id = setInterval(animate2, 30);

    function animate2(){
        elem2 = document.getElementById("line2").style.color;

        if(elem2 == "rgb(42, 42, 42)"){
            state = 1;
            newColor = greyPlusOne(elem2);
            document.getElementById("line2").style.color = newColor;
        }
        if(elem2 == "rgb(99, 99, 99)"){
            state = -1;
            newColor = greyMinusOne(elem2);
            document.getElementById("line2").style.color = newColor;
        }
        else{
            if(state == -1){
                newColor = greyMinusOne(elem2);
                document.getElementById("line2").style.color = newColor;
            }
            else if(state == 1){
                newColor = greyPlusOne(elem2);
                document.getElementById("line2").style.color = newColor;
            }
        }
    }
}

function animateColor3(){
    document.getElementById("line3").style.color = "#494949";

    var state = -1;
    var id = setInterval(animate3, 20);

    function animate3(){
        elem3 = document.getElementById("line3").style.color;

        if(elem3 == "rgb(42, 42, 42)"){
            state = 1;
            newColor = greyPlusOne(elem3);
            document.getElementById("line3").style.color = newColor;
        }
        if(elem3 == "rgb(99, 99, 99)"){
            state = -1;
            newColor = greyMinusOne(elem3);
            document.getElementById("line3").style.color = newColor;
        }
        else{
            if(state == -1){
                newColor = greyMinusOne(elem3);
                document.getElementById("line3").style.color = newColor;
            }
            else if(state == 1){
                newColor = greyPlusOne(elem3);
                document.getElementById("line3").style.color = newColor;
            }
        }
    }
}


function greyPlusOne(hexColor){
    r = hexColor.substring(4,6);
    c = parseInt(r);
    c = +(c)+1;
    return "rgb(" + c + "," + c + "," + c + ")";
}

function greyMinusOne(hexColor){
    r = hexColor.substring(4,6);
    c = parseInt(r);
    c = +(c)-1;
    return "rgb(" + c + "," + c + "," + c + ")";
}
  
