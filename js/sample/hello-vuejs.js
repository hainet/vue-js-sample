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