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

    const imageInputCreateBtn = document.getElementById('poster_image_item_buttom')
    const imageInputSection = document.getElementById('image_input_section')
    const imageRemoveBtn = this.document.getElementById('image_input_remove_button')

    imageInputCreateBtn.addEventListener('click', () => {
        imageInputSection.classList.remove('hidden')
        imageInputCreateBtn.classList.add('hidden')
    })
    imageRemoveBtn.addEventListener('click', () => {
        imageInputSection.classList.add('hidden')
        imageInputCreateBtn.classList.remove('hidden')
    })

    const descriptionInputCreateBtn = document.getElementById('poster_description_item_buttom')
    const descriptionInputSection = document.getElementById('description_input_section')
    const descriptionRemoveBtn = this.document.getElementById('description_input_remove_button')

    descriptionInputCreateBtn.addEventListener('click', () => {
        descriptionInputSection.classList.remove('hidden')
        descriptionInputCreateBtn.classList.add('hidden')
    })
    descriptionRemoveBtn.addEventListener('click', () => {
        descriptionInputSection.classList.add('hidden')
        descriptionInputCreateBtn.classList.remove('hidden')
    })

    headingInput.addEventListener('keyup', (event) => {
        headingPreview.innerText = event.target.value
    })
})
