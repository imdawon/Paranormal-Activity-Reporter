$(document).ready(function () {

    let postForm = $('.create-form');
      // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    let userEmail;
    $.get("/api/user_data").then(function (data) {
        userEmail = data.email;
    });

    let postCategory = $('#post-category');
    let postTitle = $('#titleText');
    let postBody = $('#inputText');

    postForm.on('submit', function(event) {
        event.preventDefault();
        let userData = {
            author: userEmail,
            title: postTitle.val().trim(),
            category: postCategory.val(),
            body: postBody.val().trim()
        };
        console.log(`User data obj: ${JSON.stringify(userData)}`);

    // If we have an email and password we run the loginUser function and clear the form
        createPost(userData.author, userData.title, userData.category, userData.body);
        postTitle.val('');
        postBody.val('');

        function createPost(author, title, category, body) {
            try {
                $.post('/api/post', {
                    author: author,
                    title: title,
                    category: category,
                    body: body
                })
                .then(function() {
                    console.log('post added!')
                })    
            }
            catch(err) {
                console.log(err);
            }
        }
    });



});