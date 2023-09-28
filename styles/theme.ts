import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sm: '576px',
    md: '769px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
};

const customTheme = extendTheme({
    breakpoints,
    components: {
        Text: {
            variants: {
              description: {
                fontSize: ['0.8rem', '0.9rem', '1rem'],
              },
              footer: {
                fontSize: ['0.8rem', '0.9rem'],
                fontWeight: 500
              },
            }
        },
        Heading: {
          variants: {
            cardTitle: {
              fontSize: ['1rem', '1.2rem','1.2rem']
            }
          }
        }
    }
})

export default customTheme;