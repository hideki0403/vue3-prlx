import type { Plugin } from 'vue'
import directive from './_directive'

const plugin: Plugin = {
  install: (app) => {
    app.directive('prlx', directive)
  }
}

export default plugin