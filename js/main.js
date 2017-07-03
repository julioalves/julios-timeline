/**
 * Created by Julio on 03-Jul-17.
 */
$(document).ready(function () {
    //Card Nascimento
//        $('#1977-nascimento').magnificPopup({
//            items: [
//                {
//                    src: 'path-to-image-1.jpg'
//                },
//                {
//                    src: '#1-ano', // CSS selector of an element on page that should be used as a popup
//                    type: 'inline'
//                }
//            ],
//            gallery: {
//                enabled: true
//            },
//            type: 'image' // this is default type
//        });

    //Card Nascimento
    $('#1977-more-01').magnificPopup({
        items: [
            {
                src: 'img/1977-batismo-01.jpg'
            },
            {
                src: 'img/1978-1-ano-01.jpg'
            }

        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

    $('#1978-more-01').magnificPopup({
        items: [
            {
                src: 'img/1978-1-ano-02.jpg'
            },
            {
                src: 'img/1978-1-ano-03.jpg'
            },
            {
                src: 'img/1978-1-ano-04.jpg'
            },
            {
                src: 'img/1978-1-ano-05.jpg'
            },
            {
                src: 'img/1978-1-ano-06.jpg'
            },
            {
                src: 'img/1978-1-ano-07.jpg'
            },
            {
                src: 'img/1978-1-ano-08.jpg'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

});
