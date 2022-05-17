function submitForm() {
    let penerimaEmail = 'test1234@mail.com'
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phoneNum = document.getElementById('phone').value
    let subject = document.getElementById('selection').value
    let message = document.getElementById('message').value

    const arr = [name, email, phoneNum, subject, message]


    for (i = 0; i < arr.length; i++){
        if(arr[i] == '') {
            alert('Semua data harus di isi')
            return 
        }
        console.log(arr[i])
    }

    let a = document.createElement('a')

    a.href= `mailto:${penerimaEmail}?subject=${subject}&body=My name is ${name}, ${subject}. ${message}`

    a.click()

}