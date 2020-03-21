$(document).ready(function () {
<<<<<<< HEAD

    let postForm = $('#post-form');
=======
<<<<<<< HEAD
    let postCategory = $('#select-category');
    let postTitle = $('#titleText');
    let postBody = $('#inputText');
    let postForm = $('.create-form');

=======

    let postForm = $('.create-form');
>>>>>>> 2a6b76819c625af4f466c0f5a60d22050ef7ba16
      // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    let userEmail = $.get("/api/user_data").then(function (data) {
        console.log(userEmail);
    });

    let postCategory = $('#select-category');
<<<<<<< HEAD
    let postTitle = $('#post-title');
    let postBody = $('#post-body');

    postForm.on('submit', function(event) {
        event.preventDefault();
        let userData = {
            author: userEmail,
=======
    let postTitle = $('#titleText');
    let postBody = $('#inputText');
>>>>>>> befd8a7d35403bf06d5aece485361d196115d32b

    postForm.on('submit', function (event) {
        event.preventDefault();


        let userData = {
>>>>>>> 2a6b76819c625af4f466c0f5a60d22050ef7ba16
            title: postTitle.val().trim(),
            category: postCategory.val(),
            body: postBody.val().trim()
        };

<<<<<<< HEAD
    // If we have an email and password we run the loginUser function and clear the form
        createPost(userData.author, userData.title, userData.category, userData.body);
        postTitle.val('');
        postBody.val('');

        function createPost(author, title, category, body) {
            $.post('/api/post', {
                author: author,
                title: title,
                category: category,
                body: body
            })
            .then(function() {
                console.log('post added!')
            })
            .catch(function(err) {
                console.log(err);
            });
=======
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

>>>>>>> 2a6b76819c625af4f466c0f5a60d22050ef7ba16
        }
    });



});