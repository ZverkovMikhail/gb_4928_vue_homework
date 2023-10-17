<template>
 <footer class="footer center">
    <div class="footer__block">
      <div class="logo">
        <svg class="logo__img" xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34"
             fill="none">
          <path
              d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z"
              fill="#CDA274"/>
        </svg>
        <span class="logo__text">Interno</span>
      </div>
      <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
      <div class="footer__social">
        <a href="#" class="footer__social-link">
          <img src="@/assets/img/twitter.svg" class="footer__social-icon" alt="twitter link">
        </a>
        <a href="#" class="footer__social-link">
          <img src="@/assets/img/linkedin.svg" class="footer__social-icon" alt="linkedin link">
        </a>
      </div>

    </div>
    <div class="footer__block footer__block_nav">
      <h3 class="footer__block-title">Pages</h3>
      <ul class="footer__menu-list">
        <li>
          <a class="footer__nav-link" href="#">Home</a>
        </li>
        <li>
          <a class="footer__nav-link" href="#">Project</a>
        </li>
        <li>
          <a class="footer__nav-link" href="#">Blog</a>
        </li>
      </ul>
    </div>
    <div class="footer__block footer__block_contact">
      <h3 class="footer__block-title">Contact</h3>
      <div class="footer__block-content">
        <a class="footer__contact-link footer__contact-link_address" href="#">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </a>
        <a class="footer__contact-link" href="#">
          contact@interno.com
        </a>
        <a class="footer__contact-link" href="#">
          (123) 456 - 7890
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
}
</script>

<style scoped>

</style>