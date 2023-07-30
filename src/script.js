window.addEventListener('load', function() {
    const headingInputCreateBtn = document.getElementById('poster_heading_item_buttom')
    const headingInputSection = document.getElementById('heading_input_section')
    const headingRemoveBtn = this.document.getElementById('heading_input_remove_button')
    const headingInput = this.document.getElementById('heading_input')
    const headingPreview = this.document.getElementById('heading_preview')

    headingInputCreateBtn.addEventListener('click', () => {
        headingInputSection.classList.remove('hidden')
        headingInputCreateBtn.classList.add('hidden')
    })
    headingRemoveBtn.addEventListener('click', () => {
        headingInputSection.classList.add('hidden')
        headingInputCreateBtn.classList.remove('hidden')
        headingPreview.innerText = null
        headingInput.value = null
    })
    headingInput.addEventListener('keyup', (event) => {
        headingPreview.innerText = event.target.value
    })

    const imageInputCreateBtn = document.getElementById('poster_image_item_buttom')
    const imageInputSection = document.getElementById('image_input_section')
    const imageInput = document.getElementById('image_input')
    const imagePreview = document.getElementById('image_preview')
    const imageRemoveBtn = this.document.getElementById('image_input_remove_button')

    imageInputCreateBtn.addEventListener('click', () => {
        imageInputSection.classList.remove('hidden')
        imageInputCreateBtn.classList.add('hidden')
    })
    imageRemoveBtn.addEventListener('click', () => {
        imageInputSection.classList.add('hidden')
        imageInputCreateBtn.classList.remove('hidden')
        imagePreview.src = null
        imageInput.value = null
        imagePreview.classList.add('hidden')
    })
    imageInput.addEventListener('change', (event) => {
        imagePreview.src = URL.createObjectURL(event.target.files[0])
        imagePreview.classList.remove('hidden')
    })

    const descriptionInputCreateBtn = document.getElementById('poster_description_item_buttom')
    const descriptionInputSection = document.getElementById('description_input_section')
    const descriptionInput = document.getElementById('description_input')
    const descriptionPreview = document.getElementById('description_preview')
    const descriptionRemoveBtn = this.document.getElementById('description_input_remove_button')

    descriptionInputCreateBtn.addEventListener('click', () => {
        descriptionInputSection.classList.remove('hidden')
        descriptionInputCreateBtn.classList.add('hidden')
    })
    descriptionRemoveBtn.addEventListener('click', () => {
        descriptionInputSection.classList.add('hidden')
        descriptionInputCreateBtn.classList.remove('hidden')
        descriptionPreview.innerText = null
        descriptionInput.value = null
    })
    descriptionInput.addEventListener('keyup', (event) => {
        descriptionPreview.innerText = event.target.value
    })
    
    this.document.getElementById('download-button').addEventListener('click', (event) => {
        event.preventDefault()
        downloadHTMLSectionAsImage()
    })
})

function adjustHeadingAlignment(position) {
    const headingPreview = this.document.getElementById('heading_preview')
    headingPreview.classList.remove('text-left', 'text-right', 'text-center')
    headingPreview.classList.add(`text-${position}`)
}

function setHeadingColor(color) {
    const headingPreview = this.document.getElementById('heading_preview')
    headingPreview.classList.remove('text-blue-500', 'text-green-500', 'text-gray-900')
    headingPreview.classList.add(color)
}


function downloadHTMLSectionAsImage() {
    const section = document.getElementById('preview-section');

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
    context.fillStyle = '#ffffff'
    const htmlContent = section.innerHTML;
    
    // Create a new SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', canvas.width);
    svg.setAttribute('height', canvas.height);
    const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignObject.setAttribute('width', '100%');
    foreignObject.setAttribute('height', '100%');
    svg.appendChild(foreignObject);
    foreignObject.innerHTML = htmlContent;
    const svgString = new XMLSerializer().serializeToString(svg);
    const dataURL = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
    
    // Create a new image and draw it on the canvas
    const img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.download = 'download.png';
        downloadLink.click();
    };
    img.src = dataURL;
}
  

  