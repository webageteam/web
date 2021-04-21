var lastScrollTop = 0;

window.addEventListener( 'scroll' , () => {
    if( screen.width < 768 ){
        return 0;
    }
    if ( document.getElementsByTagName('html')[0].scrollTop > 63 ){
        let header = document.getElementById('header-nav-1').style;
        header.position = 'fixed';
        header.backgroundColor = '#ffffff';
        header.zIndex = '100';
        header.top = '0';
        header.padding= "10px 75px";
        header.transition = "all .35s ease-in-out";
        document.getElementById('header-nav-at768').style.alignSelf = 'center';

        if( document.getElementsByTagName('html')[0].scrollTop > lastScrollTop && document.getElementsByTagName('html')[0].scrollTop > 165 ){
            header.transform = 'rotateX(90deg)';
        } else {
            header.transform = 'rotateX(0deg)';
            header.boxShadow = '0px 15px 10px -15px #111';
        }
        lastScrollTop = document.getElementsByTagName('html')[0].scrollTop;
    } else {
        let header = document.getElementById('header-nav-1').style;
        header.position = 'static';
        header.backgroundColor = '#f6f6f6';
        header.boxShadow = 'none';
        header.padding= "0 75px";
        header.transition = 'none';
        document.getElementById('header-nav-at768').style.alignSelf = 'flex-start';
    }
});