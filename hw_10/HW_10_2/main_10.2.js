const formAge = document.forms.formAge;

const sendButton = document.getElementsByTagName('button')[0];

formAge.onsubmit = function (e) {
    e.preventDefault();
    const clientAge = +formAge.age.value;
    if (clientAge > 0) {
        if (clientAge < 18) {
            document.write('You are under 18 years old!!!');
        } else {
            document.write('You are an old man!!!');
        }
    } else {
        document.write('The year entered is incorrect!!!');
    }
};