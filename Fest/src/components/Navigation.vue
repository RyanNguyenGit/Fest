<template>
    <nav :class="isDark ? 'dark' : 'light'" class="navigation-container" id="navigation-container">
        <div class="nav-bar">
            <div class="nav-bar-left" id="nav-bar">
               <!-- Menu button display -->
                <button title="homepage"  type="button" class="menu-icon-container">
                    <svg id="menu-button" width="100%" height="100%" viewBox="0 0 3559 2417" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5;">
                        <rect id="MenuIcon" x="0" y="0" width="3558.62" height="2416.17" style="fill:none;"/>
                        <g>
                            <path d="M146.007,283.261l3241.56,0" style="fill:none;stroke-width:230.17px;"/>
                            <path d="M146.007,1131.72l3241.56,0" style="fill:none;stroke-width:230.17px;"/>
                            <path d="M146.007,1996.04l3241.56,0" style="fill:none;stroke-width:230.17px;"/>
                        </g>
                    </svg>
                </button>
                <router-link class="page-logo-container" to="/">
                    <div class="company-logo">
                        <svg width="100%" height="100%" viewBox="0 0 2445 2417" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                            <rect id="FestLogo" x="0" y="0" width="2444.23" height="2416.17" style="fill:none;"/>
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="2444.23" height="2416.17"/>
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <g>
                                    <path d="M2414.64,1229.86c0,-654.743 -531.568,-1186.31 -1186.31,-1186.31c-654.742,-0 -1186.31,531.567 -1186.31,1186.31c0,654.742 531.568,1186.31 1186.31,1186.31c654.742,-0 1186.31,-531.568 1186.31,-1186.31Z" style="fill:#ff8c42;"/><path d="M1205.72,954.061c-0,-0 78.656,-78.145 106.747,-156.801c28.091,-78.655 9.194,-192.553 9.194,-192.553" style="fill:none;stroke:#fff;stroke-width:79.74px;"/>
                                    <path d="M1866.87,1146.33c0,-0 -109.867,-14.918 -189.39,10.615c-79.523,25.533 -158.447,109.799 -158.447,109.799" style="fill:none;stroke:#fff;stroke-width:79.74px;"/><circle cx="1121.92" cy="755.723" r="42.169" style="fill:#fff;"/><circle cx="1519.04" cy="699.139" r="42.169" style="fill:#fff;"/><circle cx="1803.03" cy="986.679" r="42.169" style="fill:#fff;"/><circle cx="1745.98" cy="1378.67" r="42.169" style="fill:#fff;"/>
                                    <path d="M1817.86,573.795c-2.795,7.201 -12.768,34.359 -12.521,54.116c0.136,10.815 1.835,24.036 3.87,36.165l-31.024,-1.303c-17.326,-0.701 -33.575,0.276 -46.186,3.777c-15.495,4.302 -27.262,12.28 -35.28,22.722c-8.059,10.495 -12.239,23.34 -12.725,37.242c-0.528,15.106 5.059,32.249 6.186,39.833c0.918,6.175 2.079,12.482 2.525,18.729l-8.909,-2.609c-35.748,-10.202 -73.52,-7.502 -102.988,20.444c-19.928,18.898 -20.264,44.126 -19.71,69.057c0.265,11.953 2.815,28.216 3.373,43.971c0.05,1.425 0.01,3.112 -0.081,4.845c-7.233,-0.444 -16.195,-1.062 -23.108,-1.757c-19.373,-1.946 -39.389,-2.922 -55.944,-0.002c-17.931,3.163 -32.831,10.597 -43.795,22.011c-17.975,18.716 -22.308,47.719 -16.687,79.969c1.678,9.632 4.042,19.625 5.772,29.209l-4.121,-1.297c-12.033,-3.903 -24.014,-6.372 -34.971,-6.036c-21.853,0.67 -43.452,6.117 -62.84,16.31c-19.477,10.241 -26.976,34.367 -16.736,53.844c10.241,19.477 34.367,26.976 53.844,16.735c8.684,-4.565 18.388,-6.886 28.176,-7.186c4.338,-0.133 8.88,2.474 13.659,4.113c8.142,2.791 16.301,5.463 24.031,6.976c24.985,4.89 47.065,0.083 64.584,-20.823c15.383,-18.357 18.454,-47.005 12.522,-78.546c-1.947,-10.348 -4.575,-21.121 -6.058,-31.291c-0.229,-1.576 -0.381,-3.59 -0.466,-5.503c3.361,-0.363 7.541,-0.711 10.634,-0.63c17.532,0.46 36.579,3.58 51.996,4.332c29.897,1.459 51.681,-8.266 62.165,-21.594c10.936,-13.904 16.588,-33.233 17.18,-54.75c0.521,-18.894 -3.082,-39.966 -3.409,-54.671c-0.075,-3.358 -0.308,-8.657 -0.493,-12.491c6.608,-2.829 14.407,-0.61 21.588,1.439c12.786,3.649 28.37,9.113 42.264,9.186c18.777,0.099 35.975,-6.161 49.717,-23.163c21.799,-26.97 19.788,-59.401 15.16,-90.543c-0.317,-2.127 -1.38,-7.226 -2.487,-12.292c1.079,-0.042 2.12,-0.056 3.075,-0.041c11.728,0.191 24.477,1.42 36.413,2.242c19.64,1.353 37.69,1.158 50.089,-1.978c12.183,-3.081 21.45,-8.741 28.11,-15.559c4.919,-5.036 11.681,-14.113 11.794,-29.454c0.063,-8.536 -10.608,-41.353 -10.975,-70.632c-0.149,-11.893 6.734,-22.822 8.718,-28.46c3.905,-11.094 3.476,-19.813 2.6,-24.745c-3.852,-21.665 -24.568,-36.127 -46.233,-32.276c-16.942,3.012 -29.479,16.336 -32.298,32.365Z" style="fill:#fff;"/>
                                    <path d="M660.011,1595.19c0,-0 12.767,30.252 31.598,65.498c12.67,23.714 28.384,48.818 43.154,67.798c28.494,36.615 89.817,103.882 89.817,103.882l-210.472,79.654c-15.022,5.499 -31.871,1.754 -43.15,-9.59c-11.278,-11.344 -14.925,-28.214 -9.339,-43.204l98.392,-264.038Zm172.673,-463.29c0,0 -6.899,165.034 19.249,252.924c18.152,61.011 60.202,169.749 107.695,233.198c52.403,70.007 110.095,123.938 110.095,123.938l-160.571,57.627c0,0 -62.484,-45.321 -129.399,-151.244c-49.367,-78.147 -74.297,-174.872 -74.297,-174.872l127.228,-341.571Zm287.093,-45.265c0,0 -20.713,126.403 26.241,270.318c63.27,193.921 174.017,293.656 174.017,293.656l-159.444,56.052c-0,0 -167.926,-116.142 -220.051,-322.123c-68.465,-270.556 30.174,-447.832 30.699,-447.304l148.538,149.401Zm75.436,75.997l346.165,348.052c9.849,9.906 13.974,24.148 10.943,37.785c-3.031,13.637 -12.8,24.79 -25.918,29.592l-115.688,40.67c0,-0 -25.419,-20.281 -55.665,-55.244c-35.885,-41.48 -79.293,-103.221 -105.392,-170.559c-62.78,-161.982 -54.445,-230.296 -54.445,-230.296Z" style="fill:#fff;"/>
                                    </g>
                                </g>
                        </svg>
                    </div>
                    <span class="company-name" id="company-name">
                        Fest
                    </span>
                </router-link>
            </div>
            <div class="nav-bar-right">
                <!-- Logged-in User -->
                <div class="light-dark-container">
                    <button type="button" class="navigation-button">
                        <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                        <rect id="light" x="0" y="0" width="2131.59" height="2106.64" style="fill:none;"/>
                            <g id="Sun">
                                <path d="M1059.77,560.616c-266.502,0 -485.721,219.219 -485.721,485.721c0,266.501 219.219,485.72 485.721,485.72c266.501,-0 485.72,-219.219 485.72,-485.72c-0,-266.502 -219.219,-485.721 -485.72,-485.721Z" />
                                <g>
                                    <path d="M1059.77,414.47c-51.581,0 -94.565,-42.984 -94.565,-94.565l-0,-150.444c-0,-51.581 42.984,-94.565 94.565,-94.565c51.581,0 94.565,42.984 94.565,94.565l-0,150.444c-0,55.88 -42.984,94.565 -94.565,94.565Z"/>
                                </g>
                                <g>
                                    <path d="M1059.77,1673.9c-51.581,0 -94.565,42.984 -94.565,94.565l-0,154.743c-0,51.581 42.984,94.565 94.565,94.565c51.581,0 94.565,-42.984 94.565,-94.565l-0,-150.444c-0,-55.88 -42.984,-98.864 -94.565,-98.864Z"/>
                                </g>
                                <g>
                                    <path d="M1502.5,599.302c-38.686,-38.686 -38.686,-98.863 -0,-133.251l107.46,-107.46c38.686,-38.686 98.863,-38.686 133.251,0c38.685,38.686 38.685,98.864 -0,133.251l-107.461,107.46c-34.387,38.686 -94.565,38.686 -133.25,0Z"/>
                                </g>
                                <g>
                                    <path d="M612.731,1489.07c-38.686,-38.686 -98.863,-38.686 -133.251,-0l-107.46,107.46c-38.685,38.686 -38.685,98.863 0,133.251c38.686,34.387 98.864,38.685 133.251,-0l107.46,-107.461c38.686,-34.387 38.686,-94.565 0,-133.25Z"/>
                                </g>
                                <g>
                                    <path d="M1687.33,1046.34c0,-51.581 42.984,-94.565 94.565,-94.565l154.743,-0c51.581,-0 94.565,42.984 94.565,94.565c0,51.58 -42.984,94.565 -94.565,94.565l-150.444,-0c-55.88,-0 -98.864,-42.985 -98.864,-94.565Z" /></g><g><path d="M427.9,1046.34c-0,-51.581 -42.985,-94.565 -94.565,-94.565l-150.445,-0c-51.581,-0 -94.565,42.984 -94.565,94.565c0,51.58 42.984,94.565 94.565,94.565l150.445,-0c55.879,-0 94.565,-42.985 94.565,-94.565Z" /></g><g><path d="M1502.5,1489.07c38.685,-38.686 98.863,-38.686 133.25,-0l107.461,107.46c38.685,38.686 38.685,98.863 -0,133.251c-38.686,34.387 -98.864,38.685 -133.251,-0l-107.46,-107.461c-34.387,-34.387 -34.387,-94.565 -0,-133.25Z" /></g><g><path d="M612.731,599.302c38.686,-38.686 38.686,-98.863 0,-133.251l-107.46,-107.46c-38.686,-38.686 -98.864,-38.686 -133.251,0c-38.685,38.686 -38.685,98.864 0,133.251l107.46,107.46c38.686,38.686 98.864,38.686 133.251,0Z" /></g></g></svg>
                    </button>
                    <label class="switch">
                        <input type="checkbox" @click="changeStyleMode()">
                        <span class="slider round">
                        </span>
                    </label>
                    
                    <button type="button" class="navigation-button">
                        <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Dark" x="0" y="0" width="2131.59" height="2106.64" style="fill:none;"/><path id="Moon" d="M722.015,74.896c-364.954,152.29 -621.455,512.532 -621.455,932.688c-0,557.915 452.278,1010.19 1010.19,1010.19c420.156,0 780.398,-256.501 932.688,-621.455c-119.657,49.932 -250.98,77.505 -388.738,77.505c-557.915,0 -1010.19,-452.278 -1010.19,-1010.19c-0,-137.758 27.573,-269.081 77.505,-388.738Z" /></svg>
                    </button>
                </div>
                <div v-if="Object.keys(userInfo).length > 0" class="notifications-container">
                    <button class="navigation-button" type="button" @click="toggleShowNotifications()">
                        <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="background-color:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <path id="Alarm--small-" serif:id="Alarm (small)" d="M1295.47,1795.55c-7.921,134.637 -102.958,237.593 -237.594,237.593c-134.635,0 -237.592,-102.956 -237.593,-237.593l475.187,0Zm673.18,-273.939c-15.839,-7.92 -23.759,-15.84 -39.599,-15.84c-71.278,-31.679 -126.716,-110.877 -158.395,-174.235c-55.438,-87.117 -79.198,-190.074 -79.198,-293.031l0,-193.714c0,-324.711 -245.513,-586.064 -554.384,-625.662l0,-87.118c0,-47.519 -31.679,-79.198 -79.198,-79.198c-47.518,0 -79.197,31.679 -79.197,79.198l-0,87.118c-308.872,39.598 -554.384,308.871 -554.384,625.662l-0,193.714c-0,95.037 -23.76,190.074 -63.359,269.272c-31.679,63.358 -71.278,118.797 -126.716,166.315c-23.759,23.76 -55.438,31.679 -79.198,47.519c-23.759,7.92 -39.599,31.679 -39.599,63.358c0,47.519 31.679,79.198 79.198,79.198l1742.35,-0c47.519,-0 79.198,-31.679 79.198,-79.198c-7.92,-15.84 -23.759,-47.519 -47.519,-63.358Z" /></svg>
                    </button>
                    <div v-if="notifications.length > 0" >
                        <span class="notification-active"></span>
                    </div>

                </div>
                <!-- Login button -->
                <button v-if="Object.keys(userInfo).length > 0" type="button" v-on:click="signOut();" class="user-logs-button-login" :class="{ dark: isDark }">
                    Sign Out
                </button>
                <router-link  to="/profile" v-if="Object.keys(userInfo).length > 0" class="user-profile-container">
                    <button class="user-profile-button" type="button">
                        <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="Log-in" serif:id="Log in" x="0" y="-0" width="2131.59" height="2106.64" style="fill:none;"/><ellipse cx="1065.8" cy="1059.12" rx="984.796" ry="985.612" style="fill:#5096fe;stroke:#4f94fa;stroke-width:71.5px;"/><ellipse cx="1052.41" cy="772.697" rx="449.291" ry="456.433" style="fill:#fff;"/><path d="M392.973,1778.58c108.123,-191.275 306.196,-395.105 659.433,-395.105c357.762,-0 564.101,209.085 678.389,402.356c-175.288,160.765 -408.783,258.905 -665,258.905c-260.076,-0 -496.74,-101.119 -672.822,-266.156Z" style="fill:#f6f5f7;"/></svg>
                    </button>
                </router-link>
                <div v-else class="user-profile-container-login">
                    <!-- Sign up -->
                    <button type="button" v-on:click="displaySignUpModal();" class="user-logs-button" :class="{ dark: isDark }">
                        Sign Up
                    </button>
                    <!-- Login button -->
                    <button type="button" v-on:click="displayLoginModal();" class="user-logs-button-login" :class="{ dark: isDark }">
                        Log In
                    </button>
                    
                </div>
                
            </div>
            
        </div>
        <!-- Notifications Popup -->
        <div v-if="showNotifications" class="notifications-container-box">
            
            <div class="notifications-content">
                <!-- Default no notifications -->
                <div v-if="notifications.length == 0" class="notifications-line">
                    <div class="notifications-icon">
                        <p>&#128557;</p>
                    </div>
                    <p>
                        You have no notifications
                    </p>
                </div>
                <!-- Notifications List -->
                <router-link :to="'/event/' + notification.event_id" @click="toggleShowNotifications" v-for="(notification, index) in notifications" :key="index" :id="notification.event_id" class="notifications-line">
                    <div class="notifications-icon" >
                        <p>{{ notification.icon }}</p>
                    </div>
                    <p>
                        <span v-if="notification.type_id == 1" class="notification-invited">
                            Invited: 
                        </span> 
                        <span v-if="notification.type_id == 2" class="notification-attending"> 
                            New attendant to your event: 
                        </span>
                        <br>
                        {{ notification.event_title }}
                    </p>
                </router-link>
            </div>
            
        </div>
    </nav>

</template>


// Page styling
<style scoped>
@import "@/styles/NavigationStyles.css";
</style>

// Page Logic

<script src="../logic/NavigationLogic.js">
</script>
