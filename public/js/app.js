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
            .then(data => {
                console.log(data);
                location.reload();
            });
    });
    $("#burgers").on("click", function (e) {
        e.preventDefault();
        var burgerInfo = {
            burger_id: $(this).children(".burgerHandler").val(),
            customer_name: $(this).children(".customerHandler").val()
        }
        console.log(burgerInfo)
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