$(document).ready(function () {
    let postCategory = $('#select-category');
    let postTitle = $('#titleText');
    let postBody = $('#inputText');
    let postForm = $('.create-form');


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