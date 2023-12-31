import store from "@/store/index";

export default {
    mounted() {
        gapi.signin2.render('google-signin-button', {
          onsuccess: this.onSignIn
        })
      },

    methods: {
        // GOOGLE
        onSignIn (user) {
            const profile = user.getBasicProfile();
            const id_token = user.getAuthResponse().id_token;
            console.log('test')
            // console.log(profile);
            // console.log(id_token);
            store.dispatch('postGoogleSignUp', [id_token, profile]);
        },

        postNewSignupInfo() {
            const checkEmail = document.getElementById("email");
            const checkPassword = document.getElementById("password");
            if (checkPassword.value.length && checkEmail.value.length > 8) {
                console.log(checkEmail);
                console.log(checkPassword);
                store.dispatch('postSignupData');
            } else {
                if(!document.querySelector(".errorMessage")) {
                    let error = document.createElement("p");
                    error.innerText = "Requirements not met, please try again";
                    error.className="errorMessage";
                    error.style.color = "red";
                    document.querySelector(".signUpError").appendChild(error);
                }
            }
        },

        hideSignUpModal() {
            store.dispatch('toggleSignUpModal');
        },

        postSignUp() {
            let email = document.getElementById('email');
            let password = document.getElementById('password');
            
            let validEmail = false;
            let validPassword = false;

            if (email.value != '' && email.value.length > 0) {
                validEmail = true;
            }

            if (password.value != '' && password.value.length >= 8) {
                validPassword = true;
            }

            if (validEmail && validPassword) {
                var auth = {
                    "email": email.value,
                    "password": password.value
                }

                store.dispatch('postSignUp', auth);
            }

            else {
                if(!document.querySelector(".errorMessage")) {
                    let error = document.createElement("p");
                    error.innerText = "Requirements not met, please try again";
                    error.className="errorMessage";
                    error.style.color = "red";
                    document.querySelector(".signUpError").appendChild(error);
                }
            }
        }
    },
}