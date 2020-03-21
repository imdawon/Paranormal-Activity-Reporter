$(document).ready(function () {
<<<<<<< HEAD
    let postCategory = $('#select-category');
    let postTitle = $('#titleText');
    let postBody = $('#inputText');
    let postForm = $('.create-form');

=======

    let postForm = $('.create-form');
      // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    let userEmail = $.get("/api/user_data").then(function (data) {
        console.log(userEmail);
    });

    let postCategory = $('#select-category');
    let postTitle = $('#titleText');
    let postBody = $('#inputText');
>>>>>>> befd8a7d35403bf06d5aece485361d196115d32b

    postForm.on('submit', function (event) {
        event.preventDefault();


        let userData = {
            title: postTitle.val().trim(),
            category: postCategory.val(),
            body: postBody.val().trim()
        };

        // If we have an email and password we run the loginUser function and clear the form
        createPost(userData.title, userData.category, userData.body);
        postTitle.val('');
        postBody.val('');

        function createPost(title, category, body) {

            $.get("/api/user_data")
                .then(function (email) {
                    console.log(email);
                    $.post('/api/post', {
                        author: email.email,
                        title: title,
                        category: category,
                        body: body
                    })
                        .then(function () {
                            console.log('post added!')
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                });

        }
    });



});