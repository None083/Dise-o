$(document).ready(function () {
    $("header > nav#menu-principal > label").on({
        click: function () {
            if ($("nav#menu-principal > ul").css("display") === "none") {
                $("header > nav#menu-principal > ul").css({
                    "display": "flex",
                    "flex-flow": "column",
                    "position": "absolute",
                    "top": "73px",
                    "left": "0",
                    "background-color": "black",
                    "width": "100%"
                });
            } else {
                $("header > nav#menu-principal > ul").css("display", "none")
            }
        },
        mouseenter: function () {
            $("span", this).animate({color: '#827c82'});
        },
        mouseleave: function () {
            $("span", this).animate({color: '#fff'});
        }
    })
});
