function check_input(){
    let input = document.getElementsByTagName('input')[0]
    let error_msg = document.getElementById('form-errors')
    let form = document.getElementsByTagName('form')[0]
    let icon_error = document.getElementById('icon-error')
    if(input.value == ''){
        form.classList.add('form-error')
        icon_error.classList.remove('hidden')
        error_msg.classList.remove('hidden')

    }
    console.log('is working')
}
console.log('is working')

