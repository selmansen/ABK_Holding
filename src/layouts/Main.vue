<template>
  <div>
    <header class="py-5" v-scroll="handleScroll">
      <div class="container d-flex justify-content-between align-items-center flex-wrap">
        <a href="/en/"><img src="../assets/img/abk-logo.svg" alt="" class="logo"></a>
        <span class="d-lg-none hamb-menu" @click="mobileMenu"></span>
        <div class="mainmenu text-lg-left text-center">
          <ul>
            <li><a href="/en/">Home</a></li>
            <li><a href="javascript:;" data-id="aboutus" v-on:click="moveTo">About Us </a>
              <div>
                <a href="javascript:;" data-id="about-companies" v-on:click="moveTo">Sectors</a>
                <a href="javascript:;" data-id="about-companies" v-on:click="moveTo">Companies</a>
                <a href="javascript:;" data-id="about-companies" v-on:click="moveTo">Projects</a>
              </div>
            </li>
            <li><a href="javascript:;" data-id="news" v-on:click="moveTo">Social Activities & News</a></li>
            <li><a href="javascript:;" data-id="contact" v-on:click="moveTo">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
      <router-view></router-view>
      <footer>
        <div id="contact" class="py-lg-20 py-16">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-9 offset-xl-6 offset-lg-3">
                <h2 class="bg-success text-white p-lg-8 p-4">Work with us</h2>
                <div class="form-wrap p-lg-8 p-4 bg-white">
                  
                  <form action="./send_email.php" method="post">
                    <div class="d-flex inputGroup flex-wrap">
                      <div>
                        <input class="form-control" type="name" name="name" placeholder="Name Surname" required>
                      </div>
                      <div class="ml-md-3 mt-md-0 mt-3">
                        <input class="form-control" type="email" name="email" placeholder="E-Mail" required>
                      </div>
                      <div class="mt-3">
                        <input class="form-control" type="tel" name="phone" placeholder="Phone Number" required>
                      </div>
                      <div class="ml-md-3 mt-3">
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
        <div class="footer-social py-lg-16 py-10 d-flex flex-column align-items-center">
          <img src="../assets/img/ft-abk-logo.svg" alt="" width="130">
          <div class="social-media mt-lg-10 mt-6">
            <a href="#" class="fc"></a>
            <a href="#" class="tw"></a>
            <a href="#" class="yt"></a>
            <a href="#" class="pt"></a>
          </div>
        </div>
        <div class="footer-bottom py-lg-5 py-3 text-center">
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
        /*handleScroll();*/
        /*menuPosition();*/
      });
      window.addEventListener("DOMContentLoaded", function(){
        /*scrollEvent();*/
      });
      /*function handleScroll () {
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
      }*/
    },
    methods: {
      moveTo (e) {
        const link = $(".mainmenu").find("a");
        link.removeClass("active");
        e.target.classList.add("active");
        const dataId = e.target.getAttribute('data-id');
        const sectionID =  document.getElementById(dataId);
        const headerWrap = document.querySelector("header");
        document.querySelector(".mainmenu").classList.remove('opened');
        document.querySelector(".hamb-menu").classList.remove('opened');
        if ( sectionID === null){
          this.$router.push("/").then(() => {
            const activeDataId = e.target.getAttribute('data-id');
            const activeSectionID =  document.getElementById(activeDataId);
            window.scrollTo({
              top: activeSectionID.offsetTop - 100,
              left: 0,
              behavior: 'smooth'
            });
          });  
        }else{
          const topVal = sectionID.offsetTop - 100;
          window.scrollTo({
              top: topVal,
              left: 0,
              behavior: 'smooth'
          });

        }
      },
      handleScroll: function(evt, el) {
        if (window.scrollY > 50) {
          el.classList.add("min");
        }else{
          el.classList.remove("min");
        }
        const menuItem = $(".mainmenu li").children("a");
        menuItem.each(function() {
          const id = $("#"+$(this).attr("data-id"));
          if ( id.length > 0 ){
            $(this).attr("data-top", id.offset().top - 104 );
            if ($(window).scrollTop() > $(this).attr("data-top") ){
              menuItem.removeClass('active');
              $(this).addClass('active');
            }else if( window.scrollY === 0 ){
              menuItem.removeClass('active');
            }
          }
        }); 

      },
      mobileMenu: function( event ) {
        const menu =  document.querySelector(".mainmenu")
        event.target.classList.toggle('opened');
        menu.classList.toggle('opened');
      }
    }
  }
</script>
