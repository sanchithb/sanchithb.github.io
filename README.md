# Sanchith B Anand
<head>
 <body>
  <p>
   Sanchith Is A Cool Guy
  </p>  
 </body>  
</head>  
<div class="cont s--inactive">
  <!-- cont inner start -->
  <div class="cont__inner">
    <!-- el start -->
    <div class="el">
      <div class="el__overflow">
        <div class="el__inner">
          <div class="el__bg"></div>
          <div class="el__preview-cont">
            <h2 class="el__heading">Section 1</h2>
          </div>
          <div class="el__content">
            <div class="el__text">Whatever</div>
            <div class="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div class="el__index">
        <div class="el__index-back">1</div>
        <div class="el__index-front">
          <div class="el__index-overlay" data-index="1">1</div>
        </div>
      </div>
    </div>
    <!-- el end -->
    <!-- el start -->
    <div class="el">
      <div class="el__overflow">
        <div class="el__inner">
          <div class="el__bg"></div>
          <div class="el__preview-cont">
            <h2 class="el__heading">Section 2</h2>
          </div>
          <div class="el__content">
            <div class="el__text">Whatever</div>
            <div class="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div class="el__index">
        <div class="el__index-back">2</div>
        <div class="el__index-front">
          <div class="el__index-overlay" data-index="2">2</div>
        </div>
      </div>
    </div>
    <!-- el end -->
    <!-- el start -->
    <div class="el">
      <div class="el__overflow">
        <div class="el__inner">
          <div class="el__bg"></div>
          <div class="el__preview-cont">
            <h2 class="el__heading">Section 3</h2>
          </div>
          <div class="el__content">
            <div class="el__text">Whatever</div>
            <div class="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div class="el__index">
        <div class="el__index-back">3</div>
        <div class="el__index-front">
          <div class="el__index-overlay" data-index="3">3</div>
        </div>
      </div>
    </div>
    <!-- el end -->
    <!-- el start -->
    <div class="el">
      <div class="el__overflow">
        <div class="el__inner">
          <div class="el__bg"></div>
          <div class="el__preview-cont">
            <h2 class="el__heading">Section 4</h2>
          </div>
          <div class="el__content">
            <div class="el__text">Whatever</div>
            <div class="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div class="el__index">
        <div class="el__index-back">4</div>
        <div class="el__index-front">
          <div class="el__index-overlay" data-index="4">4</div>
        </div>
      </div>
    </div>
    <!-- el end -->
    <!-- el start -->
    <div class="el">
      <div class="el__overflow">
        <div class="el__inner">
          <div class="el__bg"></div>
          <div class="el__preview-cont">
            <h2 class="el__heading">Section 5</h2>
          </div>
          <div class="el__content">
            <div class="el__text">Whatever</div>
            <div class="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div class="el__index">
        <div class="el__index-back">5</div>
        <div class="el__index-front">
          <div class="el__index-overlay" data-index="5">5</div>
        </div>
      </div>
    </div>
    <!-- el end -->
  </div>
  <!-- cont inner end -->
</div>

<a href="https://dribbble.com/shots/2802024-Satellite-Website-Prototype" target="_blank" class="icon-link">
  <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png">
</a>
<a href="https://twitter.com/BSanchith" target="_blank" class="icon-link icon-link--twitter">
  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png">
</a>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #1f1f1f;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.cont {
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 80px 70px;
}
.cont__inner {
  position: relative;
  height: 100%;
}
.cont__inner:hover .el__bg:after {
  opacity: 1;
}

