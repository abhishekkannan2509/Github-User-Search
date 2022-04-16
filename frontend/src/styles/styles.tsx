import { createTheme } from "@mui/material";
import {  } from '@mui/material/colors';
export const SearchPageTheme = createTheme({
    spacing:2,
    palette:{
        primary: {main:"#ffffff"},
    },
    components: {
        
        MuiTextField:{
            variants:[
                {
                    props:{
                        variant: 'standard'
                    },
                    style:{
                        fontSize: 20,
                        fontFamily:'Fira Code',
                        fontWeight: 'bold',
                        width:'80vw',
                        background:"#1F2A48",
                        border:'4px solid #0178FD'
                    }
                ,
            
                }
            ]
        }
       , MuiTypography:
        {
            variants: [{
                props: {
                    variant: "h4"
                },
                style: {
                    fontSize: 20,
                    fontFamily: 'Fira Code',
                    fontWeight: 'bold',
                    letterSpacing: 1.0,
                    color: '#fff',
                }
            },{
                props: {
                    variant: "h1"
                },
                style: {
                    fontSize: 24,
                    fontFamily: 'Fira Code',
                    fontWeight: 'bold',
                    letterSpacing: 1.0,
                    color: '#fff',
                }
            },
            ],
        },
        MuiPaper:
        {
            variants: [{
                props: {
                    variant: "outlined"
                },
                style: {
                    backgroundColor: "#1F2A48",
                    opacity: "100%",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent:'space-evenly',
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",

                    borderRadius: "25px",
                }
            },
        ]
        },

    },
})
export const UserPageTheme = createTheme({
    palette:{
        primary: {main:"#ffffff"},
        secondary:{main:'#0178FD'}
    },
    components: {
        MuiTypography:
        {
            variants: [{
                props: {
                    variant: "h4"
                },
                style: {
                    fontSize: 24,
                    fontFamily: 'Fira Code',
                    fontWeight: 'bold',
                    letterSpacing: 1.0,
                    color: '#fff',
                }
            },
            {
                props: {
                    variant: "h5"
                },
                style: {
                    fontSize: 16,
                    fontFamily: 'Fira Code',
                    fontWeight: 'regular',
                    letterSpacing: 1.0,
                    color: '#0178FD',
                    padding: 0,
                    textAlign: 'start'
                }
            },
            {
                props: {
                    variant: "h6"
                },
                style: {
                    fontSize: 20,
                    fontFamily: 'Fira Code',
                    fontWeight: 'regular',
                    letterSpacing: 1.0,
                    color: '#fff',
                    padding: 0,
                    textAlign: 'start'
                }
            },{
                props: {
                    variant: "h1"
                },
                style: {
                    fontSize: 24,
                    fontFamily: 'Fira Code',
                    fontWeight: 'bold',
                    letterSpacing: 1.0,
                    color: '#fff',
                }
            },
            ],
        },
        MuiPaper:
        {
            variants: [{
                props: {
                    variant: "outlined"
                },
                style: {
                    backgroundColor: "#1F2A48",
                    opacity: "100%",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent:"start",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                    border:'8px solid #0178FD',

                    // boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                    // borderWidth: 5,
                    // borderColor:'#0178FD',
                    borderRadius: "25px",
                }
            },
        ]
        },
        MuiButton:
        {
            variants: [{
                props: {
                    variant: "contained"
                },
                style: {
                    fontSize: 16,
                    fontFamily: 'Fira Code',
                    fontWeight: 'light',
                    letterSpacing: 1.0,
                    color: '#fff',
                    borderRadius:'20px 0px 20px 0px',
                    padding:'10px',
                    marginBottom: '20px',
                    backgroundColor:'#0178FD',
                }
            },{
                props: {
                    variant: "outlined"
                },
                style: {
                    fontSize: 16,
                    fontFamily: 'Fira Code',
                    fontWeight: 'light',
                    letterSpacing: 1.0,
                    color: '#fff',

                                        borderRadius:'0px 20px 0px 20px',
                    padding:'10px',
                    marginBottom: '20px'
                }
            }
            ],
        },
    },
})