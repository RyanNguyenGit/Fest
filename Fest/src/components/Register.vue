<template>
    <div class="register-container">
    <div class="outerouterdiv">
    <div class="outer">
        <div class = "close-button-container">
                <button type="button" @click="hideRegisterModal()" class = "close-button-x">
                    X
                </button>
        </div>
    <div class="upperdiv">
    <h1 class="welcomeback">
    Let's get set up<br>
    </h1>
    </div>
    <div class="lowerdiv">
    <h2>Your details</h2>
    <form action="/">
    <div class="personal-details-container">
    <label for="firstname">First name</label><br>
    <input type="text" id="firstname" name="firstname" placeholder="First name..." v-model="newRegisterData.first_name"><br><br>
    <label for="lastname">Last name</label><br>
    <input type="text" id="lastname" name="lastname" placeholder="Last name..." v-model="newRegisterData.last_name"><br><br>
    <label for="dateofbirth">Date of birth</label><br>
    <input type="date" id="dateofbirth" name="dateofbirth" v-model="newRegisterData.dob">
    </div>
    <div class="personal-details-container">
    <h2>Your address</h2>
    <label for="Streetname">Street name</label><br>
    <input type="text" id="streetname" name="streetname" placeholder="Street name..." v-model="newRegisterData.street"><br><br>
    <label for="city">City</label><br>
    <input type="text" id="city" name="city" placeholder="City..." v-model="newRegisterData.city"><br><br>
    <label for="country">Country</label>
    <input type="text" id="country" name="country" placeholder="Country..." v-model="newRegisterData.country"><br><br>
    <div class="bottomDiv">
    <div>
    <label for="state">State</label>
    <input type="text" id="state" name="state" placeholder="State..." v-model="newRegisterData.state"><br><br>
    </div>
    <div>
    <label for="Post code">Post code</label>
    <input type="number" id="postcode" name="postcode" placeholder="Post code..." v-model="newRegisterData.post_code"><br><br>
    </div>
    </div>
    <div class="post_code_country">
    </div>
    </div>
    <div class="button-container">
    <button type="button" class="save" @click="postNewRegisterInfo()">Save</button>
    </div>
    <div class="message">
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
</template>
<style scoped>
@import "@/styles/RegisterStyles.css";
</style>
<script src="@/logic/RegisterLogic.js">
</script>