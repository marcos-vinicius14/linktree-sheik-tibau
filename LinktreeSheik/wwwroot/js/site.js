// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets
const track = document.getElementById('track');
const body = document.querySelector('body')


track.addEventListener('click', () => {
    track.classList.toggle('dark')
    body.classList.toggle('dark')
    link.classList.toggle('dark')
})



