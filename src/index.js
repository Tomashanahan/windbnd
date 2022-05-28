import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./Redux/Store/index";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
	sm: "320px",
	ms: '688px',
	md: "768px",
	ml: "798px",
	lg: "960px",
	xl: "1200px",
	"2xl": "1536px",
};

// 3. Extend the theme
// const theme = extendTheme({ breakpoints })

const theme = extendTheme({
	fonts: {
		heading: `'Montserrat', sans-serif`,
		body: `'Montserrat', sans-serif`,
	},
	breakpoints,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
