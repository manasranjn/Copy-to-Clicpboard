$(document).ready(function () {
    //function to add class in span
    function add() {
        $(".copied").addClass("bounce-effect");
    }

    //function to remove class in span
    function remove() {
        $(".copied").removeClass("bounce-effect");
    }


    $(".copy-btn").click(function () {
        $("#textArea").select();
        document.execCommand("copy")
        add();
        setTimeout(remove, 1000);
    })
})