.el {
  position: absolute;
  left: 0;
  top: 0;
  width: 19.2%;
  height: 100%;
  background: #252525;
  -webkit-transition: width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s, -webkit-transform 0.6s 0.7s;
  transition: width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s, -webkit-transform 0.6s 0.7s;
  transition: transform 0.6s 0.7s, width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s;
  transition: transform 0.6s 0.7s, width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s, -webkit-transform 0.6s 0.7s;
  will-change: transform, width, opacity;
}
.el:not(.s--active) {
  cursor: pointer;
}
.el__overflow {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.el__inner {
  overflow: hidden;
  position: relative;
  height: 100%;
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
}
.cont.s--inactive .el__inner {
  -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
}
.el__bg {
  position: relative;
  width: calc(100vw - 140px);
  height: 100%;
  -webkit-transition: -webkit-transform 0.6s 0.7s;
  transition: -webkit-transform 0.6s 0.7s;
  transition: transform 0.6s 0.7s;
  transition: transform 0.6s 0.7s, -webkit-transform 0.6s 0.7s;
  will-change: transform;
}
.el__bg:before {
  content: "";
  position: absolute;
  left: 0;
  top: -5%;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: center center;
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
          transform: translate3d(0, 0, 0) scale(1);
}
.cont.s--inactive .el__bg:before {
  -webkit-transform: translate3d(0, -100%, 0) scale(1.2);
          transform: translate3d(0, -100%, 0) scale(1.2);
}
.el.s--active .el__bg:before {
  -webkit-transition: -webkit-transform 0.8s;
  transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  transition: transform 0.8s, -webkit-transform 0.8s;
}
.el__bg:after {
  content: "";
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.cont.s--el-active .el__bg:after {
  -webkit-transition: opacity 0.5s 1.4s;
  transition: opacity 0.5s 1.4s;
  opacity: 1 !important;
}
.el__preview-cont {
  z-index: 2;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.3s 1.2s;
  transition: all 0.3s 1.2s;
}
.cont.s--inactive .el__preview-cont {
  opacity: 0;
  -webkit-transform: translateY(10px);
          transform: translateY(10px);
}
.cont.s--el-active .el__preview-cont {
  opacity: 0;
  -webkit-transform: translateY(30px);
          transform: translateY(30px);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.el__heading {
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
}
.el__content {
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
}
.el.s--active .el__content {
  z-index: 2;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all 0.5s 1.4s;
  transition: all 0.5s 1.4s;
}
.el__text {
  text-transform: uppercase;
  font-size: 40px;
  color: #fff;
}
.el__close-btn {
  z-index: -1;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0s 0.45s;
  transition: all 0s 0.45s;
  cursor: pointer;
}
.el.s--active .el__close-btn {
  z-index: 5;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all 0s 1.4s;
  transition: all 0s 1.4s;
}
.el__close-btn:before, .el__close-btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 8px;
  margin-top: -4px;
  background: #fff;
  opacity: 0;
  -webkit-transition: opacity 0s;
  transition: opacity 0s;
}
.el.s--active .el__close-btn:before, .el.s--active .el__close-btn:after {
  opacity: 1;
}
.el__close-btn:before {
  -webkit-transform: rotate(45deg) translateX(100%);
          transform: rotate(45deg) translateX(100%);
}
.el.s--active .el__close-btn:before {
  -webkit-transition: all 0.3s 1.4s cubic-bezier(0.72, 0.09, 0.32, 1.57);
  transition: all 0.3s 1.4s cubic-bezier(0.72, 0.09, 0.32, 1.57);
  -webkit-transform: rotate(45deg) translateX(0);
          transform: rotate(45deg) translateX(0);
}
.el__close-btn:after {
  -webkit-transform: rotate(-45deg) translateX(100%);
          transform: rotate(-45deg) translateX(100%);
}
.el.s--active .el__close-btn:after {
  -webkit-transition: all 0.3s 1.55s cubic-bezier(0.72, 0.09, 0.32, 1.57);
  transition: all 0.3s 1.55s cubic-bezier(0.72, 0.09, 0.32, 1.57);
  -webkit-transform: rotate(-45deg) translateX(0);
          transform: rotate(-45deg) translateX(0);
}
.el__index {
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: -80px;
  width: 100%;
  height: 100%;
  min-height: 250px;
  text-align: center;
  font-size: 20vw;
  line-height: 0.85;
  font-weight: bold;
  -webkit-transition: opacity 0.3s 1.4s, -webkit-transform 0.5s;
  transition: opacity 0.3s 1.4s, -webkit-transform 0.5s;
  transition: transform 0.5s, opacity 0.3s 1.4s;
  transition: transform 0.5s, opacity 0.3s 1.4s, -webkit-transform 0.5s;
  -webkit-transform: translate3d(0, 1vw, 0);
          transform: translate3d(0, 1vw, 0);
}
.el:hover .el__index {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.cont.s--el-active .el__index {
  -webkit-transition: opacity 0.3s, -webkit-transform 0.5s;
  transition: opacity 0.3s, -webkit-transform 0.5s;
  transition: transform 0.5s, opacity 0.3s;
  transition: transform 0.5s, opacity 0.3s, -webkit-transform 0.5s;
  opacity: 0;
}
.el__index-back, .el__index-front {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.el__index-back {
  color: #2f3840;
  opacity: 0;
  -webkit-transition: opacity 0.25s 0.25s;
  transition: opacity 0.25s 0.25s;
}
.el:hover .el__index-back {
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
  opacity: 1;
}
.el__index-overlay {
  overflow: hidden;
  position: relative;
  -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
  -webkit-transition: -webkit-transform 0.5s 0.1s;
  transition: -webkit-transform 0.5s 0.1s;
  transition: transform 0.5s 0.1s;
  transition: transform 0.5s 0.1s, -webkit-transform 0.5s 0.1s;
  color: transparent;
}
.el__index-overlay:before {
  content: attr(data-index);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
  -webkit-transition: -webkit-transform 0.5s 0.1s;
  transition: -webkit-transform 0.5s 0.1s;
  transition: transform 0.5s 0.1s;
  transition: transform 0.5s 0.1s, -webkit-transform 0.5s 0.1s;
}
.el:hover .el__index-overlay {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.el:hover .el__index-overlay:before {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.el:nth-child(1) {
  -webkit-transform: translate3d(0%, 0, 0);
          transform: translate3d(0%, 0, 0);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
}
.cont.s--el-active .el:nth-child(1):not(.s--active) {
  -webkit-transform: scale(0.5) translate3d(0%, 0, 0);
          transform: scale(0.5) translate3d(0%, 0, 0);
  opacity: 0;
  -webkit-transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: transform 0.95s, opacity 0.95s;
  transition: transform 0.95s, opacity 0.95s, -webkit-transform 0.95s;
}
.el:nth-child(1) .el__inner {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}
.el:nth-child(1) .el__bg {
  -webkit-transform: translate3d(0%, 0, 0);
          transform: translate3d(0%, 0, 0);
}
.el:nth-child(1) .el__bg:before {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-3.jpg");
}
.el:nth-child(2) {
  -webkit-transform: translate3d(105.2083333333%, 0, 0);
          transform: translate3d(105.2083333333%, 0, 0);
  -webkit-transform-origin: 155.2083333333% 50%;
          transform-origin: 155.2083333333% 50%;
}
.cont.s--el-active .el:nth-child(2):not(.s--active) {
  -webkit-transform: scale(0.5) translate3d(105.2083333333%, 0, 0);
          transform: scale(0.5) translate3d(105.2083333333%, 0, 0);
  opacity: 0;
  -webkit-transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: transform 0.95s, opacity 0.95s;
  transition: transform 0.95s, opacity 0.95s, -webkit-transform 0.95s;
}
.el:nth-child(2) .el__inner {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}
.el:nth-child(2) .el__bg {
  -webkit-transform: translate3d(-19.2%, 0, 0);
          transform: translate3d(-19.2%, 0, 0);
}
.el:nth-child(2) .el__bg:before {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-4.jpg");
}
.el:nth-child(3) {
  -webkit-transform: translate3d(210.4166666667%, 0, 0);
          transform: translate3d(210.4166666667%, 0, 0);
  -webkit-transform-origin: 260.4166666667% 50%;
          transform-origin: 260.4166666667% 50%;
}
.cont.s--el-active .el:nth-child(3):not(.s--active) {
  -webkit-transform: scale(0.5) translate3d(210.4166666667%, 0, 0);
          transform: scale(0.5) translate3d(210.4166666667%, 0, 0);
  opacity: 0;
  -webkit-transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: transform 0.95s, opacity 0.95s;
  transition: transform 0.95s, opacity 0.95s, -webkit-transform 0.95s;
}
.el:nth-child(3) .el__inner {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}
.el:nth-child(3) .el__bg {
  -webkit-transform: translate3d(-38.4%, 0, 0);
          transform: translate3d(-38.4%, 0, 0);
}
.el:nth-child(3) .el__bg:before {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-5.jpg");
}
.el:nth-child(4) {
  -webkit-transform: translate3d(315.625%, 0, 0);
          transform: translate3d(315.625%, 0, 0);
  -webkit-transform-origin: 365.625% 50%;
          transform-origin: 365.625% 50%;
}
.cont.s--el-active .el:nth-child(4):not(.s--active) {
  -webkit-transform: scale(0.5) translate3d(315.625%, 0, 0);
          transform: scale(0.5) translate3d(315.625%, 0, 0);
  opacity: 0;
  -webkit-transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: transform 0.95s, opacity 0.95s;
  transition: transform 0.95s, opacity 0.95s, -webkit-transform 0.95s;
}
.el:nth-child(4) .el__inner {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}
.el:nth-child(4) .el__bg {
  -webkit-transform: translate3d(-57.6%, 0, 0);
          transform: translate3d(-57.6%, 0, 0);
}
.el:nth-child(4) .el__bg:before {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-6.jpg");
}
.el:nth-child(5) {
  -webkit-transform: translate3d(420.8333333333%, 0, 0);
          transform: translate3d(420.8333333333%, 0, 0);
  -webkit-transform-origin: 470.8333333333% 50%;
          transform-origin: 470.8333333333% 50%;
}
.cont.s--el-active .el:nth-child(5):not(.s--active) {
  -webkit-transform: scale(0.5) translate3d(420.8333333333%, 0, 0);
          transform: scale(0.5) translate3d(420.8333333333%, 0, 0);
  opacity: 0;
  -webkit-transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: opacity 0.95s, -webkit-transform 0.95s;
  transition: transform 0.95s, opacity 0.95s;
  transition: transform 0.95s, opacity 0.95s, -webkit-transform 0.95s;
}
.el:nth-child(5) .el__inner {
  -webkit-transition-delay: 0.4s;
          transition-delay: 0.4s;
}
.el:nth-child(5) .el__bg {
  -webkit-transform: translate3d(-76.8%, 0, 0);
          transform: translate3d(-76.8%, 0, 0);
}
.el:nth-child(5) .el__bg:before {
  -webkit-transition-delay: 0.4s;
          transition-delay: 0.4s;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-7.jpg");
}
.el:hover .el__bg:after {
  opacity: 0;
}
.el.s--active {
  z-index: 1;
  width: 100%;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  -webkit-transition: width 0.7s 0.7s, z-index 0s, -webkit-transform 0.6s;
  transition: width 0.7s 0.7s, z-index 0s, -webkit-transform 0.6s;
  transition: transform 0.6s, width 0.7s 0.7s, z-index 0s;
  transition: transform 0.6s, width 0.7s 0.7s, z-index 0s, -webkit-transform 0.6s;
}
.el.s--active .el__bg {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform 0.6s;
  transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
}
.el.s--active .el__bg:before {
  -webkit-transition-delay: 0.6s;
          transition-delay: 0.6s;
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

.icon-link {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;
}
.icon-link img {
  width: 100%;
  vertical-align: top;
}
.icon-link--twitter {
  left: auto;
  right: 5px;
}

