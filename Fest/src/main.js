import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


/* Components */
import Navigation from "./components/Navigation.vue";
import SideNavigation from "./components/SideNavigation.vue";
import Dashboard from "./components/Dashboard.vue";
import UserProfile from "./components/UserProfile.vue";
import NewEvent from "./components/NewEvent.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Test from './components/Test.vue';


/* APP ARCHITECTURE */
const app = createApp(App);

// Router
app.use(router);

// Store - State Management
app.use(store);

/* Google Login */



// Set Components
app.component("Navigation", Navigation);
app.component("SideNavigation", SideNavigation);
app.component("Dashboard", Dashboard);
app.component("UserProfile", UserProfile);
app.component("NewEvent", NewEvent);
app.component("SignUp", SignUp);
app.component("Login", Login);
app.component("Test", Test);

// Mount app on HTML
app.mount("#app");
