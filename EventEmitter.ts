
class EventEmitter {
    constructor() {
        this.events = {}
    }
    addEventListener(eventName, func) {
        if (!typeof func !== 'function') {
            throw new Error('Cлушатель события должен быть функцией')
        }
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(func)
    }
     removeEventListener(eventName, func){
         if (!this.events[eventName]) {
             throw new Error('Такого события нет в системе')
         }
         this.events[eventName].filter(publishFunc => publishFunc !== func)
     }
     on(eventName,func){
         this.addEventListener(eventName,func)
     }
     off(eventName,func){
         this.removeEventListener(eventName,func)
     }
     once(eventName,func){
        const wrappedFunc = () => {
            func()
            this.removeEventListener(eventName,func)
        }
         this.on(eventName,wrappedFunc)
     }

}