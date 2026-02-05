var Body = {
    setColor : function(color) {
        $('body').css('color',color);
    },
    setBackgroundColor : function(color) {
        $('body').css('backgroundColor',color);
    }
}

var H1 = {
    setBorderBottomColor : function(color) {
        $('h1').css('borderBottomColor',color)
    }
}

var Ol = {
    setBorderRightColor : function(color) {
        $('ol').css('borderRightColor',color)
    }
}

var Button = {
    setValue : function(btn,value) {
        btn.value = value;
    },
    setColor : function(btn,color) {
        btn.style.color = color;
    },
    setBackgroundColor : function(btn,color) {
        btn.style.backgroundColor = color;
    }
}

var Inception = {
    setColor : function(color) {
        $('.aTagInception').css('color',color);
    }
}

var Exception = {
    setColor : function(color) {
        $('.aTagException').css('color',color)
    }
}

function modeToggle(btn) {
    var btn = document.getElementById('modeToggle');
    if(btn.value === '다크 모드') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Button.setValue(btn,'라이트 모드');
        Button.setColor(btn,'black');
        Button.setBackgroundColor(btn,'white');
        Inception.setColor('powderblue');
        Exception.setColor('white');
        H1.setBorderBottomColor('white');
        Ol.setBorderRightColor('white');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Button.setValue(btn,'다크 모드');
        Button.setColor(btn,'white');
        Button.setBackgroundColor(btn,'black');
        Inception.setColor('blue');
        Exception.setColor('black');
        H1.setBorderBottomColor('black');
        Ol.setBorderRightColor('black');
    }
}