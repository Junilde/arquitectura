// UserBuilder.js

class perguntaBuild {
    constructor() {
        this.user={}
    }
   

    withName(name) {
        this.user.name = name;
        return this;
    }

    withActivity(activity) {
        this.user.activity = activity;
        return this;
    }

    withUrl(url) {
        this.user.url = url;
        return this;
    }

    build() {
        return this.user;
    }
}

module.exports = perguntaBuild;
