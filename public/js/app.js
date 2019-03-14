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
        var burgerInfo = {burger_id: $(this).children(".burgerHandler").val(),
         customer_name:  $(this).children(".customerHandler").val()}
        $.ajax({
            url: '/burgers/update',
            method: 'PUT',
            data: burgerInfo
        })
        .then(data => {
            console.log(data);
            location.reload();
        });
    })
})