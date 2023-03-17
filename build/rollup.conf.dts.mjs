import dts from 'rollup-plugin-dts'

export default {
    input: 'tmp/index.d.ts',
    plugins: [
        dts()
    ],
    output: [
        { 
            file: "dist/index.d.ts",
            format: "es"
        }
    ],
}