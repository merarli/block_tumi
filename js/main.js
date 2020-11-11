const p5 = require('p5')

const circle = (p5) => {

  let count = 1
  let set_list = []
  const set_size = 50

  p5.setup = () => {
    p5.createCanvas(1000, 1000)
    console.log('setup')
    // p5.backendColor(255)
    p5.loop()
    // p5.noLoop()

    for (let i = 0; i < 2000; i = i + 50) {
      p5.fill(p5.color('#000000'))
      p5.rect(i, 950, set_size, set_size)
      set_list.push({ x: i, y: 950 })
    }
  }

  p5.draw = () => {
    // p5.ellipse(p5.mouseX, p5.mouseY, 50, 50)
    const set_x = Math.floor(Number(p5.mouseX) / set_size) * set_size
    const set_y = Math.floor(Number(p5.mouseY) / set_size) * set_size
    // console.log({ x: set_x, y: set_y })
  }

  p5.mouseReleased = () => {
    // p5.noLoop()
  }

  p5.mousePressed = () => {

    // p5.ellipse(p5.mouseX, p5.mouseY, 50, 50)

    const set_x = Math.floor(Number(p5.mouseX) / set_size) * set_size
    const set_y = Math.floor(Number(p5.mouseY) / set_size) * set_size

    //同じところにおいているか検索する -1が返ってくればおける
    const set_search = set_list.findIndex(item => {
      return JSON.stringify(item) === JSON.stringify({ x: set_x, y: set_y })
    })

    //下にブロックが置いてあるか検索する
    const set_bottom_serach = set_list.findIndex(item => {
      return JSON.stringify(item) === JSON.stringify({ x: set_x, y: set_y + set_size })
    })

    console.log('set_bottom_serach: ' + set_bottom_serach)
    if(set_bottom_serach === -1){
      alert('空中には置けません')
      return
    }

    console.log('set_search: ')
    console.log(set_search)

    if (set_search === -1) {

      if (count % 2 === 0) {
        p5.fill(p5.color('#ff7474'))
      } else {
        p5.fill(p5.color('#00d4d4'))
      }

      p5.rect(set_x, set_y, set_size, set_size)
      set_list.push({ x: set_x, y: set_y })
      count++
      return
    } else {
      alert('上書きは禁止されています')
    }

    console.log('最終行')
  }

}

const canvas = new p5(circle, document.getElementById('#canvas'))
// const canvas = p5.createCanvas(1280, 1280)
// canvas.createCanvas(1000,1000)
// canvas.parent("canvas");

// const app = p5.createCanvas(720,720);
// app.parent('canvas')
