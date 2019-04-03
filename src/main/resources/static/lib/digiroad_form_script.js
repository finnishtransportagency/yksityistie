
	// original starts from 1, first dynamically created is 2
	var tiedotOikeinId = 2;
	// adding roads to Tiekunnan tiedot ovat oikein
	$(document).on("click", ".tiedot_oikein_lisaa_tie", function(e) {
		e.preventDefault();

		document.getElementById('addRoad').disabled = true;

		var lisatytTiet = document.getElementsByClassName('tiedot_oikein_lisatyt_tiet')[0];

	  var uusiTieRow = document.createElement('div');
	  uusiTieRow.className = "row mb-3";

	  var uusiTieCol = document.createElement('div');
	  uusiTieCol.className = "col";

		var uusiTieControl = document.createElement('div');
		uusiTieControl.className = "input-group"

		var uusiTieLabel = document.createElement('label');
		uusiTieLabel.setAttribute("id", "InfoOkRoadName" + tiedotOikeinId);
		uusiTieLabel.setAttribute("for", "tiedot_oikein_tien_nimi_" + tiedotOikeinId);
		uusiTieLabel.setAttribute("class", "InfoOkRoadName");
		uusiTieLabel.innerHTML = i18next.t('InfoOkRoadName');

	  var input = document.createElement("input");
	  input.type = "text";
		input.classList.add("form-control");
		input.classList.add("tiedot_oikein_tien_nimi");
		input.placeholder = i18next.t('emptyRoad');
		input.setAttribute("aria-describedby", "button-addon_" + tiedotOikeinId);
	  input.setAttribute("id", "tiedot_oikein_tien_nimi_" + tiedotOikeinId);
		input.setAttribute("name", "tiedot_oikein_tien_nimi_" + tiedotOikeinId);
		input.setAttribute("onkeyup", "validateTiedotOikeinRoadButton('tiedot_oikein_tien_nimi_" + tiedotOikeinId + "')");
		input.setAttribute("required", "true");

		var inputAppend = document.createElement('div');
		inputAppend.className = "input-group-append";

		// remove road button
	  var removeButton = document.createElement("button");
	  removeButton.className = "btn btn-danger infoOkRemoveButton";
		removeButton.setAttribute("id", "button-addon_" + tiedotOikeinId);
	  removeButton.innerHTML = i18next.t('deleteRoad');

		// button functionality
		removeButton.onclick = function(e) {
			uusiTieRow.remove();
			if(input.value==="") {
				document.getElementById('addRoad').disabled = false;
			}
		}

	  //appending children
	  inputAppend.appendChild(removeButton);
		uusiTieControl.appendChild(input);
		uusiTieControl.appendChild(inputAppend);
		uusiTieCol.appendChild(uusiTieLabel);
		uusiTieCol.appendChild(uusiTieControl);
		uusiTieRow.appendChild(uusiTieCol);

	  lisatytTiet.appendChild(uusiTieRow);
	  tiedotOikeinId++;
	});


	// original starts from 1, first dynamically created is 2
	var ilmoitaTiedotId = 2;
	// adding roads to ilmoita tiekunnan tiedot
	$(document).on("click", ".ilmoita_tiedot_lisaa_tie", function(e) {
		e.preventDefault();

		document.getElementById('notifyInfoAddRoad').disabled = true;

		var lisatytTiet = document.getElementsByClassName('ilmoita_tiedot_lisatyt_tiet')[0];

		//container for all elements
		var ilmoitaTiedotContainer = document.createElement('div');
		ilmoitaTiedotContainer.className="card mb-3 mt-5 bg-light";

			var fieldset = document.createElement('fieldset');
			fieldset.className="card-body";

				// Tien nimi: row, col, label, input
				var tienNimiRow = document.createElement('div');
			  tienNimiRow.className = "row mb-3";

					var tienNimiCol = document.createElement('div');
				  tienNimiCol.className = "col";

						var tienNimiLabel = document.createElement('label');
						tienNimiLabel.setAttribute("class", "notifyInfoRoadsName");
					  tienNimiLabel.innerHTML = i18next.t('notifyInfoRoadsName');

						var tienNimiInput = document.createElement("input");
					  tienNimiInput.type = "text";
						tienNimiInput.setAttribute("required", "true");
					  tienNimiInput.setAttribute("id", "ilmoita_tiedot_tien_nimi_" + ilmoitaTiedotId);
						tienNimiInput.setAttribute("name", "ilmoita_tiedot_tien_nimi_" + ilmoitaTiedotId);
						tienNimiInput.className += " ilmoita_tiedot_tien_nimi";
						tienNimiInput.setAttribute("onkeyup", "validateIlmoitaTiedotRoadButton()");
						tienNimiInput.placeholder = i18next.t('emptyRoad');
						tienNimiInput.className += " form-control";

					  tienNimiCol.appendChild(tienNimiLabel);
					  tienNimiCol.appendChild(tienNimiInput);
				  tienNimiRow.appendChild(tienNimiCol);
				fieldset.appendChild(tienNimiRow);


			  //tierajoitukset container
			  var tierajoituksetContainer = document.createElement('div');
			  tierajoituksetContainer.className = "tierajoitukset_container_" + ilmoitaTiedotId;

			  // Tiellä ei ole rajoituksia tai kieltoja checkbox
				var rajoituksetRow = document.createElement('div');
				rajoituksetRow.className = "row mb-3";

					var rajoituksetCol = document.createElement('div');
					rajoituksetCol.className = "col";

					var rajoituksetControl = document.createElement('div');
					rajoituksetControl.className = "custom-control custom-checkbox";

						var rajoituksetLabel = document.createElement('label');
					  rajoituksetLabel.innerHTML = i18next.t('notifyInfoRestrictions');
					  rajoituksetLabel.className = "custom-control-label notifyInfoRestrictions";
						rajoituksetLabel.setAttribute("for", "tierajoitukset_checkbox_" + ilmoitaTiedotId);

						var rajoituksetCheckbox = document.createElement('input');
					  rajoituksetCheckbox.type = 'checkbox';
					  rajoituksetCheckbox.className = "custom-control-input";
						rajoituksetCheckbox.setAttribute("id", "tierajoitukset_checkbox_" + ilmoitaTiedotId);
						rajoituksetCheckbox.onclick = function() {
							tierajoituksetContainer.hidden = rajoituksetCheckbox.checked;
							if (tierajoituksetContainer.hidden) {
								resetFields(tierajoituksetContainer);
							}
						};


						rajoituksetControl.appendChild(rajoituksetCheckbox);
						rajoituksetControl.appendChild(rajoituksetLabel);


						rajoituksetCol.appendChild(rajoituksetControl);
					rajoituksetRow.appendChild(rajoituksetCol);
				fieldset.appendChild(rajoituksetRow);



			  // Painorajoitus kg
				var painoRow = document.createElement('div');
				painoRow.className = "row mb-3";

				  var painoCol = document.createElement('div');
				  painoCol.className = "col";

					  var painoLabel = document.createElement('label');
					  painoLabel.innerHTML = i18next.t('notifyInfoWeightRestriction');
						painoLabel.setAttribute("class", "notifyInfoWeightRestriction");
						painoCol.appendChild(painoLabel);


					  var painoInput = document.createElement('input');
					  painoInput.type = "number";
					  painoInput.setAttribute("id", "ilmoita_tiedot_painorajoitus_" + ilmoitaTiedotId + "");
						painoInput.setAttribute("name", "ilmoita_tiedot_painorajoitus_" + ilmoitaTiedotId + "");
						painoInput.className="form-control";
						painoCol.appendChild(painoInput);

					painoRow.appendChild(painoCol);

				tierajoituksetContainer.appendChild(painoRow);



			  // Painorajoituksen lisäkilvet
			  var kilvetRow = document.createElement('div');
				kilvetRow.className = "row mb-3";

				  var kilvetCol = document.createElement('div');
				  kilvetCol.className = "col";

					  var kilvetLabel = document.createElement('label');
					  kilvetLabel.innerHTML = i18next.t('notifyInfoWeightSign');
						kilvetLabel.setAttribute("class", "notifyInfoWeightSign");
						kilvetCol.appendChild(kilvetLabel);

					  var kilvetInput = document.createElement('input');
					  kilvetInput.type = "text";
					  kilvetInput.setAttribute("id", "ilmoita_tiedot_lisakilvet_" + ilmoitaTiedotId + "");
						kilvetInput.setAttribute("name", "ilmoita_tiedot_lisakilvet_" + ilmoitaTiedotId + "");
						kilvetInput.className="form-control";
						kilvetCol.appendChild(kilvetInput);

					kilvetRow.appendChild(kilvetCol);

				tierajoituksetContainer.appendChild(kilvetRow);

				// divider above kelirikko container
				var upperHr = document.createElement('hr');
				upperHr.className = "mb-5 mt-5";
				tierajoituksetContainer.appendChild(upperHr);


				// hideable container for kelirikko, controlled by kelirikkoCheckbox
				var kelirikkoContainer = document.createElement('div');
				kelirikkoContainer.setAttribute("id", "kelirikko_container_" + ilmoitaTiedotId);

				var kelirikkoCheckboxRow = document.createElement('div');
				kelirikkoCheckboxRow.className = "row mb-3";

					var kelirikkoCheckboxCol = document.createElement('div');
					kelirikkoCheckboxCol.className = "col";

						var kelirikkoCheckboxContainer = document.createElement('div');
						kelirikkoCheckboxContainer.className = "custom-control custom-checkbox";

							var kelirikkoCheckboxLabel = document.createElement('label');
							kelirikkoCheckboxLabel.innerHTML = i18next.t('notifyInfoFrequentFrostHeave');
							kelirikkoCheckboxLabel.className = "custom-control-label notifyInfoFrequentFrostHeave";
							kelirikkoCheckboxLabel.setAttribute("for", "kelirikko_checkbox_" + ilmoitaTiedotId);

							var kelirikkoCheckbox = document.createElement('input');
							kelirikkoCheckbox.type = "checkbox";
							kelirikkoCheckbox.className = "custom-control-input";
							kelirikkoCheckbox.setAttribute("checked", "true");
							kelirikkoCheckbox.default = kelirikkoCheckbox.checked;
							kelirikkoCheckbox.setAttribute("id", "kelirikko_checkbox_" + ilmoitaTiedotId);

							kelirikkoCheckboxContainer.appendChild(kelirikkoCheckbox);
							kelirikkoCheckboxContainer.appendChild(kelirikkoCheckboxLabel);

							kelirikkoCheckboxCol.appendChild(kelirikkoCheckboxContainer);
							kelirikkoCheckboxRow.appendChild(kelirikkoCheckboxCol);

							tierajoituksetContainer.appendChild(kelirikkoCheckboxRow);


				// Kelirikon aikainen painorajoitus (kg)
				var kelirikkoRow = document.createElement('div');
				kelirikkoRow.className = "row mb-3";

					var kelirikkoCol = document.createElement('div');
					kelirikkoCol.className = "col";

						var kelirikkoLabel = document.createElement('label');
						kelirikkoLabel.innerHTML = i18next.t('notifyInfoFrostHeaveWeightRestriction');
						kelirikkoLabel.className = "notifyInfoFrostHeaveWeightRestriction";
						kelirikkoCol.appendChild(kelirikkoLabel);

						var kelirikkoInput = document.createElement('input');
						kelirikkoInput.type = "number";
						kelirikkoInput.setAttribute("id", "ilmoita_tiedot_kelirikonPainoRaja_" + ilmoitaTiedotId + "");
						kelirikkoInput.setAttribute("name", "ilmoita_tiedot_kelirikonPainoRaja_" + ilmoitaTiedotId + "");
						kelirikkoInput.className="form-control";
						kelirikkoCol.appendChild(kelirikkoInput);

					kelirikkoRow.appendChild(kelirikkoCol);

				kelirikkoContainer.appendChild(kelirikkoRow);


			  // Arvio kelirikon tilapäisestä tai toistuvasta voimassaoloajasta
			  var voimassaoloRow = document.createElement('div');
				voimassaoloRow.className = "row mb-3";

				  var voimassaoloCol = document.createElement('div');
				  voimassaoloCol.className = "col";

					  var voimassaoloLabel = document.createElement('label');
					  voimassaoloLabel.innerHTML = i18next.t('notifyInfoFrostHeaveValidity');
					  voimassaoloLabel.className = "notifyInfoFrostHeaveValidity";
						voimassaoloCol.appendChild(voimassaoloLabel);

						var voimassaoloDateRow = document.createElement('div');
						voimassaoloDateRow.className = "row mb-3";

							var voimassaoloDateCol1 = document.createElement('div');
							voimassaoloDateCol1.className = "col";

							  var voimassaoloInput1 = document.createElement('input');
							  voimassaoloInput1.type = "text";
							  voimassaoloInput1.setAttribute("id", "voimassaoloStart");
								voimassaoloInput1.setAttribute("name", "ilmoita_tiedot_kelirikonVoimassaoloAika_start_" + ilmoitaTiedotId + "");
								voimassaoloInput1.setAttribute("placeholder", i18next.t('begins'));
								voimassaoloInput1.setAttribute("autocomplete", "off");
								voimassaoloInput1.className="form-control notifyInfoStartDate";
								voimassaoloDateCol1.appendChild(voimassaoloInput1);

							voimassaoloDateRow.appendChild(voimassaoloDateCol1);

							// Kalenterivalikko (Alkaa) Arvio kelirikon tilapäisestä tai toistuvasta voimassaoloajasta
							var startPicker = new Pikaday({
										field: voimassaoloInput1,
										i18n: i18nDate,
										weekStartsOn: '1',
										firstDay: 1,
										minDate: new Date(2019, 0, 1),
										maxDate: null,
										format: 'DD.MM.YYYY',
										onSelect: function() {
												startDate = this.getDate();
												updateStartDate();
										}
								})

								var startDate, endDate, updateStartDate = function() {
											startPicker.setStartRange(startDate);
											endPicker.setStartRange(startDate);
											endPicker.setMinDate(startDate);
									}

								_startDate = startPicker.getDate()

								if (_startDate) {
										startDate = _startDate;
										updateStartDate();
								}



							var voimassaoloDateCol2 = document.createElement('div');
							voimassaoloDateCol2.className = "col";

								var voimassaoloInput2 = document.createElement('input');
								voimassaoloInput2.type = "text";
								voimassaoloInput2.setAttribute("id", "voimassaoloEnd");
								voimassaoloInput2.setAttribute("name", "ilmoita_tiedot_kelirikonVoimassaoloAika_end" + ilmoitaTiedotId + "");
								voimassaoloInput2.setAttribute("placeholder", i18next.t('ends'));
								voimassaoloInput2.setAttribute("autocomplete", "off");
								voimassaoloInput2.className="form-control notifyInfoEndDate";
								voimassaoloDateCol2.appendChild(voimassaoloInput2);

							voimassaoloDateRow.appendChild(voimassaoloDateCol2);


							// Kalenterivalikko (Paattyy) Arvio kelirikon tilapäisestä tai toistuvasta voimassaoloajasta
							var	endPicker = new Pikaday({
										field: voimassaoloInput2,
										i18n: i18nDate,
										weekStartsOn: '1',
										firstDay: 1,
										minDate: new Date(2019, 0, 1),
								    maxDate: null,
										format: 'DD.MM.YYYY',
										onSelect: function() {
												endDate = this.getDate();
												updateEndDate();
										}
								})

								var updateEndDate = function() {
											startPicker.setEndRange(endDate);
											startPicker.setMaxDate(endDate);
											endPicker.setEndRange(endDate);
									}

								_endDate = endPicker.getDate();

								if (_endDate) {
										endDate = _endDate;
										updateEndDate();
								}


						voimassaoloCol.appendChild(voimassaoloDateRow);

					voimassaoloRow.appendChild(voimassaoloCol);

				kelirikkoContainer.appendChild(voimassaoloRow);

				// hiding the kelirikkoContainer resets the dates
				kelirikkoCheckbox.onclick = function() {
					kelirikkoContainer.hidden = !kelirikkoCheckbox.checked;
					if (kelirikkoContainer.hidden) {
						resetFields(kelirikkoContainer);

						startPicker.setDate(null);
						endPicker.setDate(null);

						startPicker.setStartRange(null);
						endPicker.setStartRange(null);
						endPicker.setMinDate(null);

						startPicker.setEndRange(null);
						startPicker.setMaxDate(null);
						endPicker.setEndRange(null);
					}
				};

				tierajoituksetContainer.appendChild(kelirikkoContainer);

				// lower divider for kelirikkoContainer
				var lowerHr = document.createElement('hr');
				lowerHr.className = "mb-5 mt-5";
				tierajoituksetContainer.appendChild(lowerHr);


				// ajokielto
			  var ajokieltoRow = document.createElement('div');
				ajokieltoRow.className = "row mb-3";

				  var ajokieltoCol = document.createElement('div');
				  ajokieltoCol.className = "col";

					  var ajokieltoLabel = document.createElement('label');
						ajokieltoLabel.setAttribute("id", "notifyInfoDrivingBan");
						ajokieltoLabel.setAttribute("class", "notifyInfoDrivingBan");
					  ajokieltoLabel.innerHTML = i18next.t('notifyInfoDrivingBan');

					  var ajokieltoInput = document.createElement('input');
					  ajokieltoInput.type = "text";
					  ajokieltoInput.setAttribute("id", "ilmoita_tiedot_ajokielto_" + ilmoitaTiedotId + "");
						ajokieltoInput.setAttribute("name", "ilmoita_tiedot_ajokielto_" + ilmoitaTiedotId + "");
						ajokieltoInput.className="form-control";

						ajokieltoCol.appendChild(ajokieltoLabel);
						ajokieltoCol.appendChild(ajokieltoInput);
				 	ajokieltoRow.appendChild(ajokieltoCol);
			 	tierajoituksetContainer.appendChild(ajokieltoRow);



				// Ajokiellon lisäkilvet
			  var ajokieltoKilvetRow = document.createElement('div');
				ajokieltoKilvetRow.className = "row mb-3";

			  var ajokieltoKilvetCol = document.createElement('div');
			  ajokieltoKilvetCol.className = "col";

			  var ajokieltoKilvetLabel = document.createElement('label');
			  ajokieltoKilvetLabel.innerHTML = i18next.t('notifyInfoDrivingBanSign');
				ajokieltoKilvetLabel.setAttribute("class", "notifyInfoDrivingBanSign");

			  var ajokieltoKilvetInput = document.createElement('input');
			  ajokieltoKilvetInput.type = "text";
			  ajokieltoKilvetInput.setAttribute("id", "ilmoita_tiedot_ajokielto_lisakilvet_" + ilmoitaTiedotId + "");
				ajokieltoKilvetInput.setAttribute("name", "ilmoita_tiedot_ajokielto_lisakilvet_" + ilmoitaTiedotId + "");
				ajokieltoKilvetInput.className="form-control";

				ajokieltoKilvetCol.appendChild(ajokieltoKilvetLabel);
				ajokieltoKilvetCol.appendChild(ajokieltoKilvetInput);
				ajokieltoKilvetRow.appendChild(ajokieltoKilvetCol);
				tierajoituksetContainer.appendChild(ajokieltoKilvetRow);


			  // Nopeusrajoitus
			  var nopeusrajoitusRow = document.createElement('div');
				nopeusrajoitusRow.className = "row mb-3";

			  var nopeusrajoitusCol = document.createElement('div');
			  nopeusrajoitusCol.className = "col";

			  var nopeusrajoitusLabel = document.createElement('label');
			  nopeusrajoitusLabel.innerHTML = i18next.t('notifyInfoSpeedLimit');
				nopeusrajoitusLabel.setAttribute("class", "notifyInfoSpeedLimit");

				var nopeusrajoitukset = [20, 30, 40, 50, 60, 70, 80, 100, 120]

			  var nopeusrajoitusInput = document.createElement('select');
			  nopeusrajoitusInput.setAttribute("id", "ilmoita_tiedot_nopeusrajoitus_" + ilmoitaTiedotId + "");
				nopeusrajoitusInput.setAttribute("name", "ilmoita_tiedot_nopeusrajoitus_" + ilmoitaTiedotId + "");
				nopeusrajoitusInput.className += "form-control";
				nopeusrajoitusInput.className += " custom-select";

				for (var i = 0; i < nopeusrajoitukset.length; i++) {
					var option = document.createElement("option");
					option.value = nopeusrajoitukset[i];
					option.text = nopeusrajoitukset[i];
					nopeusrajoitusInput.appendChild(option);
				}

				nopeusrajoitusCol.appendChild(nopeusrajoitusLabel);
				nopeusrajoitusCol.appendChild(nopeusrajoitusInput);
				nopeusrajoitusRow.appendChild(nopeusrajoitusCol);

				tierajoituksetContainer.appendChild(nopeusrajoitusRow);


			  // Karttalinkit
			  var karttaLinkitRow = document.createElement('div');
				karttaLinkitRow.className = "row mb-3";

			  var karttaLinkitCol = document.createElement('div');
			  karttaLinkitCol.className = "col";

			  var karttalinkitLabel = document.createElement('label');
			  karttalinkitLabel.innerHTML = i18next.t('notifyInfoMapLinks');
				karttalinkitLabel.setAttribute("class", "notifyInfoMapLinks");

			  var karttalinkitTextArea = document.createElement('textarea');
			  karttalinkitTextArea.maxlength = "5000";
			  karttalinkitTextArea.setAttribute("id", "ilmoita_tiedot_karttalinkit_" + ilmoitaTiedotId + "");
				karttalinkitTextArea.setAttribute("name", "ilmoita_tiedot_karttalinkit_" + ilmoitaTiedotId + "");
				karttalinkitTextArea.setAttribute("rows", "3");
				karttalinkitTextArea.className="form-control";

				karttaLinkitCol.appendChild(karttalinkitLabel);
 				karttaLinkitCol.appendChild(karttalinkitTextArea);
 				karttaLinkitRow.appendChild(karttaLinkitCol);
				tierajoituksetContainer.appendChild(karttaLinkitRow);


				// Lisätiedot-kenttä
			  var lisatiedotRow = document.createElement('div');
				lisatiedotRow.className = "row mb-3";

			  var lisatiedotCol = document.createElement('div');
			  lisatiedotCol.className = "col";

			  var lisatiedotLabel = document.createElement('label');
			  lisatiedotLabel.innerHTML = i18next.t('notifyInfoAdditionalInformation');
				lisatiedotLabel.setAttribute("class", "notifyInfoAdditionalInformation");

			  var lisatiedotTextArea = document.createElement('textarea');
			  lisatiedotTextArea.maxlength = "5000";
			  lisatiedotTextArea.setAttribute("id", "ilmoita_tiedot_lisatiedot_" + ilmoitaTiedotId + "");
				lisatiedotTextArea.setAttribute("name", "ilmoita_tiedot_lisatiedot_" + ilmoitaTiedotId + "");
				lisatiedotTextArea.setAttribute("rows", "3");
				lisatiedotTextArea.className="form-control";

				lisatiedotCol.appendChild(lisatiedotLabel);
				lisatiedotCol.appendChild(lisatiedotTextArea);
				lisatiedotRow.appendChild(lisatiedotCol);
				tierajoituksetContainer.appendChild(lisatiedotRow);



				//Sahkopostiohje label
			  var ohjeRow = document.createElement("div");
			  ohjeRow.className = "row mb-3";

			  var ohjeCol = document.createElement("div");
			  ohjeCol.className = "col"

			  var ohjeLabel = document.createElement("label");
				ohjeLabel.setAttribute("class", "notifyInfoBottomText text-muted");
			  ohjeLabel.innerHTML = i18next.t('notifyInfoBottomText');

				//instruction label
			  ohjeCol.appendChild(ohjeLabel);
				ohjeRow.appendChild(ohjeCol);
				tierajoituksetContainer.appendChild(ohjeRow);
				fieldset.appendChild(tierajoituksetContainer);



			  // delete road button
			  var poistaRow = document.createElement("div");
			  poistaRow.className = "row mb-3";

			  var poistaCol = document.createElement("div");
			  poistaCol.className = "col text-right";

				var poistaTieA = document.createElement("button");
				poistaTieA.className = "btn btn-danger btn-lg notifyInfoRemoveButton";
				poistaTieA.innerHTML = i18next.t('deleteRoad');

				poistaTieA.onclick = function(e) {
					if(tienNimiInput.value==="") {
						document.getElementById('notifyInfoAddRoad').disabled = false;
					}
					ilmoitaTiedotContainer.remove();

				}

				poistaCol.appendChild(poistaTieA);
				poistaRow.appendChild(poistaCol);
				fieldset.appendChild(poistaRow);

			ilmoitaTiedotContainer.appendChild(fieldset);

	  lisatytTiet.appendChild(ilmoitaTiedotContainer);
	  ilmoitaTiedotId++;
	});

	// moment locale to FI
	moment.locale('fi');
	var i18nDate = {
								previousMonth: i18next.t('previousMonth'),
								nextMonth: i18next.t('nextMonth'),
								months: moment.localeData()._months,
								weekdays: moment.localeData()._weekdays,
								weekdaysShort: moment.localeData()._weekdaysShort
							};

	// Kalenteri - Arvio kelirikon tilapäisestä tai toistuvasta voimassaoloajasta
	var startDate, endDate;
	var updateStartDate = function(startDate) {
				startPicker.setStartRange(startDate);
				endPicker.setStartRange(startDate);
				endPicker.setMinDate(startDate);
		}

	var updateEndDate = function(endDate) {
				startPicker.setEndRange(endDate);
				startPicker.setMaxDate(endDate);
				endPicker.setEndRange(endDate);
		}

	var startPicker = new Pikaday({
				field: document.getElementById('voimassaoloStart'),
				i18n: i18nDate,
				weekStartsOn: '1',
				firstDay: 1,
				minDate: new Date(2019, 0, 1),
		    maxDate: null,
				format: 'DD.MM.YYYY',
				onSelect: function() {
						startDate = this.getDate();
						updateStartDate(startDate);
				}
		})

		_startDate = startPicker.getDate()

		if (_startDate) {
				startDate = _startDate;
				updateStartDate(startDate);
		}



	var	endPicker = new Pikaday({
				field: document.getElementById('voimassaoloEnd'),
				i18n: i18nDate,
				weekStartsOn: '1',
				firstDay: 1,
				minDate: new Date(2019, 0, 1),
		    maxDate: null,
				format: 'DD.MM.YYYY',
				onSelect: function() {
						endDate = this.getDate();
						updateEndDate(endDate);
				}
		})

		_endDate = endPicker.getDate();

		if (_endDate) {
				endDate = _endDate;
				updateEndDate(endDate);
		}


	function resetDates() {
		startPicker.setDate(null);
		endPicker.setDate(null);

		// resets the calendar
		updateStartDate(null);
		updateEndDate(null);
	}

	// adding event listener to the dropdown menu
	document.getElementById('toiminto_dropdown').addEventListener('change', dropdownUpdate);
	window.addEventListener('load', dropdownUpdate);


	// cannot add additional road if the inputfield is empty
	function validateTiedotOikeinRoadButton(input) {
		if (document.getElementById(input).value==="") {
			document.getElementById('addRoad').disabled = true;
		}
		else {
			document.getElementById('addRoad').disabled = false;
		}
	}

	// cannot add additional road if the input is empty
	function validateIlmoitaTiedotRoadButton() {
		let roads = document.getElementsByClassName('ilmoita_tiedot_tien_nimi');
		let isEmpty = false;
		//if road input is empty, disable the button
		Array.from(roads).forEach((road) => {
			if((road.value === "" || road.value === null) && !isEmpty) {
				isEmpty = true;
			}
		});
		document.getElementById('notifyInfoAddRoad').disabled = isEmpty;
	}

	// TODO: replace URL with URL to the form
	function handleRedoButton() {
		window.location.replace('http://localhost:9003/yksityistie');
	}

	// TODO: replace the URL with the URL to the main page
	function handleBackButton() {
		window.location.replace('http://localhost:9003/yksityistie');
	}

	//$('document').ready(function(e) {
	//  $('#sendVoucherAttachement').click(function() {
	//		$("#digiroadModal").modal({backdrop: "static"});
	//	  $('#digiroadModal').modal('show');
	// });
	//});

 // converts the form data to Json, saves pdf and then submits the form
 function formHandler(event) {
	 event.preventDefault();
	 console.log(event);
	 var rivilista = [];
	 var kuntatiedot = [];
	 var tiekunta = new Map();
	 var realindexmap = new Map();
	 var realindex = 0;
	 var teidenlukumaara = 0;

	 // tarkistetaan kummassa lomakkeen haarassa ollaan
	 let toimintoDropdown = document.getElementById('toiminto_dropdown');
	 if (toimintoDropdown.value>0) {
		 var listprefix = "";
		 if (toimintoDropdown.value == 1) {
			 	listprefix = "tiedot_oikein";
		 }
		 if (toimintoDropdown.value == 2) {
				listprefix = "ilmoita_tiedot";
		 }

	 	 //haetaan teiden tiedot haaran perusteella
		 for (var i = 0; i < event.target.length; i++) {
			 if(event.target[i].name.search(listprefix)>=0){
				 var nimi = event.target[i].name.replace(/[0-9_]/g, "").replace(listprefix.replace(/[0-9_]/g, ""), "");
				 var indeksi = event.target[i].name.replace(/[^0-9]/g, "");
				 var arvo = event.target[i].value;
				 //luodaan normalisoitu indeksi map(teitä on lisätty ja poistettu)
				 if (!(realindexmap.has(indeksi))){
					 realindexmap.set(indeksi, realindex);
					 realindex++;
					 }
				 var normalisoituindeksi = realindexmap.get(indeksi);

				 //lasketaan teiden kokonaismäärä
				 teidenlukumaara = (normalisoituindeksi > teidenlukumaara)? normalisoituindeksi : teidenlukumaara;

				 var rivi = {
					 nimi: nimi,
				 	 arvo: arvo,
					 indeksi: normalisoituindeksi,
					 target: event.target[i]
				 };
				 	 rivilista.push(rivi);
			 }

			 // henkilötiedot + dropdown arvot
			 else {
					var nimi = event.target[i].name.replace(/[0-9_-]/g, "");
					var arvo = event.target[i].value;
					if (nimi && nimi!="" && arvo) {
					 var kuntatieto = {
						 nimi: nimi,
					 	 arvo: arvo,
						 target: event.target[i]
					 };
					 kuntatiedot.push(kuntatieto);
					}
			 }
		 }
	 }

	 //debugging
	 //window.rivilista = rivilista;
	 //window.kuntatiedot = kuntatiedot;

	 //luodaan lista teistä
	 var tielista = [];
	 for (var i = 0; i < teidenlukumaara+1; i++) {
		 var uusitie = {};

		 for (var j = 0; j < rivilista.length; j++) {
			 if(rivilista[j].indeksi == i){
				uusitie[rivilista[j].nimi] = rivilista[j].arvo;
			 }
		 }

		 //lisätään tie tielistaan
		 tielista.push(uusitie);
	 }

	 //yhdistetään tieto lomakkeeseen
	 var lomake = {};
	 for (var j = 0; j < kuntatiedot.length; j++) {
	 	 lomake[kuntatiedot[j].nimi] = kuntatiedot[j].arvo;
	 }
	 lomake.tielista = tielista;

	 var yksityistielomake = JSON.stringify(lomake);

	 console.log("yksityistielomake", yksityistielomake);

	 sendData(yksityistielomake, function(event) {
	 //pdf luodaan backendissa ja palutetaan paluuarvona
	 });

		//return yksityistielomake;
}



 //send data to backend
