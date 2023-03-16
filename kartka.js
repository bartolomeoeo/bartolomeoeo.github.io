


import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";


kaboom();

loadSprite("kartka", "karteczka_swiateczna.png")
loadSprite("ludzik", "ludzikdokartki.png")
loadSound("muzyka", "cichanocmuzyczka.mp3")

add([
    sprite("kartka")
])

const ludzik = add([
    sprite("ludzik"),
    pos(0,100)
])

let wprawo = true

onUpdate(()=>{

    if (wprawo && ludzik.pos.x < 500){

    ludzik.pos.x += 10

        debug.log(wprawo)

    }
 
    else if(ludzik.pos.x == 500  && wprawo){
        wprawo = false
        debug.log(wprawo)
    }

    else if(!wprawo && ludzik.pos.x > 0) {
        
        ludzik.pos.x -=10

    }
        else if(ludzik.pos.x == 0 && !wprawo)


        {
            wprawo = true
        }
})


onKeyRelease("space",()=>play("muzyka"))