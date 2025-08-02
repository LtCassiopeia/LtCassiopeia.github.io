document.querySelectorAll('.HoverableLine').forEach(line => {
	line.onmouseover = HoverBg;
	line.onmouseout = ClearHoverBg;
});
function HoverBg() {
	const CurrHoverIndx = ClothingIndices.indexOf(this.firstElementChild.firstElementChild.id);
	const CurrHoverExcld = ExclusiveWith[CurrHoverIndx];
	document.querySelectorAll('input').forEach(checkbox => {
		if (CurrHoverExcld.includes(checkbox.id)) {
			checkbox.parentElement.parentElement.style.background = "#d8d8d8";
			checkbox.parentElement.parentElement.style.color = "#888888";
		}
	});
}
function ClearHoverBg() {
	document.querySelectorAll('.HoverableLine').forEach(line => {
		line.style.background = "";
		line.style.color = "";
	});
}