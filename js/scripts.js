$(function(){
    var data = [
        {
            id: 1,
            title: 'Time',
            body: 'If ur an actor, even a successful one, ur still waiting for phone to ring.',
            author: 'Kevin Bacon'
        },
        {
            id: 2,
            title: 'Pain',
            body: 'Believe me',
            author: 'Donald Trump'
        },
        {
            id: 3,
            title: 'Words',
            body: 'We think too much and feel too little',
            author: 'Charlie Chaplin'
        },
        {
            id: 4,
            title: 'Peace',
            body: 'I was taught to be perfect at everything, and i realized that everything was more important than i thought.',
            author: 'Dennis Quad'
        },
        {
            id: 5,
            title: 'Art',
            body: 'Rescue, Rebuild,Restore.',
            author: ' Barack Obama '
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts(){
        for(let i=0; i < data.length; i++){
            var postId = ('post-' + data[i].id),
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');

            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            $posts.append($post);
            $nav.append($navItem);

            $navItem.on('click', function(){
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
});