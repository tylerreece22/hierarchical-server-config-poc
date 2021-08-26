const appConfig = require('rc')('configservice', {
    //defaults go here.
    port: 2468,

    //defaults which are objects will be merged, not replaced
    views: {
        engine: 'pug'
    }
})

console.log('--------------- rc ---------------')
console.log(appConfig)
console.log('--------------- rc ---------------')
