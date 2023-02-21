import { css } from '@mui/material/styles'

const generalCSS = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
    }

  'ol, ul': {
    listStyle: 'none',
  },
 `

export default generalCSS
