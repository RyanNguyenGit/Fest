

<template>
     <!-- ----------------------------------------------------------------------  -->
        <!-- create new event -->
        <div class="new-event-container ligth">
            <div id = "newEvent">
            <!-- ----------------------------------------------------------------------  -->
            <!-- breadcrumbs navigation -->
                <div class = "topline">
                    <div class="close-button-container">
                        <button class="event-create-cancel" type="button" @click="cancelCreate" >
                            X
                        </button>
                    </div>
                    <nav class = "breadcrumbs">
                        <span>
                            <a href = "https://localhost:3000/">Home</a>
                            /
                            <span class = "breadcrumbs">New Event</span>
                        </span>
                    </nav>
                </div>

            <!-- breadcrumbs navigation end -->
            <!-- ----------------------------------------------------------------------  -->

                <h2>New Event</h2>

            <!-- ----------------------------------------------------------------------  -->
            <!-- host details -->
                <div class = "host">
                    <div class="hostImg">
                        <img class="hostIcon" :src="'src/assets/images/' + userInfo.profile_picture"  alt = " ">
                    </div>
                    <div>
                        <div class="host-name"> {{ userInfo.first_name }}</div>
                        <div><small class = "hostTitle">Host</small></div>
                    </div>
                </div>
                <br>
                <hr>
            <!-- host details end -->
            <!-- ----------------------------------------------------------------------  -->

            <!-- ----------------------------------------------------------------------  -->
            <!-- event info -->
                <div class = "newEventData">
                    <h3>Details</h3>

                    <!-- ----------------------------------------------------------------------  -->
                    <!-- emoji search  -->
                    <div class = "emoji">
                        <div class="emoji-search-container">
                            <form class = "emoji-search">
                                <input class = "emoji-search-text" type="search" placeholder="Search Emoji...Coming Soon..." name ="ignore">
                                <svg class = "emoji-search-button" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </form>

                            <div class = "emoji-clear" @click="postEmoji('U+1F389')">
                                <button class = "emoji-clear-button" type="button">X</button>
                                <div class = "emoji-clear-text">
                                    <p>No Emoji</p>
                                </div>
                            </div>
                        </div>

                        <div >
                            <ul class = "emoji-list">
                                <li><button @click="postEmoji('U+1F600')" type="button" class = "emoji-button">&#x1F600;</button></li>
                                <li><button @click="postEmoji('U+1F606')" type="button" class = "emoji-button">&#x1F606;</button></li>
                                <li><button @click="postEmoji('U+1F923')" type="button" class = "emoji-button">&#x1F923;</button></li>
                                <li><button @click="postEmoji('U+1F929')" type="button" class = "emoji-button">&#x1F929;</button></li>
                                <li><button @click="postEmoji('U+1F973')" type="button" class = "emoji-button">&#x1F973;</button></li>
                                <li><button @click="postEmoji('U+1F3C7')" type="button" class = "emoji-button">&#x1F3C7;</button></li>
                                <li><button @click="postEmoji('U+1F6B5')" type="button" class = "emoji-button">&#x1F6B5;</button></li>
                                <li><button @click="postEmoji('U+1F46F')" type="button" class = "emoji-button">&#x1F46F;</button></li>
                            </ul>
                        </div>
                    </div>
                <br>
                <!-- emoji search end -->
                <!-- ----------------------------------------------------------------------  -->

                <!-- ----------------------------------------------------------------------  -->
                <!-- event detail -->
                <div class = "event-detail">
                    <textarea v-model="newEventData.title" @click="clearInput('title')" placeholder="Event Title..." rows="2" maxlength="30"></textarea>
                    <textarea @click="clearInput('description')" v-model="newEventData.description" placeholder="Event Description..." rows="10" maxlength="300"></textarea>
                </div>
                
                <!-- event detail end -->
                <!-- ----------------------------------------------------------------------  -->

                <!-- ----------------------------------------------------------------------  -->
                <!-- event time -->
                <div class = "event-time">
                    <form class = "event-start">
                            <div>
                                <label>Start Date and Time:</label>
                            </div>
                            <div>
                                <input type = "datetime-local" v-model="newEventData.event_start">
                            </div>
                    </form>

                    <form class = "event-end">
                        <div>
                            <label>End Date and Time:</label>
                        </div>
                        <div>
                            <input type = "datetime-local" v-model="newEventData.event_end">
                        </div>
                    </form>
                </div>
                <!-- event time end -->
                <!-- ----------------------------------------------------------------------  -->

                <!-- ----------------------------------------------------------------------  -->
                <!-- event location -->
                <div class = "event-location">
                    <div class = "street">
                        <label>Street</label>
                        <input type="text" v-model="newEventData.street" placeholder="street...">
                    </div>

                    <div class = "city-state">
                        <div class = "event-location-box">
                            <label>City</label>
                            <input type="text" v-model="newEventData.city" placeholder="city...">
                        </div>

                        <div class = "event-location-box">
                            <label>State</label>
                            <input type="text" v-model="newEventData.state" placeholder="state...">
                        </div>
                    </div>

                    <div class = "country-postcode">
                        <div class = "event-location-box">
                            <label>Country</label>
                            <input type="text" v-model="newEventData.country" placeholder="country...">
                        </div>

                        <div class = "event-location-box">
                            <label>PostCode</label>
                            <input type="text" v-model="newEventData.post_code" placeholder="postcode...">
                        </div>
                    </div>
                </div>
                <!-- event location end -->
                <!-- ----------------------------------------------------------------------  -->
                <!-- ----------------------------------------------------------------------  -->
                <!-- event photo -->
                <div class = "event-photo">
                    <div><label>Upload a cover photo</label> </div>
                    <div><input type="file" @change="uploadImage" name="cover" accept="image/*"></div>
                </div>
                <!-- event photo end -->
                <!-- ----------------------------------------------------------------------  -->
            </div>
            <!-- event info end -->
            <!-- ----------------------------------------------------------------------  -->

            <!-- ----------------------------------------------------------------------  -->
            <!-- event privacy -->
            <div class = "event-privacy">
                <h3>Event Privacy</h3>

                <!-- ----------------------------------------------------------------------  -->
                <!-- event group -->
                <div class = "event-group">
                    <input type="radio" id="closeFriend" name="eventGroup" @click="postPrivacy('Close Friend')" v-model="newEventData.privacy" value="Close Friend">
                    <label for="closeFriend" class="event-group-selector">
                            <div class="icon">&#128525;</div>
                            <p>
                                Close Friends
                            </p>
                    </label>

                    <input type="radio" id="allFriend" name="eventGroup" @click="postPrivacy('All Friend')" v-model="newEventData.privacy" value="All Friend">
                    <label for="allFriend" class="event-group-selector">
                            <div class="icon">&#129321;</div>
                            <p>
                                All Friends
                            </p>
                    </label>

                    <input type="radio" id="allPublic" name="eventGroup" @click="postPrivacy('All Public')" v-model="newEventData.privacy" value="All Public">
                    <label for="allPublic" class="event-group-selector">
                            <div class="icon">&#128516;</div>
                            <p>
                                All Public
                            </p>
                    </label>

                </div>
                <!-- event group end -->
                <!-- ----------------------------------------------------------------------  -->

                <!-- ----------------------------------------------------------------------  -->
                <!-- event invite -->
                <div class = "event-invite">
                    <form class = "event-invite-search">
                        <input class="event-invite-search-text" type="text" placeholder="Search friends to invite..." name ="searchFriend"
                        v-model="search" @focus="showFriends = true"/>
                        <svg class = "event-invite-search-button" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </form>
                    <br>
                    <div class="friendList" id="friendList" v-if="showFriends">
                        <table id="myTable">
                            <thead>
                                <tr>
                                    <th>Portrait</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>
                                        <button type="button" class="hideFriends" @click="showFriends = false" >Close</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(friend, index) in findFriend" :key="friend.id">
                                    <td>
                                        <img class="friendIcon" :src="'src/assets/images/' + friend.icon"  alt = " ">
                                    </td>
                                    <td>{{ friend.firstName }}</td>
                                    <td>{{ friend.lastName }}</td>
                                    <td><button type="button"
                                                @click="inviteFriend(friend,index)"
                                                :disabled="friend.inviteActive">Invite</button></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                <div v-if="invitedFriends.length > 0">
                    <p>Invitations will sent to...</p>
                    <div v-for="(friendInvited, index) in invitedFriends" :key="index"  class="people-invited">
                        <div >
                            <span class="people-invited-delete" @click="cancelInvited(invitedFriends, friendInvited, index)">&#9940;</span>
                            <img :src="'src/assets/images/' + friendInvited.icon">
                        </div>
                    </div>
                </div>
                <!-- event invite end -->
                <!-- ----------------------------------------------------------------------  -->
            </div>
            <br>
            <hr>
            <br>
            <!-- event privacy end -->
            <!-- ----------------------------------------------------------------------  -->

            <!-- ----------------------------------------------------------------------  -->
            <!-- event availability -->
            <div class = "event-attandance">
                <h3>Attandance availability</h3>
                <div class = "event-calendar">
                    <vue-cal
                     class="vuecal--rounded-theme vuecal--green-theme"
                     xsmall
                     hide-view-selector
                    :time="false"
                    :time-from="10 * 60"
                    active-view="month"
                    :disable-views="['week']"
                     events-count-on-year-view
                    style="width: 270px;height: 300px"
                    :events="friendAvailability">
                    </vue-cal>
                </div>

            </div>
            <br>
            <!-- event availability end -->
            <!-- ----------------------------------------------------------------------  -->

            <div class= "event-submit">
                <button type="submit" @click="submitNewEvent">Create Event !!!</button>
            </div>

            </div>

            <div class="post-container-major">

                <!-- Post -->
                <div class="post-container">
                    <div class="post-image-container">

                    </div>

                    <div class="post-icon-container">
                        <p>
                            {{ newEventData.icon }}
                        </p>
                    </div>
                    <div class="post-details-container">
                        <div class="post-title-container">
                            <h3>
                               {{ newEventData.title }}
                            </h3>
                        </div>
                        <p class="post-description">
                            {{ newEventData.description }}
                        </p>
                        <p class="post-description-label">
                            Start & End date:
                        </p>
                        <p class="post-datetime">
                            <span> {{ formatDate(newEventData.event_start) }} </span> <span v-if=" newEventData.event_end != null"> to {{ formatDate(newEventData.event_end) }} </span>
                            <!-- {{ formatDate('17-03-2022') }} -->
                        </p>
                        <p class="post-description-label">
                            Location
                        </p>
                        <p class="post-location"> 
                            {{ newEventData.street }}, {{ newEventData.city }}. {{ newEventData.country }}
                        </p>
                    </div>

                    
                    
                    
                </div>









               
            </div>

        </div>

        <!-- create new event end -->
        <!-- ----------------------------------------------------------------------  -->
</template>

<style scoped>
@import "@/styles/NewEventStyles.css";
</style>

<script src="@/logic/CreateNewEventLogic.js">
</script>


