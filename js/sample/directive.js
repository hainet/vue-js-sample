var vOnce = new Vue({
    el: '#v-once',
    data: {
        message: 'message'
    }
})

var vBindId = new Vue({
    el: '#v-bind-id',
    data: {
        id: '1'
    }
})

var vBindTitle = new Vue({
    el: '#v-bind-title',
    data: {
        message: new Date()
    }
})

var vBindHref = new Vue({
    el: '#v-bind-href',
    data: {
        url: 'https://jp.vuejs.org'
    }
})

var vBindDisabled = new Vue({
    el: '#v-bind-disabled',
    data: {
        disabled: false
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

var vHtml = new Vue({
    el: '#v-html',
    data: {
        rawHtml: '<b>This is raw html!</b>'
    }
})