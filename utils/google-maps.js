export default {

    map: null,

    appended: false,

    load() {
        if(window.google) {

        } else {
            if(!this.appended) {
                this.appendScript();
            }
        }
    },

     appendScript() {
        const src = this.getSource();
        const script = document.createElement('script');
        script.setAttribute('src', src);
        document.head.appendChild(script);
        this.appended = true;
    },

    getSrc() {
        let src = 'https://maps.googleapis.com/maps/api/js'
        src += '?key=AIzaSyDMPAw1ZOUSv9T5nf9_nHVhjT0NT99Vl0U&callback=initMap';
        return src;
    },

    initMap() {

    }

};
