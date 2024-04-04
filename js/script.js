const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})


///Dard Mode///
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


// BTC WebSocket
const btcWS = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let btcPrice = 0;
let btcOldPrice = 0;

btcWS.onmessage = (event) => {
    const data = JSON.parse(event.data);
    btcPrice = parseFloat(data.p).toFixed(2);

    let btcPercentChange = 0;
    if (btcOldPrice !== 0) {
        btcPercentChange = ((btcPrice - btcPrice) / btcPrice) * 100;
    }

    // Update the existing display elements
    const btcTrade = document.getElementById('btcTrade');
    btcTrade.innerText = btcPrice;

    const btcPercentChangeElement = document.getElementById('btcPercentChange');
    btcPercentChangeElement.innerText = btcPercentChange.toFixed(2) + '%'; 
    btcStyleChange(btcPercentChangeElement, btcPercentChange);

    // Update the new display elements
    const btcPriceDisplay = document.getElementById('btcPriceDisplay'); 
    const btcChangeDisplay = document.getElementById('btcChangeDisplay');
    btcPriceDisplay.innerText = btcPrice; 
    btcChangeDisplay.innerText = btcPercentChange.toFixed(2) + '%'; 
    btcStyleChange(btcChangeDisplay, btcPercentChange); 

    btcPrice = btcPrice; 
}

// Helper function for styling 
function btcStyleChange(element, percentChange) {
    if (percentChange > 0) {
        element.classList.add('green'); 
    } else if (percentChange < 0) {
        element.classList.add('red'); 
    } else { 
        element.classList.remove('green', 'red'); 
    }
}

// BNB WebSocket 
const bnbWS = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let bnbPrice = 0;
let bnbOldPrice = 0;

bnbWS.onmessage = (event) => {
    const data = JSON.parse(event.data);
    bnbPrice = parseFloat(data.p).toFixed(2);

    let bnbPercentChange = 0;
    if (bnbOldPrice !== 0) {
        bnbPercentChange = ((bnbPrice - bnbOldPrice) / bnbOldPrice) * 100;
    }

    // Update the existing display elements
    const bnbTrade = document.getElementById('bnbTrade');
    bnbTrade.innerText = bnbPrice;

    const bnbPercentChangeElement = document.getElementById('bnbPercentChange');
    bnbPercentChangeElement.innerText = bnbPercentChange.toFixed(2) + '%'; 
    bnbStyleChange(bnbPercentChangeElement, bnbPercentChange);

    // Update the new display elements
    const bnbPriceDisplay = document.getElementById('bnbPriceDisplay'); 
    const bnbChangeDisplay = document.getElementById('bnbChangeDisplay');
    bnbPriceDisplay.innerText = bnbPrice; 
    bnbChangeDisplay.innerText = bnbPercentChange.toFixed(2) + '%'; 
    bnbStyleChange(bnbChangeDisplay, bnbPercentChange); 

    bnbOldPrice = bnbPrice; 
}

// Helper function for styling 
function bnbStyleChange(element, percentChange) {
    if (percentChange > 0) {
        element.classList.add('green'); 
    } else if (percentChange < 0) {
        element.classList.add('red'); 
    } else { 
        element.classList.remove('green', 'red'); 
    }
}


//ETH///
const ethWS = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ethPrice = 0;
let ethOldPrice = 0;

ethWS.onmessage = (event) => {
    const data = JSON.parse(event.data);
    ethPrice = parseFloat(data.p).toFixed(2);

    let ethPercentChange = 0;
    if (ethOldPrice !== 0) {
        ethPercentChange = ((ethPrice - ethOldPrice) / ethOldPrice) * 100;
    }

    // Update the existing display elements
    const ethTrade = document.getElementById('ethTrade');
    ethTrade.innerText = ethPrice;

    const ethPercentChangeElement = document.getElementById('ethPercentChange');
    ethPercentChangeElement.innerText = ethPercentChange.toFixed(2) + '%'; 
    ethStyleChange(ethPercentChangeElement, ethPercentChange);

    // Update the new display elements
    const ethPriceDisplay = document.getElementById('ethPriceDisplay'); 
    const ethChangeDisplay = document.getElementById('ethChangeDisplay');
    ethPriceDisplay.innerText = ethPrice; 
    ethChangeDisplay.innerText = ethPercentChange.toFixed(2) + '%'; 
    ethStyleChange(ethChangeDisplay, ethPercentChange); 

    ethOldPrice = ethPrice; 
}

// Helper function for styling 
function ethStyleChange(element, percentChange) {
    if (percentChange > 0) {
        element.classList.add('green'); 
    } else if (percentChange < 0) {
        element.classList.add('red'); 
    } else { 
        element.classList.remove('green', 'red'); 
    }
}

