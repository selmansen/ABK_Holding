<template>
  <div>
    <header class="py-5">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="/en/"><img src="../assets/img/abk-logo.svg" alt="" class="logo"></a>
        <div class="mainmenu">
          <ul>
            <li><a href="/en/" tag="a" data-id="#homepage">Home</a></li>
            <li><a href="javascript:;" data-id="#aboutus">About Us </a>
              <div>
                <a href="javascript:;" data-id="#about-companies">Sectors</a>
                <a href="javascript:;" data-id="#about-companies">Companies</a>
                <a href="javascript:;" data-id="#about-companies">Projects</a>
              </div>
            </li>
            <li><a href="javascript:;" data-id="#news">Social Activities & News</a></li>
            <li><a href="javascript:;" data-id="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
      <router-view></router-view>
      <footer>
        <div id="contact" class="py-20">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-6">
                <h2 class="bg-success text-white p-8">Work with us</h2>
                <div class="form-wrap p-8 bg-white">
                  
                  <form action="./send_email.php" method="post">
                    <div class="d-flex inputGroup flex-wrap">
                      <div>
                        <input class="form-control" type="name" name="name" placeholder="Name Surname" required>
                      </div>
                      <div class="ml-3">
                        <input class="form-control" type="email" name="email" placeholder="E-Mail" required>
                      </div>
                      <div class="mt-3">
                        <input class="form-control" type="tel" name="phone" placeholder="Phone Number" required>
                      </div>
                      <div class="mt-3 ml-3">
                        <input class="form-control" type="text" name="subject" placeholder="Subject" required>
                      </div>
                    </div>
                    <button class="btn btn-success w-100 mt-3">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-social py-16 d-flex flex-column align-items-center">
          <img src="../assets/img/ft-abk-logo.svg" alt="" width="130">
          <div class="social-media mt-10">
            <a href="#" class="fc"></a>
            <a href="#" class="tw"></a>
            <a href="#" class="yt"></a>
            <a href="#" class="pt"></a>
          </div>
        </div>
        <div class="footer-bottom py-5 text-center">
          <div class="container">
            <p>© 2020 ABK</p>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
  import '../assets/scss/main.scss';
  export default {
    mounted: function () {  
      window.addEventListener('scroll', function(){
        handleScroll();
        menuPosition();
      });
      window.addEventListener("DOMContentLoaded", function(){
        scrollEvent();
      });
      function handleScroll () {
        let header = document.querySelector("header");
        const menuItem = $(".mainmenu").find("a");
        if( window.scrollY > 50 ){
          header.classList.add("min");
        }else{
          header.classList.remove("min");
        }
      }
      function scrollEvent(){
        $(function(){
          const menuItem = $(".mainmenu").find("a");
          menuItem.click(function(e){
            const topVal = $(this).attr("data-id");
            if( $(topVal).length === 1 ){
              menuItem.removeClass("active");
              $(this).addClass("active");
              window.scrollTo({
                    top: $(topVal).offset().top - 95,
                    left: 0,
                    behavior: 'smooth'
                });
              e.preventDefault();
            }
          });
        });
      }
      function menuPosition(){
        const menuItem = $(".mainmenu li").children("a");
        menuItem.each(function() {
          if ( $($(this).attr("data-id")).length > 0 ){
            $(this).attr("data-top", $($(this).attr("data-id")).offset().top - 96 );
            if ($(window).scrollTop() > $(this).attr("data-top") ){
              menuItem.removeClass('active');
              $(this).addClass('active');
            }else if( window.scrollY === 0 ){
              menuItem.removeClass('active');
            }
          }
        }); 
      }
    }
  }
</script>
