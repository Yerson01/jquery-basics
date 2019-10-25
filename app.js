$(document).ready(function () {
    // $('.container').css('background', 'crimson');
    // $('h1').html('Texto etiqueta incrustado con jquery');
    // $('.container .h1class').html('Texto clase incrustado con jquery');
    // $('#h1id').html('<span class="badge badge-pill badge-danger">Etiqueta span incrustada con jquery</span>');

    $('h2').addClass('display-4');
    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:3000/posts",
    //     dataType: "json",
    //     success: function (response) {
    //         $.each(response, function (index, post) { 
    //             const postContent = `
    //                 <li>
    //                     <h2 class="display-4">${post.title}</h2>
    //                     <a href="<${post.url}" class="text-secondary"><kbd>Accede al post</kbd></a>
    //                     <span class="badge badge-pill badge-primary>${post.author}</span>
    //                 </li>   
    //             `;
    //              $('#posts-list').append(postContent)
    //         });
    //     }
    // });

        
        $('li').addClass('list-group-item');
        $('#products-list').prepend('<h1>Lista de productos</h1>');

    let post = {
        id: 5,
        title: "Este es un post de prueba",
        author: "@yerson_84",
        url: "https://localhost"
    }   

    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:3000/posts",
    //     data: post,
    //     dataType: "json",
    //     success: function(response) {
    //         console.log(response);
    //     }
    // });
    $('#remove-product').css({
        border: 'none',
        outline: 'none',
        background: 'crimson',
        color: 'white',
        'border-radius' : '10px',
        padding: '5px 20px',
        'font-weight' : 'lighter'
    });
    $('#remove-product').click(function() {
        $('.product:last').remove();
        $('#posts-list').hide();
    }); 
    let imgLink = 'https://www.anerbarrena.com/wp-content/uploads/2017/08/programacion-javascript-js-e1503258707880.jpg';
    $('img').addClass('img-fluid');
    $('img').attr('src', imgLink);

    // $('#btn-azul').click(function() {
    //     $('#c-body').attr('class', 'card-body bg-info');
    // });

    // $('#btn-rojo').click(function() {
    //     $('#c-body').attr('class', 'card-body bg-danger');
    // });

    // $('#btn-amarillo').click(function() {
    //     $('#c-body').attr('class', 'card-body bg-warning');
    // });

    // $('#btn-fade').click(function() {
    //     $('#c-body').fadeOut();
    // });

    $('#btn-azul').click(function() {
        $('#text').toggleClass('text-info');
    }); 
       

    $('#name').keyup(function(e) {
        e.preventDefault();
        $('#name-preview').text($(this).val());
    }); 

    $('#name-form').submit(function(e) {
        e.preventDefault();
        console.log('click');
    });

    let square = $('#square');
    let ocultar = $('#ocultar');
    let mostrar = $('#mostrar');
    let toggle = $('#toggle');
    let fade = $('#fade');
    let slide = $('#slide');
    let animate = $('#animate');

    //ocultar
    ocultar.click(function() {
        square.hide(500);
    }); 
    //mostrar
    mostrar.click(function() {
        square.show(500, function() {
            square.html('<p class="d-flex justify-content-center align-items-center h-100 text-white display-4"><span>Mostrado</span></p>')
        });
    }); 
    //toggle    
    toggle.click(function() {
        square.toggle(1000);
    }); 

    fade.click(function() {
        square.fadeOut().fadeIn();
    });

    slide.click(function() {
        square.slideUp(1000).slideDown(1000);
    }); 

    animate.click(function() {
        square.animate({
            left: '250px',
            opacity: '0.5',
            height: '250px',
            width: '250px'
        }, 
        500,
        function() {
            square.animate({
                left: '-250px',
                opacity: '0.5',
                height: '150px',
                width: '150px'
            }, 100)
        });
    });
 
});