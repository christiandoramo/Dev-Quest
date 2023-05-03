const body = document.querySelector('body')
const directions = ['row', 'column']
const orgs = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
]
directions.forEach((direction) => {
  orgs.forEach((org) => {
    let section = document.createElement('section')
    section.innerHTML = `
        <section>
            <h2>${org} <br> flex-direction: ${direction}</h2>
            <div class="container ${org} ${direction}">
                <div class="item item1">O ITEM 1</div>
                <div class="item item2">O ITEM 2</div>
                <div class="item item3">O ITEM 3</div>
            </div>
        </section>
        `
    body.appendChild(section)
  })
})
