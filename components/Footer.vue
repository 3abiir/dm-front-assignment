<template>
  <div class="footer">

    <div class="flex justify-between footer1">
      <div>
        <!-- Logo -->
        <div class="custom-logo">
          <NuxtLink to="/">
            DM
          </NuxtLink>
        </div>

        <!-- Description -->
        <div class="description w-72 text-gray-600 font-medium text-base leading-6 tracking-tight md:text-xs !md:text-12">
          <p>
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

      </div>
      <div  class="general-infos">
        <div class="text-left">
          <table>
            <thead>
              <tr>
                <th class="">About</th>
                <th class="">Community</th>
                <th class="">Socials</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class=""><a href="#">How it works</a></td>
                <td class=""><a href="#">Events</a></td>
                <td class=""><a href="#">Discord</a></td>
              </tr>
              <tr>
                <td class=""><a href="#">Featured</a></td>
                <td class=""><a href="#">Blog</a></td>
                <td class=""><a href="#">Instagram</a></td>
              </tr>
              <tr>
                <td class=""><a href="#">Partnership</a></td>
                <td class=""><a href="#">Podcast</a></td>
                <td class=""><a href="#">Twitter</a></td>
              </tr>
              <tr>
                <td class=""><a href="#">Business Relation</a></td>
                <td class=""><a href="#">Invite a friend</a></td>
                <td class=""><a href="#">Facebook</a></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>

    <div class="general-infos-mobile">
      <div class="flex justify-between">
        
        <div style="margin-right: 24px;margin-bottom: 48px;">
          <h2>About</h2>
          <p class="p-title">How it works</p>
          <p class="p-title">Featured</p>
          <p class="p-title">Partnership</p>
          <p class="p-title">Bussiness Relation</p>
        </div>
        <div style="margin-right: 24px;">
          <h2>Socials</h2>
          <p class="p-title">Discord</p>
          <p class="p-title">Instagram</p>
          <p class="p-title">Twitter</p>
          <p class="p-title">Facebook</p></div>
      </div>
      <div style="margin-bottom: 48px;">
        <h2>Community</h2>
          <p class="p-title">Events</p>
          <p class="p-title">Blog</p>
          <p class="p-title">Podcast</p>
          <p class="p-title">Invite a friend</p>
      </div>
    </div>

    <div><hr></div>

    <div class="tool-footer flex justify-between text-secondary-500 font-semibold text-base leading-6 footer2">
      <div>
        ©2022 DM. All rights reserved
      </div>
      <div class="flex">
        <p class="mr-4"><a href="#">Privacy & Policy</a></p>
        <p><a href="#">Terms & Condition</a></p>
      </div>
    </div>

    <div class="tool-footer-mobile">
      <div class="flex justify-between">
        <div class="sub-footer sub-footer-top"><a href="#">Privacy & Policy</a></div>
        <div class="sub-footer-top"><a href="#">Terms & Condition</a></div>
      </div>
      <div>©2022 DM. All rights reserved</div>
    </div>

  </div>
</template>

<style>
.footer {
  background-color: #FFFF;
  padding: 0 60px;
  padding-top:140px;
}

.footer1 {
  padding-bottom:29px;
}

.footer2 {
  padding: 29px 0;
}

.custom-logo {
    color: #3563E9;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.96px;
}

th,
h2 {
    width: 152px;
    color: #1A202C;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
    padding-bottom: 24px;
  }

tr, td, .p-title {
  color: rgba(19, 19, 19, 0.60);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;
  padding-bottom: 11px;
}

.tool-footer-mobile,
.general-infos-mobile {
  display : none;
}


@media (max-width: 768px) {
  .footer {
    padding: 60px 0 0 24px;
  }

  .custom-logo {
    font-size: 24px;
  }

  .general-infos {
    display:none;
  }
  
  .description {
    color: #90A3BF;
    font-size: 12px;
    letter-spacing: -0.12px;
  }

  .tool-footer {
    display: none
  }

  .tool-footer-mobile {
    display: block;
    color: #1A202C;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.24px;
    /* padding-left:24px; */
    padding-right: 24px;
  }

  .sub-footer {
    margin-bottom: 32px;
  }


  .general-infos-mobile {
    display : block;
  }

  div hr{
    display: none;
  }

}

</style>