export default {

  callbacks: [],

  appended: false,

  load(params, callback) {
    const index = this.callbacks.push(callback);
    if (window.google) {
      setTimeout(this.fireCallbacks.bind(this));
    } else {
      if (!this.appended) {
        window.mapsCallbacks = this.mapsCallbacks.bind(this);
        this.appendScript(params);
      }
    }
    return index;
  },

  fireCallbacks() {
    this.callbacks.forEach(callback => callback());
    this.callbacks = [];
  },

  mapsCallbacks() {
    window.mapsCallbacks = undefined;
    this.fireCallbacks();
  },

  appendScript() {
    const src = this.getSrc();
    const script = document.createElement('script');
    script.setAttribute('src', src);
    document.head.appendChild(script);
    this.appended = true;
  },

  getSrc(params) {
    console.log(params)
    let src = 'https://maps.googleapis.com/maps/api/js';
    src += '?key=AIzaSyDMPAw1ZOUSv9T5nf9_nHVhjT0NT99Vl0U&callback=mapsCallbacks';
    return src;
  }
};
