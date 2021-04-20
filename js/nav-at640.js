var lastScrollTop = 0;

window.addEventListener( 'scroll' , () => {
    if ( document.getElementsByTagName('html')[0].scrollTop > 63 ){
        let header = document.getElementById('header-nav-1').style;
        // header.position = 'fixed';
        header.backgroundColor = '#ffffffcc';
        header.zIndex = '100';
        header.top = 0;
        document.getElementById('header-nav-at640').style.alignSelf = 'center';

        // if( document.getElementsByTagName('html')[0].scrollTop > lastScrollTop ){
        //     header.display='none';
        // } else {
        //     header.display='flex';
        // }
        // lastScrollTop = document.getElementsByTagName('html')[0].scrollTop;
    } else {
        // let header = document.getElementById('header-nav-1').style;
        // header.position = 'static';
        // header.backgroundColor = '#f6f6f6';
        document.getElementById('header-nav-at640').style.alignSelf = 'flex-start';
    }
});