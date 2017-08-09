var vBind = new Vue({
    el: '#v-bind',
    data: {
        message: new Date()
    }
})

var vIf = new Vue({
    el: '#v-if',
    data: {
        seen: true
    }
})

var vFor = new Vue({
    el: '#v-for',
    data: {
        skills: [
            { name: 'Javascript' },
            { name: 'Vue.js' }
        ]
    }
})

var vOn = new Vue({
    el: '#v-on',
    data: {
        message: '0123456789'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var vModel = new Vue({
    el: '#v-model',
    data: {
        message: 'Edit me!'
    }
})