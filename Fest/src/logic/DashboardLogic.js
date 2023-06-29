import store from "@/store/index";

export default {
    methods: {
        formatDate(dateString) {
            if (dateString == null) {
                return;
            }
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date) + " " + date.toLocaleTimeString(('en-US'), { hour: '2-digit', minute: '2-digit' });
        },

        formatLocation(event) {
            if (event.street === null) {
                return '';
            }
            else {
                return event.street + ", " + event.city;
            }

        }
    },
    computed: {
        publicEvents() {
            // let publicEvents = store.state.publicEvents;
            let publicEvents = [{event_title: "Ryan's 21st Birthday", event_start: "2023-06-29T09:30:00",event_description:"hello", street:"1 Smith Street", city: "Adelaide, SA"}, {event_title:"Taylor Swift After Party", event_start: "2023-06-29T09:30:00", street:"1 James Street", city: "Adelaide, SA"}, {event_title:"Drake Concert", event_start: "2023-06-29T09:30:00", street:"1 Drake Street", city: "Adelaide, SA"}, {event_title:"Emily's Babyshower", event_start: "2023-06-29T09:20:00", street:"1 Terrence Street", city: "Adelaide, SA"}]
            for (let i = 0; i < publicEvents.length; i++) {
                if(publicEvents[i].event_title.length > 30) {
                    // If title string is too long remove characters
                    publicEvents[i].event_title = publicEvents[i].event_title.slice(0, 30) + '..'
                }
            }
            return publicEvents;
        },

        // isLoading() {
        //     return store.state.isLoading;
        // },

        userInfo() {
            return store.state.userInfo;
        }
    },

    //automatically calls action to retrieve data to the state.
    created() {
        
        store.dispatch('updateIsLoading');

        // store.dispatch('loginOnOpen');
        store.dispatch('fetchPublicEvents')
            .then(() => store.dispatch('updateIsLoading'));
    
        
    }
}