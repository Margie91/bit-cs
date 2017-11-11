import repoData from './repoAdapter';

class Main {
    displayThings() {
        new repoData().handleThings((things) => {
            things.forEach((things) => {
                console.log(things.url);
                const div = $('<div>');

                const anchor = $('<a>');
                anchor.attr('href', things.url);
                anchor.text(things.name);
                anchor.css({'display':'block',
                        'margin':'40px 0px 30px',
                        'text-decoration':'none',
                        'color':'orange'});
                anchor.hover(function(){
                    $(this).css({'color':'blue'});
                }, function(){
                    $(this).css({'color':'orange'});
                })

                const image = $('<img>');
                image.attr('src', things.avatar);
                image.css({'width':'300px',
                        'border-radius':'150px',
                        'box-shadow':'0px 0px 50px gray',
                        });
                image.hover(function(){
                    $(this).css({'border':'2px solid lightblue'});
                }, function(){
                    $(this).css({'border':'none'});
                })

                div.append(anchor);
                div.append(image);
                $('body').before(div);
                div.css({'text-align':'center'});

            });
        })
    }
}

let go = new Main();
go.displayThings();