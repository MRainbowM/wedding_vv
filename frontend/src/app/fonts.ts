
import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'

export const denistina_font = localFont({
    src: '../../public/fonts/ofont.ru_Denistina.ttf',

    variable: '--font-denistina'
})

export const lagunac_font = localFont({
    src: '../../public/fonts/lagunac.otf',

    variable: '--font-lagunac'
})

export const lagunac_bold_font = localFont({
    src: '../../public/fonts/lagunac_bold.otf',

    variable: '--font-lagunac-bold'
})

export const montserrat_font = Montserrat({
    weight: ['400', '500'],
    subsets: ['latin', 'cyrillic'],

    variable: '--font-montserrat'
})

