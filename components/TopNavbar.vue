<template>
  <nav class="py-10 px-14 custom-nav">
    <div>
      
      <div class="flex justify-between">
        <!-- Logo -->
            <div class="flex flex-col justify-center items-center w-[148px] h-[44px] shrink-0 custom-typography">
              <NuxtLink to="/">
                DM
              </NuxtLink>
            </div>

            <!-- Search Bar -->
            <div class="flex-grow mx-4 custom-search-container">
              <div class="flex items-center w-full h-[44px] custom-search-bar">
                <svg class="my-2.5 ml-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="vuesax/linear/search-normal">
                    <g id="search-normal">
                    <path id="Vector" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M22 22L20 20" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>
                <input type="text" class="custom-input flex-grow p-2" placeholder="Search something here">
              </div>
            </div>  

            <!-- Favorite Icon -->
            <div class="custom-icon-container cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bold/heart">
                <g id="heart">
                <path id="Vector" d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#596780"/>
                </g>
                </g>
              </svg>
            </div>
      </div>


      <div class="mobile-search-bar">
        <!-- Search Bar -->
          <div class="flex items-center w-full h-[44px] custom-search-bar">
            <svg class="my-2.5 ml-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="vuesax/linear/search-normal">
                <g id="search-normal">
                <path id="Vector" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M22 22L20 20" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </g>
            </svg>
            <input type="text" class="custom-input flex-grow p-2" placeholder="Search something here">
          </div>

      </div>
    </div>       
  </nav>
</template>

<style>
  .custom-nav {
    border: 1px solid rgba(195, 212, 233, 0.40);
    background: var(--Primary-0, #FFF);
  }

  .custom-typography {
    color: #3563E9;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.96px;
    text-align: center;
  }

  .custom-search-bar {
    border-radius: 70px;
    border: 1px solid rgba(195, 212, 233, 0.40);
    background: #FFF;
  }

  .custom-input {
    width: 149px;
    color:#596780;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.28px;
    text-align: justify;
  }

  .custom-icon-container {
    width: 44px;
    height: 44px;
    border-radius: 90px;
    border: 1px solid rgba(195, 212, 233, 0.40);
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .custom-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .custom-icon-container:hover svg path {
    fill: #3563E9;
  }

  .custom-input:focus {
    border-color: transparent;
    outline: none;
  }

  .mobile-search-bar{
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-search-bar{
      display: block;
    }

    .custom-search-container {
      display:none;
    }

    .custom-nav {
      justify-content: space-between;
    }

    nav {
      padding-top: 40px !important;
      padding-bottom: 40px !important;
      padding-right: 24px !important;
      padding-left: 24px !important;
    }

    .custom-typography {
      width:55px !important;
    }

    .custom-search-bar {
      border-radius: 10px;
      margin-top: 16px;
      margin-right: 24px;
    }
  }


</style>
