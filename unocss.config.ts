import { defineConfig, transformerDirectives } from 'unocss'
import {
    presetApplet,
    transformerApplet,
    transformerAttributify,
} from 'unocss-applet'
import presetIcons from '@unocss/preset-icons'

// https://github.com/iconify/tools
import "./bin/convert";

export default defineConfig({
    presets: [
        // https://github.com/unocss-applet/unocss-applet
        presetApplet(),
        presetIcons({
            autoInstall: false,
            collections: {
                icon: () => import('./runtime/icon.json').then(i => i.default as any),
            }
        })
    ],
    transformers: [
        // Don't change the following order
        transformerAttributify(),
        transformerApplet(),
        transformerDirectives(),
    ],
})
