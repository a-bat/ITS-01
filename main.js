window.onload = function () {

    let button = document.getElementById("submit");
    button.addEventListener('click', function () {
        getInputData();
    });

    button.addEventListener('keydown',function (event)  {
        if (event.key == "Enter") {
            getInputData();
        }else {
            console.log("mai citeste niste documentatie maestre :D ");
        }
    });

    function getInputData() {
        let nume = document.getElementById("Nume").value;
        let prenume = document.getElementById("Prenume").value;

        let info = {
            nume: nume,
            prenume: prenume
        }
        console.log(info);
    }
};