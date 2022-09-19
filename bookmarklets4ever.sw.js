chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeNetRequest.setExtensionActionOptions({
		displayActionCountAsBadgeText: true,
	});
});
