const container = document.querySelector('div.RP2rRchy4i8TIp1CTmb7 > div')
const query = document.querySelector("span.rEN7ncpaUeSGL9z0NGQR > h1").innerHTML

let button = document.createElement("img")
button.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVxQTFRFAAAA7R0j7R0k7R0k7R0k7R0k7R0k7R0k7R0k7h0j7R0k7R0k7Rwi7R0k7R0k7R0k7R0k7R0k8D9F9paa+ba4+8jK/NXW/Nzd/eHi/eXm/efo/efn/ePk/d/h/Nna/NPU+sTG+bK09o+S7i828lle/vb3/////u3t7ztB+8zO95yf/e3u+9HS7R8m//39//n6/vT07zQ6+K2w7zg++K+x7SIo8EJI8U9U+9HT7icu8UpP82pv/enq7isx8UtQ7SMq95ib/vb27iox8ERK9HZ67iYt7zc+8lVa/NTV7SAn7SEn/vPz/u3u+sbI+sLE9pCU8EBG/uzt/Nja7i407iwy82ds9YaK95mc+Kir+bK1+ru8+8nL+8rM+sjK+sDC+rm7+bCy+KWo95ea9YKG8l9j7iQr7R0k7R0k7R0k7R0k7R0k7hwj7R0k7R0k7Rwj7R0k7R0k7R0k7R0k7R0ky5nbSwAAAHR0Uk5TAASM5P3//NxzAcmnAYpW47/4////////////////////////////////////////////////////////////////////////////////////////////////////////////////89uwckIBqH0BV8H38bJbO/HlAAABEElEQVR4nGNgYGRiZmHFCtjYOTgZGBi5sMtCADcPAy8+eVZWPgZ+/AoEGHDYDwOCDPjlWVmppkBIWERUTFxCUkpKSlpGVk5eQVFJGVmBiqoaBlDXQFKgiSmvpqaFpEAbmwIdhAJdPaiYjD6SAgOEAkOYmJGxCZIKU7gCM7gCVlZzC7gCS7gCKyQFrLrWNlCeLVyBHbICewdHKM8JrsAZSYELTL+amitcgRtcgbsHkiM94Qq8YN701kOSV0cKKB9sAeWLpMAPmwJ/JAUBgZjyQcHI0R0SGhYeERnlFx0TExsXn5CYlJySSlqCoUQBG375NIZ0/AoyGDLxK8hiyM7BJ5/LwMCQl19QiF22qDiLgQEAqh5PRVmrOHQAAAAASUVORK5CYII=")
button.style = "margin-left: 8px;"
button = container.appendChild(button)
button.addEventListener("click", (e) => {
    window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank")
})
