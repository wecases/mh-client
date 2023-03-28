import { defineConfig } from "vite";
import Uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'
import Modules from 'vite-plugin-use-modules'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [
    Uni({
      vueOptions: {
        reactivityTransform: true,
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes(' ')
          }
        }
      }
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'runtime/auto-import.d.ts',
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
        'pinia',
        'uni-app'
      ],
      dirs: [
        'src/stores',
        'src/utils',
      ],
      vueTemplate: true
    }),

    // https://github.com/dishait/vite-plugin-use-modules
    Modules({
      target: 'src/plugins'
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: 'runtime/components.d.ts',
      dirs: ['src/components'],
      directoryAsNamespace: true,
      resolvers: [VantResolver()],
    }),

    // https://github.com/unocss/unocss
    UnoCSS(),
  ],
});
