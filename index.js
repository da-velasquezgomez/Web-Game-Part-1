function bgGenerator(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let imgs = document.createElement('img')

    imgs.src = url
    imgs.style.position = 'fixed'
    imgs.style.left = left + "px"
    imgs.style.bottom = bottom + "px"

    document.body.append(imgs)
    return imgs
}

function newItem(url, left, bottom){
    let addNew = newImage(url, left, bottom)
    
    addNew.addEventListener('dblclick', function(){
        addNew.remove()
    })
}

bgGenerator("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/sky.png", 0, 600, 20, 6)
bgGenerator("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/grass.png", 0, 0, 20, 6)

newImage("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/green-character.gif", 100, 100)
newImage("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/pine-tree.png", 450, 200)
newImage("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/tree.png", 200, 300)
newImage("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/pillar.png", 350, 100)
newImage("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/crate.png", 150, 200)
newImage("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/well.png", 500, 425)

newItem("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/sword.png", 500, 405)
newItem("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/staff.png", 600, 100)
newItem("/Users/diegovelasquez/Desktop/class/_JS/JS-Web-Game-Part-1-main/assets/sheild.png", 165, 185)
