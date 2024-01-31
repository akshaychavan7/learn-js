/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    result = []
    for (const email of emails) {
        if(isValidEmail(email)) {
            count = email.split('@')[0].length;
            console.log(count, email)
            result.push(email.replace(/[a-z|_]+@/, '*'.repeat(count)+'@'))
        }
    }
    console.log(result)
}

function isValidEmail(email) {
    return /[a-z|_]+@[a-z]+.[a-z]/.test(email)
}