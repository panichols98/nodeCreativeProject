  
/*global Vue*/
/*global axios*/

var app = new Vue({
    el: '#app',
    data: {
        shows: [],
        prefix: '',
        oldPrefix: '',
        viewShow: false,
        showInfo: [],
    },
    methods: {
        async getShows() {
            this.viewShow = false;
            var url = "/shows/" + this.prefix;
            console.log(this.prefix);
            try {
                let response = await axios.get(url);
                this.shows = response.data;
                console.log(this.shows);
                return true;
            }
            catch (error) {
                console.log(error);
            }
        },
        async getShowInfo(id) {
            console.log(id);
            let url = "/showInfo/" + id;
            console.log(url);
            let response = await axios(url);
            this.showInfo = response.data;
            this.viewShow = true;
            console.log(this.showInfo);
            console.log(this.showInfo.summary);
        },
    },
    computed: {

    }
});