function loadMissData() {
    $("#miss-modal").on("show.bs.modal", function (event) {
        var button = $(event.relatedTarget);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                $("#miss-modal-label").text(response.missName);
                $("#miss-address").text(response.missAddress);
                $("#miss-birth-date").text(response.missBirthDate);
                $("#miss-num-likes").text(response.missNumLikes);
                $("#miss-comment-shared").text(response.missCommentShared);

                $("#miss-model").empty();
                for (var i = 0; i < response.missModel.length; i++) {
                    $("#miss-model").append("<li><figure class=\"thumbnail\"><img class=\"cloudzoom-gallery img-cover\" data-cloudzoom=\"image: 'images/album/" + response.missModel[i].image + "', useZoom: '.cloudzoom'\" data-id=\"" + response.missModel[i].id + "\" src=\"images/album/" + response.missModel[i].image + "\" alt=\"\"/></figure></li>");
                }

                CloudZoom.quickStart();
                getMissLensInfo();
            }
        };
        xhr.open("get", "php/get_miss_data.php?id=" + button.data("id"), true);
        xhr.send();
    });
}

function getMissLensInfo() {
    $("#miss-model .cloudzoom-gallery").on("click", function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                $("#lens-image").attr("src", response.lensImage);
                $("#lens-group").text(response.lensGroup);
                $("#lens-name").text(response.lensName);
            }
        };
        xhr.open("get", "php/get_miss_lens_info.php?id=" + $(this).data("id"), true);
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
                navigation: true,
                navigationText: ["<img src='images/slider/arrow-left.png'>", "<img src='images/slider/arrow-right.png'>"],
                pagination: false,
                singleItem: true
            });
            CloudZoom.quickStart();
        } catch (e) {
            console.log(e);
        }

        try {
            $("#accessories-owlslider").owlCarousel({
                items: 6,
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

        try {
            loadMissData();
        } catch (e) {
            console.log(e);
        }
    });
}

addEventListeners();