/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('color.gray,300', 'currentColor'),
        'gray':'#8fbc8f',
      }),
      borderColor: theme => ({
        'gray':'#a9a9a9',
      }),
    },
    varients: {
      extend:{
        backgroundColor: ['checked'],
      },
    },
    colors:{
     'olivedrab':'#6b8e23',
     'orange':'#ffa500',
     'gray':'#a9a9a9',
     'black':'#000000',
     'seagreen':'#8fbc8f',
     'green':'#008000',
     'white':'#fffafa',
     'redish':'#b22222',
     'redish2':'#ff6347',
     'whitesmoke':'#f5f5f5',
     'lace':'#ffe4b5',
     'plumb':'#dda0dd',
     'plumb2':'#800080',
     'dogles':'#1e90ff',
     'dogles2':'#add8e6',
    },
    // screens:{
    //   'sm':'140px',
    //   'md':'768px',
    //   'lg':'1224px',
    //   'xl':'679px',
    // },

  },
  plugins: [],
}

