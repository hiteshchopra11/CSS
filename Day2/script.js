let c = 0;

function startAnimation() {
    if (c == 1) {
        document.getElementById("menu_one").style.animation =
            "menu_one_animation_reverse 2s forwards,cross_one_animation_reverse 1s 1s forwards ";
        document.getElementById("menu_two").style.animation =
            " menu_two_animation_reverse 1s forwards ";
        document.getElementById("menu_three").style.animation =
            " menu_three_animation_reverse 2s forwards,  cross_two_animation_reverse 1s 1s forwards";
        c = 0;
    } else if (c == 0) {
        document.getElementById("menu_one").style.animation =
            "menu_one_animation 2s forwards, cross_one_animation 1s 1s forwards";
        document.getElementById("menu_two").style.animation =
            " menu_two_animation 1s forwards ";
        document.getElementById("menu_three").style.animation =
            " menu_three_animation 2s forwards, cross_two_animation 1s 1s forwards ";
        c = 1;
    }
}