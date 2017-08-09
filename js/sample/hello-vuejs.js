var value = new Vue({
    el: '#value',
    data: {
        message: 'Hello Vue!'
    }
})

var values = new Vue({
    el: '#values',
    data: {
        message1: 'message1',
        message2: 'message2'
    }
})

var objectValue = new Vue({
    el: '#object-value',
    data: {
        object: { message: 'message' }
    }
})

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

Vue.component('component', {
    template: '<span>template</span>'
})

var component = new Vue({
    el: '#component'
})

Vue.component('v-bind-component', {
    props: ['item'],
    template: '<span>{{ item }}</span>'
})

var vBindComponent = new Vue({
    el: '#v-bind-component'
})

var vuejsVBindComponent = new Vue({
    el: '#vuejs-v-bind-component',
    data: {
        message: 'Bound message'
    }
})

Vue.component('nested-component', {
    props: ['item'],
    template: '<span><v-bind-component v-bind:item="item"></v-bind-component> in nested component</span>'
})

var nestedComponent = new Vue({
    el: '#nested-component',
    data: {
        message: 'v-bind-component'
    }
})