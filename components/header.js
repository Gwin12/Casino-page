var web3;
async function connect() {
  await window.web3.currentProvider.enable();
  web3=new web3(window.web3.currentProvider);
}
var w = `<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/web3modal"></script>
    <script type="text/javascript" src="https://unpkg.com/evm-chains/lib/index.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider"></script>
    <!-- web3Modal library -->
<script src="https://cdn.jsdelivr.net/npm/web3modal@1.10.0/dist/index.min.js"></script>

    <script type="text/javascript" src="https://unpkg.com/fortmatic@2.0.6/dist/fortmatic.js"></script>
    <script src="mblconnect.js"></script>
    <link rel="stylesheet" href="css/footer.css">
    <style>
    .livecoinwatch-widget-5 {
    height: 59px !important;
}
    </style>
<div class="topTwo direction web">
  <a id="casinoButton" class="sidebar__item topM top2 mWidth head" data-url="https://shibabets.gg/" onclick="navigate(event, 'casino')">
    <div class="sidebar__icon">
      <img class="icon icon-trending" src="img/icon/casino.png">
    </div>
    <div class="sidebar__text tm">Casino</div>
  </a>
  <a id="sportsButton" class="sidebar__item topM top1 mWidth" data-url="https://shibabets.gg/sports" onclick="navigate(event, 'sports')">
    <div class="sidebar__icon">
      <img class="icon icon-trending" src="/img/Basketball.png">
    </div>
    <div class="sidebar__text tm">Sports</div>
  </a>

  </div>
<button class="sidebar__item mblm header__burger">
<div class="sidebar__icon mbli">
      <img class="icon icon-trending mblimg" src="img/icon/menu.png">
    </div>
    <div class="sidebar__text mblt">Menu</div>
</button>
<a class="sidebar__item mblm ext" href="https://shibabets.gg/">
    <div class="sidebar__icon mbli">
      <img class="icon icon-trending mblimg ext" src="img/icon/casino.png">
    </div>
    <div class="sidebar__text mblt extT">Home</div>
  </a>
  <a class="sidebar__item mblm middleM js-popup-open" href="#popup-login" data-effect="mfp-zoom-in" id="settings" tabindex="-1">
    <div class="sidebar__icon mbli middlI">
      <img class="icon icon-trending mblimg middleImage" src="img/icon/sbC.png">
    </div>
    <div class="sidebar__text mblt middleT">Profile</div>
  </a>
  <a class="sidebar__item mblm"  url="https://shibabets.gg/sports" onclick="navigate(event, 'sports')">
    <div class="sidebar__icon mbli">
      <img class="icon icon-trending mblimg" src="img/Basketball.png">
    </div>
    <div class="sidebar__text mblt">Sports</div>
  </a>
  <a class="sidebar__item mblm"  href="https://shibabets.social/">
    <div class="sidebar__icon mbli">
      <img class="icon icon-trending mblimg" src="img/icon/media.png">
    </div>
    <div class="sidebar__text mblt">Social</div>
  </a>



<!--script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script> 
<div class="livecoinwatch-widget-5 pc" lcw-base="USD" lcw-color-tx="#e73b28" lcw-marquee-1="coins" lcw-marquee-2="none" lcw-marquee-items="20" >
</div-->

<div class="header__item header__item_browse js-header-item">
    <!--div class="header__head js-header-head"><svg class="icon icon-location">
        <use xlink:href="img/sprite.svg#icon-location"></use>
      </svg>Browse<svg class="icon icon-arrow-down">
        <use xlink:href="img/sprite.svg#icon-arrow-down"></use>
      </svg></div-->
    <!--div class="header__body"><a class="header__line" href="browse">
        <div class="header__icon"><svg class="icon icon-star">
            <use xlink:href="img/sprite.svg#icon-star"></use>
          </svg></div>
        <div class="header__text">Top Challenges</div>
      </a><a class="header__line" href="browse">
        <div class="header__icon"><svg class="icon icon-star">
            <use xlink:href="img/sprite.svg#icon-star"></use>
          </svg></div>
        <div class="header__text">Hot Streamers</div>
      </a><a class="header__line" href="browse">
        <div class="header__icon"><svg class="icon icon-star">
            <use xlink:href="img/sprite.svg#icon-star"></use>
          </svg></div>
        <div class="header__text">Trending Videos</div>
      </a><a class="header__line" href="sign-in">
        <div class="header__icon"><svg class="icon icon-star">
            <use xlink:href="img/sprite.svg#icon-star"></use>
          </svg></div>
        <div class="header__text">Sign In</div>
      </a><a class="header__line" href="sign-up">
        <div class="header__icon"><svg class="icon icon-star">
            <use xlink:href="img/sprite.svg#icon-star"></use>
          </svg></div>
        <div class="header__text">Sign Up</div>
      </a><a class="header__line js-popup-open" href="#popup-stories">
        <div class="header__icon"><svg class="icon icon-star">
            <use xlink:href="img/sprite.svg#icon-star"></use>
          </svg></div>
        <div class="header__text">Stories</div>
      </a></div-->
  </div>
          <form class="header__search" style="display: none;"><!--input class="header__input" type="text" placeholder="Search Everything"--><!--button class="header__btn-search"><svg class="icon icon-search">
            <use xlink:href="img/sprite.svg#icon-search"></use>
          </svg></button--></form>
              <!--button class="main__btn btn btn_purple pc" id="button" type="button" value="connect" onclick="connect()">CONNECT</button-->
            
            <!--div id="prepare"><button class="main__btn btn btn_purple " id="btn-connect">CONNECT</button></div-->
            <a href="http://t.me/shibabets" class="header__item communityTop">
  <div class="header__p">
    <img class="header__pic" src="img/icon/tg.png" alt="">
  </div>
</a>
            <div id="prepare"><button class="main__btn btn btn_purple cont js-popup-open" href="#popup-login" data-effect="mfp-zoom-in" id="settings" tabindex="-1">CONNECT</button></div>
            
            <div class="header__control">
            <div class="header__item header__item_add js-header-item"><button class="header__head js-header-head"><svg class="icon icon-plus-sm">
                  <use xlink:href="img/sprite.svg#icon-plus-sm"></use>
                </svg></button>
              <div class="header__body js-header-body"><a class="header__line" href="upload-videos">
                  <div class="header__icon"><svg class="icon icon-camera">
                      <use xlink:href="img/sprite.svg#icon-camera"></use>
                    </svg></div>
                  <div class="header__text">New Video</div>
                  <div class="header__icon"><svg class="icon icon-add">
                      <use xlink:href="img/sprite.svg#icon-add"></use>
                    </svg></div>
                </a><a class="header__line" href="#">
                  <div class="header__icon"><svg class="icon icon-star">
                      <use xlink:href="img/sprite.svg#icon-star"></use>
                    </svg></div>
                  <div class="header__text">Go live</div>
                  <div class="header__icon"><svg class="icon icon-live">
                      <use xlink:href="img/sprite.svg#icon-live"></use>
                    </svg></div>
                </a></div>
            </div><a class="header__item header__item_search" href="#"><svg class="icon icon-search">
                <use xlink:href="img/sprite.svg#icon-search"></use>
              </svg></a>
            <div class="header__item header__item_notifications js-header-item"><button class="header__head js-header-head"><svg class="icon icon-bell">
                  <use xlink:href="img/sprite.svg#icon-bell"></use>
                </svg>
                <div class="header__counter">2</div>
              </button>
              <div class="header__body js-header-body">
                <div class="notifications">
                  <div class="notifications__info h6">Recent Notification</div>
                  <div class="notifications__list"><a class="notifications__item" href="#">
                      <div class="notifications__ava"><img class="notifications__pic" src="img/ava-8.png" alt="">
                        <div class="notifications__status bg-blue"><img class="notifications__pic" src="img/chat.svg" alt=""></div>
                      </div>
                      <div class="notifications__details">
                        <div class="notifications__line">
                          <div class="notifications__user">Amazing#3990</div>
                          <div class="notifications__time">8h</div>
                        </div>
                        <div class="notifications__text">Commented on <span class="notifications__project">The Results Are Beautif</span></div>
                      </div>
                    </a><a class="notifications__item" href="#">
                      <div class="notifications__ava"><img class="notifications__pic" src="img/ava-9.png" alt="">
                        <div class="notifications__status bg-blue"><img class="notifications__pic" src="img/chat.svg" alt=""></div>
                      </div>
                      <div class="notifications__details">
                        <div class="notifications__line">
                          <div class="notifications__user">Ambrosius#7206</div>
                          <div class="notifications__time">12h</div>
                        </div>
                        <div class="notifications__text">Commented on <span class="notifications__project">Your Latest Video</span></div>
                      </div>
                    </a><a class="notifications__item" href="#">
                      <div class="notifications__ava"><img class="notifications__pic" src="img/ava-10.png" alt="">
                        <div class="notifications__status bg-blue"><img class="notifications__pic" src="img/chat.svg" alt=""></div>
                      </div>
                      <div class="notifications__details">
                        <div class="notifications__line">
                          <div class="notifications__user">archie1925#7903</div>
                          <div class="notifications__time">13h</div>
                        </div>
                        <div class="notifications__text">Commented on <span class="notifications__project">Your Latest Video</span></div>
                      </div>
                    </a><a class="notifications__item" href="#">
                      <div class="notifications__ava"><img class="notifications__pic" src="img/ava-11.png" alt="">
                        <div class="notifications__status bg-green"><img class="notifications__pic" src="img/chat.svg" alt=""></div>
                      </div>
                      <div class="notifications__details">
                        <div class="notifications__line">
                          <div class="notifications__user">Bruggie#1781</div>
                          <div class="notifications__time">19h</div>
                        </div>
                        <div class="notifications__text">Commented on <span class="notifications__project">Your Latest Video</span></div>
                      </div>
                    </a><a class="notifications__item" href="#">
                      <div class="notifications__ava"><img class="notifications__pic" src="img/ava-12.png" alt="">
                        <div class="notifications__status bg-purple"><img class="notifications__pic" src="img/message.svg" alt=""></div>
                      </div>
                      <div class="notifications__details">
                        <div class="notifications__line">
                          <div class="notifications__user">Cesco#0012</div>
                          <div class="notifications__time">21h</div>
                        </div>
                        <div class="notifications__text">Sent you a message 📪 </div>
                      </div>
                    </a><a class="notifications__item" href="#">
                      <div class="notifications__ava"><img class="notifications__pic" src="img/ava-13.png" alt="">
                        <div class="notifications__status bg-orange"><img class="notifications__pic" src="img/heart.svg" alt=""></div>
                      </div>
                      <div class="notifications__details">
                        <div class="notifications__line">
                          <div class="notifications__user">Chiragx#1663</div>
                          <div class="notifications__time">24h</div>
                        </div>
                        <div class="notifications__text">Liked <span class="notifications__project">Your Latest Video</span></div>
                      </div>
                    </a></div>
                </div>
              </div>
            </div>
          </div>
          <!--a href="/" class="header__item header__item_profile">
  <div class="header__p">
    <img class="header__pic" src="img/avatar.png" alt="">
  </div>
</a-->
<div class="header__item header__item_profile"><a class="header__head js-popup-open" href="#popup-login" data-effect="mfp-zoom-in" id="settings" tabindex="-1"><img class="header__pic" src="img/avatar.png" alt=""></a>
            <!--div class="header__body">
            <a class="header__link  js-popup-open" href="#popup-login" data-effect="mfp-zoom-in" id="settings" tabindex="-1">
                <div class="header__img"><img class="icon icon-logout" src="img/signin.png"></div>SIGN IN</a>
                <a class="header__link js-popup-open" href="#popup-signup" data-effect="mfp-zoom-in" id="settings" tabindex="-1">
                <div class="header__img"><img class="icon icon-logout" src="img/signup.png"></div>SIGN UP</a></div-->
          </div>
          `

          document.write(w);