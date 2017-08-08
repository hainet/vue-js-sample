var message = new Vue({
    el: '#message',
    data: {
        message: 'Hello Vue!'
    }
})

var messages = new Vue({
    el: '#messages',
    data: {
        message1: 'message1',
        message2: 'message2'
    }
})

var vBind = new Vue({
    el: '#v-bind',
    data: {
        title: new Date()
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
        value: 'Edit me!'
    }
})

Vue.component('component', {
    template: '<div>template</div>'
})

var component = new Vue({
    el: '#component'
})

Vue.component('bound-component', {
    props: ['item'],
    template: '<li>{{ item.value }}</li>'
})

var boundComponent = new Vue({
    el: '#bound-component',
    data: {
        skills: [
            { value: 'Javascript' },
            { value: 'Vue.js' }
        ]
    }
})