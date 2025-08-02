document.querySelectorAll('input').forEach(checkbox => {
	checkbox.onchange = Update;
});
function Update() {
	UpdateOutfitCode();
	if (this.checked) {
		DisableExclusives(this);
	} else {
		ClearDisabled(this);
	}
}

function UpdateOutfitCode() {
	let Selected = "";
	let TwitchSafe = "";
	document.querySelectorAll('input').forEach(checkbox => {
		if (checkbox.checked) {
			Selected = Selected + checkbox.id;
			TwitchSafe = TwitchSafe + CoversBodyPart[ClothingIndices.indexOf(checkbox.id)]
		}
	});
	if (!TwitchSafe.includes("Top")) {
		document.getElementById("OutfitCode").value = "Not TwitchSafe, Add Top";
	} else if (!TwitchSafe.includes("Btm")) {
		document.getElementById("OutfitCode").value = "Not TwitchSafe, Add Bottoms";
	} else {
		document.getElementById("OutfitCode").value = Selected;
	}
}
function DisableExclusives(x) {
	const DisableIndx = ClothingIndices.indexOf(x.id);
	const DisableExcld = ExclusiveWith[DisableIndx];
	document.querySelectorAll('input').forEach(checkbox => {
		if (DisableExcld.includes(checkbox.id)) {
			checkbox.parentElement.parentElement.classList.add("disabled");
			checkbox.disabled = true;
		}
	});
}
function ClearDisabled(x) {
	const DisableIndx = ClothingIndices.indexOf(x.id);
	const DisableExcld = ExclusiveWith[DisableIndx];
	document.querySelectorAll('input').forEach(checkbox => {
		if (DisableExcld.includes(checkbox.id)) {
			checkbox.parentElement.parentElement.classList.remove("disabled");
			checkbox.disabled = false;
		}
	});
}