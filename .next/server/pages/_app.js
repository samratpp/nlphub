"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/theme/index.jsx

const styles = {
    global: {
        "html, body": {
            fontSize: "18px"
        }
    }
};
const fonts = {
    heading: "Poppins, -apple-system",
    body: "Poppins, -apple-system"
};
const theme = (0,react_.extendTheme)({
    styles,
    fonts
});
/* harmony default export */ const src_theme = (theme);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(3346);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./src/components/header/navbar.jsx





const Links = (/* unused pure expression or super */ null && ([
    "Dashboard",
    "Projects",
    "Team"
]));
const Navbar = ()=>{
    const { colorMode , toggleColorMode  } = (0,react_.useColorMode)();
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            bg: (0,react_.useColorModeValue)("gray.100", "gray.900"),
            px: 4,
            position: "fixed",
            w: "100%",
            zIndex: 9,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    h: 16,
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            size: "md",
                            icon: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.CloseIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.HamburgerIcon, {}),
                            "aria-label": "Open Menu",
                            display: {
                                md: "none"
                            },
                            onClick: isOpen ? onClose : onOpen
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                            spacing: 8,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                        alt: "Logo",
                                        width: "50",
                                        height: "50",
                                        src: "/logo.png"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    as: "nav",
                                    spacing: 4,
                                    display: {
                                        base: "none",
                                        md: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                px: 2,
                                                py: 1,
                                                rounded: "md",
                                                _hover: {
                                                    textDecoration: "none",
                                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                                },
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            px: 2,
                                            py: 1,
                                            rounded: "md",
                                            _hover: {
                                                textDecoration: "none",
                                                bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                            },
                                            href: "#",
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            px: 2,
                                            py: 1,
                                            rounded: "md",
                                            _hover: {
                                                textDecoration: "none",
                                                bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                            },
                                            href: "#",
                                            children: "Projects"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            px: 2,
                                            py: 1,
                                            rounded: "md",
                                            _hover: {
                                                textDecoration: "none",
                                                bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                            },
                                            href: "#",
                                            children: "Learn"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            px: 2,
                                            py: 1,
                                            rounded: "md",
                                            _hover: {
                                                textDecoration: "none",
                                                bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                            },
                                            href: "#",
                                            children: "Resources"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                px: 2,
                                                py: 1,
                                                rounded: "md",
                                                _hover: {
                                                    textDecoration: "none",
                                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                                },
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            alignItems: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                onClick: toggleColorMode,
                                children: colorMode === "light" ? /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.MoonIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.SunIcon, {})
                            })
                        })
                    ]
                }),
                isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    pb: 4,
                    display: {
                        md: "none"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        as: "nav",
                        spacing: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                px: 2,
                                py: 1,
                                rounded: "md",
                                _hover: {
                                    textDecoration: "none",
                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                },
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                px: 2,
                                py: 1,
                                rounded: "md",
                                _hover: {
                                    textDecoration: "none",
                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                },
                                href: "#",
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                px: 2,
                                py: 1,
                                rounded: "md",
                                _hover: {
                                    textDecoration: "none",
                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                },
                                href: "#",
                                children: "Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                px: 2,
                                py: 1,
                                rounded: "md",
                                _hover: {
                                    textDecoration: "none",
                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                },
                                href: "#",
                                children: "Learn"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                px: 2,
                                py: 1,
                                rounded: "md",
                                _hover: {
                                    textDecoration: "none",
                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                },
                                href: "#",
                                children: "Resources"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                px: 2,
                                py: 1,
                                rounded: "md",
                                _hover: {
                                    textDecoration: "none",
                                    bg: (0,react_.useColorModeValue)("gray.200", "gray.700")
                                },
                                href: "/contact",
                                children: "Contact"
                            })
                        ]
                    })
                }) : null
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/header/index.jsx


const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(navbar, {});
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: ./src/components/footer.jsx





function LargeWithNewsletter() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        mt: 10,
        color: (0,react_.useColorModeValue)("gray.700", "gray.200"),
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            as: react_.Stack,
            maxW: "6xl",
            py: 10,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                templateColumns: {
                    sm: "1fr 1fr",
                    md: "2fr 1fr 1fr 2fr"
                },
                spacing: 8,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        spacing: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                    alt: "Logo",
                                    width: "50",
                                    height: "50",
                                    src: "/logo.png"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "sm",
                                children: "\xa9 2022 NLP Hub. All rights reserved"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                direction: "row",
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.chakra.button, {
                                        bg: (0,react_.useColorModeValue)("blackAlpha.100", "whiteAlpha.100"),
                                        rounded: "full",
                                        w: 8,
                                        h: 8,
                                        cursor: "pointer",
                                        as: "a",
                                        href: "#",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "background 0.3s ease",
                                        _hover: {
                                            bg: (0,react_.useColorModeValue)("blackAlpha.200", "whiteAlpha.200")
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                                                children: "Twitter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTwitter, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.chakra.button, {
                                        bg: (0,react_.useColorModeValue)("blackAlpha.100", "whiteAlpha.100"),
                                        rounded: "full",
                                        w: 8,
                                        h: 8,
                                        cursor: "pointer",
                                        as: "a",
                                        href: "#",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "background 0.3s ease",
                                        _hover: {
                                            bg: (0,react_.useColorModeValue)("blackAlpha.200", "whiteAlpha.200")
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                                                children: "Instagram"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaInstagram, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        align: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "500",
                                fontSize: "lg",
                                mb: 2,
                                children: "Company"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "About us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "Blog"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "Contact us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "Donate"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "Privacy Policy"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        align: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "500",
                                fontSize: "lg",
                                mb: 2,
                                children: "Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "AI"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "Data Science"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "History"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "NLP"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        align: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "500",
                                fontSize: "lg",
                                mb: 2,
                                children: "Stay conntected"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "info@nlphub.org"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "#",
                                children: "+977 9812121121"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                direction: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                        placeholder: "Your email address",
                                        bg: (0,react_.useColorModeValue)("blackAlpha.100", "whiteAlpha.100"),
                                        border: 0,
                                        _focus: {
                                            bg: "whiteAlpha.300"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                        bg: (0,react_.useColorModeValue)("blue.400", "blue.800"),
                                        color: (0,react_.useColorModeValue)("white", "gray.800"),
                                        _hover: {
                                            bg: "blue.600"
                                        },
                                        "aria-label": "Subscribe",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiMailSend, {})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/layouts/global.jsx





const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "main",
                maxW: config/* MAX_WIDTH */.d,
                mx: "auto",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LargeWithNewsletter, {})
        ]
    })
;
/* harmony default export */ const global = (Layout);

;// CONCATENATED MODULE: ./next-seo.config.js

/* harmony default export */ const next_seo_config = ({
    titleTemplate: `%s | ${config/* seo.title */.$K.title}`,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: config/* seo.canonical */.$K.canonical,
        site_name: config/* seo.title */.$K.title
    }
});

;// CONCATENATED MODULE: ./src/pages/_app.jsx











const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                ...next_seo_config
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                theme: src_theme,
                children: /*#__PURE__*/ jsx_runtime_.jsx(global, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    })
;
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,346], () => (__webpack_exec__(9401)));
module.exports = __webpack_exports__;

})();