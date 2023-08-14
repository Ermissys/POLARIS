var header = document.getElementById('header')
var navheader = document.getElementById('nav_header')
var content = document.getElementById('content')
var footer = document.getElementById('footer')
var topbutton = document.getElementById('btntop')
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navheader.style.marginLeft = '-2vw';
        navheader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
        footer.style.filter = 'blur(2px)';
        topbutton.style.visibility = 'hidden';

        document.body.style.position = "sticky";

    }
    else
    {
        navheader.style.marginLeft = '-100vw';
        navheader.style.animationName = 'closeSidebar';
        content.style.filter = 'blur(0)';
        footer.style.filter = 'blur(0)';

        document.body.style.position = "initial";
    }
}

window.addEventListener('resize', function(event) {
if(window.innerWidth > 768 && showSidebar)
{
    toggleSidebar();
}
});
