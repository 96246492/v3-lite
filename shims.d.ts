/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'

    const component: DefineComponent<object, object, any>
    export default component
}
