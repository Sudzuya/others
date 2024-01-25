const addPopup = (id = '', text = '') => {
    console.log(id);
    const body = document.body
    const popupForm =
        `<div id="${id}" class="popup hidden">
            <div class="popup__bg"></div>
            <div class="popup__body">
                <div close-popup class="form__close">
                    <div></div>
                    <div></div>
                </div>
                ${text}                    
            </div>
        </div>`
    const convertString = new DOMParser().parseFromString(popupForm, "text/html")
    const htmlPopup = convertString.querySelector('.popup')
    body.append(htmlPopup)

    const buttonsPopup = document.querySelectorAll('[data-popup]')
    const popup = document.querySelectorAll('.popup')

    buttonsPopup.forEach((button, idx) => {
        const dataPopup = button.getAttribute('data-popup')

        button.addEventListener('click', () => {
            // находим элемент с id = feedback
            const currentPopup = Array.from(popup).find(node => node.getAttribute('id') === dataPopup);
            console.log(currentPopup);
            if (dataPopup === currentPopup.id) {
                currentPopup.classList.remove('hidden')

                currentPopup.querySelector('.popup__bg').addEventListener('click', () => {
                    currentPopup.classList.add('hidden')
                })
                currentPopup.querySelector('[close-popup]').addEventListener('click', () => {
                    currentPopup.classList.add('hidden')
                })
            }
        })
    })
  }

export default addPopup