function sendData(formData, callback) {
 var XHR = new XMLHttpRequest();

 // Define what happens on successful data submission
XHR.addEventListener('load', function(event) {
	callback(event);
	var blob = new Blob([this.response], {type: 'image/pdf'});
	let url = window.URL.createObjectURL(blob);
	var errorStatus=new XMLHttpRequest();
	errorStatus.open('GET', url,false);
	errorStatus.send();
	switch(errorStatus.responseText){
	case "SUCCESS":
		console.log("Sposti lähetetty onnistuneesti!");
		window.URL.revokeObjectURL(url);
		document.getElementById('digiroadModalBody').innerHTML = i18next.t('ModalBody');
		break;
	case "ERROR EMAIL":
		console.log("Spostin lähetys epäonnistui!");
		window.URL.revokeObjectURL(url);
		document.getElementById('digiroadModalBody').innerHTML = i18next.t('ModalErrorMessage');
		break;
	case "ERROR CAPTCHA":
		console.log("Captcha epäonnistu, resetoi se!");
		window.URL.revokeObjectURL(url);
		document.getElementById('digiroadModalBody').innerHTML = i18next.t('ModalErrorMessage');
		break;
	default:
		{//attachment present!
		let a = document.createElement("a");
		a.style = "display: none";
		document.body.appendChild(a);	
		a.href = url;
		a.download = 'Digiroad_tosite.pdf';
		//programatically click the link to trigger the download
		a.click();
		//release the reference to the file by revoking the Object URL
		window.URL.revokeObjectURL(url);
		document.getElementById('digiroadModalBody').innerHTML = i18next.t('ModalBody');
		}	
	}
	$("#digiroadModal").modal({backdrop: "static"});
	$('#digiroadModal').modal('show');
	
});

 // Define what happens in case of error
 XHR.addEventListener('error', function(event) {
	 console.log('Oops! Something went wrong.');
 });

 // Set up our request
 XHR.open('POST', 'sendmail/');
 //XHR.open('POST', '/');

 //Send the proper header information along with the request
 //XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 XHR.setRequestHeader("Content-Type", "application/json");
 XHR.responseType = 'blob';
 // Send our FormData object; HTTP headers are set automatically
 XHR.send(formData);
}


	// depending on the value of toiminto-dropdown, the user sees 1 of the 2 different divs
	// tiedot_oikein_container or ilmoita_tiedot_container
	function dropdownUpdate() {
		document.getElementById('ilmoita_tiedot_container').style.display = 'none';
		document.getElementById('tiedot_oikein_container').style.display = 'none';
		document.getElementById('sendVoucherAttachement').disabled = true;

		if (this.value == 1) {
			resetVakuutanCheckboxes();
			document.getElementById('buttonDisabledHint').style.display = 'none';
			document.getElementById('sendVoucherAttachement').disabled = false;
			document.getElementById('notifyInfoAddRoad').disabled = true;
		  document.getElementById('tiedot_oikein_container').style.display = 'block';

			// road name to required
			document.getElementById('ilmoita_tiedot_tien_nimi_1').required = false;
			document.getElementById('tiedot_oikein_tien_nimi_1').required = true;

		  // resets the ilmoita_tiedot_container fields
		 	resetFields('#ilmoita_tiedot_container');
		  deleteRoads('.ilmoita_tiedot_lisatyt_tiet');

			// checkbox required
		  document.getElementById("tiedot_oikein_checkbox").required = true;
		  document.getElementById("vakuutan_tiedot_checkbox").required = false;

			document.getElementById('kelirikko_checkbox_1').checked = true;
			document.getElementById('kelirikko_container_1').hidden = false;

			resetDates();

		} else if (this.value == 2) {
			showIlmoitaTiedotRajoitukset();
			resetVakuutanCheckboxes();

			document.getElementById('buttonDisabledHint').style.display = 'none';
			document.getElementById('sendVoucherAttachement').disabled = false;
			document.getElementById('addRoad').disabled = true;
		  document.getElementById('ilmoita_tiedot_container').style.display = 'block';

			// road name to required
			document.getElementById('ilmoita_tiedot_tien_nimi_1').required = true;
			document.getElementById('tiedot_oikein_tien_nimi_1').required = false;

			// resets the tiedot_oikein_container fields & deletes added roads
			resetFields('#tiedot_oikein_container');
		  deleteRoads('.tiedot_oikein_lisatyt_tiet');

			// checkbox to required
		  document.getElementById("tiedot_oikein_checkbox").required = false;
		  document.getElementById("vakuutan_tiedot_checkbox").required = true;
		}
	}

	// hides kelirikko container & resets the values
	function hideKelirikko() {
		let container = document.getElementById('kelirikko_container_1');
		let checkbox = document.getElementById('kelirikko_checkbox_1');
		container.hidden = !checkbox.checked;
		if (container.hidden) {
			resetFields(container);
			resetDates();
		}
	};


	// resets all input & textarea fields of container
	function resetFields(container) {
	  $(container).find('input, textarea').each(function() {
	     $(this).val('');
	  });
	}

	// deletes all added divs of container
	function deleteRoads(container) {
	  $(container).find('div').each(function() {
	     $(this).remove();
	  });
	}

	// shows tierajoitukset container
	function showIlmoitaTiedotRajoitukset() {
		$(".tierajoitukset_checkbox").prop("checked", false);
	  $('.tierajoitukset_container').show();
	}

	// hides tierajoitukset container
	function hideRajoitukset() {
		let tierajoitukset_container = document.getElementById('tierajoitukset_container_1');
		let checkbox = document.getElementById('tierajoitukset_checkbox_1');
		tierajoitukset_container.hidden = checkbox.checked;
		if (tierajoitukset_container.hidden) {
			resetFields(tierajoitukset_container);
			resetDates();
		}
	};

	// resets the checkboxes
	function resetVakuutanCheckboxes() {
	  document.getElementById("tiedot_oikein_checkbox").checked = false;
	  document.getElementById("vakuutan_tiedot_checkbox").checked = false;
}
