# vue3-prlx
  
This repository is a fork of [vue-prlx](https://github.com/gerasimvol/vue-prlx) that has been rewritten in TypeScript and made compatible with Vue 3.  
  
### 🛠 Install

```bash
npm i hideki0403/vue3-prlx
```

```bash
yarn add hideki0403/vue3-prlx
```

```bash
pnpm i hideki0403/vue3-prlx
```


### 🔌 Initialization

#### ES2015 (Webpack/Rollup/Browserify/etc)

```javascript
// As a plugin
import VuePrlx from 'vue3-prlx'
app.use(VuePrlx)

// Or as a directive
import { VuePrlxDirective } from 'vue3-prlx'
app.directive('prlx', VuePrlxDirective)
```

#### UMD (Browser)

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hideki0403/vue3-prlx@latest/dist/v-prlx.min.js"></script>
<script>
// As a plugin
app.use(VuePrlx.VuePrlxPlugin)

// Or as a directive
app.directive('prlx', VuePrlx.VuePrlxDirective)
</script>
```

### ⚙️ [Demo and settings](http://vue-prlx.surge.sh)
