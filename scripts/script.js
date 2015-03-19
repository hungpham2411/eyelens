function bankInfo() {
    var bank = document.querySelector("#bank-list");
    bank.addEventListener("change", function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                document.querySelector("#bank-account-name").innerHTML = response.accountName;
                document.querySelector("#bank-account-number").innerHTML = response.accountNumber;
                document.querySelector("#bank-department").innerHTML = response.department;
            }
        };
        xhr.open("get", "php/bank_info.php?id=" + bank.value, true);
        xhr.send();
    });
}

function addEventListeners() {
    document.addEventListener("DOMContentLoaded", function () {
        try {
            $("#slider").nivoSlider({});
        } catch (e) {
            console.log(e);
        }

        try {
            $("#model-owlslider").owlCarousel({
                items: 1,
                navigation: true,
                navigationText: ["<img src='images/slider/arrow-left.png'>", "<img src='images/slider/arrow-right.png'>"],
                pagination: false
            });
            CloudZoom.quickStart();
        } catch (e) {
            console.log(e);
        }

        //Initialize popover
        $("[data-toggle=popover]").popover();

        bankInfo();
    });
}

addEventListeners();