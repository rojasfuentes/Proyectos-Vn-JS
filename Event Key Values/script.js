const instert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    instert.innerHTML = `
    <div class="key">
    ${e.key == ' ' ? 'Space' : e.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>
    `
})