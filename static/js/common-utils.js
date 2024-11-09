class CommonUtils {
	static selectWait(selector, func, times = 100, interval = 500) {
		let _jquery;
		const _iIntervalID = setInterval(() => {
			if (!times) {
				clearInterval(_iIntervalID);
				return;
			}
			times--;
			_jquery = $(selector);
			if (_jquery.length) {
				typeof func === 'function' && func();
				clearInterval(_iIntervalID);
			}
		}, interval);
		return this;
	}

	static selectNotWait(selector, func, interval = 20) {
		const _iIntervalID = setInterval(() => {
			if ($(selector).length < 1) {
				typeof func === 'function' && func();
				clearInterval(_iIntervalID);
			}
		}, interval);
	}

	static copyText(value, cb) {
		const textarea = document.createElement("textarea");
		Object.assign(textarea, {
			readOnly: true,
			value,
			style: {
				position: "absolute",
				left: "-9999px"
			}
		});
		
		document.body.appendChild(textarea);
		textarea.select();
		textarea.setSelectionRange(0, textarea.value.length);
		document.execCommand("Copy");
		document.body.removeChild(textarea);
		
		typeof cb === 'function' && cb();
	}

	static sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
