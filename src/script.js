window.addEventListener('load', function() {
    const headingInputCreateBtn = document.getElementById('poster_heading_item_buttom')
    const headingInput = document.getElementById('heading_input')
    const headingRemoveBtn = this.document.getElementById('heading_input_remove_button')

    headingInputCreateBtn.addEventListener('click', () => {
        headingInput.classList.remove('hidden')
        headingInputCreateBtn.classList.add('hidden')
    })
    headingRemoveBtn.addEventListener('click', () => {
        headingInput.classList.add('hidden')
        headingInputCreateBtn.classList.remove('hidden')
    })
})
