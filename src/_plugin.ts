import type { App } from 'vue'
import directive from './_directive'

const plugin = {
  install: (app: App<Element>) => {
    app.directive('prlx', directive)
  }
}

export default plugin