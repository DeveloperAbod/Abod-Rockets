const initApp = ()=>{
const hamburgerBtn = document.getElementById('hamburger-button')
const mobileMenu = document.getElementById('mobile-menu')


const toggleMenu = ()=>{
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerBtn.classList.toggle('toggle-btn')
}

hamburgerBtn.addEventListener("click",toggleMenu)
mobileMenu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentLoaded',()=>{
    initApp()
    const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
          document.getElementById('toggle-them').innerHTML ="&#9788;"
          document.getElementById('toggle-them2').innerHTML ="&#9788;"

        }
        
})



function toggleDarkMode() {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.getElementById('toggle-them').innerHTML ="&#9790;"
      document.getElementById('toggle-them2').innerHTML ="&#9790;"


    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('toggle-them').innerHTML ="&#9788;"
      document.getElementById('toggle-them2').innerHTML ="&#9788;"

      
    }
  }