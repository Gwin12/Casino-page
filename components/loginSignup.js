var ls = `<div class="popup popup-width popup_settings mfp-hide logP" id="popup-login">
	<div class="login__form">
		<div class="signuplogo">
			<a href="/"><img class="signupLogo" src="img/logo-white.png" alt=""></a>
		</div>
		<!--a class="login__close mobile-hide" href="index.html">
            <svg class="icon icon-remove">
              <use xlink:href="img/sprite.svg#icon-remove"></use>
            </svg>
          </a-->
		<div class="login__title h3">Sign in</div>
		<div class="login__line">
			<div class="login__text">New user?</div> <a class="login__link js-popup-open" href="#popup-signup" data-effect="mfp-zoom-in" id="settings" tabindex="-1">Create an account</a> </div>
		<div class="field">
			<div class="field__label">Usename or email</div>
			<div class="field__wrap">
				<input class="field__input" type="email"> </div>
		</div>
		<div class="field">
			<div class="field__label">Password</div>
			<div class="field__wrap">
				<input class="field__input" type="password" id="password-input"> </div>
		</div>
		<button class="login__btn btn btn_purple btn_wide">Continue</button>
		<div class="login__or">Or continue with</div>
		<button class="login__btn btn btn_blue btn_wide dis"> <img class="loginMeta" src="img/google.png">Google </button>
		<button class="login__btn btn btn_blue btn_wide dis"> <img class="loginMeta" src="img/meta2.png">Metamask </button>
	</div>
</div>
<div class="popup popup-width popup_settings mfp-hide logP" id="popup-signup">
	<div class="login__form">
		<div class="signuplogo">
			<a href="/"><img class="signupLogo" src="img/logo-white.png" alt=""></a>
		</div>
		<!--a class="login__close" href="sign-in.html">
            <svg class="icon icon-arrow-left">
              <use xlink:href="img/sprite.svg#icon-arrow-left"></use>
            </svg>
          </a-->
		<div class="login__title h3">Sign up</div>
		<div class="login__line">
			<div class="login__text">Already a user</div> <a class="login__link js-popup-open" href="#popup-login" data-effect="mfp-zoom-in" id="settings" tabindex="-1">Login now</a> </div>
		<div class="login__row">
			<div class="login__col">
				<div class="field">
					<div class="field__label">First name</div>
					<div class="field__wrap">
						<input class="field__input" type="text"> </div>
				</div>
			</div>
			<div class="login__col">
				<div class="field">
					<div class="field__label">Last name</div>
					<div class="field__wrap">
						<input class="field__input" type="text"> </div>
				</div>
			</div>
		</div>
		<div class="field">
			<div class="field__label">Username</div>
			<div class="field__wrap">
				<input class="field__input" type="email"> </div>
		</div>
		<div class="field">
			<div class="field__label">Email Address</div>
			<div class="field__wrap">
				<input class="field__input" type="email"> </div>
		</div>
		<div class="field">
			<div class="field__label">Password</div>
			<div class="field__wrap">
				<input class="field__input" type="password" id="password-input"> </div>
		</div>
		<button class="login__btn btn btn_purple btn_wide">Continue</button>
		<div class="login__or">Sign up by Open ID</div>
		<button class="login__btn btn btn_blue btn_wide dis"> <img class="loginMeta" src="img/google.png">Google Account </button>
		<button class="login__btn btn btn_blue btn_wide dis"> <img class="loginMeta" src="img/meta2.png">Metamask </button>
	</div>
</div>
 `

          document.write(ls);