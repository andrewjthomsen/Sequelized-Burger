$(document).ready(() => {
    $("#add-burger-btn").on("click", (e) => {
        e.preventDefault();
        let newBurger = {
            burger_name: $("#burgerOrder").val()
        };
        $.ajax({
                url: '/burgers/create',
                method: 'POST',
                data: newBurger
            })
            .then(response => {
                console.log(response);
            });
    });
    $("#burgers").on("click", "button", function(){
        var id = $(this).data("id");
        $.ajax({
            url: '/burgers/' + id,
            method: 'PUT',
        })
        .then(response => {
            console.log(response);
        });
    })
})