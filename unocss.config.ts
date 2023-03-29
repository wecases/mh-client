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
    rules: [
        ['color', { color: '#7D71F5' }],
        ['price', { color: '#F09244' }],
        ['sale', { color: '#CCCCCC' }],
        ['text3', { color: '#333333' }],
    ],
    shortcuts: {
        'flex-start': 'flex items-center justify-start',
        'flex-center': 'flex items-center justify-center',
        'flex-between': 'flex items-center justify-between',
        'flex-around': 'flex items-center justify-around',
    }
})
