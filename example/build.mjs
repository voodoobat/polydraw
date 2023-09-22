import * as esbuild from 'esbuild'

// const isDev = process.argv.includes('--dev')
const isDev = false

async function compile(options) {
    const context = await esbuild.context(options)

    if (isDev) {
        await context.watch()
    } else {
        await context.rebuild()
        await context.dispose()
    }
}

const defaultOptions = {
    define: {
        'process.env.NODE_ENV': isDev ? `'development'` : `'production'`,
    },
    bundle: true,
    mainFields: ['module', 'main'],
    platform: 'neutral',
    sourcemap: 'inline',
    sourcesContent: isDev,
    treeShaking: true,
    target: ['es2020'],
    minify: false,
    plugins: [
        {
            name: 'watchPlugin',
            setup: function (build) {
                build.onStart(() => {
                    console.log(
                        `Build started at ${new Date(
                            Date.now(),
                        ).toLocaleTimeString()}: ${
                            build.initialOptions.outfile
                        }`,
                    )
                })

                build.onEnd((result) => {
                    if (result.errors.length > 0) {
                        console.log(
                            `Build failed at ${new Date(
                                Date.now(),
                            ).toLocaleTimeString()}: ${
                                build.initialOptions.outfile
                            }`,
                            result.errors,
                        )
                    } else {
                        console.log(
                            `Build finished at ${new Date(
                                Date.now(),
                            ).toLocaleTimeString()}: ${
                                build.initialOptions.outfile
                            }`,
                        )
                    }
                })
            },
        },
    ],
}

compile({
    ...defaultOptions,
    entryPoints: ['./src/index.js'],
    outfile: './dist/index.js',
})