//SOL//
const solWS = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let solPrice = 0;
let solOldPrice = 0;

solWS.onmessage = (event) => {
    const data = JSON.parse(event.data);
    solPrice = parseFloat(data.p).toFixed(2);

    let solPercentChange = 0;
    if (solOldPrice !== 0) {
        solPercentChange = ((solPrice - solOldPrice) / solOldPrice) * 100;
    }

    // Update the existing display elements
    const solTrade = document.getElementById('solTrade');
    solTrade.innerText = solPrice;

    const solPercentChangeElement = document.getElementById('solPercentChange');
    solPercentChangeElement.innerText = solPercentChange.toFixed(2) + '%'; 
    solStyleChange(solPercentChangeElement, solPercentChange);

    // Update the new display elements
    const solPriceDisplay = document.getElementById('solPriceDisplay'); 
    const solChangeDisplay = document.getElementById('solChangeDisplay');
    solPriceDisplay.innerText = solPrice; 
    solChangeDisplay.innerText = solPercentChange.toFixed(2) + '%'; 
    solStyleChange(solChangeDisplay, solPercentChange); 

    solOldPrice = solPrice; 
}

// Helper function for styling 
function solStyleChange(element, percentChange) {
    if (percentChange > 0) {
        element.classList.add('green'); 
    } else if (percentChange < 0) {
        element.classList.add('red'); 
    } else { 
        element.classList.remove('green', 'red'); 
    }
}

//DOGE//
const dogeWS = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let dogePrice = 0;
let dogeOldPrice = 0;

dogeWS.onmessage = (event) => {
    const data = JSON.parse(event.data);
    dogePrice = parseFloat(data.p).toFixed(2);

    let dogePercentChange = 0;
    if (dogeOldPrice !== 0) {
        dogePercentChange = ((dogePrice - dogeOldPrice) / dogeOldPrice) * 100;
    }

    // Update the existing display elements
    const dogeTrade = document.getElementById('dogeTrade');
    dogeTrade.innerText = dogePrice;

    const dogePercentChangeElement = document.getElementById('dogePercentChange');
    dogePercentChangeElement.innerText = dogePercentChange.toFixed(2) + '%'; 
    dogeStyleChange(dogePercentChangeElement, dogePercentChange);

    // Update the new display elements
    const dogePriceDisplay = document.getElementById('dogePriceDisplay'); 
    const dogeChangeDisplay = document.getElementById('dogeChangeDisplay');
    dogePriceDisplay.innerText = dogePrice; 
    dogeChangeDisplay.innerText = dogePercentChange.toFixed(2) + '%'; 
    dogeStyleChange(dogeChangeDisplay, dogePercentChange); 

    dogeOldPrice = dogePrice; 
}

// Helper function for styling 
function dogeStyleChange(element, percentChange) {
    if (percentChange > 0) {
        element.classList.add('green'); 
    } else if (percentChange < 0) {
        element.classList.add('red'); 
    } else { 
        element.classList.remove('green', 'red'); 
    }
}


// XRP WebSocket
const xrpWS = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let xrpPrice = 0;
let xrpOldPrice = 0;

xrpWS.onmessage = (event) => {
    const data = JSON.parse(event.data);
    xrpPrice = parseFloat(data.p).toFixed(2);

    let xrpPercentChange = 0;
    if (xrpOldPrice !== 0) {
        xrpPercentChange = ((xrpPrice - xrpPrice) / xrpPrice) * 100;
    }

    // Update the existing display elements
    const xrpTrade = document.getElementById('xrpTrade');
    xrpTrade.innerText = xrpPrice;

    const xrpPercentChangeElement = document.getElementById('xrpPercentChange');
    xrpPercentChangeElement.innerText = xrpPercentChange.toFixed(2) + '%'; 
    xrpStyleChange(xrpPercentChangeElement, xrpPercentChange);

    // Update the new display elements
    const xrpPriceDisplay = document.getElementById('xrpPriceDisplay'); 
    const xrpChangeDisplay = document.getElementById('xrpChangeDisplay');
    xrpPriceDisplay.innerText = xrpPrice; 
    xrpChangeDisplay.innerText = xrpPercentChange.toFixed(2) + '%'; 
    xrpStyleChange(xrpChangeDisplay, xrpPercentChange); 

    xrpPrice = xrpPrice; 
}

// Helper function for styling 
function xrpStyleChange(element, percentChange) {
    if (percentChange > 0) {
        element.classList.add('green'); 
    } else if (percentChange < 0) {
        element.classList.add('red'); 
    } else { 
        element.classList.remove('green', 'red'); 
    }
}

